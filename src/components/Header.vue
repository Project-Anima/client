<template>
  <div class="header">

      <nav>
      <div class="logo-wrapper">
          <router-link class="logo" to="/">
              <img alt="Logo" src="../assets/images/logo.png">
              <div class="name">
                  Anima
              </div>
          </router-link>
      </div>
        <div class="menu-item">
            <router-link to="/manga">
                <p>Manga</p>
            </router-link>
        </div>
        <div class="menu-item">
            <router-link to="/anime">
                <p>Anime</p>
            </router-link>
        </div>
        <Dropdown title="Learn" :items="actors" />
      </nav>
  </div>
</template>

<script>
import Dropdown from './Dropdown';

export default {
    name: 'Header',
    components: {
        Dropdown
    },
    data: function () {
        return {
            actors: [
        {
          title: 'Artists',
          link: 'artists'
        },
        {
          title: 'Animation Studios',
          link:'studios'
        },
        {
          title: 'Investors',
          link: 'investors'
        }
      ]
        }
    },
    methods: {
        toggleMenu: function () {
            this.menu = !this.menu;
        }
    }
}
</script>


<style>
    nav {
    display: flex;
    align-items: center;
    justify-content: center;
    }
    nav .menu-item {
    color: #FFF;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
    }
    nav .menu-item.active,
    nav .menu-item:hover {
        color: #F47521;
    }
    nav .menu-item a {
    color: inherit;
    text-decoration: none;
    }
    
</style>
