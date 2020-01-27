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
    }
}
