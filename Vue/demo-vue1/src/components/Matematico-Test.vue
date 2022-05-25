<template lang="html">
<div>
<p>
    {{ num1 }} {{ operacion }} {{ num2 }} es: {{resultado}}
  </p>
  <p>
    {{ mayusculas ? texto.toUpperCase(): texto}}
  </p>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <ul>
      <li>{{ items[0] }}</li>
      <li>{{ items[1] }}</li>
      <li>{{ items[2] }}</li>
    </ul>
  </div>
</div>
</template>

<style lang="scss">
  @import '../assets/styles/typography.scss';
</style>

<script>
export default {
  name: "Matematico",
  props: {
      num1: Number,
      num2: Number,
      operacion :String
  },
  data(){
    return {
      resultado: 0,
      texto: "texto de ejemplo",
      mayusculas: false,
      title: 'My list component!',
      subtitle: 'Vue JS basics',
      items: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  methods: {
    calculaOperacion: function(){
      switch(this.operacion){
        case '+':
          this.resultado = this.num1 + this.num2;
          break;
        case '-':
          this.resultado = this.num1 - this.num2;
          break;
        case '*':
          this.resultado = this.num1 * this.num2;
          break;
        case '/':
          this.resultado = this.num1 / this.num2;
          break;  
      }
    }
  },
  watch: {
    $props:{
      handler(){
        console.log("Realizando operacion...");
        this.calculaOperacion();
      },
      immediate:true
    }
  }
}
</script>