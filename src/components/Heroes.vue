<template>
    <div id="items">
        <h1>Heroes</h1>
        <h2 v-for="hero in heroes">{{hero.name}}</h2>
    </div>
</template>

<script>
  export default {
    name: 'heroes',

    asyncData ({ store }) {
      return store.dispatch('fetch', {
        endpoint: 'v1/heroes'
      });
    },

    computed: {
      heroes () {
        return this.$store.state.items;
      }
    }
  }
</script>