Vue.component('logincomponent', {

  data: function () {
    return{
      email:' ',
      password:''
    }
  },

  methods:{
    loguear:function(){
      firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        //Si se ha podido loguear cambiamos el componente
        store.state.currentComponent = 'menuprincipalcomponent';
        },function(error){ //En caso de error mostramos un mensaje.
          alert("Error al iniciar sesion.");
        },
      );
    }
  },

    template:
    `
    <div class="loginBody">
      <div class="template justify-content-center loginBox text-center">
          <form>
          <h3 class="tituloLogin" >ERP COMPADRE</h3>
            <div class="form-group">
              <label for="exampleInputEmail1">E-mail</label>
              <input v-model="this.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduce e-mail">
              <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input v-model="this.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
            </div>
            <!--
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label> 
            </div> -->
            <button type="button" v-on:click="loguear()" class="btn btn-primary">Entrar</button></form>
        </div>
      </div>
    `
})