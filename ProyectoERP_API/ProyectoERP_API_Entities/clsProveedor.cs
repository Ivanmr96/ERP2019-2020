using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoERP_API_Entities
{
    public class clsProveedor
    {
        #region"Atributos privados"
        private string cif;
        private string nombreRazonSocial;
        private string direccion;
        private string telefono;
        private string email;

        #endregion

        #region"Constructores"
        public clsProveedor()
        {
            this.cif = "";
            this.nombreRazonSocial = "";
            this.direccion = "";
            this.telefono = "";
            this.email = "";
        }

        public clsProveedor(string cif, string nombreRazonSocial, string direccion, string telefono, string email)
        {
            this.cif = cif;
            this.nombreRazonSocial = nombreRazonSocial;
            this.direccion = direccion;
            this.telefono = telefono;
            this.email = email;
        }
        #endregion

        #region"Propiedades públicas"
        public string Cif { get => cif; set => cif = value; }
        public string NombreRazonSocial { get => nombreRazonSocial; set => nombreRazonSocial = value; }
        public string Direccion { get => direccion; set => direccion = value; }
        public string Telefono { get => telefono; set => telefono = value; }
        public string Email { get => email; set => email = value; }
        #endregion
    }
}
