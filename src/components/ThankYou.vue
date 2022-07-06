<template>
  <div class="thanks-container">
    <img
      class="thanks-image"
      src="@/assets/images/illustration-thank-you.svg"
      alt="Thank you image"
    />
    <p class="survey-result">
      You selected {{ selectedRating }} out of {{ bestRating }}
    </p>
    <h1 class="thanks">Thank you!</h1>
    <span
      >We apreciate you taking the time to give a rating.If you ever need more
      support, don't hesitate to get in touch!</span
    >
  </div>
</template>

<script>
export default {
  name: "ThankYou",

  props: {
    selectedRating: {
      type: Number,
      required: true,
    },
    bestRating: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style scoped>
.thanks-container {
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
  align-items: center;
}
.survey-result {
  color: var(--color-orange);
  background-color: var(--color-medium-grey);
  padding: 0.3em;
  border-radius: 20px;
  width: 60%;
  min-width: 185px;
  margin-top: 1.5em;
}
</style>
