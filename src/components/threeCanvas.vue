<template>
  <section id="ThreeMain">
    <div id="three">
      <h1 id="LandingPageHero">Front-end udvikler</h1>
    </div>
  </section>
</template>

<script>

// Libraries fra Three.js og Gsap.js --- Der er gjordt brug af kode fra deres documentations  ---

// import * as Three from "three";
// import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";

// import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";

// import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";
// import { HalftonePass } from "three/examples/jsm/postprocessing/HalftonePass.js";


// import { gsap } from "gsap";


export default {
    name: 'Three',
    data() {
    return {
     

    };
  },
methods: {
    renderThree: function () {
        // Set the three js scene here
    },
    animate: function () {
      // animate with gsap here
    },
  },
mounted() {
    this.renderThree();
    this.animate();
  },
}


</script>

<style scoped>
#three {
  height: 100vh;
  width: 100vw;
}

/* 
width: 100vw;
  min-height: 100vw;
  max-height: 100vh;
*/

canvas {
  display: block;
}

h1 {
  position: absolute;
  top: 2.4em;
  
  font-size: 7em;
  text-transform: uppercase;
  
  line-height: 0.8em;
  border: 2px solid black;
  color: rgba(255, 255, 255, 0.966);
  background-color: rgba(0, 0, 0, 0.699);
  padding: 0.2em;

  
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  width: 750px;
}

#LandingPageHero {
  cursor: pointer;
}

#LandingPageHero:hover {
  color: #ff8100;
}

@media screen and (max-width: 1500px) {
  #three {
    height: 60vw;
  }
}

@media screen and (max-width: 1100px) {
  #three {
    height: 60vw;
  }
}


</style>