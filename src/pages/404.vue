<template>
  <main>
    <i class="border-css" />

    <h1>404 - Page not found :(</h1>
    <a href="/">Go home</a>
  </main>
</template>

<script>
export default {
  components: {
  },

}
</script>
<style lang="css">
.border-css{
    content: '';
    position: fixed;
    border: calc(var(--border-width)/2) solid;
    border-image-source: linear-gradient(90deg, var(--colour-1), var(--colour-2));
    border-image-slice: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0px;
    z-index: 1;
    pointer-events: none;
}
</style>
