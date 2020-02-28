Vue.component('listapedidoscomponent', 
{
    data: function() {
        return {
            pedidos: undefined,
            descendente: true
        }
    },

    methods: {

        seleccionarPedidoYNavegarAEditar: function(pedido)
        {
            store.state.pedidoSeleccionado = pedido

            obtenerLineasPedido((response) => 
            {
                store.state.pedidoSeleccionado.lineasDePedido = response.body

                store.state.currentComponent = store.state.components.detalles
                
            },
            () => alert("Error al intentar obtener las lineas de pedido del pedido")
            ,
            store.state.pedidoSeleccionado.Codigo)

            
        },

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
                case "En reparto":
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

        "sortTable": function sortTable(col) {
            var res = 0;
            var hola = this.descendente = !this.descendente;
            //alert(hola);
            
            this.rows.sort(function(a, b) {
                //alert(hola);
                if(hola) {
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
            //alert(JSON.stringify(this.rows));
        }
    },

    mounted() {
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
                            <input type="text" class="form-control" placeholder="Buscar" aria-label="Recipient's username">
                            <div class="input-group-append">
                              <a href="#"><span class="input-group-text"><i class="material-icons btn-buscador">search</i></span></a>
                            </div>
                        </div>

                    </div>
                </div>

                <table class="rounded table table-striped align-self-center text-center">

                    <thead class="rounded">
                    <tr class="header align-bottom">
                        <th scope="col" v-on:click="sortTable(codigo)" >PEDIDO</th>
                        <th scope="col">PROVEEDOR</th>
                        <th scope="col" v-on:click="sortTable('fechaPedido')">FECHA REGISTRADA</th>
                        <th scope="col">ESTADO</th>
                        <th scope="col">FECHA RECIBIMIENTO</th>
                        <th scope="col">PRECIO</th>
                        <th scope="col">DETALLES</th>
                    </tr>
                    </thead>

                    <tbody class="table-body ">
                        <template v-for="pedido in pedidos">
                            <tr>
                                <td class="table-body-bold">{{pedido.Codigo}}</td>
                                <td class="table-body-bold">{{pedido.NombreRazonSocialProveedor}}</td>
                                <td>{{pedido.FechaPedido}}</td>
                                <td><i data-toggle="tooltip" title="Ajustes" :class="obtenerColorEstadoPedido(pedido.Estado)" class="material-icons">lens</i> {{pedido.Estado}}</td>
                                <td>{{pedido.FechaRecepcion}}</td>
                                <td>{{pedido.PrecioTotalPedido}} €</td>
                                <td><a v-on:click="seleccionarPedidoYNavegarAEditar(pedido)" href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ver" class="material-icons">remove_red_eye</i></a></td>
                            </tr>
                        </template>
                    </tbody>

                </table>

            </div>
            
        </div>
    `
})