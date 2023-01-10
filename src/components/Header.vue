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
      <div class="burger-menu" @click="toggleMenu()" :class="{ 'open' : menu}">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
      </div>
      <div id="nav" class="nav">
        <router-link to="/">Home</router-link>
          <router-link to="/manga">Manga</router-link>
          <router-link to="/anime">Anime</router-link>
          <router-link to="/artists">Artists</router-link>
          <router-link to="/invest">Invest</router-link>
          <router-link to="/learn">Learn</router-link>

      </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data: function () {
        return {
            menu: 0,
        }
    },
    methods: {
        toggleMenu: function () {
            this.menu = !this.menu;
        }
    }
}
</script>

<style scoped>

</style>
