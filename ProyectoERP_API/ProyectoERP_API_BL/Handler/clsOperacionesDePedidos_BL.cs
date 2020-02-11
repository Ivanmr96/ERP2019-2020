using ProyectoERP_API_DAL.Handler;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_BL.Handler
{
    public class clsOperacionesDePedidos_BL
    {
        /// <summary>
        /// Método que obtiene un pedido determinado según su código
        /// </summary>
        /// <param name="codigoPedido">entero con código del pedido a obtener</param>
        /// <returns>clsPedido pedidoNuevo</returns>
        public clsPedido GetPedidoPorId(int codigoPedido)
        {
            //clsOperacionesDePedidos_DAL objOperaciones = new clsOperacionesDePedidos_DAL();
            //clsPedido nuevoPedido = objOperaciones.GetPedidoPorId(codigoPedido);

            //return nuevoPedido;
            
            //Prueba:
            return new clsPedido(2, "EN PROCESO", DateTime.Now, DateTime.Now);
        }

        /// <summary>
        /// Método que actualiza un pedido determinado según su Id
        /// </summary>
        /// <param name="pedidoParaModificar">Objeto clsPedido que se va a modificar</param>
        /// <returns>int codigoNuevoPedido</returns>
        public int ActualizarPedidoPorId(clsPedido pedidoParaModificar)
        {
            //clsOperacionesDePedidos_DAL objOperaciones = new clsOperacionesDePedidos_DAL();
            //int filasAfectadas = objOperaciones.UpdateOrderById(pedidoParaModificar);

            //return filasAfectadas;

            //Prueba:
            return 1;
        }

        /// <summary>
        /// Método que crea un nuevo pedido llamando a procedimiento en BBDD y devuelve el código del pedido insertado
        /// </summary>
        /// <returns>int codigoNuevoPedido</returns>
        public int InsertarNuevoPedidoDevolviendoSuCodigo()
        {
            //clsOperacionesDePedidos_DAL objOperaciones = new clsOperacionesDePedidos_DAL();
            //int codigoNuevoPedido = objOperaciones.InsertarNuevoPedidoDevolviendoSuCodigo();

            //return codigoNuevoPedido;

            //Prueba:
            return 3;
        }

        /// <summary>
        /// Establece el estado del pedido a cancelado.
        /// </summary>
        /// <param name="codigoPedido">Codigo del pedido que queremos cancelar.</param>
        public void cancelarPedido(int codigoPedido) {
            clsOperacionesDePedidos_DAL handler = new clsOperacionesDePedidos_DAL();
            handler.cancelarPedido(codigoPedido);
        }
    }
}
