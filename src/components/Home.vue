<template>
  <div>
    <!-- <router-view></router-view> -->
    <Header />
    <Carousel />

    <heading1 />
    <!-- <paral v-on:changeTitle="updateTitle($event)" /> -->
    <paral v-on:send="update($event)" />
    <hcards />
    <videos />
    <teams />

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import heading1 from "../components/heading1";
import paral from "../components/paral";
import hcards from "../components/hcards";
import videos from "../components/videos";
import teams from "../components/teams";

export default {
  name: "Home",
  components: {
    Header,
    Carousel,
    heading1,
    Footer,
    paral,
    hcards,
    videos,
    teams,
  },
  methods: {
    update: function (e) {
      console.warn(e);
    },
  },
};
</script>

