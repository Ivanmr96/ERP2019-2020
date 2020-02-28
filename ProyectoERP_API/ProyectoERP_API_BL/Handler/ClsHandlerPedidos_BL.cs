using ProyectoERP_API_DAL.Handler;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_BL.Handler
{
    public class ClsHandlerPedidos_BL
    {
               
        /// <summary>
        /// Método que crea un nuevo pedido llamando a procedimiento en BBDD y devuelve el código del pedido insertado
        /// </summary>
        /// <returns>int codigoNuevoPedido</returns>
        public int InsertarNuevoPedido(string CifProveedor)
        {
            ClsHandlerPedidos_DAL objOperaciones = new ClsHandlerPedidos_DAL();
            int codigoNuevoPedido;
            try {
                 codigoNuevoPedido = objOperaciones.InsertarNuevoPedido(CifProveedor);
            } catch (Exception e) {
                throw e;
            }
            
            return codigoNuevoPedido;
        }

        /// <summary>
        /// Método que actualiza un pedido según su código al estado recibido por parámetro
        /// </summary>
        /// <param name="codigoPedido">int con código del pedido a actualizar</param>
        /// <param name="estadoPedido">string con el estado al que se va a actualizar el pedido</param>
        /// <returns>int con el número de filas afectadas</returns>
        public int ActualizarEstadoPedido(int codigoPedido, string estadoPedido)
        {
            ClsHandlerPedidos_DAL objOperaciones = new ClsHandlerPedidos_DAL();
            int filasAfectadas;
            try {
                filasAfectadas = objOperaciones.ActualizarEstadoPedido(codigoPedido, estadoPedido);
            } catch (Exception e) {
                throw e;
            }

            return filasAfectadas;
        }

        /// <summary>
        /// Método que actualiza un pedido según su código al estado "Recibido"
        /// </summary>
        /// <param name="codigoPedido">int con código del pedido a actualizar</param>
        /// <returns>int con el número de filas afectadas</returns>
        public int RecibirPedido(int codigoPedido)
        {
            ClsHandlerPedidos_DAL objOperaciones = new ClsHandlerPedidos_DAL();
            int filasAfectadas;
            try {
                filasAfectadas = objOperaciones.RecibirPedido(codigoPedido);
            } catch (Exception e) {
                throw e;
            }

            return filasAfectadas;
        }

        /// <summary>
        /// Establece el estado del pedido a cancelado.
        /// </summary>
        /// <param name="codigoPedido">Codigo del pedido a cancelar</param>
        /// <returns></returns>
        public int cancelarPedido(int codigoPedido)
        {
            ClsHandlerPedidos_DAL handler = new ClsHandlerPedidos_DAL();
            int filas;
            try {
                filas = handler.cancelarPedido(codigoPedido);
            } catch (Exception e) {
                throw e;
            }
            return filas;
        }

    }
}
