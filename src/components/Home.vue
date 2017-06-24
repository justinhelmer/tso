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
    @value primary from '../css/colors.css';
    @value large as m-large from '../css/layout.css';
    @value large as t-large from '../css/typography.css';

    .menu {
        text-align: center;
        width: 100%;


        & li {
            display: inline-block;
            margin: 0 m-large 0 0;

            & a {
                color: primary;
                font-size: t-large;
                text-transform: uppercase;
            }
        }
    }
</style>