/* Interfaz
	Comentario: metodo para crear una nueva linea de pedido
	Cabecera: crearLineaPedido ( @codigoProducto int, @codigoPedido int, @cantidad tinyint, @precioUnitario money, @Divisa varchar(15))
	Precondiciones: 
		-Ninguna de la entradas puede ser null.
		-El precio unitario y la cantidad deben ser mayor a 0.
		-La Divisa solo puede ser "Euros", "Yennes","Dolares","Libras"
	Entradas:
		-@codigoProducto int
		-@codigoPedido int
		-@cantidad tinyint
		-@precioUnitario money
		-@Divisa varchar(15)
	Postcondicones: se insertar� una nueva linea de pedido con los datos propocionados
*/

Go
Create Procedure crearLineaPedido ( @codigoProducto int, @codigoPedido int, @cantidad tinyint, @precioUnitario money, @Divisa varchar(15))
AS
begin
	Insert Into ERP_LineaPedidos (CodigoProducto,CodigoPedido,Cantidad,PrecioUnitario,Divisa)
	VALUES (@codigoProducto,@codigoPedido,@cantidad,@precioUnitario,@Divisa)
End
go

Begin tran
Execute crearLineaPedido 3,5,10,5,null
rollback

/* Interfaz
	Comentario: metodo para borrar una nueva linea de pedido
	Cabecera: borrarLineaPedido ( @codigoProducto int, @codigoPedido int)
	Entradas:
		-@codigoProducto int
		-@codigoPedido int
	Postcondiciones: se borrar� la linea de pedido segun el codigo del producto y del pedido
*/

Go
Create Procedure borrarLineaPedido ( @codigoProducto int, @codigoPedido int)
AS
begin
	Delete From ERP_LineaPedidos Where CodigoProducto = @codigoProducto AND CodigoPedido = @codigoPedido
End
go

Begin tran
Execute borrarLineaPedido 3,6
rollback


/* Interfaz
	Comentario: metodo para actualizar la cantidad de una linea de pedido
	Cabecera: actualizarCantidadLineaPedido ( @codigoProducto int, @codigoPedido int, @nuevaCantidad tinyint)
	Precondiciones:
		-La cantidad debe ser mayor que 0
	Entradas:
		-@codigoProducto int
		-@codigoPedido int
		-@nuevaCantidad tinyint
	Postcondiciones: se actualizara la cantidad de una linea de pedido segun el codigo del producto y del pedido
*/

Go
Create Procedure actualizarCantidadLineaPedido ( @codigoProducto int, @codigoPedido int, @nuevaCantidad tinyint)
AS
begin
	Update ERP_LineaPedidos  
	SET Cantidad = @nuevaCantidad
	Where CodigoProducto = @codigoProducto AND CodigoPedido = @codigoPedido
End
go

Begin tran
Execute actualizarCantidadLineaPedido 3,4,20
rollback


--Este trigger sirve para aumentar el stock de un producto cuando se haya recibido un pedido
ALTER TRIGGER aumentarStock
ON ERP_Pedidos
AFTER UPDATE AS 
 IF EXISTS(Select * from inserted WHERE Estado in ('Recibido') AND UPDATE(Estado))
 BEGIN
	 DECLARE @codigoProducto int
	 DECLARE @codigoPedido int
	 DECLARE @cantidad tinyint

	DECLARE puntero CURSOR FOR SELECT CodigoProducto,CodigoPedido,Cantidad FROM ERP_LineaPedidos
	OPEN puntero
	FETCH NEXT FROM puntero INTO @codigoProducto,@codigoPedido,@cantidad

	WHILE (@@FETCH_STATUS = 0)
	BEGIN
		IF EXISTS(Select * from inserted WHERE @codigoPedido = codigo)
		BEGIN
			UPDATE ERP_Productos SET stock += @cantidad  WHERE codigo = @codigoProducto
		END
		FETCH NEXT FROM puntero INTO @codigoProducto,@codigoPedido,@cantidad
	END

	CLOSE puntero
	DEALLOCATE puntero
 END

Begin tran
Update ERP_Pedidos
SET Estado = 'Recibido'
WHERE codigo = 4
rollback

Select * from ERP_Productos
Select * from ERP_LineaPedidos
Select * from ERP_Pedidos

go

/*
	prototipo: create procedure crearPedido @id int output
	comentarios: este procedimientos sirve para crear un nuevo pedido
	precondiciones: no hay
	entradas: no hay
	salidas: el id de pedido que se crea
	entr/sal: no hay
	postcondiciones: se incertar� un pedido  en la base de datos con el estado Preparando ,
	la fecha del pedido ser� la de ese d�a, la fecha de recepcion estar� a null y AN devolver� el id del pedido creado
*/
create procedure crearPedido (@CIFProveedor char(9))
as
begin
	--declare @id int
	insert into ERP_Pedidos(Estado,FechaPedido,FechaRecepcion, CIFProveedor)
	values('Preparando',GETDATE(),null,@CIFProveedor)
	return @@identity
end
go
begin tran
declare @id int
execute @id=crearPedido
select @id
rollback
go
select * from ERP_Pedidos
go

/*
	prototipo: create procedure actualizarEstadoPedido @CodigoPedido int,@EstadoPedido varchar(15)
	comentarios: este procedimientos recibe el codigo del pedido y el estado y actualiza el estado de ese pedido
	precondiciones: codigo del pedido correcto, estado del pedido correcto
	entradas: entero codigo del pedido y cadena estado del pedido
	salidas: no hay
	entr/sal: no hay
	postcondiciones: el pedido cuyo codigo se pasa por par�metro se le actualiza el estado que  tambien se le pasa por par�metro
*/
create procedure actualizarEstadoPedido @CodigoPedido int,@EstadoPedido varchar(15)
as
begin
	begin tran tranActualizarEstadoPedido
		update ERP_Pedidos
		set Estado=@EstadoPedido
		from ERP_Pedidos
		where @CodigoPedido=Codigo
	commit 
end
go
begin tran
execute actualizarEstadoPedido 7,'Recibido'
rollback
go

/*
	prototipo: create procedure cancelarPedido @CodigoPedido int
	comentarios: este procedimientos sirve para cancelar un pedido 
	precondiciones: codigo del pedido correcto
	entradas: entero codigo del pedido
	salidas: no hay
	entr/sal: no hay
	postcondiciones: el pedido cuyo codigo se pasa por par�metro se le actualiza el estado a Cancelado
*/
create procedure cancelarPedido @CodigoPedido int
as
begin
	begin tran tranCancelarPedido
		update ERP_Pedidos
		set Estado='Cancelado'
		from ERP_Pedidos
		where @CodigoPedido=Codigo and Estado <> 'Cancelado'
	commit 
end
go
begin tran
execute cancelarPedido 1
rollback
go
begin tran
execute cancelarPedido 2
rollback
go


/*
	prototipo: create procedure cancelarPedido @CodigoPedido int
	comentarios: este procedimientos sirve para cambiar el estado de un pedido a recibido
	precondiciones: codigo del pedido correcto
	entradas: entero codigo del pedido
	salidas: no hay
	entr/sal: no hay
	postcondiciones: el pedido cuyo codigo se pasa por par�metro se le actualiza el estado a recibido
*/
create procedure recibirPedido @CodigoPedido int
as
begin
	begin tran tranCancelarPedido
		update ERP_Pedidos
		set Estado='Recibido'
		from ERP_Pedidos
		where @CodigoPedido=Codigo and Estado <> 'Recibido' and Estado <> 'Cancelado'
	commit 
end
go
begin tran
execute cancelarPedido 1
rollback
go
begin tran
execute cancelarPedido 2
rollback
go


/*
	prototipo: create procedure pedidoEnReparto @CodigoPedido int
	comentarios: este procedimientos sirve para cambiar el estado de un pedido a 'En reparto'
	precondiciones: codigo del pedido correcto
	entradas: entero codigo del pedido
	salidas: no hay
	entr/sal: no hay
	postcondiciones: el pedido cuyo codigo se pasa por par�metro se le actualiza el estado a 'En reparto'
*/
create procedure pedidoEnReparto @CodigoPedido int
as
begin
	begin tran tranCancelarPedido
		update ERP_Pedidos
		set Estado='En reparto'
		from ERP_Pedidos
		where @CodigoPedido=Codigo and Estado <> 'Recibido' and Estado <> 'Cancelado' and Estado <> 'En reparto'
	commit 
end
go
/*
	prototipo: create trigger actualizarFechaRecepcionDelPedido on ERP_Pedidos
	comentarios: este desencadenador sirve para actualizar la fecha de recepcion de un pedido
	precondiciones: no hay
	entradas: no hay
	salidas: no hay
	entr/sal: no hay
	postcondiciones: se actualizaria la fecha de un pedido si su estado es Recibido si no, no pasaria nada
*/
create trigger actualizarFechaRecepcionDelPedido on ERP_Pedidos
after update as
	begin
	if update(Estado) and 'Recibido'=(select Estado from inserted)
		begin
			update ERP_Pedidos
			SET FechaRecepcion=GETDATE()
			FROM ERP_Pedidos as P
			inner join inserted as I on P.Codigo=I.Codigo
		end
	end
go
begin tran
update ERP_Pedidos
set Estado='Cancelado'
where Codigo=1
rollback


