<template>
  <div class="pp">
    <p>
      Are You Ready For The Adventure
      <span> Let The Journey Begin. </span>
    </p>
  </div>
</template>
<script>
export default {
  name: "heading1",
};
</script>
<style  scoped>
.pp {
  height: 250px;
}
p {
  margin-top: 80px;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  display: inline-block;
  border-width: 4px 0;
  position: absolute;
  left: 0%;
  width: 100%;
}
p span {
  font: 700 4em/1 "Oswald", sans-serif;
  letter-spacing: 0;
  padding: 0.25em 0 0.325em;
  display: block;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
  /* Clip Background Image */
  background: url("../assets/text-png.png") repeat-y;
  -webkit-background-clip: text;
  background-clip: text;
  /* Animate Background Image */
  -webkit-text-fill-color: transparent;
  -webkit-animation: aj 80s linear infinite;
  animation: aj 80s linear infinite;
  /* Activate hardware acceleration for smoother animations */
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* Animate Background Image */
@keyframes aj {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>