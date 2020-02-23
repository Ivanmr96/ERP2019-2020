using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoERP_API.Models
{
    public class clsProductoConPrecioYProveedor 
        : clsProducto
    {
        private double precio;
        private string cifProveedor;

       


        public clsProductoConPrecioYProveedor()
            : base()
        {
            this.precio = 0;
            this.cifProveedor = "";
        }


        public clsProductoConPrecioYProveedor(clsProducto producto, double precio, string cifProveedor)
            :base(producto.Codigo, producto.Nombre, producto.Descripcion, producto.Stock)
        {
            this.precio = precio;
            this.cifProveedor = cifProveedor;
        }


        public double Precio { get => precio; set => precio = value; }
        public string CifProveedor { get => cifProveedor; set => cifProveedor = value; }


    }
}