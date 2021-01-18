<template>
  <div id="footer">
      <div class="footer-container">
          <div class="footer-content">
              <p>All rights reserved Bogwife 2021</p>
              <div class="footerIcons">
                    <a href="https://www.facebook.com/Bogwife/" target="_blank" alt="Bogwife Facebook page"><font-awesome-icon :icon="[ 'fab', 'facebook' ]" class="soMeIcon" /></a>
                    <a href="https://www.instagram.com/bogwifeband/" target="_blank" alt="Bogwife Instagram page">
                        <font-awesome-icon :icon="[ 'fab', 'instagram' ]" class="soMeIcon" />
                        
                    </a>
                    <a href="https://www.youtube.com/channel/UCSy4HT0xHmMRRUL0339HJgA" target="_blank" alt="Bogwife Youtube Channel">
                        <font-awesome-icon :icon="[ 'fab', 'youtube' ]" class="soMeIcon" />
                        
                    </a>
                    <a href="https://open.spotify.com/artist/28NHn1GKLZn3IryyzSDDJl?si=39lS3Ib-TQ6QB6WrMckXQA" target="_blank" alt="Bogwife Spotify page">
                        <font-awesome-icon :icon="[ 'fab', 'spotify' ]" class="soMeIcon" />
                        
                    </a>
              </div>
              <p>Website by Group 5 MMDA 2021</p>

          </div>
          <div class="player-room"></div>

      </div>
  </div>
</template>

<script>
export default {
    name: "footerComp",


}
</script>

<style>

#footer {
    height: 200px;
    width: 100%;
    background-color: #0C0C0C;
}

#footer .footer-container {
    height: 60px;
    width: 100%;
    background-color: #f5f5f5;
    position: relative;
    bottom: -140px;
    left: 0;
}

#footer .footer-container .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

#footer .footer-container .footer-content p {
    color: #0C0C0C;
    padding: 20px 0;
    margin: 0;
}

#footer .footer-container .footer-content .footerIcons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    padding: 15px 0 0 0;
    font-size: 30px;
}

#footer .footer-container .footer-content .footerIcons a .soMeIcon {
    margin: 0 15px;
    color: #0C0C0C;
}

#footer .footer-container .footer-content .footerIcons a .soMeIcon:hover {
    color: #D03A3B;
}
.player-room {
    height: 80px;
    width: 100%;
    background-color: #f5f5f5;
}

@media screen and (max-width: 580px) {  
    .player-room {
    height: 0;
    
}
}

@media screen and (max-width: 810px) { 

#footer .footer-container .footer-content {
    display: block;
    background-color: #f5f5f5;

}

#footer .footer-container .footer-content p {
    width: 300px;
    margin: 0 auto;
    padding: 5px 0;
}
#footer .footer-container .footer-content .footerIcons {
    
    width: 300px;
    margin: 0 auto;
    padding: 5px 0 0 0;
    
}

}
</style>