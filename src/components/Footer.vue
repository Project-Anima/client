<template>
    <div class="footer">

        <div class="row footer-container">
            <div class="column">
                <div class="footerlogo">
                    <router-link to="/">
                        <img alt="Logo" src="../assets/images/footer-logo.png">
                    </router-link>
                </div>
            </div>
            <div class="column">
                <div class="title-links"> <p>Navigation</p> </div>
                <router-link to="/"> <p>Home</p> </router-link>
                <router-link to="/manga"><p>Browse Manga</p></router-link>
                <router-link to="/anime"><p>Browse Anime</p></router-link>
                <router-link to="/artists"><p>Browse Artists</p></router-link>
                <router-link to="/studios"><p>Browse Studios</p></router-link>
                <router-link to="/invest"><p>Invest in Manga</p></router-link>
                <router-link to="/learn"><p>Learn More</p></router-link>

            </div>
            <div class="column">
                <div class="title-links"><p>Connect With Us</p></div>
                <a href="javascript:void(0);"><p><img class="icon" alt="Logo" src="../assets/images/reddit.png">Reddit</p></a>
                <a href="javascript:void(0);"><p><img class="icon" alt="Logo" src="../assets/images/youtube.png">Youtube</p></a>
                <a href="javascript:void(0);"> <p><img class="icon" alt="Logo" src="../assets/images/icon-message.png">Email</p></a>
                <a href="javascript:void(0);"> <p><img class="icon" alt="Logo" src="../assets/images/icon-twitter.png">Twitter</p></a>
                <a href="javascript:void(0);"> <p><img class="icon" alt="Logo" src="../assets/images/icon-discord.png">Discord</p></a>
            </div>
            <div class="column">
                <div class="title-links"><p>Anima</p></div>
                <a href="javascript:void(0);"><p>About</p></a>
                <a href="https://63c44c14317d270008884a94--anima-guide.netlify.app/"><p>Guide/FAQ</p></a>
                <a href="javascript:void(0);"><p>Press Inquiries</p></a>
                <a href="javascript:void(0);"><p>Jobs</p></a>
            </div>
            <div class="column">
                <div class="title-links"><p>Account</p></div>
                <a href="javascript:void(0);"><p>Following</p></a>
                <a href="javascript:void(0);"><p>Tokens</p></a>
                <a href="javascript:void(0);"><p>Bookmarked</p></a>
                <a href="javascript:void(0);"><p>Log Out</p></a>
            </div>
        </div>
        <div class="bottomfooter">
             <img alt="appstore" src="../assets/images/appstore.png">
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