create database ErpProductos
go
use ErpProductos
go

create table ERP_Proveedores
(
	CIF char(9) not null,
	Nombre_RazonSocial varchar (30) null,
	Direccion varchar(40) null,
	Telefono varchar (15) null,
	Email varchar (25) null,

	--------------------------pk------------------------
	constraint PK_Proveedores primary key (CIF),

	----------------------ch----------------------------------
	constraint CK_Proveedores_Email check(Email LIKE '%@%.%'),

	---------------uq----------------------------------------
	constraint UQ_Email unique(Email)
)
go

create table ERP_Productos
(
	Codigo int identity(1,1) not null,
	Nombre varchar (20) null,
	Descripcion varchar(30) null,
	Stock tinyint null,	--porque no vamos a pedir más de 255

	--------------------------pk-------------------------------
	constraint PK_Productos primary key (Codigo)
)
go

create table ERP_ProveedoresProductos
(
	CIFProveedor char(9) not null,
	CodigoProducto int not null,
	Precio money null,

	--------------------------pk-------------------------------
	constraint PK_ProveedoresProductos primary key (CIFProveedor,CodigoProducto),

	-------------------------fk-----------------------------------------------------------
	constraint FK_ProveedoresProductos_Proveedores foreign key (CIFProveedor) references ERP_Proveedores(CIF) on delete cascade on update cascade,
	constraint FK_ProveedoresProductos_Productos foreign key (CodigoProducto) references ERP_Productos(Codigo) on delete cascade on update cascade,

	----------------------------ch-------------------------------
	constraint CK_ProveedoresProductos_Precio check(Precio>0)
)
go

create table ERP_Pedidos
(
	Codigo int identity(1,1) not null,
	Estado varchar (15) null,
	FechaPedido datetime null,
	FechaRecepcion datetime null,

	--------------------------pk-------------------------------
	constraint PK_Pedidos primary key (Codigo)
)
go

create table ERP_ProductosPedidos
(
	CodigoProducto int  not null,
	CodigoPedido int  not null,
	Cantidad tinyint null,
	PrecioUnitario money null,

	--------------------------pk-------------------------------
	constraint PK_ProductosPedidos primary key (CodigoProducto,CodigoPedido),

	-------------------------fk-----------------------------------------------------------
	constraint FK_ProductosPedidos_Pedidos foreign key (CodigoPedido) references ERP_Pedidos(Codigo) on delete cascade on update cascade,
	constraint FK_ProductosPedidos_Productos foreign key (CodigoProducto) references ERP_Productos(Codigo) on delete cascade on update cascade,

	----------------------------ch-------------------------------
	constraint CK_ProductosPedidos_PrecioUnitario check(PrecioUnitario>0)
)
go




----------------------------------inserts-----------------------------

insert into ERP_Pedidos(Estado,FechaPedido,FechaRecepcion)
values('En proceso',GETDATE(),null),
		('Enviado',GETDATE(),null),
		('Recibido',GETDATE(),null)

insert into ERP_Productos(Nombre,Descripcion,Stock)
values('Coca cola','lata 33cl pack 6',48),
		('Bollo','120 gramos',45),
		('Rafaello','80 gramos',25)


insert into ERP_ProductosPedidos(CodigoProducto,CodigoPedido,Cantidad,PrecioUnitario)
values(1,1,10,0.33),
		(2,1,10,0.15),
		(3,1,5,1.25),
		(1,2,10,0.33),
		(2,2,20,0.15),
		(3,2,5,1.25),
		(1,3,10,0.33),
		(2,3,20,0.15),
		(3,3,5,1.25)

insert into ERP_Proveedores(CIF,Nombre_RazonSocial,Direccion,Telefono,Email)
values('B90223548','Constelacion','Calle cielo numero 5','326589854','nzhdeh@gmail.com'),
		('B93653548','IKEA','Calle dios de mi vida numero 99','323254754','siri@gmail.com'),
		('B93653325','PEPSI','Calle satan numero 66','666666666','satanas@gmail.com')


insert into ERP_ProveedoresProductos(CIFProveedor,CodigoProducto,Precio)
values('B90223548',1,0.33),
	('B90223548',2,0.15),
	('B90223548',3,1.25),
	('B93653548',1,0.33),
	('B93653548',2,0.15),
	('B93653548',3,1.25),
	('B93653325',1,0.33),
	('B93653325',2,0.15),
	('B93653325',3,1.25)