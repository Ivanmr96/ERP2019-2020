Vue.component('realizarpedidocomponent',
{
    data: function () 
    {
        return {
            proveedores: undefined,
            pedido: new clsPedido(1, undefined, new Date(), undefined),
            proveedorSeleccionado: undefined,
            productos: undefined,
            proveedorMostrado: "Proveedor"
        }
    },

    methods: 
    {
        eliminarLineaPedido: function(lineaPedido) 
        {
            if(confirm("¿Seguro que quiere borrar?"))
            {
                for( var i = 0 ; i < this.pedido.LineasDePedido.length; i++) 
                {
                    if(this.pedido.LineasDePedido[i] === lineaPedido)
                        this.pedido.LineasDePedido.splice(i, 1);
                }
            }
        },
        anadirLineaPedidos()
        {
            this.pedido.LineasDePedido.push(new clsLineaPedido(0,this.pedido.Codigo, 1, 0, "Euros"))
            
        },
        cambiarProveedor: function (proveedor) 
        {
            this.proveedorMostrado = proveedor.NombreRazonSocial;
            this.proveedorSeleccionado = proveedor
            this.obtenerProductosDelProveedorSeleccionado()
        },

        obtenerListadoProveedores: function()
        {
            obtenerProveedores((response) => 
            {
                this.proveedores = response.body
            },
            () => alert("Error al cargar el listado de proveedores"))
        },

        obtenerProductosDelProveedorSeleccionado: function()
        {
            //this.$store.actions.obtenerProductos((response) => alert(JSON.stringify(response.body) , () => alert("error") ))

            //TODO No es obtenerProductos, es obtener productos de un proveedor :)


            /*obtenerProductos((response) => 
            { 
                this.productos = response.body; 
            }, 
            () => alert("error")) */

            if(this.proveedorSeleccionado != undefined)
            {
                obtenerProductosDeUnProveedor(this.proveedorSeleccionado.Cif, (response) =>
                { 
                    this.productos = response.body;
                }, 
                () => alert("error")) 
            }

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
            var nombre = "Selecciona producto"

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

        /*
        obtenerPrecioUnitarioProductoPorId: function(codigo)
        {
            var found = false
            var precioUnitario = 0.0

            if(this.productos != undefined)
            {
                for(var i = 0 ; i < this.productos.length && !found; i++)
                {
                    if(this.productos[i].Codigo == codigo)
                    {
                        found = true
                        precioUnitario = this.productos[i].precioUnitario
                    }
                }    
            }
            return precioUnitario
        },
        */
        confirmar: function () {
            var opcion = confirm("¿Deseas confirmar este pedido?");
            if (opcion == true && this.validarPedido()) 
            {
                
                insertarPedido(this.pedido.LineasDePedido, this.proveedorSeleccionado.Cif, (response) => 
                {
                    store.state.currentComponent = 'listapedidoscomponent';
                }, (error) => { 
                    store.state.currentComponent = 'listapedidoscomponent';
                    alert("Se produjo un error al guardar") })
            }
        },

        validarPedido: function() 
        {
            valido = true;

            if(this.proveedorSeleccionado == undefined)
            {
                alert("Debes seleccionar un proveedor")
                valido = false;
            }

            if(this.pedido.LineasDePedido.length <= 0)
            {
                alert("Debes incluir algun producto")
                valido = false;
            }

            found = false;
            for(i = 0 ; i < this.pedido.LineasDePedido.length && !found ; i++)
            {
                if(this.pedido.LineasDePedido[i].CodigoProducto == 0)
                {
                    found = true;
                    valido = false;
                    alert("Debes seleccionar un producto")
                }
            }

            return valido;
        },

        cambiarProductoLineaPedido: function (producto, lineaPedido) 
        {
            lineaPedido.CodigoProducto = producto.Codigo;
            lineaPedido.PrecioUnitario = producto.Precio;
        },

        restarCantidad: function(lineaPedido)
        {
            if(lineaPedido.Cantidad > 1)
                lineaPedido.Cantidad--
        }
    },

    computed: {


        productosDelProveedorSeleccionado: function()
        {
            return this.productos
        },

        nombreProveedorDropdown: function()
        {
            if(this.proveedorSeleccionado != null)
            {
                nombre = this.proveedorSeleccionado.NombreRazonSocial
            }
            else
            {
                nombre = "Selecciona proveedor"
            }
            
            return nombre
        },

        cantidadTotal: function(){
            var sumTotal = 0;
            if(this.pedido.LineasDePedido != undefined){

                for(i = 0 ; i < this.pedido.LineasDePedido.length ; i++)
                {
                    sumTotal += this.pedido.LineasDePedido[i].PrecioUnitario * this.pedido.LineasDePedido[i].Cantidad
                }
                /*this.pedido.lineasDePedido.for(element => {
                    sumTotal += element.PrecioUnitario * element.cantidad;
                }
                */
            }
            return sumTotal
        }
    },

    mounted()
    {
        this.obtenerListadoProveedores()
        this.obtenerProductosDelProveedorSeleccionado()
    },

    template:
    `
    <div style="margin-left:14%">

        <div class="row justify-content-center">

            <div class="divSuperior">
                <div class="d-flex">
                    <h4 id="title">REALIZAR PEDIDO</h4>
                    
                    <button v-on:click="confirmar" type="button" class="btn btn-primary ml-auto guardar">Guardar</button>
                </div>
                <hr />
                        <div class="dropdown">
                        
                            <button class="btn btn-secondary text-left" type="button" data-toggle="dropdown" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                                {{nombreProveedorDropdown}}
                                <i data-toggle="tooltip" class="material-icons float-right">expand_more</i>
                            </button>
                            <div class="dropdown-menu">
                                <template v-for="proveedor in proveedores">
                                    <a class="dropdown-item" href="#" v-on:click="cambiarProveedor(proveedor)">{{proveedor.NombreRazonSocial}}</a>
                                </template>
                                
                            </div>

                            <div class="float-right mr-5">
                    <div class="font-weight-bold">Total</div>
                    <div>{{ (cantidadTotal).toFixed(2)}}€</div>

                        </div>
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
                        <template v-for="lineaPedido in pedido.LineasDePedido">
                            <tr>
                                <td class="table-body-bold">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {{ obtenerNombreProductoPorId(lineaPedido.CodigoProducto) }}
                                            <i data-toggle="tooltip" class="material-icons float-right">expand_more</i>
                                        </button>
                                        <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                                            <template v-for="producto in productosDelProveedorSeleccionado">
                                                <a v-on:click="cambiarProductoLineaPedido(producto, lineaPedido)" class="dropdown-item" href="#">{{producto.Nombre}} - {{producto.Precio}} €</a>
                                            </template>
                                        </div>
                                    </div>
                                </td>
                                <td>{{lineaPedido.PrecioUnitario}} €</td>
                                <td>
                                    <i class="material-icons align-middle" v-on:click="restarCantidad(lineaPedido)">remove_circle_outline</i>                                    
                                    <span class="align-middle" id="numero">{{lineaPedido.Cantidad}}</span>
                                    <i data-toggle="tooltip" class="material-icons align-middle" v-on:click="lineaPedido.Cantidad++">add_circle_outline</i>
                                </td>
                                <td>21</td>
                                <td>{{(lineaPedido.Cantidad * lineaPedido.PrecioUnitario).toFixed(2)}} €</td>
                                <td><a v-on:click="eliminarLineaPedido(lineaPedido)" href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons float-left rojo">delete</i></a></td>
                            </tr>
                        </template>

                        <button class="btn btn-primary btnAnadir" v-on:click="anadirLineaPedidos()">
                            <i data-toggle="tooltip" title="Añadir línea de pedido" class="material-icons align-middle">add</i>
                        </button>

                    </tbody>

                </table>

                

            </div>
        </div>

            

    </div>
    `
})