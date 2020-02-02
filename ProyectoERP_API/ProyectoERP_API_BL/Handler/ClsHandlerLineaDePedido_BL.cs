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
        /// Establece el estado del pedido a cancelado.
        /// </summary>
        /// <param name="codigoPedido">Codigo del pedido que queremos cancelar.</param>
        public void cancelarPedido(int codigoPedido) {

            ClsHandlerLineaDePedido_DAL handler = new ClsHandlerLineaDePedido_DAL();
            handler.cancelarPedido(codigoPedido);

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
    }
}
