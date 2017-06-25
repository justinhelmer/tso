<template>
    <div id="items">
        <h1>Heroes</h1>
        <ul :class="$style.heroes">
            <hero-grid-item v-for="hero in heroes" :hero="hero" :key="hero.id"></hero-grid-item>
        </ul>
    </div>
</template>

<script>
  import HeroGridItem from './HeroGridItem.vue';

  export default {
    name: 'heroes',
    components: { HeroGridItem },

    asyncData ({ store }) {
      return store.dispatch('fetch', {
        store: 'heroes',
        endpoint: 'v1/heroes'
      });
    },

    computed: {
      heroes () {
        return this.$store.state.heroes.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) //sort string ascending
            return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase())
            return 1;
          return 0;
        });
      }
    }
  }
</script>

<style module>
    ul.heroes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>