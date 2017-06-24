<template>
    <div id="items">
        <h1>{{hero.name}}</h1>
    </div>
</template>

<script>
  export default {
    name: 'hero',
    asyncData ({ store, route }) {
      return store.dispatch('fetch', {
        store: 'heroes',
        endpoint: 'v1/hero',
        id: route.params.id
      });
    },
    computed: {
      hero () {
        return this.$store.getters.getItemById('heroes', this.$route.params.id);
      }
    }
  }
</script>