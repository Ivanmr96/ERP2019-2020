Vue.component('menuprincipalcomponent', {

    template:
    ` 
    <div class="background">

            <div class="div-container">

                <div class="boton-caja colores-logout" v-on:click="$store.state.currentComponent = $store.state.components.login">
                    <i data-toggle="tooltip" title="Logout" class="material-icons align-bottom mainmenu-icon">home</i></br>
                    Salir
                </div>
    
                <div class="boton-caja colores-pedidos" v-on:click="$store.state.currentComponent = $store.state.components.pedidos">
                    <i data-toggle="tooltip" title="Compras" class="material-icons align-bottom mainmenu-icon">shopping_cart</i></br>
                    Pedidos
                </div>
    
                <div class="boton-caja colores-productos" v-on:click="$store.state.currentComponent = $store.state.components.productos">
                    <i data-toggle="tooltip" title="Productos" class="material-icons align-bottom mainmenu-icon">crop_din</i></br>
                    Productos
                </div>
    
                <div class="boton-caja colores-inventario" v-on:click="$store.state.currentComponent = $store.state.components.inventario">
                    <i data-toggle="tooltip" title="Inventario" class="material-icons align-bottom mainmenu-icon">list_alt</i></br>
                    Inventario
                </div>
    
                <div class="boton-caja colores-proveedores" v-on:click="$store.state.currentComponent = $store.state.components.proveedores">
                    <i data-toggle="tooltip" title="Proveedores" class="material-icons align-bottom mainmenu-icon">person</i></br>
                    Proveedores
                </div>
    
                <div class="boton-caja colores-ajustes" v-on:click="$store.state.currentComponent = $store.state.components.ajustes">
                    <i data-toggle="tooltip" title="Ajustes" class="material-icons align-bottom mainmenu-icon">settings</i> </br>
                    Ajustes
                </div>
    
            </div>

        </div>
    `
})