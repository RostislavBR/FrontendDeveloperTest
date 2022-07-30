<template>
  <div id="app">
    <Header/>
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
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background: $backgroundColor;
  }
  #app {
    padding: 0 32px;
  }
  .container {
    display: flex;
    width: 1920px;
    margin: 0 auto;
  }
</style>
<script>
  import Header from "@/components/Header";

  export default {
    components: { Header }
  }
</script>