<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <MessageFeed :messages="messages" />
    <MessageEditor @send="onSend($event)" />
    <DemoEventos @TriggerNotification="respuestaEvento" />
    <CountableDemo />

    <FilterDemo :dato="lorem | ellipsis" />
    <SlottedComponent>
      <h3>Esto es un slot</h3>
      <button class="btn btn-success">Hola</button>
    </SlottedComponent>
    <RepeatDemo :config="{ times: 6, content: 'Hello kitty' }" />
    <GreetingDemo :greeting="greeting" :who="who" />
    <button class="btn btn-success" @click="newGreeting()">New Greeting</button>
    <BindingDemo :dato1="input1" v-bind:dato2="input2" dato3="789" />
    <DemoAxiosVue />
    <SearchComponentVue />
    <DemoWatcherVue />
    <EjemplosDataVue />
    <CarritoDeComprasVue />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Matematico :num1="4" :num2="10" :operacion="'+'" />
    <!--<Matematico :num1="400" :num2="100" :operacion="'-'"/>
    <Matematico :num1="250" :num2="500" :operacion="'*'"/>
    <Matematico :num1="300" :num2="60" :operacion="'/'"/>-->
    <PugTest />
    <CuentaCaracteresVue />
    <EjemploDirectivasVue />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Matematico from "./components/Matematico-Test.vue";
import PugTest from "./components/Pug-Test.vue";
import CuentaCaracteresVue from "./components/Cuenta-Caracteres.vue";
import EjemploDirectivasVue from "./components/Ejemplo-Directivas.vue";
import CarritoDeComprasVue from "./components/Carrito-De-Compras.vue";
import EjemplosDataVue from "./components/Ejemplos-Data.vue";
import DemoWatcherVue from "./components/Demo-Watcher.vue";
import DemoWatcher from "./components/Demo-Watcher.vue";
import SearchComponentVue from "./components/Search-Component.vue";
import DemoAxiosVue from "./components/Demo-Axios.vue";
import BindingDemo from "./components/Binding-demo.vue";
import GreetingDemo from "./components/Greeting-Demo.vue";
import RepeatDemo from "./components/Repeat-Demo.vue";
import SlottedComponent from "./components/Slotted-Component.vue";
import CardExample from "./components/Card-Example.vue";
import FilterDemo from "./components/Filter-demo.vue";
import CountableDemo from "./components/Countable-demo.vue";
import {ellipsis} from "../src/utils/filters.js";
import DemoEventos from "./components/Demo-Eventos.vue";
import MessageEditor from "./components/Message-Editor.vue";
import MessageFeed from "./components/Message-Feed.vue";

const possibleGreetings = [
  { greeting: "Hello", who: "Vue.js" },
  { greeting: "Hey", who: "Everyone" },
  { greeting: "Hi", who: "JavaScript" },
];
export default {
  name: "App",
  filters: {
    ellipsis
  },
  data() {
    return {
      input1: "123",
      input2: "456",
      input3: "456",
      currentIndex: 0,
      lorem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      messages: [] 
    };
  },
  computed: {
    currentGreeting() {
      let x = ellipsis("test");
      console.log(x);
      return possibleGreetings[this.currentIndex];
    },
    greeting() {
      return this.currentGreeting.greeting;
    },
    who() {
      return this.currentGreeting.who;
    },
  },
  methods: {
    newGreeting() {
      this.currentIndex =
        this.currentIndex === possibleGreetings.length - 1
          ? 0
          : this.currentIndex + 1;
    },
    respuestaEvento($g){
      alert("Click"+$g);
      console.log($g)
    },
    onSend(message) {
      this.messages = [...this.messages, message]
    }
  },
  components: {
    HelloWorld,
    Matematico,
    PugTest,
    CuentaCaracteresVue,
    EjemploDirectivasVue,
    CarritoDeComprasVue,
    EjemplosDataVue,
    DemoWatcherVue,
    DemoWatcher,
    SearchComponentVue,
    DemoAxiosVue,
    BindingDemo,
    GreetingDemo,
    RepeatDemo,
    SlottedComponent,
    CardExample,
    FilterDemo,
    CountableDemo,
    DemoEventos,
    MessageEditor,
    MessageFeed
},
};
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
