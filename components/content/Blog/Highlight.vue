<template>
  <div class="highlight-container">
    <ContentSlot :use="$slots.default" />
  </div>
</template>

<style>
.light {
  --app-highlight-background-color: #eeeeee;
}
.dark {
  --app-highlight-background-color: #06111a;
}
.sepia {
  --app-highlight-background-color: #d8cfbb;
}

.highlight-container {
  background: var(--app-highlight-background-color);
  padding: 10px;
}
</style>
