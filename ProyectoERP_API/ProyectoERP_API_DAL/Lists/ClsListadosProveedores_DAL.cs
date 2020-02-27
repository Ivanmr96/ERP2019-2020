using ProyectoERP_API_Entities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProyectoERP_API_DAL.Connection;

namespace ProyectoERP_API_DAL.Lists
{
    public class ClsListadosProveedores_DAL
    {
        /// <summary>
        /// Nombre: getSupplierList
        /// Comentario: Este método nos permite obtener un listado de los proveedores almacenados en la base de datos.
        /// Cabecera: public List<clsProducto> getSupplierList()
        /// </summary>
        /// <returns>Devuelve un list del tipo clsProveedor</returns>
        public List<clsProveedor> getSupplierList()
        {
            List<clsProveedor> listadoProveedor = new List<clsProveedor>();
            SqlDataReader miLector = null;
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            clsProveedor proveedor;
            try
            {
                connection = clsMyConnection.getConnection();
                SqlCommand sqlCommand = new SqlCommand();

                sqlCommand.CommandText = "SELECT * FROM ERP_Proveedores";
                sqlCommand.Connection = connection;

                miLector = sqlCommand.ExecuteReader();

                if (miLector.HasRows)
                {
                    while (miLector.Read())
                    {
                        proveedor = new clsProveedor();//Yo crearía un constructor por defecto para clsProveedor
                        proveedor.Cif = (string)miLector["CIF"];
                        proveedor.NombreRazonSocial = (miLector["Nombre_RazonSocial"] is DBNull) ? "DEFAULT" : (string)miLector["Nombre_RazonSocial"];
                        proveedor.Direccion = (miLector["Direccion"] is DBNull) ? "DEFAULT" : (string)miLector["Direccion"];
                        proveedor.Telefono = (miLector["Telefono"] is DBNull) ? "000000000" : (string)miLector["Telefono"];
                        proveedor.Email = (miLector["Email"] is DBNull) ? "DEFAULT" : (string)miLector["Email"];

                        listadoProveedor.Add(proveedor);
                    }
                }
            }
            catch (Exception e)
            {
                throw e;//Aquí podríamos pasar la excepción para que en caso de error el front muestre una alerta de error
            }
            finally
            {
                if (miLector != null)
                {
                    miLector.Close();
                }
                if (clsMyConnection != null)
                {
                    clsMyConnection.closeConnection(ref connection);
                }
            }

            return listadoProveedor;
        }



        /// <summary>
        /// Nombre: getProveedor
        /// Comentario: Este método nos permite obtener un proveedor por id.
        /// Cabecera: public List<clsProveedor> getProveedor(string cifProveedor)
        /// </summary>
        /// <returns>Devuelve un list del tipo clsProveedor</returns>
        public clsProveedor getProveedor(string cifProveedor)
        {
            
            SqlDataReader miLector = null;
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            clsProveedor proveedor = null;
            try
            {
                connection = clsMyConnection.getConnection();
                SqlCommand sqlCommand = new SqlCommand();

                sqlCommand.Parameters.AddWithValue("@cifProveedor", cifProveedor);
                sqlCommand.CommandText = "SELECT * FROM ERP_Proveedores WHERE CIF = @cifProveedor";
                sqlCommand.Connection = connection;

                miLector = sqlCommand.ExecuteReader();

                if (miLector.HasRows)
                {
                    while (miLector.Read())
                    {
                        proveedor = new clsProveedor();//Yo crearía un constructor por defecto para clsProveedor
                        proveedor.Cif = (string)miLector["CIF"];
                        proveedor.NombreRazonSocial = (miLector["Nombre_RazonSocial"] is DBNull) ? "DEFAULT" : (string)miLector["Nombre_RazonSocial"];
                        proveedor.Direccion = (miLector["Direccion"] is DBNull) ? "DEFAULT" : (string)miLector["Direccion"];
                        proveedor.Telefono = (miLector["Telefono"] is DBNull) ? "000000000" : (string)miLector["Telefono"];
                        proveedor.Email = (miLector["Email"] is DBNull) ? "DEFAULT" : (string)miLector["Email"];

                    }
                }
            }
            catch (Exception e)
            {
                throw e;//Aquí podríamos pasar la excepción para que en caso de error el front muestre una alerta de error
            }
            finally
            {
                if (miLector != null)
                {
                    miLector.Close();
                }
                if (clsMyConnection != null)
                {
                    clsMyConnection.closeConnection(ref connection);
                }
            }

            return proveedor;
        }

    }
}
