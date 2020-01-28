using ProyectoERP_API_DAL.Lists;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_BL.Lists
{
    public class ClsListadosLineaDePedidos_BL
    {
        /// <summary>
        /// Nombre: getOrderLineList
        /// Comentario: Este método nos permite obtener un listado de las líneas de pedido de un producto y pedido determinado.
        /// Cabecera: public List<clsLineaPedido> getOrderLineList(int codigoProducto, int codigoPedido)
        /// </summary>
        /// <returns>Devuelve un list del tipo clsLineaPedido</returns>
        public List<clsLineaPedido> getOrderLineList(int codigoProducto, int codigoPedido)
        {
            return new ClsListadosLineaDePedidos_DAL().getOrderLineList(codigoProducto, codigoPedido);
        }


        /// <summary>
        /// Devuelve todas las lineas de pedido de un pedido dada su ID
        /// </summary>
        /// <param name="codigoPedido">ID del pedido</param>
        /// <returns>Listado de lineas de pedido de ese pedido</returns>
        public List<clsLineaPedido> getLineasPedidoDeUnPedido(int codigoPedido)
        {
            //return new ClsListadosLineaDePedidos_DAL().getLineasPedidoDeUnPedido(codigoPedido); //-> cuando funcione la BBDD

            List<clsLineaPedido> lineaPedidos = new List<clsLineaPedido>();
            lineaPedidos.Add(new clsLineaPedido(1, 1, 5, 1.5, "euro"));
            lineaPedidos.Add(new clsLineaPedido(2, 1, 5, 1.5, "euro"));
            lineaPedidos.Add(new clsLineaPedido(5, 1, 5, 1.5, "euro"));

            return lineaPedidos;
        }
    }
}
