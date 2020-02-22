Vue.component('realizarpedidocomponent',{

    data: function () {
        return {
          pedido: new clsPedido(1)
        }
    },

    template:
    `
    <div style="margin-left:14%">

        <div class="row justify-content-center">

            <div class="divSuperior">
                <h4 id="title">REALIZAR PEDIDO</h4>
                <div class="dropdownSuperior">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                        Listado de Proveedores
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Proveedor1</a>
                        <a class="dropdown-item" href="#">Proveedor2</a>
                        <a class="dropdown-item" href="#">Proveedor3</a>
                    </div>
                </div>
                <div class="d-flex">
                    <button type="button" class="btn btn-primary ml-auto guardar">Guardar</button>
                </div>
                <table class="rounded table table-striped align-self-center text-center">

                    <thead class="rounded">
                        <tr class="header align-bottom">
                            <th scope="col">PRODUCTO</th>
                            <th scope="col">PRECIO/UD</th>
                            <th scope="col">CANTIDAD</th>
                            <th scope="col">IMPUESTO %</th>
                            <th scope="col">PRECIO FINAL</th>
                        </tr>
                    </thead>

                    <tbody class="table-body ">


                        <tr>
                            <td class="table-body-bold">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuProducto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Listado de productos
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Producto1</a>
                                        <a class="dropdown-item" href="#">Producto2</a>
                                        <a class="dropdown-item" href="#">Producto3</a>
                                    </div>
                                </div>
                            </td>
                            <td>{{pedido.codigo}}</td>
                            <td>
                                <i class="material-icons icono" onclick="sumar()">add</i>
                                <span id="numero">1</span>
                                <i class="material-icons icono" onclick="restar()">remove</i>
                            </td>
                            <td>21</td>
                            <td>75€</td>
                            <td><a href="#"><i data-toggle="tooltip" title="Editar" class="material-icons azul">edit</i></a></td>
                            <td><a href="#"><i data-toggle="tooltip" title="Borrar" class="material-icons rojo">delete</i></a></td>
                        </tr>
                        <tr>
                            <td>
                                <i data-toggle="tooltip" class="material-icons">add</i>
                                AÑADIR NUEVO PRODUCTO
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>
            </div>

            

    </div>
    `
})