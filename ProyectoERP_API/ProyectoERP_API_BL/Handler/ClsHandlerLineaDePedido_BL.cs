using ProyectoERP_API_DAL.Handler;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_BL.Handler
{
    public class ClsHandlerLineaDePedido_BL
    {
        /// <summary>
        /// Nombre: getOrderLine
        /// Comentario: Este método nos permite obtener una línea de pedido de un producto y pedido determinado.
        /// Cabecera: public clsLineaPedido getOrderLine(int codigoProducto, int codigoPedido)
        /// </summary>
        /// <returns>Devuelve un tipo clsLineaPedido</returns>
        public clsLineaPedido getOrderLine(int codigoProducto, int codigoPedido)
        {
            //return new ClsHandlerLineaDePedido_DAL().getOrderLine(codigoProducto, codigoPedido);//Cuando la base de datos se encuentre operativa
            return new clsLineaPedido(101, 1, 2, 1.4, "libra");
        }

        /// <summary>
        /// Borra una linea de pedido de un pedido concreto.
        /// </summary>
        /// <param name="codigoProducto">Codigo del producto a eliminar</param>
        /// <param name="codigoPedido">Codigo del pedido.</param>
        public void borrarLineaPedido(int codigoProducto, int codigoPedido) {

            ClsHandlerLineaDePedido_DAL handler = new ClsHandlerLineaDePedido_DAL();
            handler.borrarLineaPedido(codigoProducto, codigoPedido);

        }

        /// <summary>
        /// Inserta una linea de pedido en un pedido concreto.
        /// </summary>
        /// <param name="lineaPedido">Linea de pedido a insertar.</param>
        public void insertarLineaPedidoEnPedido(clsLineaPedido lineaPedido) {
            ClsHandlerLineaDePedido_DAL handler = new ClsHandlerLineaDePedido_DAL();
            handler.insertarLineaPedidoEnPedido(lineaPedido);
        }

        /// <summary>
        /// esta funcion inserta el pedido y sus correspondientes lineas de pedido
        /// </summary>
        /// <param name="lineaPedido">List<clsLineaPedido> lineaPedido</param>
        /// <returns>0 si no se ha incertado y 1 si se ha incertado correctamente</returns>
        public int insertarPedidoCompleto(List<clsLineaPedido> lineaPedido)
        {
            int resultado = 0;

            try
            {
                ClsHandlerLineaDePedido_DAL hdp = new ClsHandlerLineaDePedido_DAL();

                resultado = hdp.insertarPedidoCompleto(lineaPedido);
            }
            catch (Exception e)
            {
                throw e;
            }
            return resultado;
        }
    }
}
