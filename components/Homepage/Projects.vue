<template>
  <div class="project-grid">
    <ProjectItem v-for="(project, index) in projects" :key="index" :project="project" :index="index" />
  </div>
</template>

<script>
export default {
  name: "projects",
  data: () => ({
    projects: [
      // { name: "XYZ", image: "projects/xyz.png", link: "xyz.com", code: "github.com/xyz", blog: "/blog/xyz", description: "DESCRIPTION XYZ" }, // code, blog, description are optional
      // UPDATE THIS TO USE graphql WITH vue-remark. Then the image links can also be updated too.
      {
        name: "Pokemon Dens",
        image: "projects/pokemondens.png",
        link: "https://www.preethamrn.com/pokemondens",
        code: "https://github.com/preethamrn/pokemondens",
        description:
          "An interactive webapp for visualizing the Pokemon Sword and Shield wild area. Supports searching for Pokemon and Berries and hovering over den locations.",
        blog: "https://www.reddit.com/r/PokemonSwordAndShield/comments/es50l6/update_interactive_map_of_the_wild_area_with_list/",
      },
      {
        name: "CubersLive",
        image: "projects/cuberslive.png",
        link: "https://www.cuberslive.com",
        code: "https://gitlab.com/preethamrn",
        description:
          "A cloud based Rubik's cube timer that allows multiple users to solve the same scramble simultaneously. This enables cubers to finally race each other online in real-time.",
      },
      {
        name: "Twisty Puzzle Cup",
        image: "projects/tpc.png",
        link: "https://www.cuberslive.com/tpc",
        code: "https://gitlab.com/preethamrn",
        description:
          "A Live streamed online Rubik's cube competition featuring a 64 competitor bracket, competiting in multiple events over 3 weeks.",
        blog: "https://youtu.be/eR9VmV4n_Oc",
      },
      {
        name: "Cubing AlgTrainer",
        image: "projects/algtrainer.png",
        link: "https://www.preethamrn.com/cubing/algtrainer",
        code: "https://github.com/preethamrn/cubing",
        description: "A algorithm trainer used by speed cubers to practice algorithms by syncing to a bluetooth cube.",
      },
      {
        name: "Scott Simulator",
        image: "projects/scottsim.png",
        link: "https://www.preethamrn.com/ScottSimulator",
        code: "https://github.com/preethamrn/ScottSimulator",
        description:
          "A WebGL game similar to The Stanley Parable set in UCLA where you play as our professor - Scott. Earned the most impressive project and 2nd most favorite out of 27.",
      },
      {
        name: "Bruin Menu",
        image: "projects/bruinmenu.png",
        link: "https://play.google.com/store/apps/details?id=com.rhombus.bruinmenu",
        code: "https://github.com/preethamrn/BruinMenu",
        description:
          "An Android application that displays the daily menus of all the UCLA dining halls, shows nutritional data of food, and keeps track of favorites and swipes remaining.",
      },
      // TODO: someday remake BLOB into a javascript game.
      {
        name: "BLOB",
        image: "projects/blobv1.png",
        link: "https://github.com/preethamrn/BLOBv0.1",
        code: "https://github.com/preethamrn/BLOBv0.1",
        description:
          "My first C++ project (built in 11th grade). A Multiplayer Desktop game similar to Bomberman with Capture the Flag and Zombies gamemodes added. Save settings locally using file I/O. Supports up to 4 players.",
      },

      // TODO: include WCA/cubing.js contribution
      // TODO: include open source contributions or Uber contributions
    ],
  }),
};
</script>

<style>
.project-grid {
  max-width: 1360px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 17rem);
  gap: 2rem;
  justify-content: center;
}
</style>
