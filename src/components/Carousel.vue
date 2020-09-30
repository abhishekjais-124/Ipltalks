<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="400"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        ><div class="first-slide-text">
          <span>
            If there is no cricket in the heaven then i don't want to be there.
          </span>
        </div>
        <template v-slot:img>
          <img
            v-bind:src="img1"
            class="d-block img-fluid w-100"
            width="1024"
            height="400"
            alt="image slot"
          /> </template
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            v-bind:src="img2"
            class="d-block img-fluid w-100"
            width="1024"
            height="400"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            v-bind:src="img8"
            class="d-block img-fluid w-100"
            width="1024"
            height="400"
            alt="image slot"
          /> </template
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            v-bind:src="img7"
            class="d-block img-fluid w-100"
            width="1024"
            height="400"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            v-bind:src="img4"
            class="d-block img-fluid w-100"
            width="1024"
            height="400"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            v-bind:src="img5"
            class="d-block img-fluid w-100"
            width="1024"
            height="400"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            v-bind:src="img9"
            class="d-block img-fluid w-100"
            width="1024"
            height="400"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            v-bind:src="img6"
            class="d-block img-fluid w-100"
            width="1024"
            height="400"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            v-bind:src="img3"
            class="d-block img-fluid w-100"
            width="1024"
            height="400"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>
  </div>
</template>

<script>
import img1 from "../assets/img11.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      img5: img5,
      img6: img6,
      img7: img7,
      img8: img8,
      img9: img9,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style  scoped>
.first-slide-text {
  margin-bottom: 110px;
  color: rgb(255, 252, 240);
  font-size: 60px;
  font-family: "Playfair Display SC", "serif";
  font-weight: lighter;
  word-spacing: 0.1em;
}

@media (max-width: 749px) {
  .first-slide-text {
    margin-bottom: 2px;
    font-size: 15px;
    word-spacing: 0.08em;
  }
}
</style>