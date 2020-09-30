<template>
  <div id="app">
    <!-- <Home /> -->
    <router-view></router-view>
    <!-- <Header /> -->
  </div>
</template>

<script>
// import Home from "./components/Home";
export default {
  name: "App",
  // components: { Home },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
body {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  line-height: 1.5;
}

h1,
p,
h2,
h3 {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 48px;
  font-weight: bold;
}

h2 {
  font-size: 36px;
  font-weight: bold;
}

h3 {
  font-size: 24px;
  font-weight: bold;
}

ul,
li {
  list-style: none;
}

.white {
  color: #fff;
}

.center {
  text-align: center;
}

.right {
  text-align: right;
}

a,
a:active,
.btn,
.btn:active {
  text-decoration: none;
}

a:hover,
a:focus,
.btn:hover,
.btn:focus {
  text-decoration: none;
  color: #fff;
}

.transparent-bg {
  background-color: rgba(0, 0, 0, 0.6);
}

.section-padding {
  padding: 64px 0;
}

.space {
  margin-top: 64px;
}
</style>
