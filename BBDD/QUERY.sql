

--id pedido, proveedor, fecha registrada, estado, fecha recibimiento, precio TOTAL DEL PEDIDO


SELECT P.Codigo AS CODIGO_PEDIDO, PP.CIFProveedor, PROV.Nombre_RazonSocial, 
P.FechaPedido, P.FechaRecepcion, P.Estado, SUM( LP.Cantidad * LP.PrecioUnitario  ) AS TOTAL_PEDIDO
FROM 
ERP_Pedidos AS P
INNER JOIN ERP_LineaPedidos AS LP
ON P.Codigo = LP.CodigoPedido
INNER JOIN ERP_Productos AS PRODUCT
ON PRODUCT.Codigo = LP.CodigoProducto
INNER JOIN ERP_ProveedoresProductos AS PP
ON PP.CodigoProducto = PRODUCT.Codigo
INNER JOIN ERP_Proveedores AS PROV
ON PROV.CIF = PP.CIFProveedor
GROUP BY  P.Codigo, PP.CIFProveedor, PROV.Nombre_RazonSocial, 
P.FechaPedido, P.FechaRecepcion, P.Estado



SELECT *  FROM ERP_Pedidos
SELECT *  FROM ERP_LineaPedidos
SELECT *  FROM ERP_Productos

SELECT * FROM ERP_ProveedoresProductos
