using ProyectoERP_API_DAL.Lists;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_BL.Lists{
    public class ClsListadosProveedores_BL{
        /// <summary>
        /// Nombre: getSupplierList
        /// Comentario: Este método nos permite obtener un listado de los proveedores almacenados en la base de datos.
        /// Cabecera: public List<clsProducto> getSupplierList()
        /// </summary>
        /// <returns>Devuelve un list del tipo clsProveedor</returns>
        public List<clsProveedor> getSupplierList(){
            List<clsProveedor> lista;
            try {
                lista = new ClsListadosProveedores_DAL().getSupplierList();
            } catch (Exception e) {
                throw e;
            }
            return lista;
        }

        /// <summary>
        /// Nombre: getProveedor
        /// Comentario: Este método nos permite obtener un proveedor por id.
        /// Cabecera: public List<clsProveedor> getProveedor(string cifProveedor)
        /// </summary>
        /// <returns>Devuelve un list del tipo clsProveedor</returns>
        public clsProveedor getProveedor(string cifProveedor)
        {
            clsProveedor proveedor;
            try
            {
                proveedor = new ClsListadosProveedores_DAL().getProveedor(cifProveedor);
            }
            catch (Exception e)
            {
                throw e;
            }
            return proveedor;
        }
    }
}
