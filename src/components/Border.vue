<template>
  <section class="border">
    <svg
      class="border-svg"
      height="100%"
      width="100%"
    >
      <defs>
        <linearGradient
          id="borderGradient"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="#9146ff"
            offset="0%"
          />
          <stop
            stop-color="#fe7db7"
            offset="100%"
          />
        </linearGradient>
      </defs>
      <line
        class="line-top"
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        stroke="url(#borderGradient)"
      />
      <line
        class="line-right"
        x1="100%"
        y1="0"
        x2="100%"
        y2="100%"
        stroke="url(#borderGradient)"
      />
      <line
        class="line-bottom"
        x1="100%"
        y1="100%"
        x2="0"
        y2="100%"
        stroke="url(#borderGradient)"
      />
      <line
        class="line-left"
        x1="0"
        y1="100%"
        x2="0"
        y2="0"
        stroke="url(#borderGradient)"
      />
    </svg>
  </section>
</template>

<script>
export default {
    name: 'Border',
    mounted(){
        this.animBorder();
    },
    methods: {
        animBorder(){
            this.$anime.timeline({
            easing: 'linear',
            duration: 200
            })
            .add({
            targets: '.border-svg .line-top',
            strokeDashoffset: [this.$anime.setDashoffset, 0],
            })
            .add({
            targets: '.border-svg .line-right',
            strokeDashoffset: [this.$anime.setDashoffset, 0],
            })
            .add({
            targets: '.border-svg .line-bottom',
            strokeDashoffset: [this.$anime.setDashoffset, 0],
            })
            .add({
            targets: '.border-svg .line-left',
            strokeDashoffset: [this.$anime.setDashoffset, 0],
            })
        }
    }
}
</script>
<style lang="css" scoped>
.border svg.border-svg{
    margin: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0px;
    z-index: 1;
    pointer-events: none
}
.border svg.border-svg line{
	stroke-width: var(--border-width);
}
</style>
