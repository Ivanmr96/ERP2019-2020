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
            List<clsPedido> listaPedidos = new ClsListadosPedidos_BL().getPedidosList();

            if (listaPedidos.Count == 0 || listaPedidos == null)
            {
                throw new HttpResponseException(HttpStatusCode.NoContent);
            }


            return listaPedidos;
        }


        //Get: api/Pedidos/15
        public clsPedido Get(int id)
        {
            clsPedido pedido = new ClsListadosPedidos_BL().getPedido(id);

            if(pedido.Codigo == 0 )
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            
            return pedido;
        }

        //Delete api/Pedidos/{id}
        public void Delete(int codigoPedido) {
            ClsHandlerPedidos_BL handler = new ClsHandlerPedidos_BL();
            handler.cancelarPedido(codigoPedido);
        }

        //Post
        public void Post([FromBody]List<clsLineaPedido> lineasPedido)
        {
            new ClsHandlerLineaDePedido_BL().insertarPedidoCompleto(lineasPedido);
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
        }

        // PUT: api/Pedidos/{idPedido}
        public int Put(int id) //Recibir pedido
        {
            int filasAfectadas = new ClsHandlerPedidos_BL().RecibirPedido(id);

            if (filasAfectadas == 0)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError); //500
            }

            return filasAfectadas;
        }
    }
}
