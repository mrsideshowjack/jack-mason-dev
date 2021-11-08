/* eslint-disable vue/no-v-html */
<template>
  <section class="about">
    <h2>h2. {{ $t("about.title") }}</h2>
    <p v-html="$t('about.p1')" />
    <p>{{ $t("about.p2") }}</p>
    <p v-html="$t('about.p3')" />
    <p v-html="$t('about.p4')" />

    <p>{{ $t("about.tech") }}</p>
    <ul>
      <li>Accessable HTML5, CSS, JS, ES6</li>
      <li>SPA's with VueJS, React, Polymer</li>
      <li>SSR with nuxt.js</li>
      <li>Git, CI Services, Gulp & webpack</li>
      <li>REST & graphQL</li>
      <li>Backends with NodeJS & server-less lambda functions</li>
      <li>Databases from DB2 to MongoDB</li>
      <li>Jamstack with gridsome, jekyll</li>
      <li>IBM Cloud, Google Cloud Platform & Azure</li>
      <li>Sketch, Figma + Photoshop</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>
<style lang="css"></style>
