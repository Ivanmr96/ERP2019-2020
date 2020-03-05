

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
            menuprincipal: 'menuprincipalcomponent',
            logout: 'logoutcomponent',
            login: 'logincomponent',
            pedidos: 'listapedidoscomponent',
            ajustes: 'ajustescomponent',
            inventario: 'inventariocomponent',
            productos: 'productoscomponent',
            detalles: 'detallescomponent',
            proveedores: 'proveedorescomponent',
            crearpedido: 'crearpedidocomponent',
            registro: 'registercomponent'
        },

        currentComponent: 'logincomponent'

    },

    getters: {


    },
    mutations: {},
    actions: 
    {

    

    }
});