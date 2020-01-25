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
	Postcondicones: se insertará una nueva linea de pedido con los datos propocionados
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
	Postcondiciones: se borrará la linea de pedido segun el codigo del producto y del pedido
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
 -- ¿Ha cambiado el estado?
 IF EXISTS(Select * from inserted WHERE Estado in ('Recibido'))
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


