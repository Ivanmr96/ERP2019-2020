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
    }
}
