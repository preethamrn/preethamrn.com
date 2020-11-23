<template>
  <Layout>
    <Container>
      <h1>
        404 - page not found
      </h1>
      <p>Oops! That page returns an</p>
      <g-image
        src="~/assets/images/errorsAllTheWayDown.png"
        width="500"
        quality="50"
        alt="error text with a rainbow gradient and shadows creating a pop-out 3d effect"
      />
    </Container>
  </Layout>
</template>

<script>
import Container from "@/components/Shared/Container"
export default {
  components: {
    Container,
  }
}
</script>
