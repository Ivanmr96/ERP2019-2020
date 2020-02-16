using ProyectoERP_API_DAL.Lists;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_BL.Lists
{
    public class ClsListadosPedidos_BL
    {
        /// <summary>
        /// Obtiene todos los pedidos, añadiendo logica de negocio si procediera
        /// </summary>
        /// <returns>Devuelve una lista con todos los pedidos</returns>
        public List<clsPedido> getPedidosList()
        {
            return new ClsListadosPedidos_DAL().getPedidosList(); //-> esto cuando funcione la BBDD

            ////Datos falsos

            //List<clsPedido> listadoPedidos = new List<clsPedido>();
            //listadoPedidos.Add(new clsPedido(1, "EN PROCESO", DateTime.Now, DateTime.Now));
            //listadoPedidos.Add(new clsPedido(2, "EN PROCESO", DateTime.Now, DateTime.Now));
            //listadoPedidos.Add(new clsPedido(3, "EN PROCESO", DateTime.Now, DateTime.Now));
            //listadoPedidos.Add(new clsPedido(4, "EN PROCESO", DateTime.Now, DateTime.Now));
            //listadoPedidos.Add(new clsPedido(5, "EN PROCESO", DateTime.Now, DateTime.Now));
            //listadoPedidos.Add(new clsPedido(6, "EN PROCESO", DateTime.Now, DateTime.Now));

            //return listadoPedidos;

        }


        /// <summary>
        /// Obtiene un objeto pedido dada su ID,  añadiendo logica de negocio si procediera
        /// </summary>
        /// <param name="id"> La ID del pedido</param>
        /// <returns>Objeto pedido correspondiente a la ID dada</returns>
        public clsPedido getPedido(int id)
        {
            return new ClsListadosPedidos_DAL().getPedido(id); //-> esto cuando funcione la BBDD

            //Datos fake
           // return new clsPedido(3, "EN PROCESO", DateTime.Now, DateTime.Now);
        }
    }
}
