using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_Entities
{
   public class clsProducto
    {
        #region"Atributos privados"
        private int codigo;
        private string nombre;
        private string descripcion;
        private int stock;


        #endregion

        #region"Constructores"
        public clsProducto()
        {
            this.codigo = 0;
            this.nombre = "";
            this.descripcion = "";
            this.stock = 0;
        }

        public clsProducto(int codigo, string nombre, string descripcion, int stock)
        {
            this.codigo = codigo;
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.stock = stock;
        }
        #endregion

        #region"Propiedades públicas"
        public int Codigo { get => codigo; set => codigo = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Descripcion { get => descripcion; set => descripcion = value; }
        public int Stock { get => stock; set => stock = value; }
        #endregion
    }
}
