using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_Entities
{
    public class clsPedido
    {
        #region"Atributos privados"
        private int codigo;
        private string estado;
        private DateTime fechaPedido;
        private DateTime fechaRecepcion;
        private string cifProveedor;
        #endregion

        #region"Propiedades publicas"
        public int Codigo { get => codigo; set => codigo = value; }
        public string Estado { get => estado; set => estado = value; }
        public DateTime FechaPedido { get => fechaPedido; set => fechaPedido = value; }
        public DateTime FechaRecepcion { get => fechaRecepcion; set => fechaRecepcion = value; }
        public string CifProveedor { get => cifProveedor; set => cifProveedor = value; }

        #endregion


        #region"Constructor"
        public clsPedido(int codigo, string estado, DateTime fechaPedido, DateTime fechaRecepcion, string cifProveedor)
        {
            this.codigo = codigo;
            this.estado = estado;
            this.fechaPedido = fechaPedido;
            this.fechaRecepcion = fechaRecepcion;
            this.cifProveedor = cifProveedor;
        }

        public clsPedido()
        {
            this.codigo = 0;
            this.estado = "";
            this.fechaPedido = DateTime.Now;
            this.fechaRecepcion = new DateTime();
            this.cifProveedor = "";
        }

        #endregion



    }
}
