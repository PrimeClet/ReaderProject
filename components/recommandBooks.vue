<template>
  <div class="js-shuffle row row-cols-1 row-cols-sm-2 row-cols-md-6">
    <book-detail v-for="(data, $index) in recommendedBook"  :key="$index" :book-data="data"></book-detail>
  </div>
</template>

<script>
import BookDetail from "./book";

export default {
  name: "RecommendBooks",
  components: {BookDetail},
  props: {
    recommendedBook: Array
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
