<template>
  <div id="app">
    <AppHeader />
    <div class="flex flex-col md:flex-row">
      <AppProfileForm />
      <AppProfileDisplay />
    </div>
  </div>
</template>

<script>
import AppProfileDisplay from "./components/App-Profile-Display.vue";
import AppHeader from "./components/App-Header.vue";
import AppProfileForm from "./components/App-Profile-Form.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppProfileDisplay,
    AppProfileForm,
  },
};
</script>

<style>
</style>
