<template>
  <section class="about">
    <h2>h2. {{ $t("about.title") }}</h2>
    <!-- eslint-disable-line vue/no-v-html -->
    <p v-html="$t('about.main')" />
    <p>{{ $t("about.tech") }}</p>
    <ul>
      <li
        v-for="(skill, index) in skills"
        :key="index"
      >
        {{ skill }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      skills: [
      "Proficient in HTML5, CSS, JS, and ES6 for building websites.",
      "Experience with VueJS, React, and TypeScript for building single-page applications.",
      "Familiarity with NuxtJS for server-side rendering.",
      "Committed to delivering accessible and inclusive code to ensure that websites are usable for all users.",
      "Knowledge of Git and CI services such as Travis and Jenkins.",
      "Familiar with webpack and experience with REST and GraphQL APIs.",
      "Strong understanding of NodeJS, serverless lambda functions, and database management.",
      "Experience with Jest and Cypress for testing and debugging.",
      "Familiarity with Jamstack using Gridsome and Jekyll.",
      "Knowledge of cloud platforms like IBM Cloud, Google Cloud Platform, and Azure.",
      "Proficient with design software like Figma, Sketch, and Photoshop.",
      ]
    }
  },
};
</script>
<style lang="css"></style>
