<template>
  <div class="container">
    <div class="head2"><h1 class="head3">Trending Videos</h1></div>
    <div class="row">
      <div class="col-sm-4">
        <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/NaU9qp0AOsw"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h5><b>VIVO IPL 2020 Player Auction</b></h5>
      </div>
      <div class="col-sm-4">
        <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/OvExSU8WtWg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h5><b>Virat Kohli practices for Dream 11 IPL 2020</b></h5>
      </div>
      <div class="col-sm-4">
        <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/AvTXSeDmhoo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h5><b>VIVO IPL 2020: Ab Khel Bolega</b></h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "videos",
};
</script>
<style scoped>
.head2 {
  margin: 70px;
  color: rgb(25, 56, 138);
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