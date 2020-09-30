<template>
  <header>
    <b-navbar toggleable="lg" type="dark" class="headerclass">
      <b-navbar-brand href="#" class=""
        ><router-link to="/" class="titl"
          ><b class="sitename">IPL<b class="newstyle">T</b>ALKS</b></router-link
        ></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item href="#">Contact Us</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em class="side">User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.headerclass {
  background: rgba(0, 0, 0, 0.2);
}
.titl {
  font-family: "Roboto", "serif";
  color: #fff;
  padding-left: 40px;
  font-size: 30px;
  font-weight: 700;
  /* letter-spacing: 0.01em; */
}

.newstyle {
  font-family: "Monoton", cursive;
}

.side {
  color: #fff;
  font-size: 20px;
}

.titl:hover {
  color: #d35400;
}

.navbar {
  padding: 10px;
}
a.dropdown-item {
  font-weight: bolder;
}
header {
  margin-top: 0px;
  height: 40px;
  line-height: 40px;
  position: fixed;
  z-index: 2;
  width: 100%;
}

@media (max-width: 749px) {
  .sitename {
    font-size: 24px;
    line-height: 24px;
  }
  header {
    height: 20px;
  }
}
</style>