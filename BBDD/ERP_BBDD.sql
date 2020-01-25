create database ErpProductos
go
use ErpProductos
go

create table ERP_Proveedores
(
	CIF char(9) not null,
	Nombre_RazonSocial varchar (30) null,
	Direccion varchar(40) null,
	Telefono char (9) null,
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
	Nombre varchar (35) not null,
	Descripcion varchar(100) null,
	Stock int not null,

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
	Estado varchar (15) not null,
	FechaPedido datetime not null,
	FechaRecepcion datetime null,

	--------------------------pk-------------------------------
	constraint PK_Pedidos primary key (Codigo)
)
go

create table ERP_LineaPedidos
(
	CodigoProducto int  not null,
	CodigoPedido int  not null,
	Cantidad tinyint not null,
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

Alter Table ERP_LineaPedidos ADD
CONSTRAINT CK_LineaPedidos_divisa
CHECK (Divisa IN ('Euros', 'Dolares', 'Libras', 'Yennes'));

Alter Table ERP_ProveedoresProductos ADD 
CONSTRAINT CK_PP_divisa
CHECK (Divisa IN ('Euros', 'Dolares', 'Libras', 'Yennes'));

Alter table ERP_LineaPedidos ADD CONSTRAINT CK_LineaPedidos_Cantidad CHECK (Cantidad > 0)

Alter Table ERP_Pedidos ADD CONSTRAINT CK_Pedidos_Estados CHECK(Estado in ('En proceso','Cancelado', 'Recibido'))

----------------------------------inserts-----------------------------

insert into ERP_Pedidos(Estado,FechaPedido,FechaRecepcion)
values('En proceso',convert(datetime,'18-06-19 10:34:09 PM',5),null),
		('Cancelado',convert(datetime,'21-02-18 12:27:43 PM',5),null),
		('Recibido',convert(datetime,'11-03-19 17:51:24 PM',5),GETDATE())

insert into ERP_Productos(Nombre,Descripcion,Stock)
values('Coca cola','lata 33cl pack 6',48),
		('Bollo','120 gramos',45),
		('Rafaello','80 gramos',25)

Select * from ERP_Productos

insert into ERP_LineaPedidos(CodigoProducto,CodigoPedido,Cantidad,PrecioUnitario,Divisa)
values(1,4,10,0.33,'Euros'),
		(2,4,10,0.15,'Yennes'),
		(3,4,5,1.25,'Libras'),
		(1,5,10,0.33,'Euros'),
		(2,5,20,0.15,'Euros'),
		(3,5,5,1.25,'Dolares'),
		(1,6,10,0.33,'Euros'),
		(2,6,20,0.15,'Libras'),
		(3,6,5,1.25,'Dolares')

insert into ERP_Proveedores(CIF,Nombre_RazonSocial,Direccion,Telefono,Email)
values('B90223548','Constelacion','Calle cielo numero 5','326589854','nzhdeh@gmail.com'),
		('B93653548','IKEA','Calle dios de mi vida numero 99','323254754','siri@gmail.com'),
		('B93653325','PEPSI','Calle satan numero 66','666666666','satanas@gmail.com')


insert into ERP_ProveedoresProductos(CIFProveedor,CodigoProducto,Precio,Divisa)
values('B90223548',1,0.33,'Euros'),
	('B90223548',2,0.15,'Euros'),
	('B90223548',3,1.25,'Dolares'),
	('B93653548',1,0.33,'Yennes'),
	('B93653548',2,0.15,'Libras'),
	('B93653548',3,1.25,'Yennes'),
	('B93653325',1,0.33,'Euros'),
	('B93653325',2,0.15,'Euros'),
	('B93653325',3,1.25,'Dolares')