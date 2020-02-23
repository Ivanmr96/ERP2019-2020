using ProyectoERP_API_DAL.Lists;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_BL.Lists{
    public class ClsListadosProductos_BL{
        /// <summary>
        /// Nombre: getProductList
        /// Comentario: Este método nos permite obtener un listado de los productos almacenados en la base de datos.
        /// Cabecera: public List<clsProducto> getProductList()
        /// </summary>
        /// <returns>Devuelve un list del tipo clsProducto</returns>
        public List<clsProducto> getProductList(){
            List<clsProducto> producto;

            try {
                producto = new ClsListadosProductos_DAL().getProductList();
            } catch (Exception e) {
                throw e;
            }

            return producto;
        }


        public List<clsProveedorProducto> getProductosDeUnProveedor(string cifProveedor)
        {
            List<clsProveedorProducto> listadoProductoProv;

            try
            {
                listadoProductoProv = new ClsListadosProductos_DAL().getProductosDeUnProveedor(cifProveedor);
            }
            catch (Exception e)
            {
                throw e;
            }

            return listadoProductoProv;
        }


        public clsProducto getProduct(int codigoProducto)
        {
            clsProducto producto;

            try
            {
                producto = new ClsListadosProductos_DAL().getProduct(codigoProducto);
            }
            catch (Exception e)
            {
                throw e;
            }

            return producto;
        }

    }
}
