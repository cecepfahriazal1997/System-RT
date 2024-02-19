<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="page">
    <header>
      <NavBar v-if="$route.meta.navbar"></NavBar>
    </header>
    <router-view></router-view>
    <Footer v-if="$route.meta.footer"></Footer>
  </div>
</template>

<script>
export default {
  mounted() {
  }
}
</script>