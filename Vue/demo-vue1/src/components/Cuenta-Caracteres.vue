<template>
    <div>
        <label>Texto:</label>
        <input type="text"  @keyup="calculaCaracteres" v-model="input">
        <p class="title">Has escrito {{ cantidad }} caracteres</p>
    </div>
</template>
<script>
export default {
  mounted(){ // MOUNTED es para en cuanto se monte el elemento 
    this.calculaCaracteres();
  },
  data(){
    return {
      cantidad: 0,
      input: ""
    }
  },
  methods: {
    calculaCaracteres: function(){
      this.cantidad=this.input.length;
    }
  }
}
</script>
<style lang="scss">
.title {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #20bb8d;
    margin-top: 60px;
}
</style>