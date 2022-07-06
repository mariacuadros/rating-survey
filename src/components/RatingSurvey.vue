<template>
  <section class="main-container">
    <div class="survey-container">
      <div class="star-icon-container">
        <img
          class="star-icon"
          src="@/assets/images/icon-star.svg"
          alt="Star Icon"
        />
      </div>
      <h1 class="survey-title">How did we do?</h1>
      <p class="survey-description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div class="buttons-container">
        <button
          class="rating-button"
          v-for="(ratingValue, id) in ratingValues"
          :key="id"
          v-on:click="selectRating(ratingValue.rating)"
        >
          {{ ratingValue.rating }}
        </button>
      </div>
      <button class="submit-button" v-on:click="submitResult()">SUBMIT</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "RatingSurvey",
  props: {
    ratingValues: Object,
  },
  data() {
    return {
      selectedRating: 0,
    };
  },

  methods: {
    selectRating(rating) {
      this.$emit("selectRating", rating);
    },
    submitResult() {
      this.$emit("submitResult", true);
    },
  },
};
</script>

<style scoped>
.main-container {
  --color-white: hsl(0, 0%, 100%);
  --color-light-grey: hsl(217, 12%, 63%);
  --color-medium-grey: hsl(218, 12%, 32%);
  --color-dark-blue: hsl(213, 19%, 18%);
  --color-very-dark-blue: hsl(216, 12%, 8%);
  --color-orange: hsl(25, 97%, 53%);
  background-color: var(--color-dark-blue);
  border-radius: 20px;
  padding: 2em;
  margin: 1.5em;
  color: var(--color-white);
}
.survey-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.star-icon-container {
  background-color: var(--color-medium-grey);
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5em;
}
.survey-title {
  margin: 0;
}
.survey-description {
  text-align: left;
  color: var(--color-light-grey);
  margin-bottom: 0;
  margin-top: 1em;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1.5em 0;
}

.rating-button {
  border-radius: 50%;
  border: none;
  height: 40px;
  width: 40px;
  color: var(--color-light-grey);
  background-color: var(--color-medium-grey);
}

.rating-button:focus {
  background-color: var(--color-orange);
  color: var(--color-white);
}

.rating-button:hover {
  color: var(--color-white);
  background-color: var(--color-light-grey);
  cursor: pointer;
}

.submit-button {
  background-color: var(--color-orange);
  border-radius: 20px;
  border: none;
  width: 100%;
  height: 40px;
  color: var(--color-white);
  cursor: pointer;
}
.submit-button:hover {
  background-color: var(--color-white);
  color: var(--color-orange);
}
</style>
