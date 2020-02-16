/*import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);*/

const store =  new Vuex.Store({
    state: {
        currentComponent: 'listapedidoscomponent',
        components: {
            logout: 'logoutcomponent',
            pedidos: 'listapedidoscomponent',
            ajustes: 'ajustescomponent',
            inventario: 'inventariocomponent',
            productos: 'productoscomponent',
            proveedores: 'proveedorescomponent',
        }
    },
    getters: {},
    mutations: {},
    actions: {}
   });