
window.onload = inicializa;
const BASE_URL = 'https://apierp.azurewebsites.net/api/'
//const BASE_URL = 'http://localhost:60883/api/'

const API_PEDIDO = 'Pedidos/'




function inicializa() {
    obtenerPedidos(onResponse, onError);
}

//function insertarPedido(pedidoConLineasDePedido, onResponse, onError) 
//{
//    var url = BASE_URL + API_PEDIDO

//    app.$http.post(url).then(function(response)             //Realiza una petición get a la URL, con la función dentro del "then" indico que hay que hacer en caso de respuesta satisfactoria
//    {
//        //this.personas = response.body;
//        onResponse(response)
//    }, 
//    function()
//    {                                          //Aqui indica que hará en caso de error
//        onError(2)
//    }
//    ,
//    null);
//}

//function insertarLineaDePedido(lineaDePedido, onResponse, ) 
//{
//    var url = BASE_URL + API_PEDIDO

//    app.$http.post(url).then(function(response)             //Realiza una petición get a la URL, con la función dentro del "then" indico que hay que hacer en caso de respuesta satisfactoria
//    {
//        //this.personas = response.body;
//    }, 
//    function()
//    {                       

//    });
//}

function onError(numero)
{
    alert(numero);
}

function onResponse(numero) {
    alert(numero);
}

//insertarPedido(null, null, onError)



function obtenerPedidos(onResponse, onError) {
    var url = BASE_URL + API_PEDIDO

    app.$http.get(url).then(

        function (response)             //Realiza una petición get a la URL, con la función dentro del "then" indico que hay que hacer en caso de respuesta satisfactoria
    {
        onResponse("No falla")
    },
        function () {                                          //Aqui indica que hará en caso de error
            onError("Fallo")
        }
        ,
        null);
}
