<template>
  <div>
    <Header />
    <div
      id="head-image"
      :class="
        mydata.year == '2017'
          ? 'im2017'
          : mydata.year == '2016'
          ? 'im2016'
          : mydata.year == '2015'
          ? 'im2015'
          : mydata.year == '2014'
          ? 'im2014'
          : mydata.year == '2013'
          ? 'im2013'
          : mydata.year == '2012'
          ? 'im2012'
          : mydata.year == '2011'
          ? 'im2011'
          : mydata.year == '2010'
          ? 'im2010'
          : mydata.year == '2009'
          ? 'im2009'
          : 'im2008'
      "
    >
      <div class="col-md-12 align-self-center">
        <h1 class="style1">
          IPL {{ mydata.year }} WINNER - {{ mydata.winner }}
        </h1>
      </div>
    </div>

    <div class="container heading2">
      <div class="">
        <h1 class="">IPL {{ mydata.year }} MATCHES</h1>
      </div>
    </div>
    <div class="container graph">
      <transition name="bounce">
        <line-chart
          xtitle="IPL Match Number"
          ytitle="Number of Matches Won"
          :curve="true"
          :colors="[
            '#004BA0',
            '#FF822A',
            '#8c411e',
            '#ffdd53',
            'red',
            '#2E0854',
            '#00008B',
            'pink',
            '#CBA92B',
            '#d9e3ef',
            '#FFFF3C',
          ]"
          v-if="isclicked"
          id="my-chart"
          width="1140px"
          height="500px"
          :data="[
            { name: 'Mumbai Indians', data: f2 },
            { name: 'Sunrisers Hyderabad', data: f1 },
            { name: 'Gujarat Lions', data: f3 },
            { name: 'Rising Pune Supergiant', data: f4 },
            { name: 'Royal Challengers Bangalore', data: f5 },
            { name: 'Kolkata Knight Riders', data: f6 },
            { name: 'Delhi Capitals', data: f7 },
            { name: 'Kings XI Punjab', data: f8 },
            { name: 'Rajasthan Royals', data: f9 },
            { name: 'Deccan Chargers', data: f10 },
            { name: 'Chennai Super Kings', data: f11 },
          ]"
        />
      </transition>
      <button class="btnclass" @click="showchart">Compare Teams</button>
    </div>

    <div class="container">
      <div
        v-for="item in filtereditem"
        :key="item.id"
        :class="{ highlight: item.id == selected }"
        @click="fun(item.id)"
        border-variant="dark"
        class="shadow-lg rounded full"
        header-class="my-header"
      >
        <div
          slot="header"
          :style="{
            'background-color': color,
            'box-shadow': shadow,
          }"
          class="p-2 topheader"
        >
          <div class="row text-white top upper">
            <div class="col-lg-5 col-sm-5" style="text-align: left">
              <h3 class="texxt">{{ item.team1 }}</h3>
            </div>
            <div class="col-lg-2 col-sm-2" style="text-align: center">
              <h3 class="texxt texxt2">Match {{ item.id }}</h3>
            </div>
            <div class="col-lg-5 col-sm-5" style="text-align: right">
              <h3 class="texxt">{{ item.team2 }}</h3>
            </div>
          </div>
        </div>
        <transition name="slide-fade">
          <hr class="line" v-show="item.id == selected && isActive" />
        </transition>
        <transition name="slide-fade">
          <div class="row" v-show="item.id == selected && isActive">
            <div
              class="col-sm-12 leftone"
              v-if="item.result == 'normal' && item.win_by_wickets != '0'"
            >
              <h2 class="lefttext1">
                {{ item.winner }} won by {{ item.win_by_wickets }} wickets
              </h2>
            </div>
            <div
              class="col-sm-12 leftone"
              v-if="item.result == 'normal' && item.win_by_runs != '0'"
            >
              <h2 class="lefttext1">
                {{ item.winner }} won by {{ item.win_by_runs }} runs
              </h2>
            </div>
            <div class="col-sm-12 leftone" v-if="item.result == 'tie'">
              <h2 class="lefttext1">Tie</h2>
            </div>
            <div class="col-sm-12 leftone" v-if="item.result == 'no result'">
              <h2 class="lefttext1">Match has no results</h2>
            </div>
          </div>
        </transition>
        <transition name="slide-fade">
          <hr class="line" v-show="item.id == selected && isActive" />
        </transition>
        <transition name="slide-fade">
          <div class="row" v-show="item.id == selected && isActive">
            <div class="col-sm-4 leftone"><h2 class="lefttext">Venue</h2></div>
            <div class="col-sm-8 rightone">
              <p class="righttext">
                <b>{{ item.venue }}</b>
              </p>
            </div>
          </div>
        </transition>
        <transition name="slide-fade">
          <hr class="line" v-show="item.id == selected && isActive" />
        </transition>
        <transition name="slide-fade">
          <div class="row" v-show="item.id == selected && isActive">
            <div class="col-sm-4 leftone"><h2 class="lefttext">City</h2></div>
            <div class="col-sm-8 rightone">
              <p class="righttext">
                <b>{{ item.city }}</b>
              </p>
            </div>
          </div>
        </transition>
        <transition name="slide-fade">
          <hr class="line" v-show="item.id == selected && isActive" />
        </transition>
        <transition name="slide-fade">
          <div class="row" v-show="item.id == selected && isActive">
            <div class="col-sm-4 leftone"><h2 class="lefttext">Date</h2></div>
            <div class="col-sm-8 rightone">
              <p class="righttext">
                <b>{{ item.date }}</b>
              </p>
            </div>
          </div>
        </transition>
        <transition name="slide-fade">
          <hr class="line" v-show="item.id == selected && isActive" />
        </transition>
        <transition name="slide-fade">
          <div class="row" v-show="item.id == selected && isActive">
            <div class="col-sm-4 leftone">
              <h2 class="lefttext">Toss Winner</h2>
            </div>
            <div class="col-sm-8 rightone">
              <p class="righttext">
                <b>{{ item.toss_winner }}</b>
              </p>
            </div>
          </div>
        </transition>
        <transition name="slide-fade">
          <hr class="line" v-show="item.id == selected && isActive" />
        </transition>
        <transition name="slide-fade">
          <div class="row" v-show="item.id == selected && isActive">
            <div class="col-sm-4 leftone">
              <h2 class="lefttext">Toss Decision</h2>
            </div>
            <div class="col-sm-8 rightone">
              <p class="righttext">
                <b>{{ item.toss_decision }}</b>
              </p>
            </div>
          </div>
        </transition>
        <transition name="slide-fade">
          <hr class="line" v-show="item.id == selected && isActive" />
        </transition>
        <transition name="slide-fade">
          <div class="row" v-show="item.id == selected && isActive">
            <div class="col-sm-4 leftone">
              <h2 class="lefttext">Player Of The Match</h2>
            </div>
            <div class="col-sm-8 rightone">
              <p class="righttext">
                <b>{{ item.player_of_match }}</b>
              </p>
            </div>
          </div> </transition
        ><transition name="slide-fade">
          <hr class="line" v-show="item.id == selected && isActive" />
        </transition>
        <transition name="slide-fade">
          <div
            class="row"
            v-show="item.id == selected && isActive"
            v-if="item.umpire1 != null && item.umpire1.length != 0"
          >
            <div class="col-sm-4 leftone">
              <h2 class="lefttext">Umpires</h2>
            </div>
            <div class="col-sm-8 rightone">
              <p
                class="righttext"
                v-if="item.umpire2 != null && item.umpire2.length != 0"
              >
                <b>{{ item.umpire1 }}, {{ item.umpire2 }}</b>
              </p>
              <p
                class="righttext"
                v-if="item.umpire2 == null && item.umpire2.length == 0"
              >
                <b>{{ item.umpire1 }}</b>
              </p>
            </div>
          </div> </transition
        ><transition name="slide-fade">
          <hr
            class="line"
            v-show="item.id == selected && isActive"
            v-if="
              item.umpire1 != null && item.umpire1.length != 0
            " /></transition
        ><transition name="slide-fade">
          <div
            class="row"
            v-show="item.id == selected && isActive"
            v-if="item.dl_applied == '1'"
          >
            <div class="col-sm-4 leftone"><h2 class="lefttext">Other</h2></div>
            <div class="col-sm-8 rightone">
              <p class="righttext">
                <b>DL Applied</b>
              </p>
            </div>
          </div> </transition
        ><transition name="slide-fade">
          <hr
            class="line"
            v-show="item.id == selected && isActive"
            v-if="item.dl_applied == '1'"
          />
        </transition>

        <!-- <div class="bottom" v-show="item.id == selected">
          <b-row class="alldetails">
            <div><h3 class="a1">Venue</h3></div>
            <div>
              <h3 class="a2">{{ item.venue }}, {{ item.city }}</h3>
            </div>
            <div><h3 class="a1">Date</h3></div>
            <div>
              <h3 class="a2">{{ item.date }}</h3>
            </div>
            <div><h3 class="a1">Match Winner</h3></div>
            <div v-if="item.result == 'normal' && item.win_by_wickets != '0'">
              <h3 class="a2">
                <i class="a3"
                  >{{ item.winner }} won By {{ item.win_by_wickets }} wickets</i
                >
              </h3>
            </div>
            <div v-if="item.result == 'normal' && item.win_by_runs != '0'">
              <h3 class="a2">
                <i class="a3"
                  >{{ item.winner }} won By {{ item.win_by_runs }} runs</i
                >
              </h3>
            </div>
            <div v-if="item.result == 'tie'">
              <h3 class="a2">
                <i class="a3">Tie</i>
              </h3>
            </div>
            <div v-if="item.result == 'no result'">
              <h3 class="a2">
                <i class="a3">Match has no results</i>
              </h3>
            </div>
            <div><h3 class="a1">Toss Winner</h3></div>
            <div>
              <h3 class="a2">{{ item.toss_winner }}</h3>
            </div>
            <div><h3 class="a1">Toss Decision</h3></div>
            <div>
              <h3 class="a2">{{ item.toss_decision }}</h3>
            </div>
            <div><h3 class="a1">Player Of The Match</h3></div>
            <div>
              <h3 class="a2">{{ item.player_of_match }}</h3>
            </div>
            <div v-if="item.umpire1 != null">
              <h3 class="a1">Umpire 1</h3>
            </div>
            <div>
              <h3 class="a2">{{ item.umpire1 }}</h3>
            </div>
            <div v-if="item.umpire2 != null">
              <h3 class="a1">Umpire 2</h3>
            </div>
            <div>
              <h3 class="a2">{{ item.umpire2 }}</h3>
            </div>
            <div v-if="item.dl_applied == '1'"><h3 class="a1">Other</h3></div>
            <div v-if="item.dl_applied == '1'">
              <h3 class="a2">dl applied</h3>
            </div>
          </b-row>
        </div> -->
      </div>
    </div>

    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);

// var items = [];
// for (var i = 1; i <= 3; i++) {
//   items.push({
//     id: i,
//   });
// }

export default {
  name: "seasons",
  data() {
    return {
      items: [{}],
      j: Number,
      k: Number,
      countarray: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      selected: undefined,
      list: [],
      isActive: false,
      isclicked: false,
      color: "rgb(25, 56, 138)",
      shadow: "0 0 5px 0 rgba(0, 0, 0, 0.06)",
      chartData1: [],
      chartData2: [],
      chartData3: [],
      chartData4: [],
      chartData5: [],
      chartData6: [],
      chartData7: [],
      chartData8: [],
      chartData9: [],
      chartData10: [],
      chartData11: [],
      newdate: "",
    };
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    Vue.axios.get("https://sheetdb.io/api/v1/gractumrufjvw").then((resp) => {
      this.list = resp.data;
      // console.log(this.list);
      var j = 1;

      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].season == this.mydata.year) {
          this.items[j - 1] = {
            id: j,
            season: this.list[i].season,
            result: this.list[i].result,
            city: this.list[i].city,
            date: this.list[i].date,
            team1: this.list[i].team1,
            team2: this.list[i].team2,
            toss_winner: this.list[i].toss_winner,
            toss_decision: this.list[i].toss_decision,
            dl_applied: this.list[i].dl_applied,
            win_by_runs: this.list[i].win_by_runs,
            win_by_wickets: this.list[i].win_by_wickets,
            player_of_match: this.list[i].player_of_match,
            venue: this.list[i].venue,
            umpire1: this.list[i].umpire1,
            umpire2: this.list[i].umpire2,
            winner: this.list[i].winner,
          };
          if (this.list[i].result == "normal") {
            if (this.list[i].winner == "Sunrisers Hyderabad") {
              this.countarray[0] += 1;
            } else if (this.list[i].winner == "Mumbai Indians") {
              this.countarray[1] += 1;
            } else if (this.list[i].winner == "Gujarat Lions") {
              this.countarray[2] += 1;
            } else if (this.list[i].winner == "Rising Pune Supergiant") {
              this.countarray[3] += 1;
            } else if (this.list[i].winner == "Royal Challengers Bangalore") {
              this.countarray[4] += 1;
            } else if (this.list[i].winner == "Kolkata Knight Riders") {
              this.countarray[5] += 1;
            } else if (this.list[i].winner == "Delhi Daredevils") {
              this.countarray[6] += 1;
            } else if (this.list[i].winner == "Kings XI Punjab") {
              this.countarray[7] += 1;
            } else if (this.list[i].winner == "Rajasthan Royals") {
              this.countarray[8] += 1;
            } else if (this.list[i].winner == "Deccan Chargers") {
              this.countarray[9] += 1;
            } else if (this.list[i].winner == "Chennai Super Kings") {
              this.countarray[10] += 1;
            }
            if (
              this.list[i].team1 == "Sunrisers Hyderabad" ||
              this.list[i].team2 == "Sunrisers Hyderabad"
            ) {
              this.chartData1.push([j, this.countarray[0]]);
            }
            if (
              this.list[i].team1 == "Mumbai Indians" ||
              this.list[i].team2 == "Mumbai Indians"
            ) {
              this.chartData2.push([j, this.countarray[1]]);
            }
            if (
              this.list[i].team1 == "Gujarat Lions" ||
              this.list[i].team2 == "Gujarat Lions"
            ) {
              this.chartData3.push([j, this.countarray[2]]);
            }
            if (
              this.list[i].team1 == "Rising Pune Supergiant" ||
              this.list[i].team2 == "Rising Pune Supergiant"
            ) {
              this.chartData4.push([j, this.countarray[3]]);
            }
            if (
              this.list[i].team1 == "Royal Challengers Bangalore" ||
              this.list[i].team2 == "Royal Challengers Bangalore"
            ) {
              this.chartData5.push([j, this.countarray[4]]);
            }
            if (
              this.list[i].team1 == "Kolkata Knight Riders" ||
              this.list[i].team2 == "Kolkata Knight Riders"
            ) {
              this.chartData6.push([j, this.countarray[5]]);
            }
            if (
              this.list[i].team1 == "Delhi Daredevils" ||
              this.list[i].team2 == "Delhi Daredevils"
            ) {
              this.chartData7.push([j, this.countarray[6]]);
            }
            if (
              this.list[i].team1 == "Kings XI Punjab" ||
              this.list[i].team2 == "Kings XI Punjab"
            ) {
              this.chartData8.push([j, this.countarray[7]]);
            }
            if (
              this.list[i].team1 == "Rajasthan Royals" ||
              this.list[i].team2 == "Rajasthan Royals"
            ) {
              this.chartData9.push([j, this.countarray[8]]);
            }
            if (
              this.list[i].team1 == "Deccan Chargers" ||
              this.list[i].team2 == "Deccan Chargers"
            ) {
              this.chartData10.push([j, this.countarray[9]]);
            }
            if (
              this.list[i].team1 == "Chennai Super Kings" ||
              this.list[i].team2 == "Chennai Super Kings"
            ) {
              this.chartData11.push([j, this.countarray[10]]);
            }
            // this.newdate = this.list[i].date;
            // console.warn(this.newdate);

            // this.chartData2.push([j, this.countarray[1]]);
            // this.chartData3.push([j, this.countarray[2]]);
            // this.chartData4.push([j, this.countarray[3]]);
            // this.chartData5.push([j, this.countarray[4]]);
            // this.chartData6.push([j, this.countarray[5]]);
            // this.chartData7.push([j, this.countarray[6]]);
            // this.chartData8.push([j, this.countarray[7]]);
            // this.chartData9.push([j, this.countarray[8]]);
            // this.chartData10.push([j, this.countarray[9]]);
            // this.chartData11.push([j, this.countarray[10]]);
          }

          j += 1;
        }
      }
      //  console.warn(resp.data.data, this.items);
    });
  },
  computed: {
    filtereditem: function () {
      console.log(this.list, this.items);
      return this.items;
    },
    f1: function () {
      return this.chartData1;
    },
    f2: function () {
      return this.chartData2;
    },
    f3: function () {
      return this.chartData3;
    },
    f4: function () {
      return this.chartData4;
    },
    f5: function () {
      return this.chartData5;
    },
    f6: function () {
      return this.chartData6;
    },
    f7: function () {
      return this.chartData7;
    },
    f8: function () {
      return this.chartData8;
    },
    f9: function () {
      return this.chartData9;
    },
    f10: function () {
      return this.chartData10;
    },
    f11: function () {
      return this.chartData11;
    },
  },
  created() {
    this.mydata = this.$route.params.data;
    // console.warn(this.mydata);
  },
  methods: {
    showchart: function () {
      this.isclicked = !this.isclicked;
      console.warn(this.isclicked);
    },
    fun: function (arg) {
      this.selected = arg;
      this.isActive = !this.isActive;
      console.warn(this.selected);
    },
  },
};
</script>

<style  scoped>
.container {
  background: #fff;
}
.heading2 {
  width: 100%;
  text-align: center;
  background: #fff;
}
.my-header {
  padding: 0;
}
#head-image {
  /* background-image: url("../assets/2017.jpg"); */
  height: 500px;
  margin-bottom: 50px;
  filter: brightness(50%);
  -webkit-filter: brightness(50%);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
#head-image:hover {
  filter: brightness(96%);
  -webkit-filter: brightness(96%);
}
.im2017 {
  background-image: url("../assets/2017.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.im2016 {
  background-image: url("../assets/2016.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.im2015 {
  background-image: url("../assets/2015.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.im2014 {
  background-image: url("../assets/2014.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.im2013 {
  background-image: url("../assets/2013.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.im2012 {
  background-image: url("../assets/2012.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.im2011 {
  background-image: url("../assets/2011.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.im2010 {
  background-image: url("../assets/2010.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.im2009 {
  background-image: url("../assets/2009.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.im2008 {
  background-image: url("../assets/2008.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.style1 {
  color: #fff;
  padding-top: 210px;
}

.highlight {
  background: white;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.4);
}
.full {
  margin: 10px;
  background: white;
}

.top {
  height: 55px;
}
.bottom {
  height: 0px;
}
/* @media (min-width: 1200px) {
  .container {
    max-width: 1300px;
  }
} */
.texxt {
  margin: 0px;
  font-size: 17px;
}
@media (min-width: 749px) {
  .texxt {
    margin: 11px;
    font-size: 24px;
  }
  .texxt2 {
    font-size: 18px;
    margin: 18px;
  }
}

.alldetails {
  text-align: center;
}
.alldetails div {
  width: 100%;
}
.a1 {
  margin: 5px;
  color: rgb(116, 112, 112);
}

.a2 {
  color: rgba(0, 0, 0, 0, 0.7);
  margin-bottom: 8px;
  font-size: 23px;
}

@media (min-width: 749px) {
  .a2 {
    font-size: 28px;
  }
  .highlight {
    /* height: 830px; */
    background: white;
  }
}
.a3 {
  color: darkgreen;
}
.upper:hover {
  box-shadow: 6px 6px 24px black;
  background: rgb(25, 56, 138);
  transition: 0.3s linear all;
}

.btnclass {
  width: 150px;
  height: 35px;
  margin: 15px;
  color: #fff;
  background: rgb(25, 56, 138);
  border-radius: 5px;
}

.btnclass:hover {
  color: rgb(25, 56, 138);
  background: #fff;
  transition: 0.3s ease;
}

.leftone {
  background-color: #143d59;
  width: 100%;
}
.rightone {
  background-color: #f4b41a;
  width: 100%;
}
.lefttext {
  margin: 5px;
  color: #f4b41a;
  font-size: 30px;
  font-weight: 550;
}
.lefttext1 {
  margin: 5px;
  color: #f4b41a;
}
.righttext {
  margin-top: 10px;
  color: #143d59;
  font-size: 20px;
}
.line {
  border-top: 3px solid rgb(25, 56, 138);
}
@media (max-width: 749px) {
  .lefttext1 {
    font-size: 25px;
  }
  .lefttext {
    margin: 5px;
    color: #f4b41a;
    font-size: 22px;
    font-weight: 550;
  }
  .righttext {
    margin-top: 4px;
    color: #143d59;
    font-size: 17px;
  }
}
.slide-fade-enter-active {
  transition: all 1.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>