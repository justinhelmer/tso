<template>
    <div id="app">
        <header>
            <router-link :to="{ name: 'home' }" :class="$style.title">{{ title }}</router-link>
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
    @value white from './css/colors.css';
    @value xl as t-xl from './css/typography.css';

    .title {
        color: white;
        font-size: t-xl;
        text-decoration: none;
    }
</style>

