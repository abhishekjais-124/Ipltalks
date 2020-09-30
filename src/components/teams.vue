<template>
  <div class="container-fluid">
    <div class="head2"><h1 class="head3">IPL 2020 Teams</h1></div>
    <div class="row">
      <div class="col-1-5"><img v-bind:src="a" alt="" /></div>
      <div class="col-1-5"><img v-bind:src="b" alt="" /></div>
      <div class="col-1-5"><img v-bind:src="c" alt="" /></div>
      <div class="col-1-5"><img v-bind:src="d" alt="" /></div>
      <div class="col-1-5"><img v-bind:src="e" alt="" /></div>
      <div class="col-1-5"><img v-bind:src="f" alt="" /></div>
      <div class="col-1-5"><img v-bind:src="g" alt="" /></div>
      <div class="col-1-5"><img v-bind:src="h" alt="" /></div>
    </div>
  </div>
</template>
<script>
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";
import f from "../assets/f.png";
import g from "../assets/g.png";
import h from "../assets/h.png";

export default {
  name: "teams",
  data() {
    return {
      a: a,
      b: b,
      c: c,
      d: d,
      e: e,
      f: f,
      g: g,
      h: h,
    };
  },
};
</script>
<style scoped>
.head2 {
  margin: 70px;
  color: rgb(25, 56, 138);
}
img {
  width: 100px;
  height: 100px;
}
.col-1-5 {
  flex: 0 0 12.3%;
  max-width: 12.3%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

@media (max-width: 749px) {
  img {
    width: 50px;
    height: 50px;
  }
  .head2 {
    margin: 40px;
  }
  .head3 {
    font-size: 37px;
  }
}
</style>