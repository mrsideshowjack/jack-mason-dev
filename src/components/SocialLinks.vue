<template>
  <div class="socal-links">
    <a
      aria-label="Github Link"
      :href="githubUrl"
    ><IconGithub class="social-icon-img" /></a>
    <a
      aria-label="Twitter Link"
      :href="twitterUrl"
    ><IconTwitter class="social-icon-img" /></a>
    <a
      aria-label="Instagram Link"
      :href="instagramUrl"
    ><IconInstagram class="social-icon-img" /></a>
    <a
      aria-label="LinkedIn Link"
      :href="linkedinUrl"
    ><IconLinkedin class="social-icon-img" /></a>
    <a
      aria-label="Codepen Link"
      :href="codepenUrl"
    ><IconCodepen class="social-icon-img" /></a>
  </div>
</template>

<script>
import IconGithub from '@/assets/img/icons/icon-logo-github.svg'
import IconTwitter from '@/assets/img/icons/icon-logo-twitter.svg' 
import IconInstagram from '@/assets/img/icons/icon-logo-instagram.svg'
import IconLinkedin from '@/assets/img/icons/icon-logo-linkedin.svg'
import IconCodepen from '@/assets/img/icons/icon-logo-codepen.svg'

export default {
    name: 'SocialLinks',
    components:{
        IconGithub,
        IconTwitter,
        IconInstagram,
        IconLinkedin,
        IconCodepen
    },
    data() { 
        return { 
            githubUrl: process.env.GRIDSOME_GITHUB_URL,
            twitterUrl: process.env.GRIDSOME_TWITTER_URL,
            instagramUrl: process.env.GRIDSOME_INSTAGRAM_URL,
            linkedinUrl: process.env.GRIDSOME_LINKEDIN_URL,
            codepenUrl: process.env.GRIDSOME_CODEPEN_URL
        }
    }
}
</script>
<style lang="css">
a .social-icon-img{
  fill: white;
}
a:hover .social-icon-img,
a:focus .social-icon-img{
  fill: var(--colour-2);
}
</style>
