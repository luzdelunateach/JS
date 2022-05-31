<template>
  <div id="app">
    <AppHeader />
    <div class="flex flex-col md:flex-row">
      <AppProfileForm @submit="update($event)"/>
      <AppProfileDisplay :form-data="formData"/>
    </div>
  </div>
</template>

<script>
import AppProfileDisplay from "./components/App-Profile-Display.vue";
import AppHeader from "./components/App-Header.vue";
import AppProfileForm from "./components/App-Profile-Form.vue";

export default {
  name: "App",
  data() {
    return {
      formData: {}
    }
  },
  methods: {
    update(formData) {
      console.log(formData);
      this.formData = formData;
    },
  },
  components: {
    AppHeader,
    AppProfileDisplay,
    AppProfileForm,
  },
};
</script>

<style>
</style>
