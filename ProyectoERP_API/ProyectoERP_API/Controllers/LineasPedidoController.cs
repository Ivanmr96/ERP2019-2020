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

        //Delete: api/LineasPedido?codigoProducto=15&codigoPedido=2
        public int Delete(int codigoProducto, int codigoPedido) {
            int filas = 0;
            ClsHandlerLineaDePedido_BL handler = new ClsHandlerLineaDePedido_BL();
            filas = handler.borrarLineaPedido(codigoProducto, codigoPedido);

            if (filas == 0) { //Si no devuelve filas decimos que no ha encontrado destino.
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            return filas;
        }

        //Post
        public int Post([FromBody]clsLineaPedido lineaPedido) {
            int filas;
            ClsHandlerLineaDePedido_BL handler = new ClsHandlerLineaDePedido_BL();
            filas = handler.insertarLineaPedidoEnPedido(lineaPedido);

            if (filas == 0) {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            return filas;
        }

        //Método Diana

        //PUT: api/LineasPedido?codigoProducto=2&codigoPedido=4&nuevaCantidad=5
        public int Put(int codigoProducto, int codigoPedido, int nuevaCantidad)
        {
            int filasAfectadas = new ClsHandlerLineaDePedido_BL().ActualizarLineaPedidoPorIdProductoIdPedido(codigoProducto, codigoPedido, nuevaCantidad);

            if (filasAfectadas == 0)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError); //500
            }

            return filasAfectadas;
        }
    }
}
