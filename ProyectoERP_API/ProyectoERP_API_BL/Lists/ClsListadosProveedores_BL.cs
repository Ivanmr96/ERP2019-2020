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
            return new ClsListadosProveedores_DAL().getSupplierList();//Cuando la base de datos se encuentre operativa
            /*List<clsProveedor> prueba = new List<clsProveedor>();

            prueba.Add(new clsProveedor("334CC433V", "Razon01", "Calle de la piruleta, Nº1", "677888999", "VivirDuele@gmail.com"));
            prueba.Add(new clsProveedor("998CV4H77", "Razon02", "Calle de la piruleta, Nº2", "766886444", "NoMasExamenes@gmail.com"));
            prueba.Add(new clsProveedor("997HJF443", "Razon03", "Calle de la piruleta, Nº3", "677843465", "MisPelotitas@gmail.com"));
            prueba.Add(new clsProveedor("66F655BGG", "Razon04", "Calle de la piruleta, Nº4", "656654433", "DondeEstan@gmail.com"));

            return prueba;*/
        }
    }
}
