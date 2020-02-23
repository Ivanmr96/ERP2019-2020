using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_Entities
{
    public class clsProveedorProducto
    {
        #region"Atributos privados"
        private string cifProveedor;
        private int codigoProducto;
        private double precio;
        private string divisa;


        #endregion

        #region"Constructor"
        public clsProveedorProducto(string cifProveedor, int codigoProducto, double precio, string divisa)
        {
            this.cifProveedor = cifProveedor;
            this.codigoProducto = codigoProducto;
            this.precio = precio;
            this.divisa = divisa;
        }

        public clsProveedorProducto()
        {
            this.cifProveedor = "";
            this.codigoProducto = 0;
            this.precio = 0.0;
            this.divisa = "";

        }

        #endregion

        #region"Propiedades públicas"
        public string CifProveedor { get => cifProveedor; set => cifProveedor = value; }
        public int CodigoProducto { get => codigoProducto; set => codigoProducto = value; }
        public double Precio { get => precio; set => precio = value; }
        public string Divisa { get => divisa; set => divisa = value; }
        #endregion
    }
}
