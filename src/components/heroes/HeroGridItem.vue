<template>
    <li v-on:mouseover="full = true" v-on:mouseout="full = false">
        <router-link :to="{name: 'hero', params: {id: hero.id}}">
            <img :src="hero.images.icon"/>
            <div v-if="!full" :class="$style.name">{{hero.name}}</div>
            <div v-if="full" :class="$style.overlay">{{hero.name}}!!!</div>
        </router-link>
    </li>
</template>

<script>


  export default {
    name: 'hero-grid-item',
    props: ['hero'],

    data () {
      return {
        full: false
      }
    },

//    computed: {
//      heroes () {
//        return this.$store.state.heroes.sort((a, b) => {
//          if (a.name.toLowerCase() < b.name.toLowerCase()) //sort string ascending
//            return -1;
//          if (a.name.toLowerCase() > b.name.toLowerCase())
//            return 1;
//          return 0;
//        });
//      }
//    },

    methods: {
      onMouseOver: (evt) => {
        console.log(evt);
        console.log('On MOUSE OVER!!');
      }
    },

  }
</script>

<style module>
    @import './heroes.css';
</style>