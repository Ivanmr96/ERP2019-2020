Vue.component('listapedidoscomponent', 
{
    data: function() {
        return {
            pedidos: undefined,
            pedidosAMostrar: undefined,
            texoABuscar: "",
            descendente: true
        }
    },

    methods: {

        formatearFecha: function (date) 
        {
            d = new Date(date)
            return moment(d).format('DD/MM/YYYY');
        },

        obtenerUnPedidoPorId: function(idPedido)
        {
            obtenerPedidoPorID((response) => 
            { 
                if(response.body!=null)
                {
                    this.pedidos = response.body;
                }
                
                //alert(JSON.stringify(this.pedidosAMostrar))
            }, 
            () => alert("No existe un pedido con el ID dado"),
            idPedido)
        },

        seleccionarPedidoYNavegarAEditar: function(pedido)
        {
           store.state.pedidoSeleccionado = pedido

            obtenerLineasPedido((response) => 
            {
                store.state.pedidoSeleccionado.LineasDePedido = response.body

                //alert(JSON.stringify(store.state.pedidoSeleccionado))

                store.state.currentComponent = store.state.components.detalles
                
            },
            (error) => {
                if(error.status == 404)
                {
                    store.state.pedidoSeleccionado.LineasDePedido = []
                    store.state.currentComponent = store.state.components.detalles
                }
                else if(error.status >= 500 && error.status <= 599)
                    alert("Error al intentar obtener las lineas de pedido del pedido")
            }
            ,
            store.state.pedidoSeleccionado.Codigo)

            
        },

        /*seleccionarPedidoYNavegarAEditar: function(pedido)
        {
            store.state.pedidoSeleccionado = pedido

            obtenerLineasPedido((response) => 
            {
                store.state.pedidoSeleccionado.lineasDePedido = response.body

                

                store.state.currentComponent = store.state.components.detalles
                
            },
            (error) => 
            {
                if(error.status == 404)
                    store.state.currentComponent = store.state.components.detalles
                else if(error.status >= 500 && error.status <= 599)
                    alert("Hubo un error inesperado")
            }
            ,
            store.state.pedidoSeleccionado.Codigo)
        },
        
        */

        obtenerColorEstadoPedido: function(estado)
        {
            cssClass = "icono-estado-";
            switch(estado)
            {
                case "Recibido":
                    cssClass += "recibido";
                    break;
                case "Preparando":
                    cssClass += "preparando";
                    break;
                case "Cancelado":
                    cssClass += "cancelado";
                    break;
                case "Reparto":
                    cssClass += "enreparto";
                    break;
            }

            return cssClass;
        },

        obtenerYMostrarPedidos: function()
        {
            obtenerPedidos((response) => 
            { 
                this.pedidos = response.body;

            }, 
            () => alert("Hubo un error inesperado al cargar los pedidos"))
        },

        sortTable: function (col) 
        {
            if(this.pedidos.length != undefined)
            {
                var res = 0;
            var hola = this.descendente = !this.descendente;
            var imagen = document.getElementById(col);
            //Para las imagenes
            var codigo = document.getElementById("Codigo");
            var nombre = document.getElementById("NombreRazonSocialProveedor");
            var fechaPed = document.getElementById("FechaPedido");
            var estado = document.getElementById("Estado");
            var fechaRec = document.getElementById("FechaRecepcion");
            var precio = document.getElementById("PrecioTotalPedido");
            //alert(hola);

            codigo.src = "flechadefecto.png";
            nombre.src = "flechadefecto.png";
            fechaPed.src = "flechadefecto.png";
            estado.src = "flechadefecto.png";
            fechaRec.src = "flechadefecto.png";
            precio.src = "flechadefecto.png";
            
            this.pedidos.sort(function(a, b) {
                //alert(hola);
                if(hola) {
                    imagen.src = "flechaabajo.png";
                    if (a[col] > b[col]) {
                        //alert(a[col] + ">" + b[col]);
                        res =  1;
                    } 
                    else if (a[col] < b[col]) {
                        //alert(a[col] + "<" + b[col]);
                        res = -1;
                    }
                }
                else {
                    imagen.src = "flechaarriba.png";
                    if (b[col] > a[col]) {
                        //alert(b[col] + ">" + a[col]);
                        res =  1;
                    } 
                    else if (b[col] < a[col]) {
                        //alert(b[col] + "<" + a[col]);
                        res = -1;
                    }
                }


                
                //alert(res);
            return res;
            })
            //alert(JSON.stringify(this.pedidos));
            }
            
        }
    },

    mounted() {
        //alert("entrando en el mounted")
        this.obtenerYMostrarPedidos()
    },

    template:
    ` 
    <div style="margin-left:14%">
            <div class="row justify-content-center">
                <div class="divSuperior">
                    <h4 id="title">PEDIDOS</h4>
                    <div>
                        
                        <!-- <div class="buscador form-group">
                            <input placeholder="Buscar" class="form-control">
                            <button class="form-control"><i data-toggle="tooltip" title="Ajustes" class="material-icons align-bottom">search</i></button>
                        </div> -->

                        <button v-on:click="$store.state.currentComponent = $store.state.components.realizarpedido" class="btn btn-primary btn-hacerpedido">Hacer Pedido</button>

                        <div class="input-group mb-3 buscador">
                            <input type="text" class="form-control" v-model="texoABuscar" placeholder="Buscar" aria-label="Recipient's username">
                            <div class="input-group-append">
                              <a href="#"><span class="input-group-text" v-on:click="obtenerUnPedidoPorId(texoABuscar)"><i class="material-icons btn-buscador">search</i></span></a>
                            </div>
                        </div>

                    </div>
                </div>

                <table class="rounded table table-striped align-self-center text-center">

                    <thead class="rounded">
                    <tr class="header align-bottom">
                    <th scope="col">
                    PEDIDO 
                    <img id="Codigo" src="flechadefecto.png" width="15" height="15" v-on:click="sortTable('Codigo')">
                </th>
                <th scope="col">
                    PROVEEDOR
                    <img id="NombreRazonSocialProveedor" src="flechadefecto.png" width="15" height="15" v-on:click="sortTable('NombreRazonSocialProveedor')">
                </th>
                <th scope="col">
                    FECHA REGISTRADA
                    <img id="FechaPedido" src="flechadefecto.png" width="15" height="15" v-on:click="sortTable('FechaPedido')">
                </th>
                <th scope="col">
                    ESTADO
                    <img id="Estado" src="flechadefecto.png" width="15" height="15" v-on:click="sortTable('Estado')">
                </th>
                <th scope="col">
                    FECHA RECIBIMIENTO
                    <img id="FechaRecepcion" src="flechadefecto.png" width="15" height="15" v-on:click="sortTable('FechaRecepcion')">
                </th>
                <th scope="col">
                    PRECIO
                    <img id="PrecioTotalPedido" src="flechadefecto.png" width="15" height="15" v-on:click="sortTable('PrecioTotalPedido')">
                </th>
                <th scope="col">
                    DETALLES
                </th>
                    </tr>
                    </thead>

                    <tbody class="table-body ">
                        <template v-if="pedidos != undefined && pedidos.length > 0" v-for="pedido in pedidos">
                            <tr>
                                <td class="table-body-bold">{{pedido.Codigo}}</td>
                                <td class="table-body-bold">{{pedido.NombreRazonSocialProveedor}}</td>
                                <td>{{formatearFecha(pedido.FechaPedido)}}</td>
                                <td><i data-toggle="tooltip" title="Ajustes" :class="obtenerColorEstadoPedido(pedido.Estado)" class="material-icons">lens</i> {{pedido.Estado}}</td>
                                <td>{{formatearFecha(pedido.FechaRecepcion)}}</td>
                                <td>{{(pedido.PrecioTotalPedido).toFixed(2)}} €</td>
                                <td><a v-on:click="seleccionarPedidoYNavegarAEditar(pedido)" href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ver" class="material-icons">remove_red_eye</i></a></td>
                            </tr>
                        </template>

                        <template v-if="pedidos != undefined && pedidos.Codigo != undefined">
                            <tr>
                                <td class="table-body-bold">{{pedidos.Codigo}}</td>
                                <td class="table-body-bold">{{pedidos.NombreRazonSocialProveedor}}</td>
                                <td>{{formatearFecha(pedidos.FechaPedido)}}</td>
                                <td><i data-toggle="tooltip" title="Ajustes" :class="obtenerColorEstadoPedido(pedidos.Estado)" class="material-icons icono-estado-enreparto">lens</i> {{pedidos.Estado}}</td>
                                <td>{{formatearFecha(pedidos.FechaRecepcion)}}</td>
                                <td>{{(pedidos.PrecioTotalPedido).toFixed(2)}} €</td>
                                <td><a v-on:click="seleccionarPedidoYNavegarAEditar(pedidos)" href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ver" class="material-icons">remove_red_eye</i></a></td>
                            </tr>
                        </template>
                    </tbody>

                </table>

                <div v-if="pedidos == undefined" class="cssload-thecube" id="spinnerCargando">
                    <div class="cssload-cube cssload-c1"></div>
                    <div class="cssload-cube cssload-c2"></div>
                    <div class="cssload-cube cssload-c4"></div>
                    <div class="cssload-cube cssload-c3"></div>
                </div>

            </div>
            
        </div>
    `
})