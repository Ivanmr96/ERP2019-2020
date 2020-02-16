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
            return new ClsListadosPedidos_BL().getPedidosList();
        }


        //Get: api/Pedidos/15
        public clsPedido Get(int id)
        {
            return new ClsListadosPedidos_BL().getPedido(id);
        }

        //Delete api/Pedidos/{id}
        public void cancelarPedido(int codigoPedido) {
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

        // PUT: api/Pedidos?codigoPedido=1&estadoPedido=recibido
        public int Put(int codigoPedido, string estadoPedido) //Actualizar estado en general
        {
            return new ClsHandlerPedidos_BL().ActualizarEstadoPedido(codigoPedido, estadoPedido);
        }

        // PUT: api/Pedidos?codigoPedido=1
        public int Put(int codigoPedido) //Recibir pedido
        {
            return new ClsHandlerPedidos_BL().RecibirPedido(codigoPedido);
        }
    }
}
