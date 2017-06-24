<template>
    <div id="items">
        <h1>Cards</h1>
        <h2 v-for="card in cards">{{card.name}}</h2>
    </div>
</template>

<script>
  export default {
    name: 'cards',

    asyncData ({ store }) {
      return store.dispatch('fetch', {
        endpoint: 'v1/cards'
      });
    },

    computed: {
      cards () {
        return this.$store.state.items;
      }
    }
  }
</script>