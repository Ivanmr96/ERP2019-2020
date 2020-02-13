const BASE_URL = 'https://apierp.azurewebsites.net/api/'
const API_PEDIDO = 'pedido/'

function insertarPedido(pedidoConLineasDePedido, onResponse, onError) 
{
    var url = BASE_URL + API_PEDIDO

    app.$http.post(url).then(function(response)             //Realiza una petición get a la URL, con la función dentro del "then" indico que hay que hacer en caso de respuesta satisfactoria
    {
        //this.personas = response.body;
        onResponse(response)
    }, 
    function()
    {                                          //Aqui indica que hará en caso de error
        onError(2)
    }
    ,
    null);
}

function insertarLineaDePedido(lineaDePedido, onResponse, ) 
{
    var url = BASE_URL + API_PEDIDO

    app.$http.post(url).then(function(response)             //Realiza una petición get a la URL, con la función dentro del "then" indico que hay que hacer en caso de respuesta satisfactoria
    {
        //this.personas = response.body;
    }, 
    function()
    {                       

    });
}

function onError(numero)
{
    alert(numero);
}

insertarPedido(null, null, onError)

