<template>
  <div class="js-shuffle-item mb-3">
    <!-- Card -->
    <a class="card card-flush card-transition" href="">
      <img class="card-img-top" :src="bookData.picture" alt="Image Description">
      <div class="card-body py-1">
        <div class="d-flex flex-row justify-content-around align-items-center w-100 actions">
          <a class="list-group-item" href="#">
            <i class="fa-regular fa-share-from-square"></i>
          </a>
          <a class="list-group-item" href="/readBook">
            <i class="fa-regular fa-book-open"></i>
          </a>
          <a class="list-group-item" href="#">
            <i class="fa-regular fa-circle-plus"></i>
          </a>
        </div>
        <p class="card-title text-black fw-bold pt-1 pb-0 mb-0">{{ bookData.title }}</p>
        <span class="card-subtitle text-body text-sm">{{ bookData.author }}</span>
        <p class="text-sm stars">
          <i v-for="i in bookData.stars" :key="'st'+i" class="bi bi-star-fill"></i>
          <i v-for="data in 5-bookData.stars" :key="'ust'+data" class="bi bi-star-fill gray"></i>
        </p>
      </div>
    </a>
    <!-- End Card -->
  </div>
</template>

<script>
export default {
  name: "BookDetail",
  props: {
    bookData: Object
  },
  data() {
    return {

    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.stars{
  display: flex;
  flex-direction: row;
  gap: 5px;
}

@media (min-width: 1200px) {
  .actions  i{
    font-size: 20px;
    font-weight: bolder;
  }

  .actions  a:nth-child(2)  i{
    font-size: 15px;
    font-weight: bolder;
    margin-bottom: 70px;
    border: 1px white solid;
    border-radius: 50%;
    padding: 10px;
    background: white;
    color: #008060;
  }

  .card{
    transition: 0.4s ease-out;
    /*box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);*/
  }
  .card:hover {
    transform: translateY(10px) !important;
  }
  .card:hover:before {
    opacity: 1;
  }
  .card:hover .actions {
    opacity: 1;
    transform: translateY(0px);
  }
  .card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 73%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }

  .card .actions {
    position: absolute;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;
    top: 51%;
  }
  .card .actions h1 {
    margin: 0px;
  }
  .card .actions p {
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 8px;
  }
  .card .actions button {
    padding: 0.6rem;
    outline: none;
    border: none;
    border-radius: 3px;
    background: white;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;
  }
  .card .actions i:hover {
    /*border: solid 1px #008060;*/
    /*color: white;*/
  }
}
@media (min-width: 1400px) {
  .actions  i{
    font-size: 20px;
    font-weight: bolder;
  }

  .actions  a:nth-child(2)  i{
    font-size: 15px;
    font-weight: bolder;
    margin-bottom: 70px;
    border: 1px white solid;
    border-radius: 50%;
    padding: 10px;
    background: white;
    color: #008060;
  }

  .card{
    transition: 0.4s ease-out;
    /*box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);*/
  }
  .card:hover {
    transform: translateY(10px) !important;
  }
  .card:hover:before {
    opacity: 1;
  }
  .card:hover .actions {
    opacity: 1;
    transform: translateY(0px);
  }
  .card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 60%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }
  .card-title{
    font-size: 13px;
  }
  .card-subtitle{
    font-size: 11px;
  }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 80% !important;
  }
  .col-lg-3 {
    flex: 0 0 auto;
    width: 20% !important;
  }
  .card .actions {
    position: absolute;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;
    top: 35%;
  }
  .card .actions h1 {
    margin: 0px;
  }
  .card .actions p {
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 8px;
  }
  .card .actions button {
    padding: 0.6rem;
    outline: none;
    border: none;
    border-radius: 3px;
    background: white;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;
  }
  .card .actions i:hover {
    /*border: solid 1px #008060;*/
    /*color: white;*/
  }
}
@media (min-width: 2000px) {
  .card-title{
    font-size: 18px;
  }
  .card-subtitle{
    font-size: 14px;
  }
}
/*@media (min-width: 992px){*/

/*}*/
/*@media (min-width: 768px){*/

/*}*/
/*@media (min-width: 576px){*/

/*}*/
</style>
