<template>
<div class="p-0 m-0">
<navbar-layout></navbar-layout>
</div>
</template>

<script>
import NavbarLayout from "../components/navbar-layout";

export default {
  name: "default",
  components: {NavbarLayout},
  mounted: function () {
    (function ($) {
      "use strict";
      // INITIALIZATION OF MEGA MENU
      // =======================================================
      // const megaMenu = new HSMegaMenu('.js-mega-menu').init();
    })()
  }
}
</script>

<style scoped>

</style>
