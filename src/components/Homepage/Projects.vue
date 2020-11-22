<template>
  <div class="projects project-grid">
    <ProjectItem v-for="(project, index) in projects" :key="index" :project="project" :index="index" />
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem"
export default {
  name: "projects",
  components: {
    ProjectItem,
  },
  data: () => ({
    projects: [
      // { name: "XYZ", image: "projects/xyz.png", link: "xyz.com", code: "github.com/xyz", blog: "/blog/xyz", description: "DESCRIPTION XYZ" }, // code, blog, description are optional
      // UPDATE THIS TO USE graphql WITH vue-remark. Then the image links can also be updated too.
      { name: "CubersLive", image: "projects/cuberslive.png", link: "https://cuberslive.com", code: "https://gitlab.com/preethamrn", description: "test test test test test test test test test test test test test test" },
      { name: "Twisty Puzzle Cup", image: "projects/cuberslive.png", link: "https://cuberslive.com/tpc", code: "https://gitlab.com/preethamrn", description: "test", blog: "https://youtu.be/eR9VmV4n_Oc" },
      { name: "Twisty Puzzle Cup", image: "projects/cuberslive.png", link: "https://cuberslive.com/tpc", code: "https://gitlab.com/preethamrn", description: "", blog: "https://youtu.be/eR9VmV4n_Oc" },
      { name: "Twisty Puzzle Cup", image: "projects/cuberslive.png", link: "https://cuberslive.com/tpc", code: "https://gitlab.com/preethamrn", description: "", blog: "https://youtu.be/eR9VmV4n_Oc" },
      { name: "Twisty Puzzle Cup", image: "projects/cuberslive.png", link: "https://cuberslive.com/tpc", code: "https://gitlab.com/preethamrn", description: "", blog: "https://youtu.be/eR9VmV4n_Oc" },
      { name: "Twisty Puzzle Cup", image: "projects/cuberslive.png", link: "https://cuberslive.com/tpc", code: "https://gitlab.com/preethamrn", description: "", blog: "https://youtu.be/eR9VmV4n_Oc" },
    ],
  }),
}
</script>

<style>
.project-grid {
  margin-left: -300px;
  margin-right: -300px;
	display: grid;
	grid-template-columns: repeat(auto-fit, 17rem);
	gap: 2rem;
  justify-content: center;
}
@media only screen and (max-width: 1360px) {
  .project-grid {
    margin-left: unset;
    margin-right: unset;
  }
}
</style>
