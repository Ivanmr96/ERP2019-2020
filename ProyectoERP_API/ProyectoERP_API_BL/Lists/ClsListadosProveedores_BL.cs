using ProyectoERP_API_DAL.Lists;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_BL.Lists
{
    public class ClsListadosProveedores_BL
    {
        /// <summary>
        /// Nombre: getSupplierList
        /// Comentario: Este método nos permite obtener un listado de los proveedores almacenados en la base de datos.
        /// Cabecera: public List<clsProducto> getSupplierList()
        /// </summary>
        /// <returns>Devuelve un list del tipo clsProveedor</returns>
        public List<clsProveedor> getSupplierList()
        {
            return new ClsListadosProveedores_DAL().getSupplierList();
        }
    }
}
