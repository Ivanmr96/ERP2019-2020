const BASE_URL = 'https://proyectoerp.azurewebsites.net/api/'

const API_PEDIDO = 'Pedidos/';
const API_PRODUCTO = 'Producto/';
const API_LINEAPEDIDO = 'LineasPedido/';
const API_PROVEEDOR = 'Proveedor/';

function insertarPedido(pedidoConLineasDePedido, onResponse, onError) 
{
    var url = BASE_URL + API_PEDIDO
    
    app.$http.post(url, JSON.stringify(pedidoConLineasDePedido)).then(onResponse, onError);
}

//insertarPedido(undefined, (response) => alert("hola"), () => alert("error"))