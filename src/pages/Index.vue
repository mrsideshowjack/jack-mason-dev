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

    <section class="about">
      <h2>h2. About me</h2>
      <p>
        Hi, I’m Jack and I am full stack web developer currently working at IBM in London as part of the <a href="https://ibm-cio-london.github.io/studio-hiring/">CIO sub domain</a> working on <a href="https://www.ibm.com/partnerworld/public">PartnerWorld</a>; This is IBM’s largest microsite with tens of thousands of pages and users, with mixes of legacy and brand new code bases.
      </p>

      <p>
        I get to work on lots of exciting projects, and I am always seeking new skills and improving my existing ones. We make time in our sprints to spend time experimenting with new technologies, contributing to open source as well as going to tech meetups across London. 
      </p>

      <p>
        I graduated from The University of Portsmouth in 2018, with a Bachelor’s of Science Degree in <a href="http://psd.docstore.port.ac.uk/C2187S.pdf">Web Technologies.</a>
      </p>

      <p>
        Previously I was a full stack developer with <a href="https://kn-i.com">Knownow Information ltd</a> for almost 3 years, where I got work on projects such as <a href="https://consentua.com/">Consentua</a> and <a href="https://entelligently.com/">entelligently.</a>
      </p>
      <p>Here are some of the technologies I am experienced with:</p>
      <ul>
        <li>HTML5, CSS, JS, ES6 etc</li>
        <li>SPA’s with VueJS, React, Polymer</li>
        <li>Git, CI Services,  Gulp & webpack</li>
        <li>REST & graphQL</li>
        <li>Backends with Node & server-less functions</li>
        <li>Databases from DB2 to MongoDB</li>
        <li>IBM Cloud, Google Cloud Platform & Azure</li>
        <li>Sketch, Figma + Photoshop</li>
      </ul>
    </section>
  </main>
</template>

<script>
import IconHand from '~/assets/img/icons/icon-hand.svg'
import IconChevronDown from '~/assets/img/icons/icon-chevron-down.svg'
import SocialLinks from '~/components/SocialLinks.vue'
export default {
  components: {SocialLinks,IconHand,IconChevronDown},
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
.about p{
  max-width: 600px;
  line-height: 1.8rem;
}

.about li{
  list-style: none;
}
.about li:before{
  content:'- '
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
