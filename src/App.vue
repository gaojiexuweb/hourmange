<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
#app {
  height: 100%;
}
#app > div {
  height: 100%;
  overflow: auto;
}
</style>
