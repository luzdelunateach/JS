<template>
  <div>
    <input v-model="firstName" placeholder="First name" />
    <input v-model="lastName" placeholder="Last name" />
    <br />
    <h3>{{ fullName }}</h3>
    <br />
    <h4>{{ `${this.firstName} ${this.lastName}` }}</h4>
    <div class="container">
      <input type="number" v-model="incrementOne" />
      <h3>Get input: {{ incrementOne }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      count: -1
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    incrementOne: {
      // getter
      get() {
          console.log(`$Regresando el valor: ${this.count+1}`)
        return this.count + 1;
      },
      // setter
      set(val) {
        this.count = val - 1;
      },
    },
  },
};
</script>
<style scoped>
</style>
