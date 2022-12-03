<template>
  <div class="col-lg-10 col-md-12  col-sm-12">
    <div class="col-lg-9 col-md-12 col-sm-12">
      <p class="gray pb-3 entete">Recently Added</p>
      <recent-books :recent-books="recentBooks"></recent-books>
      <!-- End Row -->
      <p class="gray pb-3 entete">Recommended for you</p>
      <recommend-books :recommended-book="books"></recommend-books>
      <!-- End Row -->

    </div>
    <div class="col-md-3 col-sm-12"></div>
  </div>
</template>

<script>
import RecommendBooks from "../components/recommandBooks";
import RecentBooks from "../components/recentBooks";
export default {
  name: 'IndexPage',
  components: {RecentBooks, RecommendBooks},
  layout: 'default',
  data(){
    return{
      books: [
        {
          id: 0,
          title: "Holbien - Masterpi...",
          author: "S.L. Bensusan",
          stars: 4,
          picture: "https://pictures.abebooks.com/inventory/md/md31311104526.jpg",
        },
        {
          id: 1,
          title: "The Hobbit",
          author: "J.R.R Tolken",
          stars: 3,
          picture: "https://pictures.abebooks.com/inventory/md/md31318653544.jpg",
        },
        {
          id: 2,
          title: "The Perks of Being...",
          author: "Stephen Chbosky",
          stars: 2,
          picture: "https://pictures.abebooks.com/inventory/md/md31318660059.jpg",
        },
        {
          id: 3,
          title: "Ender's Game",
          author: "Orson Scott Card",
          stars: 1,
          picture: "https://pictures.abebooks.com/inventory/md/md31318651635.jpg",
        },
        {
          id: 4,
          title: "Steve Jobs",
          author: "Walter Isaacson",
          stars: 4,
          picture: "https://pictures.abebooks.com/inventory/md/md18438027210.jpg",
        },
        {
          id: 5,
          title: "Radical",
          author: "David Platt",
          stars: 0,
          picture: "https://pictures.abebooks.com/inventory/md/md31318643817.jpg",
        },
        {
          id: 6,
          title: "The Perks of Being...",
          author: "Stephen Chbosky",
          stars: 2,
          picture: "https://pictures.abebooks.com/inventory/md/md31318660059.jpg",
        },
        {
          id: 7,
          title: "Ender's Game",
          author: "Orson Scott Card",
          stars: 1,
          picture: "https://pictures.abebooks.com/inventory/md/md31318651635.jpg",
        },
        {
          id: 8,
          title: "Steve Jobs",
          author: "Walter Isaacson",
          stars: 4,
          picture: "https://pictures.abebooks.com/inventory/md/md18438027210.jpg",
        },
        {
          id: 9,
          title: "Radical",
          author: "David Platt",
          stars: 0,
          picture: "https://pictures.abebooks.com/inventory/md/md31318643817.jpg",
        },
        {
          id: 10,
          title: "Holbien - Masterpi...",
          author: "S.L. Bensusan",
          stars: 4,
          picture: "https://pictures.abebooks.com/inventory/md/md31311104526.jpg",
        },
        {
          id: 11,
          title: "The Hobbit",
          author: "J.R.R Tolken",
          stars: 3,
          picture: "https://pictures.abebooks.com/inventory/md/md31318653544.jpg",
        },
      ],
      recentBooks: [
        {
          id: 0,
          title: "The Perks of Being...",
          author: "Stephen Chbosky",
          stars: 2,
          picture: "https://pictures.abebooks.com/inventory/md/md31318660059.jpg",
        },
        {
          id: 1,
          title: "Ender's Game",
          author: "Orson Scott Card",
          stars: 1,
          picture: "https://pictures.abebooks.com/inventory/md/md31318651635.jpg",
        },
        {
          id: 2,
          title: "Steve Jobs",
          author: "Walter Isaacson",
          stars: 4,
          picture: "https://pictures.abebooks.com/inventory/md/md18438027210.jpg",
        },
        {
          id: 3,
          title: "Radical",
          author: "David Platt",
          stars: 0,
          picture: "https://pictures.abebooks.com/inventory/md/md31318643817.jpg",
        },
        {
          id: 4,
          title: "Holbien - Masterpi...",
          author: "S.L. Bensusan",
          stars: 4,
          picture: "https://pictures.abebooks.com/inventory/md/md31311104526.jpg",
        },
        {
          id: 5,
          title: "The Hobbit",
          author: "J.R.R Tolken",
          stars: 3,
          picture: "https://pictures.abebooks.com/inventory/md/md31318653544.jpg",
        },
      ],
    }
  }
}
</script>

<style>
.text-sm{
  font-size: 13px;
}
.entete{
  font-size: larger;
  font-family: 'Roboto';
}

.gray{
  color: gray;
}
</style>
