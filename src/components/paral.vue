<template>
  <div>
    <div id="parallax-image">
      <div class="col-md-12 align-self-center">
        <audio v-bind:src="tone" ref="audio"></audio>
        <h1 class="style1">Indian Premier League: The Fan Festival Of India</h1>
        <h1 class="style2">Tap Below For A Suprise</h1>
        <img :src="icon" @click="ready" class="audioclass" />
      </div>
    </div>
    <div class="container">
      <p class="my_lines">
        The biggest cricket carnival is back to bring a big smile back in these
        hard times. Want to have a nostalgic recall for all those old (but gold
        😉) nail-biting matches? We have it all... Get all your stats here from
        toss details to the man of the match winners. We also have a Compare
        Team feature where you can track your favorite team's performance
        throughout the IPL season. So, without wait let's get the powerplay
        started.
      </p>
    </div>

    <div class="container">
      <div class="head2"><h1 class="head3">IPL Seasons</h1></div>
      <div class="row">
        <div class="col-md-3 car">
          <div
            class="card-counter primary"
            @click="
              change2017();
              shareData();
            "
          >
            <strong class="num">2017</strong>
            <span class="count-numbers">2017</span>
            <!-- <span class="count-name">Flowz</span> -->
          </div>
        </div>

        <div class="col-md-3">
          <div
            class="card-counter danger"
            @click="
              change2016();
              shareData();
            "
          >
            <strong class="num">2016</strong>
            <span class="count-numbers">2016</span>
            <!-- <span class="count-name">Flowz</span> -->
          </div>
        </div>

        <div class="col-md-3">
          <div
            class="card-counter success"
            @click="
              change2015();
              shareData();
            "
          >
            <strong class="num">2015</strong>
            <span class="count-numbers">2015</span>
            <!-- <span class="count-name">Flowz</span> -->
          </div>
        </div>

        <div class="col-md-3">
          <div
            class="card-counter info"
            @click="
              change2014();
              shareData();
            "
          >
            <strong class="num">2014</strong>
            <span class="count-numbers">2014</span>
            <!-- <span class="count-name">Flowz</span> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div
            class="card-counter primary"
            @click="
              change2013();
              shareData();
            "
          >
            <strong class="num">2013</strong>
            <span class="count-numbers">2013</span>
            <!-- <span class="count-name">Flowz</span> -->
          </div>
        </div>

        <div class="col-md-3">
          <div
            class="card-counter danger"
            @click="
              change2012();
              shareData();
            "
          >
            <strong class="num">2012</strong>
            <span class="count-numbers">2012</span>
            <!-- <span class="count-name">Flowz</span> -->
          </div>
        </div>

        <div class="col-md-3">
          <div
            class="card-counter success"
            @click="
              change2011();
              shareData();
            "
          >
            <strong class="num">2011</strong>
            <span class="count-numbers">2011</span>
            <!-- <span class="count-name">Flowz</span> -->
          </div>
        </div>

        <div class="col-md-3">
          <div
            class="card-counter info"
            @click="
              change2010();
              shareData();
            "
          >
            <strong class="num">2010</strong>
            <span class="count-numbers">2010</span>
            <!-- <span class="count-name">Flowz</span> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-3">
          <div
            class="card-counter danger"
            @click="
              change2009();
              shareData();
            "
          >
            <strong class="num">2009</strong>
            <span class="count-numbers">2009</span>
            <!-- <span class="count-name">Flowz</span> -->
          </div>
        </div>

        <div class="col-md-3">
          <div
            class="card-counter success"
            @click="
              change2008();
              shareData();
            "
          >
            <strong class="num">2008</strong>
            <span class="count-numbers">2008</span>
            <!-- <span class="count-name">Flowz</span> -->
          </div>
        </div>

        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>
<script>
import img13 from "../assets/img13.jpg";
import tone from "../assets/ipl.mp3";
import icon from "../assets/icon.png";
export default {
  name: "paral",
  data() {
    return {
      img13: img13,
      tone: tone,
      active: false,
      icon: icon,
      myData: [
        {
          year: "",
          winner: "",
        },
      ],
      year: "",
    };
  },
  methods: {
    ready() {
      this.active = !this.active;
      if (this.active) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
        this.$refs.audio.currentTime = 0;
      }
    },
    changeTitle: function () {
      this.$emit("changeTitle", "Vue Wizards");
    },
    send: function () {
      this.$emit("send", this.year);
    },
    change2017: function () {
      this.myData.year = "2017";
      this.myData.winner = "MUMBAI INDIANS";
    },
    change2016: function () {
      this.myData.year = "2016";
      this.myData.winner = "SUNRISERS HYDERABAD";
    },
    change2015: function () {
      this.myData.year = "2015";
      this.myData.winner = "MUMBAI INDIANS";
    },
    change2014: function () {
      this.myData.year = "2014";
      this.myData.winner = "KOLKATA KNIGHT RIDERS";
    },
    change2013: function () {
      this.myData.year = "2013";
      this.myData.winner = "MUMBAI INDIANS";
    },
    change2012: function () {
      this.myData.year = "2012";
      this.myData.winner = "KOLKATA KNIGHT RIDERS";
    },
    change2011: function () {
      this.myData.year = "2011";
      this.myData.winner = "CHENNAI SUPER KINGS";
    },
    change2010: function () {
      this.myData.year = "2010";
      this.myData.winner = "CHENNAI SUPER KINGS";
    },
    change2009: function () {
      this.myData.year = "2009";
      this.myData.winner = "DECCAN CHARGERS ";
    },
    change2008: function () {
      this.myData.year = "2008";
      this.myData.winner = "RAJASTHAN ROYALS";
    },
    shareData() {
      this.$router.push({
        name: "seasons",
        tag: "span",
        params: { data: this.myData },
      });
    },
  },
};
</script>
<style scoped>
#parallax-image {
  background-image: url("../assets/img13.jpg");
  height: 500px;
  margin-bottom: 50px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.style1 {
  color: #fff;
  padding-top: 160px;
}
.style2 {
  color: #fff;
  padding-top: 5px;
}

@media (max-width: 749px) {
  .style1 {
    color: #fff;
    font-size: 37px;
    padding-top: 90px;
  }
  .style2 {
    font-size: 37px;
    color: #fff;
    padding-top: 30px;
  }
  .head3 {
    font-size: 37px;
  }
}

@media (max-width: 800px) {
  #parallax-image {
    margin-top: 110px;
  }
}

.card-counter {
  box-shadow: 2px 2px 10px #dadada;
  margin: 5px;
  padding: 20px 10px;
  background-color: #fff;
  height: 100px;
  border-radius: 5px;
  transition: 0.3s linear all;
}

.card-counter.primary {
  background-color: #007bff;
  color: #fff;
}

.card-counter.danger {
  background-color: #ef5350;
  color: #fff;
}

.card-counter.success {
  background-color: #66bb6a;
  color: #fff;
}

.card-counter.info {
  background-color: #26c6da;
  color: #fff;
}

.card-counter .num {
  font-size: 5em;
  opacity: 0.2;
  position: absolute;
  left: 30px;
  top: 21px;
}

.card-counter .count-numbers {
  position: absolute;
  right: 35px;
  top: 20px;
  font-size: 32px;
  display: block;
}

.card-counter .count-name {
  position: absolute;
  right: 35px;
  top: 65px;
  font-style: italic;
  text-transform: capitalize;
  opacity: 0.5;
  display: block;
  font-size: 18px;
}
.card-counter:hover {
  box-shadow: 4px 4px 20px black;
  transition: 0.3s linear all;
}

.head2 {
  margin: 70px;
  color: rgb(25, 56, 138);
}
.my_lines {
  font-family: "Courgette", cursive;
  font-size: 1.5em;
}
.audioclass {
  width: 100px;
  height: 100px;
  padding: 5px;
  transition: 1s ease;
}
.audioclass:hover {
  -webkit-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
  transition: 1s ease;
}

/* audio::-webkit-media-controls-panel {
  background-color: #fff;
} */
</style>