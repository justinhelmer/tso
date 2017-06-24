<template>
    <div id="items">
        <h1>Heroes</h1>
        <ul :class= "$style.heroess">
            <li v-for="hero in heroes" v-on:mouseover="onMouseOver(hero)">
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
         return this.$store.state.heroes.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) //sort string ascending
               return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase())
               return 1;
            return 0;
         });
      }
    },

     methods: {
        onMouseOver: (evt) => {
           console.log(evt);
           console.log('On MOUSE OVER!!');
        }
     },

  }
</script>

<style module>
    ul.heroess {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        & li a {
            display: block;

            & img{
              max-width: 200px;
            }
        }
    }
</style>