using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoERP_API.Models
{
    public class clsPedidoConPrecioTotalYProveedor
        : clsPedido
    {
        private double precioTotalPedido;
        private string cifProveedor;
        private string nombreRazonSocialProveedor;

        public clsPedidoConPrecioTotalYProveedor()
            : base()
        {
            this.precioTotalPedido = 0.0;
            this.cifProveedor = "";
            this.nombreRazonSocialProveedor = "";
        }


        public clsPedidoConPrecioTotalYProveedor(clsPedido pedido, 
            double precioTotalPedido, string cifProveedor, string nombreRazonSocial)
            : base(pedido.Codigo, pedido.Estado, pedido.FechaPedido, pedido.FechaRecepcion)
        {
            this.precioTotalPedido = precioTotalPedido;
            this.cifProveedor = cifProveedor;
            this.nombreRazonSocialProveedor = nombreRazonSocial;
        }

        public double PrecioTotalPedido { get => precioTotalPedido; set => precioTotalPedido = value; }
        public string CifProveedor { get => cifProveedor; set => cifProveedor = value; }
        public string NombreRazonSocialProveedor { get => nombreRazonSocialProveedor; set => nombreRazonSocialProveedor = value; }
    }
}