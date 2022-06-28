<template>
  <section class="survey-container">
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
        :class="{ 'selected-rating-button': ratingValue.clicked }"
        v-on:click="selectRating(ratingValue.rating)"
      >
        {{ ratingValue.rating }}
      </button>
    </div>
    <button class="submit-button">SUBMIT</button>
  </section>
</template>

<script>
export default {
  name: "RatingSurvey",
  data() {
    return {
      ratingValues: [
        { rating: 1, clicked: false },
        { rating: 2, clicked: false },
        { rating: 3, clicked: false },
        { rating: 4, clicked: false },
        { rating: 5, clicked: false },
      ],
    };
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.survey-container {
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

.selected-rating-button {
  color: var(--color-white);
  background-color: var(--color-light-grey);
}

.rating-button:hover {
  background-color: var(--color-orange);
  color: var(--color-white);
  cursor: pointer;
}

.submit-button {
  background-color: var(--color-orange);
  border-radius: 20px;
  border: none;
  width: 100%;
  height: 40px;
  color: var(--color-white);
}
.submit-button:hover {
  background-color: var(--color-white);
  color: var(--color-orange);
}
</style>
