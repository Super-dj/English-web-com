<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/FTHelloWorld.vue";

export default {
  name: "FTHome",
  components: {
    HelloWorld
  }
};
</script>
