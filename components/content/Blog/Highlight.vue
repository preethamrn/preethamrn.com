<template>
  <div class="highlight-container">
    <ContentSlot :use="$slots.default" />
  </div>
</template>

<style>
:root {
  --app-highlight-background-color: #eeeeee;
}
[theme="dark"] {
  --app-highlight-background-color: #06111a;
}
[theme="sepia"] {
  --app-highlight-background-color: #d8cfbb;
}

.highlight-container {
  background: var(--app-highlight-background-color);
  padding: 10px;
}
</style>
