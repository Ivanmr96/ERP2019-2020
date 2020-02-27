using ProyectoERP_API.Models;
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
        public IEnumerable<clsPedido> Get(){
            List<clsPedido> listaPedidos;

            try {
                 listaPedidos = new ClsListadosPedidos_BL().getPedidosList();
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }

            if (listaPedidos.Count == 0 || listaPedidos == null){
                throw new HttpResponseException(HttpStatusCode.NoContent);
            }

            return listaPedidos;
        }


        //Get: api/Pedidos?pedidosConPrecioTotalYProveedor=true;
        public IEnumerable<clsPedidoConPrecioTotalYProveedor> Get(bool pedidosConPrecioTotalYProveedor)
        {
            List<clsPedido> listaPedidos;
            List<clsLineaPedido> listaLineasDePedido;
            List<clsPedidoConPrecioTotalYProveedor> listaPedidosConPrecioYProveedor;
            double totalPrecioPedido = 0.0;
            string cifProveedor;
            string nombreRazonSocialProveedor;

            try
            {
                listaPedidos = new ClsListadosPedidos_BL().getPedidosList();
                for(int i = 0; i < listaPedidos.Count; i++)
                {
                    //Por cada pedido existente
                    //Obtengo sus líneas de pedido
                    listaLineasDePedido = new ClsListadosLineaDePedidos_BL()
                        .getLineasPedidoDeUnPedido(listaPedidos[i].Codigo);
                    totalPrecioPedido = 0.0;

                    for(int j = 0; j< listaLineasDePedido.Count; j ++)
                    {
                        //Por cada linea de pedido existente en un pedido
                        //Vamos sumando
                        totalPrecioPedido += (listaLineasDePedido[i].Cantidad * listaLineasDePedido[i].PrecioUnitario);
                    }

                    //TODO Y aquí te diste cuenta de que no se podía saber el proveedor de un pedido jaja


                }
            }
            catch (Exception e)
            {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }

            if (listaPedidos.Count == 0 || listaPedidos == null)
            {
                throw new HttpResponseException(HttpStatusCode.NoContent);
            }

            return null;
        }


        //Get: api/Pedidos/15
        public clsPedido Get(int id){
            clsPedido pedido;
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
            int filas;

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
            int filas;

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
            int filas;
            try {
                filas = new ClsHandlerPedidos_BL().ActualizarEstadoPedido(codigoPedido, estadoPedido);
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }

            if (filas == 0) {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            return filas;
        }

        // PUT: api/Pedidos/{idPedido}
        public int Put(int codigoPedido) //Recibir pedido
        {
            int filas;

            try {
                filas = new ClsHandlerPedidos_BL().RecibirPedido(codigoPedido);
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }

            if (filas == 0) {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            return filas;
        }
    }
}
