Vue.component('listapedidoscomponent', 
{
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
                        <th scope="col">PEDIDO</th>
                        <th scope="col">PROVEEDOR</th>
                        <th scope="col">FECHA REGISTRADA</th>
                        <th scope="col">ESTADO</th>
                        <th scope="col">FECHA RECIBIMIENTO</th>
                        <th scope="col">PRECIO</th>
                        <th scope="col">DETALLES</th>
                    </tr>
                    </thead>

                    <tbody class="table-body ">

                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-cancelado">lens</i> Cancelado</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-recibido">lens</i> Recibido</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-enreparto">lens</i> En reparto</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a v-on:click="$store.state.currentComponent = $store.state.components.detalles" href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ver" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-preparando">lens</i> Preparando</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>

                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-cancelado">lens</i> Cancelado</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-recibido">lens</i> Recibido</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-enreparto">lens</i> En reparto</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-preparando">lens</i> Preparando</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>

                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-cancelado">lens</i> Cancelado</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-recibido">lens</i> Recibido</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-enreparto">lens</i> En reparto</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-preparando">lens</i> Preparando</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>

                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-cancelado">lens</i> Cancelado</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-recibido">lens</i> Recibido</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-enreparto">lens</i> En reparto</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-preparando">lens</i> Preparando</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-cancelado">lens</i> Cancelado</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-recibido">lens</i> Recibido</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-enreparto">lens</i> En reparto</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-preparando">lens</i> Preparando</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>

                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-cancelado">lens</i> Cancelado</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-recibido">lens</i> Recibido</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-enreparto">lens</i> En reparto</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-preparando">lens</i> Preparando</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>

                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-cancelado">lens</i> Cancelado</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-recibido">lens</i> Recibido</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-enreparto">lens</i> En reparto</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-preparando">lens</i> Preparando</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>

                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-cancelado">lens</i> Cancelado</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-recibido">lens</i> Recibido</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-enreparto">lens</i> En reparto</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>
                        <tr>
                            <td class="table-body-bold">0102012577</td>
                            <td class="table-body-bold">Project X</td>
                            <td>20/03/2020</td>
                            <td><i data-toggle="tooltip" title="Ajustes" class="material-icons icono-estado-preparando">lens</i> Preparando</td>
                            <td>-</td>
                            <td>15€</td>
                            <td><a href="#" class="btn-detalles"><i data-toggle="tooltip" title="Ajustes" class="material-icons">remove_red_eye</i></a></td>
                        </tr>

                    </tbody>

                </table>

            </div>
            
        </div>
    `
})