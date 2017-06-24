<template>
    <div>{{hero.name}}</div>
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

//    methods: {
//      onMouseOver: (evt) => {
//        console.log(evt);
//        console.log('On MOUSE OVER!!');
//      }
//    },

  }
</script>
