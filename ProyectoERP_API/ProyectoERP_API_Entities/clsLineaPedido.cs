using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_Entities
{
    public class clsLineaPedido
    {
        #region"Atributos privados"
        private int codigoProducto;
        private int codigoPedido;
        private int cantidad;
        private double precioUnitario;
        private string divisa;
        #endregion
        #region"Propiedades públicas"
        public int CodigoProducto { get => codigoProducto; set => codigoProducto = value; }
        public int CodigoPedido { get => codigoPedido; set => codigoPedido = value; }
        public int Cantidad { get => cantidad; set => cantidad = value; }
        public double PrecioUnitario { get => precioUnitario; set => precioUnitario = value; }
        public string Divisa { get => divisa; set => divisa = value; }


        #endregion


        #region"Constructores"
        public clsLineaPedido()
        {
            this.codigoProducto = 0;
            this.codigoPedido = 0;
            this.cantidad = 0;
            this.precioUnitario = 0.0;
            this.Divisa = "";
        }

        public clsLineaPedido(int codigoProducto, int codigoPedido, int cantidad, double precioUnitario, string divisa)
        {
            this.codigoProducto = codigoProducto;
            this.codigoPedido = codigoPedido;
            this.cantidad = cantidad;
            this.precioUnitario = precioUnitario;
            this.Divisa = divisa;
        }
        #endregion


    }
}
