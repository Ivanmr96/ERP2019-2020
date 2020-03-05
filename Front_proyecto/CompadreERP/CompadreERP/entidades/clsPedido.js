class clsPedido 
{
    constructor(codigo, estado, fechaPedido, fechaRecepcion, lineasDePedido, cifProveedor, precioTotal, nombreRazonSocial)
    {
        this.Codigo = codigo;
        this.Estado = estado;
        this.FechaPedido = fechaPedido;
        this.FechaRecepcion = fechaRecepcion;
        this.CifProveedor = cifProveedor;
        this.LineasDePedido = [];
        this.PrecioTotal = precioTotal;
        this.NombreRazonSocial = this.nombreRazonSocial;
    }
}