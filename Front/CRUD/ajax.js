const BASE_URL = 'https://proyectoerp.azurewebsites.net/api/'

const API_PEDIDO = 'Pedidos/';
const API_PRODUCTO = 'Producto/';
const API_LINEAPEDIDO = 'LineasPedido/';
const API_PROVEEDOR = 'Proveedor/';

// https://proyectoerp.azurewebsites.net/api/Pedidos/
function insertarPedido(pedidoConLineasDePedido, onResponse, onError) 
{
    var url = BASE_URL + API_PEDIDO

    app.$http.post(url, JSON.stringify(pedidoConLineasDePedido)).then(onResponse, onError);
}

// https://proyectoerp.azurewebsites.net/api/LineasPedido/
function insertarLineaDePedido(lineaDePedido, onResponse, onError) 
{
    var url = BASE_URL + API_PEDIDO

    app.$http.post(url, JSON.stringify(lineaDePedido)).then(onResponse, onError);
}

// https://proyectoerp.azurewebsites.net/api/Pedidos/
function obtenerPedidos(onResponse, onError) {
    var url = BASE_URL + API_PEDIDO

    app.$http.get(url).then(onResponse, onError);
}


// https://proyectoerp.azurewebsites.net/api/Producto
function obtenerProductos(proveedor, onResponse, onError) //TODO La api no proporciona un "obtener los productos de un proveedor", lo tendriamos que filtrar en el cliente
{
    /*
    var url = BASE_URL + API_PRODUCTO + proveedor.id;

    app.$http.get(url).then(

        function(response)
        {
            onResponse(response);
        },
        function(){
            onError();
        }
        ,
        null);*/
}

// https://proyectoerp.azurewebsites.net/api/Producto
function obtenerProductos(onResponse, onError)
{
    var url = BASE_URL + API_PRODUCTO;

    app.$http.get(url).then(onResponse, onError);
}

// https://proyectoerp.azurewebsites.net/api/LineasPedido?codigoProducto={codigoProducto&codigoPedido={codigoPedido}
function eliminarLineaPedido(lineaPedido, onResponse, onError)
{
    //Saldria una pantallita para confirmar pero solo se guardaria cuando le de a guardar
    var url = BASE_URL + API_LINEAPEDIDO + "?codigoProducto=" + lineaPedido.codigoProducto + "&codigoPedido=" + lineaPedido.codigoPedido;

    app.$http.delete(url).then(onResponse, onError);
}

// https://proyectoerp.azurewebsites.net/api/Pedidos?codigoPedido=10&estadoPedido=Recibido
function actualizarUnPedido(onResponse, onError, pedido) 
{
    var url = BASE_URL + API_PEDIDO + "?codigoPedido=" + pedido.codigoPedido + "&estadoPedido=" + pedido.estadPedido;

    app.$http.put(url).then(onResponse, onError);
}

// https://proyectoerp.azurewebsites.net/api/LineasPedido?codigoProducto={codigoProducto}&codigoPedido={codigoPedido}&nuevaCantidad={cantidad}
function actualizarUnaLineaPedido(onResponse, onError, lineaPedido) 
{
    var url = BASE_URL + API_PEDIDO + '?codigoProducto=' + lineaPedido.codigoProducto + ' &codigoPedido=' + lineaPedido.codigoPedido + "&nuevaCantidad=" + lineaPedido.cantidad;

    app.$http.put(url).then(onResponse, onError);
}

// https://proyectoerp.azurewebsites.net/api/LineasPedido?codigoPedido={codigoPedido}
function obtenerLineasPedido(onResponse,onError,idPedido){

	var url = BASE_URL + API_LINEAPEDIDO + '?codigoPedido=' + idPedido

	app.$http.put(url).then(onResponse, onError);
}

// https://proyectoerp.azurewebsites.net/api/Proveedor
function obtenerProveedores(onResponse,onError){

	var url = BASE_URL + API_PROVEEDOR 

	app.$http.put(url).then(onResponse, onError);
}

