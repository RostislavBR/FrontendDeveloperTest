<template>
  <div id="app">
    <main class="main">
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
  @font-face {
    font-family: $fontFamily;
    src: url('fonts/SourceSansPro-Regular.ttf');
  }
  @font-face {
    font-family: $fontFamily;
    src: url('fonts/SourceSansPro-SemiBold.ttf');
  }
  * {
    font-family: $fontFamily;
    margin: 0;
    padding: 0;
  }
</style>
