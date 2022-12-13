<template>
<div class="p-0 m-0">
<navbar-layout3></navbar-layout3>
</div>
</template>

<script>
import NavbarLayout from "../components/navbar-layout";
import NavbarLayout3 from "../components/navbar-layout-3";

export default {
  name: "default",
  components: {NavbarLayout3, NavbarLayout},
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
