<template>

  <div id="player" >
    <div class="player-small" :class="{ active: isActive }" >
       <!-- <button @click="playBack">Back</button> -->
       <div class="player-left">

       
       <div class="player-btns">
            <font-awesome-icon class="back-next-icon" icon="step-backward" @click="playBack" />
      
        <font-awesome-icon class="play-pause-icon" :icon="[ 'far', 'play-circle' ]" v-if="player == 'stop' " @click="playStart();"  />
        <font-awesome-icon class="play-pause-icon" :icon="[ 'far', 'pause-circle' ]" v-if="player == 'start'" @click="playStop();" />
      <!-- <button v-if="player == 'stop' " @click="playStart">start</button> 
      <button v-if="player == 'start'" @click="playStop">stop</button>
      
      <button @click="playNext">Next</button> -->
      <font-awesome-icon class="back-next-icon" icon="step-forward" @click="playNext" />
      </div>
      <h2><span v-if="player == 'start'">Halls of Rebirth - </span>{{ songList[playlistIndex].songTitel }}</h2>
       </div>
      
      <div v-if="player == 'start'" class="player-big">
        <p class="songlength">{{ songList[playlistIndex].duration }}</p>
        <div class="seeker">
            <input v-model="seekerInput" type="range" min="0" max="100" class="seekerInput" id="myRange">
        </div>

        
        <font-awesome-icon class="mute-unmute-icon" :icon="[ 'fas', 'volume-up' ]" v-if="mute == 'unmute' " @click="playMute" />
        <font-awesome-icon class="mute-unmute-icon" :icon="[ 'fas', 'volume-mute' ]" v-if="mute == 'mute' " @click="playUnmute" />
   
      <div class="volume-container">
        <input v-on:change="updateVolume" v-model="volumeInput" type="range" min="0" max="100" class="volumeInput" id="myRange" />
      </div>
      
    </div>
    <div v-if="player == 'start'" class="player-spotify">
        <h2>Listen on Spotify:</h2>
      <font-awesome-icon class="spotify" :icon="[ 'fab', 'spotify' ]" />
    </div>
    </div>
  </div>
  


  
</template>

<script>
// memory leak - when changing pages.
//
// import gsap from "gsap";
import { Howl, Howler } from "howler";

export default {
  name: "musicPlayer",
  data() {
    return {
      
      songList: [
        {
          id: 0,
          url: "01-BOGWIFE-VOIDCRUISER.wav",
          songTitel: "Voidcruiser",
          duration: "6:39",
        },
        {
          id: 1,
          url: "02-BOGWIFE-GUIDANCE.wav",
          songTitel: "Guidance",
          duration: "6:15",
        },
        {
          id: 2,
          url: "03-BOGWIFE-SEER.wav",
          songTitel: "Seer",
          duration: "6:05",
        },
        {
          id: 3,
          url: "04-BOGWIFE-ORBIT.wav",
          songTitel: "Orbit",
          duration: "11:54",
        },
        {
          id: 4,
          url: "05-BOGWIFE-ABYSS.wav",
          songTitel: "Abyss",
          duration: "6:34",
        },
      ],
        isActive: false,
      player: "stop",
      mute: "unmute",
      sound: null,
      sound2: null,
      sound3: null,
      sound4: null,
      sound5: null,

      playlist: [],
      playlistIndex: 0,

      volume: 0.5,
      volumeInput: 50,
      
    };
  },
  computed: {
    volumeControl: function () {
      return this.sound.volume(this.volumeInput);
    },
  },
  methods: {
     /* expands: function () {
          this.expand = !this.expand;
      }, */
    howlerInit: function () {
      // Setup the new Howls.

      // for each
      this.sound = new Howl({
        src: [require(`../assets/music/` + this.songList[0].url)],
      });

      this.sound2 = new Howl({
        src: [require(`../assets/music/` + this.songList[1].url)],
      });

      this.sound3 = new Howl({
        src: [require(`../assets/music/` + this.songList[2].url)],
      });

      this.sound4 = new Howl({
        src: [require(`../assets/music/` + this.songList[3].url)],
      });

      this.sound5 = new Howl({
        src: [require(`../assets/music/` + this.songList[4].url)],
      });
      // Laver playlisten af sange
      this.playlist = [
        this.sound,
        this.sound2,
        this.sound3,
        this.sound4,
        this.sound5,
      ];
      
      console.log(this.playlist);
      
      // Clear listener after first call.

      // Fires when the sound finishes playing.
      this.playlist[this.playlistIndex].on("end", function () {
        console.log("Finished!");
      });

      console.log("Should be playing now?");
      // Change global volume.
      Howler.volume(this.volumeInput / 100);
      
    },

    playStart() {
      this.player = "start";
      this.playlist[this.playlistIndex].volume(this.volumeInput / 100);
      this.playlist[this.playlistIndex].play();
      this.isActive = true;
      
    },
    playStop() {
      this.player = "stop";
      this.playlist[this.playlistIndex].pause();
      this.isActive = false;
    },
    playMute() {
      this.mute = "mute";
      this.playlist[this.playlistIndex].mute(true);
      console.log("mute");
    },
    playUnmute() {
      this.mute = "unmute";
      this.playlist[this.playlistIndex].mute(false);
      console.log("Unmute");
    },
    updateVolume() {
      console.log("updated Volume");
      this.playlist[this.playlistIndex].volume(this.volumeInput / 100);
    },
    playNext() {
      this.playlist[this.playlistIndex].stop();
      // if no more in list -> playlistIndex = 0
      if (this.playlistIndex >= 4) {
        this.playlistIndex = 0;
        this.songList[this.playlistIndex];
        this.playlist[this.playlistIndex].play();
        this.player = "start";
        
      } else {
        this.playlist[this.playlistIndex++];
        this.songList[this.playlistIndex];
        this.playlist[this.playlistIndex].play();
        this.player = "start";
        
      }
      
      console.log("next");
      console.log(this.playlistIndex);
    },
      playBack() {
      this.playlist[this.playlistIndex].stop();
      // if no more in list -> playlistIndex = 0
      if (this.playlistIndex >= 4) {
        this.playlistIndex = 0;
        this.songList[this.playlistIndex];
        this.playlist[this.playlistIndex].play();
        this.player = "start";
        
      } else {
        this.playlist[this.playlistIndex++];
        this.songList[this.playlistIndex];
        this.playlist[this.playlistIndex].play();
        this.player = "start";
        
      }
      
      console.log("next");
      console.log(this.playlistIndex);
    },
/* afspil specefikke sange
    play1() {
      this.playlist[0].play();
      console.log("sound1");
    },
    play2() {
      this.playlist[1].play();
      console.log("sound2");
    },
    play3() {
      this.playlist[2].play();
      console.log("sound3");
    },
    play4() {
      this.playlist[3].play();
      console.log("sound4");
    },
    play5() {
      this.playlist[4].play();
      console.log("sound5");
    },
    */
  },
  mounted() {
    //this.animationGSAP();
    this.howlerInit();
  },
};
</script>


<style scoped>


#player {
 display: flex;
flex-wrap: wrap;
height: 76px;
width: 100%;
color: #f5f5f5;
position: fixed;
bottom: 0;
left: 0;


}

.player-small {
  display: flex;
  flex-wrap: wrap;
 background-color: #0C0C0C;
  border: 1px solid #D03A3B;
  border-bottom: none;
}
.player-small .player-left {
    display: flex;
  flex-wrap: wrap;
}
.player-btns {
    display: flex;
  flex-wrap: wrap;
  width: 110px;
  margin: 0 8px;
  justify-content: space-between;
}

.back-next-icon {
font-size: 18px;
padding: 28px 0;
color: grey;
}

.play-pause-icon {
font-size: 44px;
color: #D03A3B;
padding: 16px 0;
}

.mute-unmute-icon {
font-size: 30px;
color: #f5f5f5;
padding: 22px 10px 0 0 ;
width: 34px;
}

.player-big {
  
  display: flex;
  flex-wrap: wrap;
  height: 76px;
  justify-content: space-evenly;
  
  
}

.player-spotify {
    display: flex;
  flex-wrap: wrap;
  height: 76px;
  justify-content: space-evenly;
}

.songlength {
    margin: 27px 5px 0 10px;
}

.seeker {
  
  width: 330px;
  margin-right: 20px;
  
}

.seeker .seekerInput {
padding: 32px 0;
  height: 6px;
  width: 330px;
  color: #2D2D2D;
  background-color: #2D2D2D;
  
}

.volumeInput {
    height: 6px;
    padding: 32px 0;
}


h2 {
    font-size: 18px;
    margin: 27px 25px 0 10px;
    
}



.spotify {
    font-size: 50px;
    padding: 12px 50px 0 0;
    color: #1DB954;
}



button {
  border: none;
  border-radius: none;
  width: auto;
  height: auto;
  margin: 0;
  background-color: none;
  color: none;
  font-size: 20px;
}



#volume {
  position: absolute;
  left: 24px;
  margin: 0 auto;
  height: 5px;
  width: 300px;
  background: #555;
  border-radius: 15px;
}

.active {
    width: 100%;
    justify-content: space-between;
    
}

</style>
