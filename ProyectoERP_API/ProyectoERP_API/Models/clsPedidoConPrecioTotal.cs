using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoERP_API.Models
{
    public class clsPedidoConPrecioTotal
        : clsPedido
    {
        private double precioTotalPedido;
       
        private string nombreRazonSocialProveedor;

        public clsPedidoConPrecioTotal()
            : base()
        {
            this.precioTotalPedido = 0.0;
       
            this.nombreRazonSocialProveedor = "";
        }


        public clsPedidoConPrecioTotal(clsPedido pedido, 
            double precioTotalPedido, string nombreRazonSocial)
            : base(pedido.Codigo, pedido.Estado, pedido.FechaPedido, pedido.FechaRecepcion, pedido.CifProveedor)
        {
            this.precioTotalPedido = precioTotalPedido;
       
            this.nombreRazonSocialProveedor = nombreRazonSocial;
        }

        public double PrecioTotalPedido { get => precioTotalPedido; set => precioTotalPedido = value; }
       
        public string NombreRazonSocialProveedor { get => nombreRazonSocialProveedor; set => nombreRazonSocialProveedor = value; }
    }
}