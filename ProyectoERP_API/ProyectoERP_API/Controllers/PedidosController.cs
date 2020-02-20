using ProyectoERP_API_BL.Handler;
using ProyectoERP_API_BL.Lists;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProyectoERP_API.Controllers
{
    public class PedidosController : ApiController
    {

        //Get: api/Pedidos
        public IEnumerable<clsPedido> Get()
        {
            List<clsPedido> listaPedidos = null;

            try {
                 listaPedidos = new ClsListadosPedidos_BL().getPedidosList();
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }

            if (listaPedidos.Count == 0 || listaPedidos == null)
            {
                throw new HttpResponseException(HttpStatusCode.NoContent);
            }


            return listaPedidos;
        }


        //Get: api/Pedidos/15
        public clsPedido Get(int id){
            clsPedido pedido = null;
            try {
                pedido = new ClsListadosPedidos_BL().getPedido(id);

                if (pedido.Codigo == 0) {
                    throw new HttpResponseException(HttpStatusCode.NotFound);
                }
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }
            
            return pedido;
        }

        //Delete api/Pedidos/{id}
        public void Delete(int codigoPedido) {
            ClsHandlerPedidos_BL handler = new ClsHandlerPedidos_BL();
            int filas = 0;

            try {
                filas = handler.cancelarPedido(codigoPedido);
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }

            if (filas == 0) {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            } else {
                throw new HttpResponseException(HttpStatusCode.NoContent);
            }

        }

        //Post
        public void Post([FromBody]List<clsLineaPedido> lineasPedido)
        {
            int filas = 0;

            try {
                filas = new ClsHandlerLineaDePedido_BL().insertarPedidoCompleto(lineasPedido);
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }
            
            if (filas == 0) {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            } else {
                throw new HttpResponseException(HttpStatusCode.Created);
            }
        }

        //Métodos Diana:

        // POST: api/Pedidos
        //public int Post()
        //{
        //    return new ClsHandlerPedidos_BL().InsertarNuevoPedido();
        //}

        // PUT: api/Pedidos?codigoPedido=10&estadoPedido=Recibido
        public int Put(int codigoPedido, string estadoPedido) //Actualizar estado en general
        {
<<<<<<< HEAD
            int filas = 0;
            try {
                filas = new ClsHandlerPedidos_BL().ActualizarEstadoPedido(codigoPedido, estadoPedido);
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }

            if (filas == 0) {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            return filas;
=======
            int filasAfectadas = -1;

            //Si la cadena de estadoPedido coincide excatamente con la de la BD
            if (estadoPedido.Equals("Preparando") || estadoPedido.Equals("Cancelado") || estadoPedido.Equals("Recibido") || estadoPedido.Equals("En reparto"))
            {
                filasAfectadas = new ClsHandlerPedidos_BL().ActualizarEstadoPedido(codigoPedido, estadoPedido);

                if (filasAfectadas == 0)
                {
                    throw new HttpResponseException(HttpStatusCode.InternalServerError); //500
                }
            }
            else
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest); //400
            }

            return filasAfectadas;
>>>>>>> b7a03572855faab721c360585387bc976308eb84
        }

        // PUT: api/Pedidos/{idPedido}
        public int Put(int id) //Recibir pedido
        {
<<<<<<< HEAD
            int filas = 0;

            try {
                filas = new ClsHandlerPedidos_BL().RecibirPedido(codigoPedido);
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }

            if (filas == 0) {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            return filas;
=======
            int filasAfectadas = new ClsHandlerPedidos_BL().RecibirPedido(id);

            if (filasAfectadas == 0)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError); //500
            }

            return filasAfectadas;
>>>>>>> b7a03572855faab721c360585387bc976308eb84
        }
    }
}
