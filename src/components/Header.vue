<template>
  <div class="header">
      <div class="logo-wrapper">
          <router-link class="logo" to="/">
              <img alt="Logo" src="../assets/images/logo.png">
              <div class="name">
                  Anima
              </div>
          </router-link>
      </div>
      <nav>
        <div class="menu-item">
                <router-link to="/">
                    <p>Home</p>
                </router-link>
            </div>
            <div class="menu-item">
                <router-link to="/manga">
                    <p>Manga</p>
                </router-link>
            </div>
            <div class="menu-item">
                <router-link to="/manga">
                    <p>Anime</p>
                </router-link>
            </div>
          <Dropdown title="Production" :items="actors" />
          <div class="menu-item"><a href="learn">Learn</a></div>

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
          title: 'Mangaka',
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
