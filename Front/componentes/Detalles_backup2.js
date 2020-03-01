Vue.component('detallescomponent', {
    data: function()
    {
        return {
            //idLineaPedido: id,
            stageProceso: "btn btn-primary",
            stageReparto: "btn btn-secondary",
            stageCancelado: "btn btn-secondary",
            stageRecibido: "btn btn-secondary",
            productos: undefined,
            estadoActual: undefined
        }
    },

    methods:
    {
        cambiarEstado(estado) 
        {
        
            //alert(estado);
            //var url = 'https://apierp.azurewebsites.net/api/Pedidos?codigoPedido=' + idLineaPedido + '&estadoPedido=' + estado//Necesitamos obtener el estado

            //this.$http.put(url).then(function (response)             //Realiza una petición get a la URL, con la función dentro del "then" indico que hay que hacer en caso de respuesta satisfactoria
            //{
                this.$store.state.pedidoSeleccionado.estado = estado;
            //}, function () {                                          //Aqui indica que hará en caso de error
            // alert("error");
            //});
        },

        obtenerProductosDelProveedorSeleccionado: function()
        {
            obtenerProductosDeUnProveedor(this.$store.state.pedidoSeleccionado.CifProveedor, (response) => {
                productos = response.body
                alert(JSON.stringify(productos))
            },
            () =>
            {
                alert("Error al cargar los productos")
            })
        },

        obtenerNombreProductoPorId: function (codigo) {
            var found = false
            var nombre = ""

            if (this.productos != undefined) {
                for (var i = 0; i < this.productos.length && !found; i++) {
                    if (this.productos[i].Codigo == codigo) {
                        found = true
                        nombre = this.productos[i].Nombre
                    }
                }
            }
            return nombre
        },

        cambiarProductoLineaPedido: function (producto, lineaPedido) {
            lineaPedido.codigoProducto = producto.Codigo;
            lineaPedido.precioUnitario = producto.PrecioUnitario;
        },

        anadirLineaPedidos()
        {
            //TODO La cantidad inicial es 1 (tiene sentido, no?)
            //alert(JSON.stringify(this.$store.state.pedidoSeleccionado))
            //alert("codigo del pedido seleccionado: " + this.$store.state.pedidoSeleccionado.codigo)
            //Esta cosa no funciona
            this.$store.state.pedidoSeleccionado.lineasDePedido.push({CodigoProducto: 0, CodigoPedido: this.$store.state.pedidoSeleccionado.Codigo, Cantidad: 0, PrecioUnitario: 0, Divisa: "Euros"})
            //alert(JSON.stringify(this.$store.state.pedidoSeleccionado.lineasDePedido))
            estadoActual = this.$store.state.pedidoSeleccionado.estado
            //this.cambiarEstado("")
            //this.cambiarEstado(estadoActual)
        },
        eliminarLineaPedido: function(lineaPedido)
        {
            for( var i = 0 ; i < this.$store.state.pedidoSeleccionado.lineasDePedido.length; i++)
            {
                if( this.$store.state.pedidoSeleccionado.lineasDePedido[i] === lineaPedido)
                    this.$store.state.pedidoSeleccionado.lineasDePedido.splice(i, 1);
            }
        }
    },

    mounted() {
        this.obtenerProductosDelProveedorSeleccionado();
        //alert(this.$store.state.pedidoSeleccionado.estado);
        this.cambiarEstado(this.$store.state.pedidoSeleccionado.estado);
        // this.cambiarEstado('recibido');
        this.stageProceso = "btn  btn-primary";
        this.stageReparto = "btn  btn-secondary";
        this.stageCancelado = "btn  btn-secondary";
        this.stageRecibido = "btn  btn-secondary";
    },
    computed:
    {

        isEnabledProceso:function(){
           if(this.$store.state.pedidoSeleccionado.estado == 'Proceso')
           {
               clase = "btn  btn-primary";
           } else{
            clase = "btn  btn-secondary";
           }
           return clase;
        },
        isEnabledReparto:function(){
            if(this.$store.state.pedidoSeleccionado.estado == 'Reparto')
            {
                clase = "btn  btn-primary";
            } else{
             clase = "btn  btn-secondary";
            }
            return clase;
         },
         isEnabledCancelado:function(){
            if(this.$store.state.pedidoSeleccionado.estado == 'Cancelado')
            {
                clase = "btn  btn-primary";
            } else{
             clase = "btn  btn-secondary";
            }
            return clase;
         },
         isEnabledRecibido:function(){
            if(this.$store.state.pedidoSeleccionado.estado == 'Recibido')
            {
                clase = "btn  btn-primary";
            } else{
             clase = "btn  btn-secondary";
            }
            return clase;
         }
    }
    ,
    template:
    ` 
    <div style="margin-left:14%" id="app">

        <div class="row justify-content-center">

            <div class="divSuperior">                
                <div class="d-flex">
                <h4 id="title">Pedido {{$store.state.pedidoSeleccionado.codigo}}</h4>
                    <button type="button" class="btn btn-primary ml-auto guardar">Guardar</button>
                </div>
                <hr />
                <table style="width:100%" class="table-user">
                    <tr>
                        <td>Proveedor</td>
                        <td>CIF</td>
                    </tr>
                    <tr>
                    <td>{{$store.state.pedidoSeleccionado.NombreRazonSocialProveedor}}</td>
                    <td>{{$store.state.pedidoSeleccionado.CifProveedor}}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                            <button id="proceso" type="button" :class="isEnabledProceso" v-on:click="cambiarEstado('Proceso')">En proceso</button>
                            <button id="reparto" type="button" :class="isEnabledReparto" v-on:click="cambiarEstado('Reparto')">En Reparto</button>
                            <button id="cancelado" type="button" :class="isEnabledCancelado" v-on:click="cambiarEstado('Cancelado')">Cancelado</button>
                            <button id="recibido" type="button" :class="isEnabledRecibido" v-on:click="cambiarEstado('Recibido')">Recibido</button>
                         </div>

                        </td>
                    </tr>
                </table>
                    
                    <table class="rounded table table-striped align-self-center text-center">

                        <thead class="rounded">
                            <tr class="header align-bottom">
                                <th scope="col">PRODUCTO</th>
                                <th scope="col">PRECIO/UD</th>
                                <th scope="col">CANTIDAD</th>
                                <th scope="col">IMPUESTO %</th>
                                <th scope="col">PRECIO FINAL</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody class="table-body ">

                        <template  
                        v-for="(item, index) in $store.state.pedidoSeleccionado.lineasDePedido">
                   
                        <tr>
                        <td class="table-body-bold">
                            <div class="dropdown">
                                <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ obtenerNombreProductoPorId(item.Codigo) }}
                                    <i data-toggle="tooltip" title="Añadir persona" class="material-icons float-right">expand_more</i>
                                </button>
                                <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                                <template v-for="producto in productos">
                                    <a v-on:click="cambiarProductoLineaPedido(producto, item)" class="dropdown-item" href="#">{{producto.Nombre}} - {{producto.Precio}}€</a>
                                </template>
                                </div>
                            </div>
                        </td>
                        <td> {{item.PrecioUnitario}} €</td>
                        <td>
                            <i class="material-icons align-middle" v-on:click="item.cantidad--">remove_circle_outline</i>
                            <span class="align-middle">{{item.Cantidad}}</span>
                            <i data-toggle="tooltip" v-on:click="item.cantidad++" title="Añadir persona" class="material-icons align-middle">add_circle_outline</i>
    
                        </td>
                        <td>21</td>
                        <td>{{ item.precioUnitario * item.cantidad }}€</td>
                        <td><a href="#"><i data-toggle="tooltip" title="Borrar" v-on:click="eliminarLineaPedido(item)" class="material-icons rojo">delete</i></a></td>
                    </tr>
                      </template>
                        </tbody>

                    </table>

            </div>
            <button class="btn btn-primary btnAnadir" v-on:click="anadirLineaPedidos()">
                <i data-toggle="tooltip" title="Añadir línea de pedido" class="material-icons align-middle">add</i>
            </button>

        </div>


    </div>
    `
})