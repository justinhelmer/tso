<template>
    <li :class="$style.heroGridItem" v-on:mouseover="full = true" v-on:mouseout="full = false">
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
  }
</script>

<style module>
    @import './hero-grid-item.css';
</style>