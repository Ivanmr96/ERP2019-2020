Vue.component('detallescomponent', {

            data:
            {
                //idLineaPedido: id,
                stageProceso: "btn  btn-primary",
                stageReparto: "btn  btn-secondary",
                stageCancelado: "btn  btn-secondary",
                stageRecibido: "btn  btn-secondary"
            },

            methods:
            {
                cambiarEstado(estado) {
                    //alert(estado);
                    //var url = 'https://apierp.azurewebsites.net/api/Pedidos?codigoPedido=' + idLineaPedido + '&estadoPedido=' + estado//Necesitamos obtener el estado

                    //this.$http.put(url).then(function (response)             //Realiza una petición get a la URL, con la función dentro del "then" indico que hay que hacer en caso de respuesta satisfactoria
                    //{
                    switch (estado) {
                        case "proceso":
                            stageProceso: "btn  btn-primary";
                            stageReparto: "btn  btn-secondary";
                            stageCancelado: "btn  btn-secondary";
                            stageRecibido: "btn  btn-secondary";
                            break;
                        case "reparto":
                            stageProceso: "btn  btn-secondary";
                            stageReparto: "btn  btn-primary";
                            stageCancelado: "btn  btn-secondary";
                            stageRecibido: "btn  btn-secondary";
                            break;
                        case "cancelado":
                            stageProceso: "btn  btn-secondary";
                            stageReparto: "btn  btn-secondary";
                            stageCancelado: "btn  btn-primary";
                            stageRecibido: "btn  btn-secondary";
                            break;
                        case "recibido":
                            stageProceso: "btn  btn-secondary";
                            stageReparto: "btn  btn-secondary";
                            stageCancelado: "btn  btn-secondary";
                            stageRecibido: "btn  btn-primary";
                            break;
                    }
                    //}, function () {                                          //Aqui indica que hará en caso de error
                    // alert("error");
                    //});
                }
            },

    mounted() {
        stageProceso: "btn  btn-primary";
        stageReparto: "btn  btn-secondary";
        stageCancelado: "btn  btn-secondary";
        stageRecibido: "btn  btn-secondary";
    },

    template:
    ` 
    <div style="margin-left:14%" id="app">

        <div class="row justify-content-center">

            <div class="divSuperior">                
                <div class="d-flex">
                    <h4 id="title">Pedido 04034043534</h4>
                    <button type="button" class="btn btn-primary ml-auto guardar">Guardar</button>
                </div>
                <hr />
                <table style="width:100%" class="table-user">
                    <tr>
                        <td>Proveedor</td>
                        <td>CIF</td>
                        <td>Correo electronico</td>
                    </tr>
                    <tr>
                        <td>Pedro Leon</td>
                        <td>034503453</td>
                        <td>pedro@gmail.com</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button id="proceso" type="button" class={{stageProceso}} v-on:click="cambiarEstado('proceso')">En proceso</button>
                                <button id="reparto" type="button" class="{{ stageReparto }}" v-on:click="cambiarEstado('reparto')">En Reparto</button>
                                <button id="cancelado" type="button" class="{{ stageCancelado }}" v-on:click="cambiarEstado('cancelado')">Cancelado</button>
                                <button id="recibido" type="button" class="{{ stageRecibido }}" v-on:click="cambiarEstado('recibido')">Recibido</button>
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

                            <tr>
                                <td class="table-body-bold">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Listado de productos
                                            <i data-toggle="tooltip" title="Añadir persona" class="material-icons float-right">expand_more</i>
                                        </button>
                                        <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Producto1</a>
                                            <a class="dropdown-item" href="#">Producto2</a>
                                            <a class="dropdown-item" href="#">Producto3</a>
                                        </div>
                                    </div>
                                </td>
                                <td>15€</td>
                                <td>
                                    <i class="material-icons align-middle" onclick="restar()">remove_circle_outline</i>
                                    <span class="align-middle">1</span>
                                    <i data-toggle="tooltip" onclick="sumar()" title="Añadir persona" class="material-icons align-middle">add_circle_outline</i>

                                </td>
                                <td>21</td>
                                <td>75€</td>
                                <td><a href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons rojo">delete</i></a></td>
                            </tr>
                            <tr>
                                <td class="table-body-bold">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Listado de productos
                                            <i data-toggle="tooltip" title="Añadir persona" class="material-icons float-right">expand_more</i>
                                        </button>
                                        <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Producto1</a>
                                            <a class="dropdown-item" href="#">Producto2</a>
                                            <a class="dropdown-item" href="#">Producto3</a>
                                        </div>
                                    </div>
                                </td>
                                <td>15€</td>
                                <td>
                                    <i class="material-icons align-middle" onclick="restar()">remove_circle_outline</i>
                                    <span class="align-middle">1</span>
                                    <i data-toggle="tooltip" onclick="sumar()" title="Añadir persona" class="material-icons align-middle">add_circle_outline</i>

                                </td>
                                <td>21</td>
                                <td>75€</td>
                                <td><a href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons rojo">delete</i></a></td>
                            </tr>
                            <tr>
                                <td class="table-body-bold">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Listado de productos
                                            <i data-toggle="tooltip" title="Añadir persona" class="material-icons float-right">expand_more</i>
                                        </button>
                                        <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Producto1</a>
                                            <a class="dropdown-item" href="#">Producto2</a>
                                            <a class="dropdown-item" href="#">Producto3</a>
                                        </div>
                                    </div>
                                </td>
                                <td>15€</td>
                                <td>
                                    <i class="material-icons align-middle" onclick="restar()">remove_circle_outline</i>
                                    <span class="align-middle">1</span>
                                    <i data-toggle="tooltip" onclick="sumar()" title="Añadir persona" class="material-icons align-middle">add_circle_outline</i>

                                </td>
                                <td>21</td>
                                <td>75€</td>
                                <td><a href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons rojo">delete</i></a></td>
                            </tr>
                            <tr>
                                <td class="table-body-bold">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Listado de productos
                                            <i data-toggle="tooltip" title="Añadir persona" class="material-icons float-right">expand_more</i>
                                        </button>
                                        <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Producto1</a>
                                            <a class="dropdown-item" href="#">Producto2</a>
                                            <a class="dropdown-item" href="#">Producto3</a>
                                        </div>
                                    </div>
                                </td>
                                <td>15€</td>
                                <td>
                                    <i class="material-icons align-middle" onclick="restar()">remove_circle_outline</i>
                                    <span class="align-middle">1</span>
                                    <i data-toggle="tooltip" onclick="sumar()" title="Añadir persona" class="material-icons align-middle">add_circle_outline</i>

                                </td>
                                <td>21</td>
                                <td>75€</td>
                                <td><a href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons rojo">delete</i></a></td>
                            </tr>
                            <tr>
                                <td class="table-body-bold">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Listado de productos
                                            <i data-toggle="tooltip" title="Añadir persona" class="material-icons float-right">expand_more</i>
                                        </button>
                                        <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Producto1</a>
                                            <a class="dropdown-item" href="#">Producto2</a>
                                            <a class="dropdown-item" href="#">Producto3</a>
                                        </div>
                                    </div>
                                </td>
                                <td>15€</td>
                                <td>
                                    <i class="material-icons align-middle" onclick="restar()">remove_circle_outline</i>
                                    <span class="align-middle">1</span>
                                    <i data-toggle="tooltip" onclick="sumar()" title="Añadir persona" class="material-icons align-middle">add_circle_outline</i>

                                </td>
                                <td>21</td>
                                <td>75€</td>
                                <td><a href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons rojo">delete</i></a></td>
                            </tr>
                            <tr>
                                <td class="table-body-bold">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Listado de productos
                                            <i data-toggle="tooltip" title="Añadir persona" class="material-icons float-right">expand_more</i>
                                        </button>
                                        <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Producto1</a>
                                            <a class="dropdown-item" href="#">Producto2</a>
                                            <a class="dropdown-item" href="#">Producto3</a>
                                        </div>
                                    </div>
                                </td>
                                <td>15€</td>
                                <td>
                                    <i class="material-icons align-middle" onclick="restar()">remove_circle_outline</i>
                                    <span class="align-middle">1</span>
                                    <i data-toggle="tooltip" onclick="sumar()" title="Añadir persona" class="material-icons align-middle">add_circle_outline</i>

                                </td>
                                <td>21</td>
                                <td>75€</td>
                                <td><a href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons rojo">delete</i></a></td>
                            </tr>
                            <tr>
                                <td class="table-body-bold">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Listado de productos
                                            <i data-toggle="tooltip" title="Añadir persona" class="material-icons float-right">expand_more</i>
                                        </button>
                                        <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Producto1</a>
                                            <a class="dropdown-item" href="#">Producto2</a>
                                            <a class="dropdown-item" href="#">Producto3</a>
                                        </div>
                                    </div>
                                </td>
                                <td>15€</td>
                                <td>
                                    <i class="material-icons align-middle" onclick="restar()">remove_circle_outline</i>
                                    <span class="align-middle">1</span>
                                    <i data-toggle="tooltip" onclick="sumar()" title="Añadir persona" class="material-icons align-middle">add_circle_outline</i>

                                </td>
                                <td>21</td>
                                <td>75€</td>
                                <td><a href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons rojo">delete</i></a></td>
                            </tr>
                            <tr>
                                <td class="table-body-bold">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Listado de productos
                                            <i data-toggle="tooltip" title="Añadir persona" class="material-icons float-right">expand_more</i>
                                        </button>
                                        <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Producto1</a>
                                            <a class="dropdown-item" href="#">Producto2</a>
                                            <a class="dropdown-item" href="#">Producto3</a>
                                        </div>
                                    </div>
                                </td>
                                <td>15€</td>
                                <td>
                                    <i class="material-icons align-middle" onclick="restar()">remove_circle_outline</i>
                                    <span class="align-middle">1</span>
                                    <i data-toggle="tooltip" onclick="sumar()" title="Añadir persona" class="material-icons align-middle">add_circle_outline</i>

                                </td>
                                <td>21</td>
                                <td>75€</td>
                                <td><a href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons rojo">delete</i></a></td>
                            </tr>
                            <tr>
                                <td class="table-body-bold">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Listado de productos
                                            <i data-toggle="tooltip" title="Añadir persona" class="material-icons float-right">expand_more</i>
                                        </button>
                                        <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Producto1</a>
                                            <a class="dropdown-item" href="#">Producto2</a>
                                            <a class="dropdown-item" href="#">Producto3</a>
                                        </div>
                                    </div>
                                </td>
                                <td>15€</td>
                                <td>
                                    <i class="material-icons align-middle" onclick="restar()">remove_circle_outline</i>
                                    <span class="align-middle">1</span>
                                    <i data-toggle="tooltip" onclick="sumar()" title="Añadir persona" class="material-icons align-middle">add_circle_outline</i>

                                </td>
                                <td>21</td>
                                <td>75€</td>
                                <td><a href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons rojo">delete</i></a></td>
                            </tr>
                            <tr>
                                <td class="table-body-bold">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Listado de productos
                                            <i data-toggle="tooltip" title="Añadir persona" class="material-icons float-right">expand_more</i>
                                        </button>
                                        <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Producto1</a>
                                            <a class="dropdown-item" href="#">Producto2</a>
                                            <a class="dropdown-item" href="#">Producto3</a>
                                        </div>
                                    </div>
                                </td>
                                <td>15€</td>
                                <td>
                                    <i class="material-icons align-middle" onclick="restar()">remove_circle_outline</i>
                                    <span class="align-middle">1</span>
                                    <i data-toggle="tooltip" onclick="sumar()" title="Añadir persona" class="material-icons align-middle">add_circle_outline</i>

                                </td>
                                <td>21</td>
                                <td>75€</td>
                                <td><a href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons rojo">delete</i></a></td>
                            </tr>
                            <tr>
                                <td class="table-body-bold">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Listado de productos
                                            <i data-toggle="tooltip" title="Añadir persona" class="material-icons float-right">expand_more</i>
                                        </button>
                                        <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Producto1</a>
                                            <a class="dropdown-item" href="#">Producto2</a>
                                            <a class="dropdown-item" href="#">Producto3</a>
                                        </div>
                                    </div>
                                </td>
                                <td>15€</td>
                                <td>
                                    <i class="material-icons align-middle" onclick="restar()">remove_circle_outline</i>
                                    <span class="align-middle">1</span>
                                    <i data-toggle="tooltip" onclick="sumar()" title="Añadir persona" class="material-icons align-middle">add_circle_outline</i>

                                </td>
                                <td>21</td>
                                <td>75€</td>
                                <td><a href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons rojo">delete</i></a></td>
                            </tr>
                            <tr>
                                <td class="table-body-bold">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary w-75 text-left" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Listado de productos
                                            <i data-toggle="tooltip" title="Añadir persona" class="material-icons float-right">expand_more</i>
                                        </button>
                                        <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Producto1</a>
                                            <a class="dropdown-item" href="#">Producto2</a>
                                            <a class="dropdown-item" href="#">Producto3</a>
                                        </div>
                                    </div>
                                </td>
                                <td>15€</td>
                                <td>
                                    <i class="material-icons align-middle" onclick="restar()">remove_circle_outline</i>
                                    <span class="align-middle">1</span>
                                    <i data-toggle="tooltip" onclick="sumar()" title="Añadir persona" class="material-icons align-middle">add_circle_outline</i>

                                </td>
                                <td>21</td>
                                <td>75€</td>
                                <td><a href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons rojo">delete</i></a></td>
                            </tr>

                        </tbody>

                    </table>

            </div>
            <button class="btn btn-primary btnAnadir">
                <i data-toggle="tooltip" onclick="sumar()" title="Añadir persona" class="material-icons align-middle">add</i>
            </button>

        </div>


    </div>
    `
})