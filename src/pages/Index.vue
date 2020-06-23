<template>
  <main>
    <section class="hero">
      <g-image
        class="avatar"
        alt="Me"
        src="~/assets/img/avatar.min.jpg"
        width="135"
      />

      <span class="title"><h1>Hi, I’m Jack </h1><IconHand class="icon-hand" /></span>
      <h2 class="sub-title">
        Full Stack Developer
      </h2>

      <SocialLinks />
      <IconChevronDown class="icon-chevron-down" />
    </section>

    <About />
  </main>
</template>

<script>
import IconHand from '~/assets/img/icons/icon-hand.svg'
import IconChevronDown from '~/assets/img/icons/icon-chevron-down.svg'
import SocialLinks from '~/components/SocialLinks.vue'
import About from '~/components/About.vue'
export default {
  components: {
    SocialLinks,
    IconHand,
    IconChevronDown,
    About
  },
  mounted(){
    this.animWave();
    this.animHeroBuild();
    this.animSmIconsBuild()
  },
  methods: { 
    animWave(){
      this.$anime.timeline({
      targets: '.icon-hand',
      duration: 600,
      direction: 'alternate',
      loop: 10,
      easing: 'easeInOutQuart',
      elasticity: function (el, i, l) {
          return (200 + i * 200);
      }
    }).add({
      translateY: -10,
      rotate: 50,
    }).add({
      translateY: -10,
      rotate: -50,
    })
    },
    animHeroBuild(){
      this.$anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
      }).add({
        targets: '.hero .title',
        scale: [0, 1],
      })
      .add({
        targets: '.hero .avatar',
        scale: [0, 1],
        rotate: [-25,0],
      }, '+=50')
      .add({
        targets: '.hero .sub-title',
        translateX: [25, 0],
        opacity: [0,1]
      }, '+=100')
      .add({
        targets: '.hero .icon-chevron-down',
        translateY: [-250, 0],
        opacity: [0,1]
      }, '+=100');
    },
    animSmIconsBuild(){
      this.$anime.timeline({
        easing: 'easeOutExpo',
        duration: 400,
        targets: '.social-icon-img'
      }).add({
        scale: [0, 1],
      }, '+=50')
    }
  }
}
</script>
<style lang="css">
.hero{
  height: calc(100vh - var(--border-width)*2 - var(--body-padding));
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.hero .avatar{
  border: 3px solid var(--colour-1);
  border-radius: 50%;
}
.hero .title{
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  font-size: 3.5rem;
}
.hero .sub-title{
    font-size: 2rem;
    opacity: 0.7;
}
.hero .icon-chevron-down{
    margin-top: auto;
    margin-bottom: 1rem;
    align-self: center;
}
.hero .title svg.icon-hand{
  fill:white;
  transform-origin: bottom center;
  margin-left: 2rem;
  pointer-events: none
}


@media only screen and (max-width: 700px) {
  .hero{
    text-align: center;
    align-items: center;
  }
  .hero .title{
    justify-content: center;
    margin-top: 1rem;
    margin-top: 2rem;
  }
  .hero .title h1{
    margin:0px
  }
  .hero .title svg.icon-hand{
    margin: 0.5rem;
  }
}
@media only screen and (max-width: 500px) {

}
</style>
