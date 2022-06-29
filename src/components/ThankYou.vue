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
      support, don't hesitate to get in tpuch!</span
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
