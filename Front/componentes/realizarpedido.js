Vue.component('realizarpedidocomponent',
{
    data: function () 
    {
        return {
            proveedores: [
                new clsProveedor("22321231", "Coca-Cola Company", "Direccion","959123991", "cocacola@iesnervion.es")
            ],
            pedido: new clsPedido(1, undefined, new Date(), undefined),
            proveedorSeleccionado: undefined,
            productos: undefined
        }
    },

    methods: 
    {
        eliminarLineaPedido: function(lineaPedido) 
        {
            for( var i = 0 ; i < this.pedido.lineasDePedido.length; i++) 
            {
                if(this.pedido.lineasDePedido[i] === lineaPedido)
                    this.pedido.lineasDePedido.splice(i, 1);
            }
        },
        anadirLineaPedidos(){
            this.pedido.lineasDePedido.push(new clsLineaPedido(0,this.pedido.codigo, 0, 0, null))
        },

        obtenerProductosDelProveedorSeleccionado: function()
        {
            //this.$store.actions.obtenerProductos((response) => alert(JSON.stringify(response.body) , () => alert("error") ))

            //TODO No es obtenerProductos, es obtener productos de un proveedor :)
            obtenerProductos((response) => 
            { 
                this.productos = response.body; 
            }, 
            () => alert("error"))

            /*
            fetch("https://proyectoerp.azurewebsites.net/api/Producto/", 
            {
                method: "GET"
            })
            .then((response) => {
                return response.text()
            })
            .then((data) => {
                alert(data)
            }) */
        },

        obtenerNombreProductoPorId: function(codigo)
        {
            var found = false
            var nombre = ""

            if(this.productos != undefined)
            {
                for(var i = 0 ; i < this.productos.length && !found; i++)
                {
                    if(this.productos[i].Codigo == codigo)
                    {
                        found = true
                        nombre = this.productos[i].Nombre
                    }
                }    
            }
            return nombre
        },

        confirmar: function () {
            var opcion = confirm("¿Deseas confirmar este pedido?");
            if (opcion == true) {
                insertarPedido(this.pedido.lineasDePedido, (response) => {
                    store.state.currentComponent = 'listapedidoscomponent';
                }, (error) => { 
                    store.state.currentComponent = 'listapedidoscomponent';
                    alert("Se produjo un error al guardar") })
            }
        },

        cambiarProductoLineaPedido: function (producto, lineaPedido) {
            lineaPedido.codigoProducto = producto.Codigo;
            lineaPedido.precioUnitario = producto.PrecioUnitario;
        },
    },

    computed: {
        productosDelProveedorSeleccionado: function()
        {
            return this.productos
        }
    },

    mounted(){
        this.obtenerProductosDelProveedorSeleccionado()
    },

    template:
    `
    <div style="margin-left:14%">

        <div class="row justify-content-center">

            <div class="divSuperior">
                <h4 id="title">REALIZAR PEDIDO</h4>
                <div class="dropdownSuperior">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" id="dropdownMenuButton">
                        Proveedor <!-- TODO Nombre del proveedor, cuando no haya ninguno seleccionado que ponga "selecciona proveedor" -->
                    </button>
                    <div class="dropdown-menu" v-for="proveedor in proveedores">
                        <template>
                        <a class="dropdown-item" href="#">{{proveedor.nombreRazonSocial}}</a>
                        </template
                    </div>
                </div>
            </div>
                <div class="d-flex">
                    <button v-on:click="confirmar" type="button" class="btn btn-primary ml-auto guardar">Guardar</button>
                </div>
                <table class="rounded table table-striped align-self-center text-center">

                    <thead class="rounded">
                        <tr class="header align-bottom">
                            <th scope="col">PRODUCTO</th>
                            <th scope="col">PRECIO/UD</th>
                            <th scope="col">CANTIDAD</th>
                            <th scope="col">IMPUESTO %</th>
                            <th scope="col">PRECIO FINAL</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>

                    <tbody class="table-body">
                        <template v-for="lineaPedido in pedido.lineasDePedido">
                            <tr>
                                <td class="table-body-bold">
                                    <div class="dropdown">
                                        <p></p>
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {{ obtenerNombreProductoPorId(lineaPedido.codigoProducto) }}
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <template v-for="producto in productosDelProveedorSeleccionado">
                                                <a v-on:click="cambiarProductoLineaPedido(producto, lineaPedido)" class="dropdown-item" href="#">{{producto.Nombre}} - 1€</a>
                                            </template>
                                        </div>
                                    </div>
                                </td>
                                <td>{{lineaPedido.precioUnitario}} €</td>
                                <td>
                                    <i class="material-icons icono" v-on:click="lineaPedido.cantidad++">add</i>
                                    <span id="numero">{{lineaPedido.cantidad}}</span>
                                    <i class="material-icons icono" v-on:click="lineaPedido.cantidad--">remove</i>
                                </td>
                                <td>21</td>
                                <td>{{lineaPedido.cantidad * lineaPedido.precioUnitario}} €</td>
                                <td><a v-on:click="eliminarLineaPedido(lineaPedido)" href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons text-center rojo">delete</i></a></td>
                            </tr>
                        </template>

                        <button class="btn btn-primary btnAnadir" v-on:click="anadirLineaPedidos()">
                            <i data-toggle="tooltip" onclick="sumar()" title="Añadir línea de pedido" class="material-icons align-middle">add</i>
                        </button>

                    </tbody>

                </table>

            </div>
            </div>

            

    </div>
    `
})