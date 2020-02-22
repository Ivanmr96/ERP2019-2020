/*import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);*/

const store =  new Vuex.Store({
    state: {
        
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

        currentComponent: 'logincomponent'


    },
    getters: {},
    mutations: {},
    actions: {}
});