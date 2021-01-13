<template>
  <div id="footer">
      <div class="footer-container">
          <div class="footer-content">
              <p>All music rights reserved Bogwife 2020</p>
              <div class="footerIcons">
                    <font-awesome-icon :icon="[ 'fab', 'facebook' ]" class="soMeIcon" />
                    <font-awesome-icon :icon="[ 'fab', 'instagram' ]" class="soMeIcon" />
                    <font-awesome-icon :icon="[ 'fab', 'youtube' ]" class="soMeIcon" />
                    <font-awesome-icon :icon="[ 'fab', 'spotify' ]" class="soMeIcon" />
              </div>
              <p>Website by Group 5 MMDA 2020</p>

          </div>

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
}

#footer .footer-container .footer-content .footerIcons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    padding: 15px 0 0 0;
    font-size: 30px;
}

#footer .footer-container .footer-content .footerIcons .soMeIcon {
    margin: 0 15px;
}

@media screen and (max-width: 810px) { 

#footer .footer-container .footer-content {
    display: block;

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