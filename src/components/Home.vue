<template>
    <div id="home">
        <h1>Welcome</h1>
        <ul :class="$style.menu">
            <li>
                <router-link :to="{name: 'heroes'}">Heroes</router-link>
            </li>
            <li>
                <router-link :to="{name: 'cards'}">Cards</router-link>
            </li>
            <!--<li><router-link :to="{name: 'players'}">Players</router-link></li>-->
            <!--<li><router-link :to="{name: 'teams'}">Teams</router-link></li>-->
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style module>
    @value large as t-large from '../css/typography.css';

    .menu {
        @mixin inline;

        & li a {
            font-size: t-large;
            text-transform: uppercase;
        }
    }
</style>