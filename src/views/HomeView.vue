<template>
  <div class="home">
    <RatingSurvey
      class="ratingSurvey"
      :ratingValues="ratingValues"
      @selectRating="selectRating"
      @submitResult="submitResult"
      v-if="!submited"
    />
    <ThankYou
      :bestRating="bestRating"
      :selectedRating="selectedRatingValue"
      v-else
    />
  </div>
</template>

<script>
import surveyServices from "@/services/surveyServices";
import RatingSurvey from "@/components/RatingSurvey.vue";
import ThankYou from "@/components/ThankYou.vue";

export default {
  name: "HomeView",
  components: {
    RatingSurvey,
    ThankYou,
  },
  data() {
    return {
      ratingValues: null,
      selectedRatingValue: 0,
      submited: false,
    };
  },
  computed: {
    bestRating() {
      return this.ratingValues.length;
    },
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
      this.selectedRatingValue = rating;
      for (let i = 0; i < this.ratingValues.length; i++) {
        if (this.ratingValues[i].rating == rating) {
          this.ratingValues[i].clicked = true;
        } else {
          this.ratingValues[i].clicked = false;
        }
      }
    },
    submitResult() {
      for (let i = 0; i < this.ratingValues.length; i++) {
        if (this.ratingValues[i].clicked == true) {
          this.selectedRating = this.ratingValues[i].rating;
        }
        this.submited = true;
      }
    },
  },
};
</script>
<style>
body {
  --color-very-dark-blue: hsl(216, 12%, 8%);
  background-color: var(--color-very-dark-blue);
}
.home {
  max-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>
