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
    public class ClsListadosProductos_DAL
    {



        /// <summary>
        /// Nombre: getProduct(id)
        /// Comentario: Este método nos permite obtener un producto almacenado en la base de datos.
        /// Cabecera: public List<clsProducto> getProductList()
        /// </summary>
        /// <returns>Devuelve un list del tipo clsProducto</returns>
        public clsProducto getProduct(int codigoProducto)
        {
            
            SqlDataReader miLector = null;
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            clsProducto producto = new clsProducto();
            try
            {
                connection = clsMyConnection.getConnection();
                SqlCommand sqlCommand = new SqlCommand();

                sqlCommand.Parameters.AddWithValue("@codigoProducto", codigoProducto);
                sqlCommand.CommandText = "SELECT * FROM ERP_Productos WHERE Codigo = @codigoProducto";
                sqlCommand.Connection = connection;

                miLector = sqlCommand.ExecuteReader();

                if (miLector.HasRows)
                {
                    while (miLector.Read())
                    {
                        
                        producto.Codigo = ((int)miLector["Codigo"]);
                        producto.Nombre = (string)miLector["Nombre"];
                        producto.Descripcion = (miLector["Descripcion"] is DBNull) ? "DEFAULT" : (string)miLector["Descripcion"];
                        producto.Stock = (int)miLector["Stock"];

                        
                    }
                }
            }
            catch (Exception e)
            {
                throw e;//Aquí podriamos pasar la excepción para que en caso de error el front muestre una alerta de error
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

            return producto;
        }




        /// <summary>
        /// Nombre: getProductList
        /// Comentario: Este método nos permite obtener un listado de los productos almacenados en la base de datos.
        /// Cabecera: public List<clsProducto> getProductList()
        /// </summary>
        /// <returns>Devuelve un list del tipo clsProducto</returns>
        public List<clsProducto> getProductList()
        {
            List<clsProducto> listadoProductos = new List<clsProducto>();
            SqlDataReader miLector = null;
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            clsProducto producto;
            try
            {
                connection = clsMyConnection.getConnection();
                SqlCommand sqlCommand = new SqlCommand();

                sqlCommand.CommandText = "SELECT * FROM ERP_Productos";
                sqlCommand.Connection = connection;

                miLector = sqlCommand.ExecuteReader();

                if (miLector.HasRows)
                {
                    while (miLector.Read())
                    {
                        producto = new clsProducto();//Yo crearía un constructor por defecto para ClsProducto
                        producto.Codigo = ((int)miLector["Codigo"]);
                        producto.Nombre = (string)miLector["Nombre"];
                        producto.Descripcion = (miLector["Descripcion"] is DBNull) ? "DEFAULT" : (string)miLector["Descripcion"];
                        producto.Stock = (int)miLector["Stock"];

                        listadoProductos.Add(producto);
                    }
                }
            }
            catch (Exception e)
            {
                throw e;//Aquí podriamos pasar la excepción para que en caso de error el front muestre una alerta de error
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

            return listadoProductos;
        }



        /// <summary>
        /// Nombre: getProductosDeUnProveedor
        /// Comentario: Este método nos permite obtener un listado de los productos de un proveedor almacenados en la base de datos.
        /// Cabecera: public List<clsProveedorProducto> getProductosDeUnProveedor(string cifProveedor)
        /// </summary>
        /// <returns>Devuelve un list del tipo clsProducto</returns>
        public List<clsProveedorProducto> getProductosDeUnProveedor(string cifProveedor)
        {
            List<clsProveedorProducto> listadoProveedorProductos = new List<clsProveedorProducto>();
            SqlDataReader miLector = null;
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = null;
            clsProveedorProducto productoProv;
            try
            {
                connection = clsMyConnection.getConnection();
                SqlCommand sqlCommand = new SqlCommand();

                sqlCommand.Parameters.AddWithValue("@cifProveedor", cifProveedor);
                sqlCommand.CommandText = "SELECT * FROM ERP_ProveedoresProductos WHERE CIFProveedor = @cifProveedor";
                sqlCommand.Connection = connection;

                miLector = sqlCommand.ExecuteReader();

                if (miLector.HasRows)
                {
                    while (miLector.Read())
                    {
                        productoProv = new clsProveedorProducto();
                        productoProv.CifProveedor = ((string)miLector["CIFProveedor"]);
                        productoProv.CodigoProducto = (int)miLector["CodigoProducto"];
                        productoProv.Precio = ( miLector["Precio"] is DBNull) ? 0.0 : (double)(decimal)miLector["Precio"];
                        productoProv.Divisa = (string)miLector["Divisa"];

                        listadoProveedorProductos.Add(productoProv);
                    }
                }
            }
            catch (Exception e)
            {
                throw e;//Aquí podriamos pasar la excepción para que en caso de error el front muestre una alerta de error
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

            return listadoProveedorProductos;
        }

    }
}
