
const BASE_URL = 'https://proyectoerp.azurewebsites.net/api/'

const API_PEDIDO = 'Pedidos/';
const API_INSERTARPEDIDO = 'Pedido/';
const API_PRODUCTO = 'Producto/';
const API_LINEAPEDIDO = 'LineasPedido/';
const API_PROVEEDOR = 'Proveedor/';

const app = new Vue({
    store,
    el: '#app',
    data:
    {
        //currentComponent: 'listapedidoscomponent'
    },

    mounted: function() {
        console.log(this.$http);
        //fetch(BASE_URL + API_PEDIDO);
      }
})

    // https://proyectoerp.azurewebsites.net/api/Pedidos/
    function insertarPedido(lineasDeUnPedido, onResponse, onError) 
    {
        var url = BASE_URL + API_INSERTARPEDIDO 

        //app.$http.post(url, JSON.stringify(lineasDeUnPedido)).then(onResponse, onError);
        Vue.http.post(url, JSON.stringify(lineasDeUnPedido)).then(onResponse, onError);
    }

    // https://proyectoerp.azurewebsites.net/api/LineasPedido/
    function insertarLineaDePedido(lineaDePedido, onResponse, onError) 
    {
        var url = BASE_URL + API_PEDIDO

        //app.$http.post(url, JSON.stringify(lineaDePedido)).then(onResponse, onError);
        Vue.http.post(url, JSON.stringify(lineaDePedido)).then(onResponse, onError);
    }

    // https://proyectoerp.azurewebsites.net/api/Pedidos/
    function obtenerPedidos(onResponse, onError) {
        var url = BASE_URL + API_PEDIDO + "?pedidosConPrecioTotal=true"

        Vue.http.get(url).then(onResponse, onError);
    }



    // https://proyectoerp.azurewebsites.net/api/Producto
    function obtenerProductos(onResponse, onError)
    {
        var url = BASE_URL + API_PRODUCTO;

        Vue.http.get(url).then(onResponse, onError);
    }

    // https://proyectoerp.azurewebsites.net/api/LineasPedido?codigoProducto={codigoProducto&codigoPedido={codigoPedido}
    function  eliminarLineaPedido(lineaPedido, onResponse, onError)
    {
        //Saldria una pantallita para confirmar pero solo se guardaria cuando le de a guardar
        var url = BASE_URL + API_LINEAPEDIDO + "?codigoProducto=" + lineaPedido.codigoProducto + "&codigoPedido=" + lineaPedido.codigoPedido;

        //app.$http.delete(url).then(onResponse, onError);
        Vue.http.delete(url).then(onResponse, onError);
    }

    // https://proyectoerp.azurewebsites.net/api/Pedidos?codigoPedido=10&estadoPedido=Recibido
    function actualizarUnPedido(onResponse, onError, pedido) 
    {
        var url = BASE_URL + API_PEDIDO + "?codigoPedido=" + pedido.codigoPedido + "&estadoPedido=" + pedido.estadPedido;

        //app.$http.put(url).then(onResponse, onError);
        Vue.http.put(url).then(onResponse, onError);
    }

    // https://proyectoerp.azurewebsites.net/api/LineasPedido?codigoProducto={codigoProducto}&codigoPedido={codigoPedido}&nuevaCantidad={cantidad}
    function actualizarUnaLineaPedido(onResponse, onError, lineaPedido) 
    {
        var url = BASE_URL + API_PEDIDO + '?codigoProducto=' + lineaPedido.codigoProducto + ' &codigoPedido=' + lineaPedido.codigoPedido + "&nuevaCantidad=" + lineaPedido.cantidad;

       // app.$http.put(url).then(onResponse, onError);
       Vue.htpp.put(url).then(onResponse, onError);
    }

    // https://proyectoerp.azurewebsites.net/api/LineasPedido?codigoPedido={codigoPedido}
    function obtenerLineasPedido(onResponse,onError,idPedido){

        var url = BASE_URL + API_LINEAPEDIDO + '?codigoPedido=' + idPedido

        //app.$http.get(url).then(onResponse, onError);
        Vue.http.get(url).then(onResponse, onError);
    }

    // https://proyectoerp.azurewebsites.net/api/Proveedor
    function obtenerProveedores(onResponse,onError){

        var url = BASE_URL + API_PROVEEDOR 

        //app.$http.get(url).then(onResponse, onError);
        Vue.http.get(url).then(onResponse, onError);
}

    // https://proyectoerp.azurewebsites.net/api/Producto?cifProveedor=B93653548
function obtenerProductosDeUnProveedor(cifProveedor, onResponse, onError) {

    //alert("4 - ajax js -  Entra en obtener Productos De Un Proveedor");
    var url = BASE_URL + API_PRODUCTO + "?cifProveedor=" + cifProveedor
   // alert("5 esta es la URL" +url);

    Vue.http.get(url).then(onResponse, onError);

 //   alert("6 - despues de hacer el get");
    }