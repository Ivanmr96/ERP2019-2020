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
        public int InsertarNuevoPedido()
        {
            ClsHandlerPedidos_DAL objOperaciones = new ClsHandlerPedidos_DAL();
            int codigoNuevoPedido = objOperaciones.InsertarNuevoPedido();

            return codigoNuevoPedido;

            ////Prueba:
            //return 3;
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
            int filasAfectadas = objOperaciones.ActualizarEstadoPedido(codigoPedido, estadoPedido);

            return filasAfectadas;

            ////Prueba;
            //return 1;
        }

        /// <summary>
        /// Método que actualiza un pedido según su código al estado "Recibido"
        /// </summary>
        /// <param name="codigoPedido">int con código del pedido a actualizar</param>
        /// <returns>int con el número de filas afectadas</returns>
        public int RecibirPedido(int codigoPedido)
        {
            ClsHandlerPedidos_DAL objOperaciones = new ClsHandlerPedidos_DAL();
            int filasAfectadas = objOperaciones.RecibirPedido(codigoPedido);

            return filasAfectadas;

            ////Prueba;
            //return 1;
        }

        /// <summary>
        /// Establece el estado del pedido a cancelado.
        /// </summary>
        /// <param name="codigoPedido">Codigo del pedido que queremos cancelar.</param>
        public void cancelarPedido(int codigoPedido)
        {
            ClsHandlerPedidos_DAL handler = new ClsHandlerPedidos_DAL();
            handler.cancelarPedido(codigoPedido);
        }

    }
}
