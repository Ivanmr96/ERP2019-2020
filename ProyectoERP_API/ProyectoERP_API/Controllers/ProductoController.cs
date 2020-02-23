using ProyectoERP_API.Models;
using ProyectoERP_API_BL.Lists;
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


        //Get: api/Producto?cifProveedor={cifProveedor}
        public IEnumerable<clsProductoConPrecioYProveedor> Get(string cifProveedor)
        {
            List<clsProductoConPrecioYProveedor> listadoProductos = new List<clsProductoConPrecioYProveedor>() ;
            List<clsProveedorProducto> listProveedorProductos = new List<clsProveedorProducto>();
            clsProductoConPrecioYProveedor productoConPrecioYProveedor;
            clsProducto productoSimple;
            ClsListadosProductos_BL clsListadosProductos_BL = new ClsListadosProductos_BL();
            try
            {
                listProveedorProductos = clsListadosProductos_BL.getProductosDeUnProveedor(cifProveedor);

                for(int i = 0; i < listProveedorProductos.Count; i++)
                {
                    productoSimple = clsListadosProductos_BL.getProduct(listProveedorProductos[i].CodigoProducto);
                    if(productoSimple != null && productoSimple.Codigo != 0)
                    {
                        productoConPrecioYProveedor = new clsProductoConPrecioYProveedor
                            (productoSimple, listProveedorProductos[i].Precio, listProveedorProductos[i].CifProveedor);

                        listadoProductos.Add(productoConPrecioYProveedor);
                    }
                    
                }



            }
            catch (Exception e)
            {
                throw new HttpResponseException(HttpStatusCode.ServiceUnavailable);
            }

            if (listadoProductos == null || listadoProductos.Count == 0)
            {
                throw new HttpResponseException(HttpStatusCode.NoContent);
            }
            return listadoProductos;
        }


    }
}
