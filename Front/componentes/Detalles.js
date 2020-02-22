Vue.component('detallescomponent', {

    template:
    ` 
    <div style="margin-left:14%">

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
                                <button type="button" class="btn  btn-primary">En proceso</button>
                                <button type="button" class="btn  btn-secondary">En Reparto</button>
                                <button type="button" class="btn  btn-secondary">Cancelado</button>
                                <button type="button" class="btn  btn-secondary">Recibido</button>
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