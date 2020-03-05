Vue.component('detallescomponent', {
    data: function()
    {
        return {
            pedido: JSON.parse(JSON.stringify(this.$store.state.pedidoSeleccionado)),
            stageProceso: "btn btn-primary",
            stageReparto: "btn btn-secondary",
            stageCancelado: "btn btn-secondary",
            stageRecibido: "btn btn-secondary",
            productos: undefined,
            estadoActual: undefined,
            lineasEliminar: [],
            lineasInsertar: [],
            lineasActualizar: [],
            pedidoCanceladoRecibidoConfirmado: false
        }
    },

    methods:
    {

        /**
         * Método que llama al método obtenerProductosDeUnProveedor, el cual 
         * hace una petición GET a la API para obtener un listado de productos
         * de un proveedor dado.
         * @param {*} cifProveedor cif del proveedor del cual se obtendrán los productos. 
         */
        obtenerProductosDelProveedorSeleccionado: function (cifProveedor) {

           obtenerProductosDeUnProveedor(cifProveedor, (response) => {
                 this.productos = response.body;
                },
                 () => alert("error"))
         },

         /**
          * Cambia el estado del pedido seleccionado por el pasado como parámetro
          * @param {*} estado nuevo estado del pedido
          */
        cambiarEstado(estado) 
        {
            this.pedido.Estado = estado;
        },

        /**
         * Método que dado un código de producto, devuelve su nombre.
         * @param {*} codigo código del producto del que se devolverá su nombre
         */
        obtenerNombreProductoPorId: function (codigo) {
            var found = false
            var nombre = "Selecciona producto"

            if (this.productos != undefined) 
            {
                for (var i = 0; i < this.productos.length && !found; i++) {
                    if (this.productos[i].Codigo == codigo) {
                        found = true
                        nombre = this.productos[i].Nombre
                    }
                }
            }
            
            
            return nombre
        },

        /**
         * Muestra un diálogo de confirmación y en caso
         * de que el usuario responda afirmativamente, llamará al método
         * de guardarPedido().
         */
        confirmar: function () {
            var opcion = confirm("¿Desea confirmar este cambio?");
            if (opcion == true) {
                //insertarPedido( (response) => {
                    //Realizamos las operaciones CRUD
                    this.guardarPedido();
            }
        },

        /**
         * Realiza las operacion de eliminar, insertar y actualizar sobre las lineas de pedido.
         */
        guardarPedido: function()
        { 
            for(var i = 0; i < this.lineasInsertar.length; i++)
            {
                alert(JSON.stringify(this.lineasInsertar[i]))
                insertarLineaDePedido(this.lineasInsertar[i]);
            }

            //Actualizar
            for(var i = 0; i < this.lineasActualizar.length; i++)
            {
                actualizarUnaLineaPedido(this.lineasActualizar[i]);
            }

            //Eliminar
            for(var i = 0; i < this.lineasEliminar.length; i++)
            {
                eliminarLineaPedido(this.lineasEliminar[i]);
            }

            //alert(JSON.stringify(this.pedido))
            actualizarUnPedido(this.pedido, (response) => 
            {
                store.state.currentComponent = 'listapedidoscomponent';
            },
            (error) => {
                alert("Hubo un error inesperado")
            })
        },

        /**
         * Método que modifica el producto de una línea de pedido
         * @param {*} producto producto a poner en la línea de pedido
         * @param {*} lineaPedido línea de pedido a modificar
         */
        cambiarProductoLineaPedido: function (producto, lineaPedido) 
        {
            if(!this.productoYaExisteEnElPedido(producto.Codigo))
            {
                if(lineaPedido.CodigoProducto != 0)
                    this.lineasEliminar.push(JSON.parse(JSON.stringify(lineaPedido)))

                lineaPedido.CodigoProducto = producto.Codigo;
                lineaPedido.PrecioUnitario = producto.Precio;

                this.actualizarPedido();
            }
            else
                alert("Este producto ya existe en el pedido, maquina")
        },

        /**
         * Método que comprueba si un producto existe en el pedido
         * dada la id del producto. Devuelve un boolean que será
         * true si el producto ya existe dentro del pedido y false
         * si no.
         * @param {*} codigoProducto id del producto a comprobar
         */
        productoYaExisteEnElPedido: function(codigoProducto)
        {
            existe = false


            for(i = 0 ; i < this.pedido.LineasDePedido.length && !existe ; i++)
            {
                if(codigoProducto == this.pedido.LineasDePedido[i].CodigoProducto)
                    existe = true
            }

            return existe
        },

        /**
         * Método que añade una línea de pedido al pedido
         */
        anadirLineaPedidos(){
            //TODO La cantidad inicial es 1 (tiene sentido, no?)
            nuevaLineaPedido = new clsLineaPedido(0,this.pedido.Codigo, 1, 0, "Euros")
            this.pedido.LineasDePedido.push(nuevaLineaPedido)
            this.lineasInsertar.push(nuevaLineaPedido)
            //alert(JSON.stringify(this.pedido.lineasDePedido))
            //this.actualizarPedido();
        },

        /**
         * Método que elimina una línea de pedido del pedido
         * @param {} lineaPedido línea de pedido a eliminar
         */
        eliminarLineaPedido: function(lineaPedido)
        {
            if(confirm("¿Seguro que quiere borrar?")){
                for( var i = 0 ; i < this.pedido.LineasDePedido.length; i++)
                {
                    if( this.pedido.LineasDePedido[i] === lineaPedido)
                    {
                        this.pedido.LineasDePedido.splice(i, 1);
                        this.lineasEliminar.push(lineaPedido);
                        //this.actualizarPedido();
                    }

                }
            }
        },

        /**
         * Método que actualiza el estado del pedido visualmente.
         */
        actualizarPedido: function()
        {
            estadoActual = this.pedido.Estado

            this.cambiarEstado("")

            this.cambiarEstado(estadoActual)
        },

        /**
         * Método que baja en 1 la cantidad de un producto en una línea de pedido
         * @param {*} lineaPedido línea de pedido donde modifica la cantidad
         */
        restarCantidad: function(lineaPedido)
        {
            if(lineaPedido.Cantidad > 1)
                lineaPedido.Cantidad--;

            this.lineasActualizar.push(lineaPedido);
        },

        /**
         * Método que aumenta en 1 la cantidad de un producto en una línea de pedido
         * @param {*} lineaPedido línea de pedido donde modifica la cantidad
         */
        sumarCantidad: function(lineaPedido)
        {
            lineaPedido.Cantidad++

            this.lineasActualizar.push(lineaPedido);
        }


    },

mounted() {

this.obtenerProductosDelProveedorSeleccionado(this.pedido.CifProveedor);

this.cambiarEstado(this.pedido.Estado);

if(this.pedido.Estado == "Cancelado"|| this.pedido.Estado == "Recibido")
    this.pedidoCanceladoRecibidoConfirmado = true

this.stageProceso = "btn  btn-primary";
this.stageReparto = "btn  btn-secondary";
this.stageCancelado = "btn  btn-secondary";
this.stageRecibido = "btn  btn-secondary";
},
computed:
{
isEnabledProceso:function(){
   if(this.pedido.Estado == 'Preparando')
   {
       clase = "btn  btn-primary";
   } else{
    clase = "btn  btn-secondary";
   }
   return clase;
},
isEnabledReparto:function(){
    if(this.pedido.Estado == 'Reparto')
    {
        clase = "btn  btn-primary";
    } else{
     clase = "btn  btn-secondary";
    }
    return clase;
 },
 isEnabledCancelado:function(){
    if(this.pedido.Estado == 'Cancelado')
    {
        clase = "btn  btn-primary";
    } else{
     clase = "btn  btn-secondary";
    }
    return clase;
 },
 isEnabledRecibido:function(){
    if(this.pedido.Estado == 'Recibido')
    {
        clase = "btn  btn-primary";
    } else{
     clase = "btn  btn-secondary";
    }
    return clase;
 },
 cantidadTotal: function(){
    var sumTotal = 0;
    if(this.pedido.LineasDePedido != undefined){

        for(i = 0 ; i < this.pedido.LineasDePedido.length ; i++)
        {
            sumTotal += this.pedido.LineasDePedido[i].PrecioUnitario * this.pedido.LineasDePedido[i].Cantidad
        }
    }
    return sumTotal
}
}
,
template:
` 
<div style="margin-left:14%" id="app">

<div class="row justify-content-center">

    <div class="divSuperior">                
        <div class="d-flex">
        <h4 id="title">Pedido {{this.pedido.Codigo}}</h4>
            <button type="button" v-if="!pedidoCanceladoRecibidoConfirmado" v-on:click="confirmar()" class="btn btn-primary ml-auto guardar">Guardar</button>
        </div>
        <hr />
        <table style="width:100%" class="table-user">
            <tr>
                <td class="font-weight-bold">Proveedor</td>
                <td class="font-weight-bold">CIF</td>
                <td class="h6">
                    <div class="font-weight-bold">Total</div>
                    
                </td>
            </tr>
            <tr>
            <td>{{this.pedido.NombreRazonSocialProveedor}}</td>
            <td>{{this.pedido.CifProveedor}}</td>
            <td><div>{{ (cantidadTotal).toFixed(2)}}€</div></td>
            
                <td v-if="!pedidoCanceladoRecibidoConfirmado">
                    <div class="btn-group float-right mr-5" role="group" aria-label="Basic example">
                    <button id="proceso" type="button" :class="isEnabledProceso" v-on:click="cambiarEstado('Preparando')">Preparando</button>
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
                v-for="(item) in this.pedido.LineasDePedido">
           
                <tr>
                <td class="table-body-bold">
                    <div class="dropdown" v-if="!pedidoCanceladoRecibidoConfirmado">
                        <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ obtenerNombreProductoPorId(item.CodigoProducto) }}
                            <i data-toggle="tooltip" class="material-icons float-right">expand_more</i>
                        </button>
                        <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                        <template v-for="producto in productos">
                            <a v-on:click="cambiarProductoLineaPedido(producto, item)" class="dropdown-item" href="#">{{producto.Nombre}} - {{producto.Precio}} €</a>
                        </template>
                        </div>
                    </div>
                    <div v-else>
                    {{ obtenerNombreProductoPorId(item.CodigoProducto) }}
                    </div>
                </td>
                <td> {{item.PrecioUnitario}} €</td>
                <td>
                    <i class="material-icons align-middle" v-if="!pedidoCanceladoRecibidoConfirmado" v-on:click="restarCantidad(item)">remove_circle_outline</i>
                    <span class="align-middle">{{item.Cantidad}}</span>
                    <i data-toggle="tooltip" v-if="!pedidoCanceladoRecibidoConfirmado" v-on:click="sumarCantidad(item)" class="material-icons align-middle">add_circle_outline</i>

                </td>
                <td>21</td>
                <td>{{ (item.PrecioUnitario * item.Cantidad).toFixed(2) }}€</td>
                <td><a href="#"><i data-toggle="tooltip" v-if="!pedidoCanceladoRecibidoConfirmado" title="Borrar" v-on:click="eliminarLineaPedido(item)" class="material-icons rojo float-left">delete</i></a></td>
            </tr>
              </template>
                </tbody>

            </table>

            

    </div>
    <button class="btn btn-primary btnAnadir" v-if="!pedidoCanceladoRecibidoConfirmado" v-on:click="anadirLineaPedidos()">
        <i data-toggle="tooltip" title="Añadir línea de pedido" class="material-icons align-middle">add</i>
    </button>

</div>


</div>
`
})