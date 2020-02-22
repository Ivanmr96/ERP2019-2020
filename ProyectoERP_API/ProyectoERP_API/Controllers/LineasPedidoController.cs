using ProyectoERP_API_BL.Handler;
using ProyectoERP_API_BL.Lists;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProyectoERP_API.Controllers{
    public class LineasPedidoController : ApiController{

        //Get: api/LineasPedido?codigoPedido=15
        public IEnumerable<clsLineaPedido> Get(int codigoPedido){
            List<clsLineaPedido> lineasPedidoDeUnPedido;

            try {
                lineasPedidoDeUnPedido = new ClsListadosLineaDePedidos_BL().getLineasPedidoDeUnPedido(codigoPedido);
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }
            
            if (lineasPedidoDeUnPedido.Count == 0 || lineasPedidoDeUnPedido == null){
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            return lineasPedidoDeUnPedido;
        }

        //Get: api/LineasPedido?codigoProducto=15&codigoPedido=2
        public clsLineaPedido Get(string codigoProducto, string codigoPedido)
        {
            clsLineaPedido lineasDePedido;

            try {
                lineasDePedido = new ClsHandlerLineaDePedido_BL().getOrderLine(Int32.Parse(codigoProducto), Int32.Parse(codigoPedido));
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }
            
            if (lineasDePedido == null){
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            return lineasDePedido;
        }

        //Delete: api/LineasPedido
        public void Delete(int codigoProducto, int codigoPedido) {
            int filas;
            ClsHandlerLineaDePedido_BL handler = new ClsHandlerLineaDePedido_BL();

            try {
                filas = handler.borrarLineaPedido(codigoProducto, codigoPedido);
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
        public int Post([FromBody]clsLineaPedido lineaPedido) {
            int filas;
            ClsHandlerLineaDePedido_BL handler = new ClsHandlerLineaDePedido_BL();
            try {
                filas = handler.insertarLineaPedidoEnPedido(lineaPedido);
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }
            
            if (filas == 0) {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            return filas;
        }

        //Método Diana

        //PUT: api/LineasPedido?codigoProducto=2&codigoPedido=4&nuevaCantidad=5
        public int Put(int codigoProducto, int codigoPedido, int nuevaCantidad){
            int filasAfectadas;

            try {
                filasAfectadas = new ClsHandlerLineaDePedido_BL().ActualizarLineaPedidoPorIdProductoIdPedido(codigoProducto, codigoPedido, nuevaCantidad);
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }

            if (filasAfectadas == 0){
                throw new HttpResponseException(HttpStatusCode.InternalServerError); //500
            }

            return filasAfectadas;
        }
    }
}
