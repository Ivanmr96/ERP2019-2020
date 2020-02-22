using ProyectoERP_API_DAL.Lists;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_BL.Lists{
    public class ClsListadosPedidos_BL{
        /// <summary>
        /// Obtiene todos los pedidos, añadiendo logica de negocio si procediera
        /// </summary>
        /// <returns>Devuelve una lista con todos los pedidos</returns>
        public List<clsPedido> getPedidosList(){
            List<clsPedido> lista;

            try {
                lista = new ClsListadosPedidos_DAL().getPedidosList();
            } catch (Exception e) {
                throw e;
            }
            return lista;
        }


        /// <summary>
        /// Obtiene un objeto pedido dada su ID,  añadiendo logica de negocio si procediera
        /// </summary>
        /// <param name="id"> La ID del pedido</param>
        /// <returns>Objeto pedido correspondiente a la ID dada</returns>
        public clsPedido getPedido(int id){
            clsPedido pedido;
            try {
                pedido = new ClsListadosPedidos_DAL().getPedido(id);
            } catch (Exception e) {
                throw e;
            }
            return pedido;
        }
    }
}
