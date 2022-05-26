<template lang="html">
<div>
  <div class="hello">Mi primer Componente {{ msg }}</div>
    <CardExampleVue>
      <template v-slot:image>
        <img src="https://picsum.photos/id/1015/300" />
      </template>
      <template #title>
        <h2>My Holiday picture</h2>
      </template>
      <template v-slot:description>
        <p class="text-primary">Here I can describe the contents of the picture.</p>
        <p>For example what we can see in the photo is a nice landscape.</p>
      </template>
    </CardExampleVue>
</div>
</template>

<script>
import CardExampleVue from './Card-Example.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    CardExampleVue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
