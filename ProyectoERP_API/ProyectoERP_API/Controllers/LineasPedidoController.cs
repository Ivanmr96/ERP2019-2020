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
    public class LineasPedidoController : ApiController
    {

        //Get: api/LineasPedido?codigoPedido=15
        public IEnumerable<clsLineaPedido> Get(string codigoPedido)
        {
            return new ClsListadosLineaDePedidos_BL().getLineasPedidoDeUnPedido(Int32.Parse(codigoPedido));
        }

        //Get: api/LineasPedido?codigoProducto=15&codigoPedido=2
        public clsLineaPedido Get(string codigoProducto, string codigoPedido)
        {
            return new ClsHandlerLineaDePedido_BL().getOrderLine(Int32.Parse(codigoProducto), Int32.Parse(codigoPedido));
        }
    }
}
