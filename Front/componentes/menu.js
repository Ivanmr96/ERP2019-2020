Vue.component('menucomponent', {

    template:
    ` 
    <div class="menuLatIzq w3-sidebar w3-bar-block sidebar" style="width:13%">
        <h3 class="w3-bar-item sidebar-title text-center">ERP COMPADRE</h3>
        <a href="#" v-on:click="$store.state.currentComponent = $store.state.components.logout" class="btn-navbar btn btn-logout text-left"><i data-toggle="tooltip" title="Logout" class="material-icons align-bottom">home</i> Log out</a>
        <a href="#" v-on:click="$store.state.currentComponent = $store.state.components.pedidos" class="btn btn-navbar btn-compras text-left"><i data-toggle="tooltip" title="Compras" class="material-icons align-bottom">shopping_cart</i> Compras</a>
        <a href="#" v-on:click="$store.state.currentComponent = $store.state.components.productos" class="btn btn-navbar btn-productos text-left"><i data-toggle="tooltip" title="Productos" class="material-icons align-bottom">crop_din</i> Productos</a>
        <a href="#" v-on:click="$store.state.currentComponent = $store.state.components.inventario" class="btn btn-navbar btn-inventario text-left"><i data-toggle="tooltip" title="Inventario" class="material-icons align-bottom">list_alt</i> Inventario</a>
        <a href="#" v-on:click="$store.state.currentComponent = $store.state.components.proveedores" class="btn btn-navbar btn-proveedores text-left"><i data-toggle="tooltip" title="Proveedores" class="material-icons align-bottom">person</i> Proveedores</a>
        <a href="#" v-on:click="$store.state.currentComponent = $store.state.components.ajustes" class="btn ajustes btn-navbar btn-ajustes text-left"><i data-toggle="tooltip" title="Ajustes" class="material-icons align-bottom">settings</i> Ajustes</a>
    </div>
    `
    /*,

    data()
    {
        return {
            currentComponent = this.$store.state.currentComponent
        }
    } */
})