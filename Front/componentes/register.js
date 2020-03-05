Vue.component('registercomponent', {

    data: function () {
      return{
        email:'',
        password:'',
        password2:'',
      }
    },
  
    methods:{

        /**
         * Comprueba que los campos no estan vacios y que las contraseñas coinciden.
         * Devuelve true si los campos no estan vacios y las contraseñas coinciden.
         * False si se incumple alguna de estas condiciones.
         */
        comprobarCampos:function(){
            var ret = true;
            //Si algun campo esta vacio
            if(email === "" || password === "" || password2 === ""){
                //TODO mostrar mensaje de error de campos vacios.
                ret = false;
            }else if(!password === password2){ //Si las contraseñas no coinciden
                //TODO mostrar mensaje de contraseñas no coinciden.
                ret = false;
            }

            return ret;
        },

        /**
        * Intenta registrar a un usuario en la base de datos.
        */
        registrar:function(){
            if(this.comprobarCampos()){
                firebase.auth().createUserWithEmailAndPassword(email, password).catch(function() {
                    //Cambiamos al componente de login
                    store.state.currentComponent = 'logincomponent';
                }, function(error){
                    alert("Error al registrar al usuario");
                });
            }
        }
        },
  
      template:
      `
      <div class="registerBody">
        <div class="template justify-content-center loginBox text-center">
            <form>
            <h3 class="tituloLogin" >REGISTRO</h3>
              <div class="form-group">
                <label for="exampleInputEmail1">E-mail</label>
                <input v-model="this.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduce e-mail">
                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Contraseña</label>
                <input v-model="this.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">

                <label for="exampleInputPassword2">Contraseña</label>
                <input v-model="this.password2" type="password" class="form-control" id="exampleInputPassword2" placeholder="Repetir contraseña">
              </div>
              <button type="button" v-on:click="registrar()" class="btn btn-primary">Registrar</button></form>
          </div>
        </div>
      `
  })