using ProyectoERP_API_DAL.Handler;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_BL.Handler
{
    public class clsOperacionesDeLineaDePedido_BL
    {
        /// <summary>
        /// Método que obtiene una línea de pedido según el código de producto y código de Pedido
        /// </summary>
        /// <param name="codigoProducto">Entero con código del producto cuya línea se consulta</param>
        /// <param name="codigoPedido">Entero con código del pedido al que pertenece la línea a consultar</param>
        /// <returns>clsLineaPedido lineaPedido</returns>
        public clsLineaPedido GetLineaPedidoPorIdProductoIdPedido(int codigoProducto, int codigoPedido)
        {
            //clsOperacionesDeLineaDePedido_DAL objOperaciones = new clsOperacionesDeLineaDePedido_DAL();
            //clsLineaPedido lineaPedido = objOperaciones.GetLineaPedidoPorIdProductoIdPedido(codigoProducto, codigoPedido);

            //return lineaPedido;

            //Prueba:
            return new clsLineaPedido(2, 4, 10, 10.2, "Euros");
        }

        /// <summary>
        /// Método que actualiza un línea de pedido según el código de producto y el código de pedido
        /// </summary>
        /// <param name="lineaPedidoAModificar">Objeto clsLineaPedido que se va a modificar</param>
        /// <returns>int filasAfectadas</returns>
        public int ActualizarLineaPedidoPorIdProductoIdPedido(clsLineaPedido lineaPedidoAModificar)
        {
            //clsOperacionesDeLineaDePedido_DAL objOperaciones = new clsOperacionesDeLineaDePedido_DAL();
            //int filasAfectadas = objOperaciones.ActualizarLineaPedidoPorIdProductoIdPedido(lineaPedidoAModificar);

            //return filasAfectadas;

            //Prueba:
            return 1;
        }

        /// <summary>
        /// Método que inserta líneas de pedido según el código de un nuevo pedido
        /// </summary>
        /// <param name="codigoNuevoPedido">int que indica el código del nuevo pedido</param>
        /// <param name="nuevasLineasPedido">Listado List<clsLineaPedido> con las lineas de pedido a insertar</param>
        /// <returns>int totalFilasAfectadas</returns>        
        public int InsertarLineasPedidoSegunCodigoDePedido(int codigoNuevoPedido, List<clsLineaPedido> nuevasLineasPedido)
        {
            //clsOperacionesDeLineaDePedido_DAL objOperaciones = new clsOperacionesDeLineaDePedido_DAL();
            //int totalFilasAfectadas = objOperaciones.InsertarLineasPedidoSegunCodigoDePedido(codigoNuevoPedido, nuevasLineasPedido);

            //return totalFilasAfectadas;

            //Prueba:
            return 5;
        }
    }
}
