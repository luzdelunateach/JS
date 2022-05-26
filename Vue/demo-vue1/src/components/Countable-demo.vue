<template>
  <div>
    <textarea ref="textArea" cols="50" rows="7"></textarea>
    <ul v-if="count">
      <li>Paragraphs: {{ count.paragraphs }}</li>
      <li>Sentences: {{ count.sentences }}</li>
      <li>Words: {{ count.words }}</li>
      <li>Character: {{count.characters}}</li>
    </ul>
  </div>
</template>
<script>
import * as Countable from "countable";
export default {
  mounted() {
    Countable.on(this.$refs.textArea, (count) => {
      this.count = count;
    });
    /*this.$once("hook:beforeDestroy", function () {
      Countable.off(this.$refs.textArea);
    });*/
  },
  data() {
    return {
      count: null,
    };
  },
  beforeDestroy(){
      Countable.off(this.$refs.textArea); //Desubscribirse al elemento, es buena practica cuando ya no se este utilizando el contable
  }
};
</script>