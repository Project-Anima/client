<template>
  <div class="footer">
      <div class="content-footer">
        <div class="links">
            <div class="wrapper-logo">
                <router-link class="logo" to="/">
                    <img alt="Logo" src="../assets/images/logo.png">
                </router-link>
            </div>
            <div class="wrapper-links">
                <div class="first-line-links">
                    <span class="title-links">
                       Anima
                    </span>
                    <router-link to="/">Home</router-link>
                    <router-link to="/manga">Manga</router-link>
                    <router-link to="/anime">Anime</router-link>
                    <router-link to="/artists">Artists</router-link>
                    <router-link to="/invest">Invest</router-link>
                    <router-link to="/learn">Learn</router-link>
                </div>
            </div>

        </div>
      <div class="social-links">
          <a href="javascript:void(0);">
              <img alt="Logo" src="../assets/images/icon-discord.png">
          </a>
          <a href="javascript:void(0);">
              <img alt="Logo" src="../assets/images/icon-message.png">
          </a>
          <a href="javascript:void(0);">
              <img alt="Logo" src="../assets/images/icon-twitter.png">
          </a>
          <a href="javascript:void(0);">
              <img alt="Logo" src="../assets/images/icon-telegram.png">
          </a>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {

  }
}
</script>