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
        public IEnumerable<clsLineaPedido> Get(int codigoPedido)
        {
            List<clsLineaPedido> lineasPedidoDeUnPedido = new ClsListadosLineaDePedidos_BL().getLineasPedidoDeUnPedido(codigoPedido);

            if (lineasPedidoDeUnPedido.Count == 0 || lineasPedidoDeUnPedido == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            return lineasPedidoDeUnPedido;
        }

        //Get: api/LineasPedido?codigoProducto=15&codigoPedido=2
        public clsLineaPedido Get(string codigoProducto, string codigoPedido)
        {
            clsLineaPedido lineasDePedido = new ClsHandlerLineaDePedido_BL().getOrderLine(Int32.Parse(codigoProducto), Int32.Parse(codigoPedido));

            if (lineasDePedido == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            return lineasDePedido;
            //return new ClsHandlerLineaDePedido_BL().getOrderLine(Int32.Parse(codigoProducto), Int32.Parse(codigoPedido));
        }

        //Delete: api/LineasPedido
        public void Delete(int codigoProducto, int codigoPedido) {
            ClsHandlerLineaDePedido_BL handler = new ClsHandlerLineaDePedido_BL();
            handler.borrarLineaPedido(codigoProducto, codigoPedido);
        }

        //Post
        public void Post(clsLineaPedido lineaPedido) {
            ClsHandlerLineaDePedido_BL handler = new ClsHandlerLineaDePedido_BL();
            handler.insertarLineaPedidoEnPedido(lineaPedido);
        }
    }
}
