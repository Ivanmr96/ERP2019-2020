﻿using ProyectoERP_API_BL.Lists;
using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProyectoERP_API.Controllers
{
    public class ProductoController : ApiController
    {
        //Get: api/Producto
        public IEnumerable<clsProducto> Get(){
            List<clsProducto> listadoProductos;

            try {
                listadoProductos = new ClsListadosProductos_BL().getProductList();
            } catch (Exception e) {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }
            
            if (listadoProductos == null || listadoProductos.Count == 0){
                throw new HttpResponseException(HttpStatusCode.NoContent);
            }
            return listadoProductos;
        }
    }
}
