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
  body, html {
    width: 1920px;
    height: 100%;
    overflow-x: hidden;
    background: $backgroundColor;
  }
  /*#app {*/
  /*  */
  /*}*/
  .container {
    display: flex;
    flex-direction: column;
    width: 1024px;
    margin: 0 auto;
    padding: 0 32px;
  }
</style>
<script>

</script>