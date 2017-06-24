<template>
    <div id="app">
        <header>
            <router-link :to="{ name: 'home' }">
                <img src="/public/logo.png" :class="$style.logo">
            </router-link>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
  const config = require('../config');

  export default {
    name: 'app',
    data () {
      return {
        title: config.template.title
      }
    }
  }
</script>

<style>
    @import './css/global/app.css';
</style>

<style module>
    .logo {  max-width: 320px;  width: 100%;  }
</style>

