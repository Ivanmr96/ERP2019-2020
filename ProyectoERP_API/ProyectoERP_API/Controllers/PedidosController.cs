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
            clsOperacionesDePedidos_BL handler = new clsOperacionesDePedidos_BL();
            handler.cancelarPedido(codigoPedido);
        }

    }
}
