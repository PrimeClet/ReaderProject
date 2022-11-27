<template>
  <div class="js-shuffle row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
    <book-detail v-for="(data, $index) in recentBooks"  :key="'B'+ $index" :book-data="data"></book-detail>
  </div>
</template>

<script>
import BookDetail from "./book";
export default {
  name: "RecentBooks",
  components: {BookDetail},
  props: {
    recentBooks: Array
  }
}
</script>

<style scoped>

</style>
