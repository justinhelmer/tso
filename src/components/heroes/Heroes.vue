<template>
    <div id="items">
        <h1>Heroes</h1>
        <ul :class= "$style.heroess">
            <li v-for="hero in heroes">
                <router-link :to="{name: 'hero', params: {id: hero.id}}">
                    <img :src="hero.images.icon"/>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'heroes',

    asyncData ({ store }) {
      return store.dispatch('fetch', {
        store: 'heroes',
        endpoint: 'v1/heroes'
      });
    },

    computed: {
      heroes () {
        return this.$store.state.heroes;
      }
    }
  }
</script>

<style module>
    ul.heroess {
        display: flex;
        margin: large;

        & li a {
            display: block;

            & img{
              max-width: 200px;
            }
        }
    }
</style>