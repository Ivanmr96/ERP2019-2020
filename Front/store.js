

/*import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);*/

/*
const BASE_URL = 'https://proyectoerp.azurewebsites.net/api/'

const API_PEDIDO = 'Pedidos/';
const API_PRODUCTO = 'Producto/';
const API_LINEAPEDIDO = 'LineasPedido/';
const API_PROVEEDOR = 'Proveedor/'; */



const store =  new Vuex.Store({

    state: {
        
      

        //Esto tiene que ser de tipo clsPedidoConProveedor
        pedidoSeleccionado: {"codigo":1, "estado":"cancelado",
    
        "fechaPedido": new Date(), "fechaRecepcion": new Date(), 

        "lineasDePedido": [ {"codigoProducto":1, "codigoPedido":1, "cantidad":5, "precioUnitario":1.5, "divisa":"Euros"},
        {"codigoProducto":2, "codigoPedido":1, "cantidad":15, "precioUnitario":5.5, "divisa":"Euros"},
        {"codigoProducto":3, "codigoPedido":1, "cantidad":56, "precioUnitario":13.5, "divisa":"Euros"}
            ], 
        
            "cifProveedor": "B12553426", 
        "nombreRazonSocial": "The Coca Cola Company", 
        "direccion": "Mi casa",
        "telefono": "954-000-000", 
        "email": "thecocacolacompany@cocacola.es"
    },

        components: 
        {
            realizarpedido: 'realizarpedidocomponent',
            logout: 'logoutcomponent',
            login: 'logincomponent',
            pedidos: 'listapedidoscomponent',
            ajustes: 'ajustescomponent',
            inventario: 'inventariocomponent',
            productos: 'productoscomponent',
            detalles: 'detallescomponent',
            proveedores: 'proveedorescomponent',
            crearpedido: 'crearpedidocomponent'
        },

        currentComponent: 'listapedidoscomponent'
       


    },

    getters: {


    },
    mutations: {},
    actions: 
    {

    

        // https://proyectoerp.azurewebsites.net/api/Pedidos/
insertarPedido(pedidoConLineasDePedido, onResponse, onError) 
{
    var url = BASE_URL + API_PEDIDO

    app.$http.post(url, JSON.stringify(pedidoConLineasDePedido)).then(onResponse, onError);
},

// https://proyectoerp.azurewebsites.net/api/LineasPedido/
insertarLineaDePedido(lineaDePedido, onResponse, onError) 
{
    var url = BASE_URL + API_PEDIDO

    app.$http.post(url, JSON.stringify(lineaDePedido)).then(onResponse, onError);
},

// https://proyectoerp.azurewebsites.net/api/Pedidos/
obtenerPedidos(onResponse, onError) {
    var url = BASE_URL + API_PEDIDO

    app.$http.get(url).then(onResponse, onError);
},


// https://proyectoerp.azurewebsites.net/api/Producto
obtenerProductos(proveedor, onResponse, onError) //TODO La api no proporciona un "obtener los productos de un proveedor", lo tendriamos que filtrar en el cliente
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
},

// https://proyectoerp.azurewebsites.net/api/Producto
obtenerProductos(onResponse, onError)
{
    var url = BASE_URL + API_PRODUCTO;

    app.$http.get(url).then(onResponse, onError);
},

// https://proyectoerp.azurewebsites.net/api/LineasPedido?codigoProducto={codigoProducto&codigoPedido={codigoPedido}
eliminarLineaPedido(lineaPedido, onResponse, onError)
{
    //Saldria una pantallita para confirmar pero solo se guardaria cuando le de a guardar
    var url = BASE_URL + API_LINEAPEDIDO + "?codigoProducto=" + lineaPedido.codigoProducto + "&codigoPedido=" + lineaPedido.codigoPedido;

    app.$http.delete(url).then(onResponse, onError);
},

// https://proyectoerp.azurewebsites.net/api/Pedidos?codigoPedido=10&estadoPedido=Recibido
actualizarUnPedido(onResponse, onError, pedido) 
{
    var url = BASE_URL + API_PEDIDO + "?codigoPedido=" + pedido.codigoPedido + "&estadoPedido=" + pedido.estadPedido;

    app.$http.put(url).then(onResponse, onError);
},

// https://proyectoerp.azurewebsites.net/api/LineasPedido?codigoProducto={codigoProducto}&codigoPedido={codigoPedido}&nuevaCantidad={cantidad}
actualizarUnaLineaPedido(onResponse, onError, lineaPedido) 
{
    var url = BASE_URL + API_PEDIDO + '?codigoProducto=' + lineaPedido.codigoProducto + ' &codigoPedido=' + lineaPedido.codigoPedido + "&nuevaCantidad=" + lineaPedido.cantidad;

    app.$http.put(url).then(onResponse, onError);
},

// https://proyectoerp.azurewebsites.net/api/LineasPedido?codigoPedido={codigoPedido}
obtenerLineasPedido(onResponse,onError,idPedido){

	var url = BASE_URL + API_LINEAPEDIDO + '?codigoPedido=' + idPedido

	app.$http.put(url).then(onResponse, onError);
},

// https://proyectoerp.azurewebsites.net/api/Proveedor
obtenerProveedores(onResponse,onError){

	var url = BASE_URL + API_PROVEEDOR 

	app.$http.put(url).then(onResponse, onError);
}


    }
});