<template>
  <div class="container py-3 martop">
    <div class="head2"><h1 class="head3">Latest News</h1></div>
    <div class="card">
      <div class="row">
        <div class="col-sm-4">
          <img class="w-100" v-bind:src="img14" alt="" />
        </div>
        <div class="col-sm-8">
          <div class="card-block">
            <!--           <h4 class="card-title">Small card</h4> -->
            <p><b>DREAM11 IPL 2020, MATCH 3 SRH VS RCB – MATCH REPORT</b></p>
            <br />
            <p>
              Royal Challengers Bangalore (RCB) beat Sunrisers Hyderabad (SRH)
              by 10 runs in Dubai to kick off their Dream11 Indian Premier
              League (IPL) 2020 campaign with a win on Monday.
            </p>
            <br />
            <p>
              Put in to bat, RCB were off to a flying start. Devdutt Padikkal,
              making his IPL debut, hit two fours in the second over and
              followed it up with three more in the fo...
            </p>
            <br />
            <a href="#" class="btn btn-danger btn-sm float-right">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="row">
        <div class="col-sm-4">
          <img class="w-100" v-bind:src="img15" alt="" />
        </div>
        <div class="col-sm-8">
          <div class="card-block">
            <p><b>DREAM11 IPL 2020, MATCH 5 KKR VS MI – MATCH REPORT</b></p>
            <br />
            <p>
              Rohit Sharma led from the front as Mumbai Indians (MI) beat
              Kolkata Knight Riders (KKR) by 49 runs and secured their first win
              of the Dream11 Indian Premier League (IPL) 2020 in Abu Dhabi.
            </p>
            <br />
            <p>
              After KKR won the toss and elected to field in their first game of
              the season, Shivam Mavi struck early, to dismiss Quinton de Kock
              in the second over.But MI ski...
            </p>
            <br />
            <a href="#" class="btn btn-danger btn-sm float-right">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="row">
        <div class="col-sm-4">
          <img class="w-100" v-bind:src="img16" alt="" />
        </div>
        <div class="col-sm-8">
          <div class="card-block">
            <p><b>DREAM11 IPL 2020, MATCH 4 RR VS CSK – MATCH REPORT</b></p>
            <br />
            <p>
              Sanju Samson starred with the bat while Rahul Tewatia picked up
              three wickets as Rajasthan Royals began their Dream11 Indian
              Premier League (IPL) 2020 campaign with a 16-run win over Chennai
              Super Kings (CSK) in Sharjah on Tuesday.
            </p>
            <br />
            <p>
              Put in to bat, RR lost their first wicket early as Deepak Chahar
              did well to..
            </p>
            <br />
            <a href="#" class="btn btn-danger btn-sm float-right">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import img14 from "../assets/news1.jpg";
import img15 from "../assets/news2.jpg";
import img16 from "../assets/news3.jpg";
export default {
  name: "hcards",
  data() {
    return {
      img14: img14,
      img15: img15,
      img16: img16,
    };
  },
};
</script>
<style scoped>
.head2 {
  margin: 70px;
  color: rgb(25, 56, 138);
}
.title {
  margin-bottom: 50px;
  text-transform: uppercase;
}

.card-block {
  margin: 10px auto;
  font-size: 1em;
  position: relative;
  margin: 0;
  padding: 1em;
  text-align: left;
  border: none;
  box-shadow: none;
}
.card {
  /* height: 90%; */

  font-size: 1em;
  overflow: hidden;
  padding: 5;
  border: none;
  border-radius: 0.28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  margin-top: 20px;
}
.btn {
  margin-top: 0px;
}

.martop {
  margin-top: 0px;
}
@media (max-width: 749px) {
  .head2 {
    margin: 40px;
  }
  .head3 {
    font-size: 37px;
  }
}
</style>