<template>
  <div class="home">
    <RatingSurvey />
  </div>
</template>

<script>
// @ is an alias to /src
import RatingSurvey from "@/components/RatingSurvey.vue";

export default {
  name: "HomeView",
  components: {
    RatingSurvey,
  },
};
</script>
