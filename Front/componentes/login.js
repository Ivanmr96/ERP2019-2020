Vue.component('logincomponent', {

    template:
    `
    <div class="login">

    <div v-if="loggingIn" class="container-loading">
      <img src="/loading.gif" alt="Loading Icon">
    </div>
    <p v-if="loginError">{{ loginError }}</p>
    <p v-if="loginSuccessful">Login Successful</p>
    <form @submit.prevent="loginSubmit">
      <label id="erpText">ERP Compadre</label>
      <input type="email" placeholder="E-Mail" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
    </form>
    <div id="halfBottom">
    <input id="checkBoxRem" type="checkbox" v-model="remember">
    <label id="rememberTxt">Recuerdame</label>
    <a id="hyperlinkForget" href="forgotPass.vue">¿Olvidaste la contraseña?</a>
      <form>
    <button id="loginBut" v-on:click="$store.state.currentComponent = $store.state.components.pedidos">Login</button>
    <button id="registerBut" type="submit">Registrate</button>
      </form>
    </div>
<style scoped lang="scss">
    .login {
      background: whitesmoke;
      border: 1px solid deepskyblue;
      border-radius: 5px;
      padding: 1.5rem;
      width: 300px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      overflow: hidden;

      .container-loading 
      {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,.3);
        img 
        {
          width: 2rem;
          height: 2rem;
        }
      }
      form 
      {
        display: flex;
        flex-flow: column;

        *:not(:last-child) 
        {
          margin-bottom: 1rem;
        }
      }
      input {
        padding: .5rem;
      }
      #checkBoxRem{
        margin-top: 20px;
        font-size: 26px;
      }
      #hyperlinkForget{
        margin-left: 15px;
        font-size: 14px;
      }
      #loginBut {
        margin-top: 20px;
        padding: .5rem;
        background-color: deepskyblue;
        color: white;
        border: 1px solid gray;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          background-color: lightslategray;
        }
      }
      #registerBut {
        margin-top: 20px;
        padding: .5rem;
        background-color: lightgrey;
        color: deepskyblue;
        border: 1px solid gray;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          background-color: lightslategray;
        }
      }
      #rememberTxt{
        font-size: 15px;
      }
    }
  </style>

</div>
    `
})