using ProyectoERP_API_DAL.Lists;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_BL.Lists
{
    public class ClsListadosProductos_BL
    {
        /// <summary>
        /// Nombre: getProductList
        /// Comentario: Este método nos permite obtener un listado de los productos almacenados en la base de datos.
        /// Cabecera: public List<clsProducto> getProductList()
        /// </summary>
        /// <returns>Devuelve un list del tipo clsProducto</returns>
        public List<clsProducto> getProductList()
        {
            return new ClsListadosProductos_DAL().getProductList();//Cuando la base de datos se encuentre operativa
            /*List<clsProducto> prueba = new List<clsProducto>();

            prueba.Add(new clsProducto(101, "Doritos", "Naranjitas", 3000));
            prueba.Add(new clsProducto(102, "Chope", "Del DIA", 33));
            prueba.Add(new clsProducto(103, "Tengo", "Salud Y", 57));
            prueba.Add(new clsProducto(104, "Hambre", "Como siempre", 23));

            return prueba;*/
        }
    }
}
