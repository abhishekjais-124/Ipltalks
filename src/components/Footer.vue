<template>
  <footer class="container-fluid text-center foot">
    <div class="copyrights">
      <p class="white-txt">
        IPLTALKS © 2020 <br /><br />
        <img class="footimg" v-bind:src="mylogo" alt="Logo" />
      </p>
      <hr class="dark-line" />
      <div class="container iconss">
        <hr />
        <div class="text-center center-block">
          <a
            href="https://www.facebook.com/profile.php?id=100004392223643"
            target="_blank"
            ><i class="fa fa-facebook-square fa-2x social"></i
          ></a>
          <a href="https://github.com/abhishekjais-124" target="_blank"
            ><i class="fa fa-git-square fa-2x social"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/abhishek-jaiswal-749b681a3/"
            target="_blank"
            ><i class="fa fa-linkedin-square fa-2x social"></i
          ></a>
        </div>
      </div>
      <a class="link" href="#">Contact Us</a>
      <a class="link" href="#">Privacy Policy</a>
      <a class="link" href="#">Terms & Conditions</a>
      <br /><br />
      <p class="white-txt small">
        © Copyright IPLTALKS, IPL 2020, Designed by Abhishek Jaiswal. All Rights
        Reserved.
      </p>
    </div>
  </footer>
</template>
<script>
import mylogo from "../assets/my_logo.png";
export default {
  name: "Footer",
  data() {
    return {
      mylogo: mylogo,
    };
  },
};
</script>
<style scoped>
.copyrights {
  padding-top: 12px;
  padding-bottom: 10px;
  margin-top: 100px;
  bottom: 0px;
}

footer.container-fluid.text-center.foot {
  background: rgb(25, 56, 138);
}

.dark-line {
  border-top: 1px solid rgb(79, 145, 205);
}

.white-txt {
  color: #fff;
}

a.link {
  color: #fff;
  border: 1px rgb(79, 145, 205) solid;
  padding: 5px;
  text-decoration: none;
}

a.link:hover {
  background: rgb(79, 145, 205);
  color: #fff;
}

.footimg {
  width: 4rem;
}

.social:hover {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}
.social {
  margin-top: 0px;
  padding-top: 0px;
  transform: scale(0.8);
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -o-transform: scale(0.8);
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
}
.iconss {
  margin-bottom: 5px;
}
</style>