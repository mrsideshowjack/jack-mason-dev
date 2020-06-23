<template>
  <section class="projects">
    <h2>h2. Projects</h2>
    <div
      v-for="edge in $static.projects.edges"
      :key="edge.node.id"
      class="project"
    >
      <a
        v-if="edge.node.href"
        :href="edge.node.href"
      >
        <h3 class="title">h3. {{ edge.node.title }} <span
          v-if="edge.node.wip"
          class="wip"
        >WIP</span></h3>
      </a>
      <span
        v-else
        disabled
      >
        <h3 class="title">h3. {{ edge.node.title }} <span
          v-if="edge.node.wip"
          class="wip"
        >WIP</span></h3>
      </span>

      <span class="date">{{ edge.node.date }}</span>

      <p class="description">
        {{ edge.node.description }}
      </p>
    
      <div class="tags">
        <span
          v-for="(tag, index) in edge.node.tags"
          :key="index"
          class="tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  projects: allProjects(sortBy: "date", order: DESC) {
    edges {
      node {
        id
        title
        href
        wip
        date
        description
        tags
      }
    }
  }
}
</static-query>

<script>
export default {
    name: 'Projects',
}
</script>
<style lang="css">
.projects{
    margin-top: 40vh;
}
.projects .project{
    margin-top: 3rem;
    max-width: 600px;
}

.projects .project .title{
    margin-bottom: 0.5rem;
}

.projects .project .wip{
    margin: 0.2rem;
    background-color: var(--colour-2);
    color: black;
    padding: 0.4rem;
    border-radius: 0.6rem;
}

.projects .project .date{
    font-size: 0.8rem;
}

.projects .project .tags{
    max-width: 600px;
    justify-content: flex-start;
    display: flex;
    flex-wrap: wrap;
}
.projects .project .tags .tag{
    margin: 0.2rem;
    font-size: 0.8rem;
    background-color: rgba(var(--colour-1-rgb), 0.3);
    padding: 0.4rem;
    border-radius: 0.6rem;
}
.projects .project .tags .tag:nth-child(1){
    margin-left: 0rem;
}
</style>
