<template>
  <div class="home">
    <RatingSurvey
      class="ratingSurvey"
      :ratingValues="ratingValues"
      v-on:selectRating="selectRating"
    />
  </div>
</template>

<script>
import RatingSurvey from "@/components/RatingSurvey.vue";
import surveyServices from "@/services/surveyServices";

export default {
  name: "HomeView",
  components: {
    RatingSurvey,
  },
  data() {
    return {
      ratingValues: null,
    };
  },
  created() {
    surveyServices
      .getRatingSurvey()
      .then((response) => {
        this.ratingValues = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    selectRating(rating) {
      for (let i = 0; i < this.ratingValues.length; i++) {
        if (this.ratingValues[i].rating == rating) {
          this.ratingValues[i].clicked = true;
        } else {
          this.ratingValues[i].clicked = false;
        }
      }
    },
  },
};
</script>
<style>
html {
  --color-very-dark-blue: hsl(216, 12%, 8%);
  background-color: var(--color-very-dark-blue);
}
.home {
  max-width: 400px;
  margin: 6em auto;
}
</style>
