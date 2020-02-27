using ProyectoERP_API_BL.Lists;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProyectoERP_API.Controllers{
    public class ProveedorController : ApiController{
        //Get: api/Proveedor
        public IEnumerable<clsProveedor> Get(){
            List<clsProveedor> listadoProveedores = null;

            try {
                listadoProveedores = new ClsListadosProveedores_BL().getSupplierList();
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }
            
            if (listadoProveedores == null || listadoProveedores.Count == 0){
                throw new HttpResponseException(HttpStatusCode.NoContent);
            }
            return listadoProveedores;
        }


        //Get: api/Proveedor/{cifProveedor}
        public clsProveedor Get(string id)
        {
            clsProveedor proveedor = null;

            try
            {
                proveedor = new ClsListadosProveedores_BL().getProveedor(id);
            }
            catch (Exception e)
            {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }

            if (proveedor == null || string.IsNullOrEmpty(proveedor.Cif))
            {
                throw new HttpResponseException(HttpStatusCode.NoContent);
            }
            return proveedor;
        }
    }
}
