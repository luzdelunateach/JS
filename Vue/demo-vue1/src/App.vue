<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <CarritoDeComprasVue/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Matematico :num1="4" :num2="10" :operacion="'+'"/>
   <!--<Matematico :num1="400" :num2="100" :operacion="'-'"/>
    <Matematico :num1="250" :num2="500" :operacion="'*'"/>
    <Matematico :num1="300" :num2="60" :operacion="'/'"/>-->
    <PugTest/>
    <CuentaCaracteresVue/>
    <EjemploDirectivasVue/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Matematico from './components/Matematico-Test.vue';
import PugTest from './components/Pug-Test.vue';
import CuentaCaracteresVue from './components/Cuenta-Caracteres.vue';
import EjemploDirectivasVue from './components/Ejemplo-Directivas.vue';
import CarritoDeComprasVue from './components/Carrito-De-Compras.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    Matematico,
    PugTest,
    CuentaCaracteresVue,
    EjemploDirectivasVue,
    CarritoDeComprasVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
