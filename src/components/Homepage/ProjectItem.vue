<template>
  <div class="project-item">
    <!-- TODO: Support linking to internal apps in same tab? -->
		<a :href="project.link" :aria-labelledby="project.name" target="_blank"></a> 
    <p style="padding-left: 1rem">
		  <g-image v-if='project.image' :src="require(`!!assets-loader!@images/${project.image}`)" :alt="project.name + ' Logo'" width="100" height="50" fit="contain"></g-image>
      <b aria-hidden="true">{{project.name}}</b>
    </p>
		<div class="item__overlay">
			<div class="item__body">
        <!-- TODO: add font awesome icons linking to various places -->
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: "project-item",
  props: ["project", "index"],
}
</script>

<style scoped lang="scss">
// TODO: remove unnecessary styles
.project-item {
  position: relative;
  height: 5rem;
  background-color: white;
  overflow-y: hidden;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.1);

  b {
    margin: 0;
    color: black;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    &:hover,
    &:focus {
      ~ .item__overlay {
        transform: translate3d(0, 0, 0);
      }
    }
  }
}

img {
  float: right;
  height: 50px;
  width: 100px;
}

.item__overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  transition: transform 300ms;
  background-color: lighten(turquoise, 15%);
  transform: translate3d(0, calc(100%), 0);
}

.item__body {
  flex-grow: 1;
  padding: 1rem;

  p {
    margin: 0;
  }
}
</style>
