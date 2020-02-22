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
        /// Devuelve todas las lineas de pedido de un pedido dada su ID
        /// </summary>
        /// <param name="codigoPedido">ID del pedido</param>
        /// <returns>Listado de lineas de pedido de ese pedido</returns>
        public List<clsLineaPedido> getLineasPedidoDeUnPedido(int codigoPedido){
            List<clsLineaPedido> lista;

            try {
                lista = new ClsListadosLineaDePedidos_DAL().getLineasPedidoDeUnPedido(codigoPedido);
            } catch (Exception e) {
                throw e;
            }

            return lista;
        }
    }
}
