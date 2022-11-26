<template>
  <div>
   <!-- Header -->
    <header class="navbar navbar-expand-lg navbar-shadow navbar-end mb-3">
      <div class="container-fluid mx-4">
        <div class="navbar-nav-wrap">
          <div class="navbar-brand-wrapper d-flex flex-row justify-content-center  align-items-center">
            <!-- Logo -->
            <a class="navbar-brand divide" href="/" aria-label="Space">
<!--              <img class="navbar-brand-logo" src="../assets/svg/logos/logo.svg" alt="Logo">-->
              library
            </a>
            <!-- End Logo -->
            <div class="input-group input-group-merge">
              <div id="inputGroupMergeFullNameAddOn" class="input-group-prepend input-group-text">
                <i class="bi bi-search"></i>
              </div>
              <input id="inputGroupMergeFullName" type="text" class="form-control form-control-sm rounded" placeholder="" aria-label="Mark Williams" aria-describedby="inputGroupMergeFullNameAddOn">
            </div>
          </div>

          <!-- Toggle -->
          <button type="button" class="navbar-toggler ms-auto" data-bs-toggle="collapse" data-bs-target="#navbarNavMenuRightAligned" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarNavMenuRightAligned">
            <span class="navbar-toggler-default">
              <i class="bi-list"></i>
            </span>
                <span class="navbar-toggler-toggled">
              <i class="bi-x"></i>
            </span>
          </button>
          <!-- End Toggle -->

          <nav id="navbarNavMenuRightAligned" class="navbar-nav-wrap-col collapse navbar-collapse">
            <!-- Navbar -->
            <ul class="navbar-nav">
              <li class="nav-item">
                <button type="button" class="btn btn-primary btn-sm me-md-4">Subscribe</button>
              </li>

              <li class="nav-item divide">
                <span>Leslie Etubo</span>
                 <span class="avatar avatar-circle">
                  <img class="avatar-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSA8p9G5B0OoTKwBWZaEnscHAGMWdGctnx4yu9bJzKNg&s" alt="Image Description">
                </span>
              </li>

              <!-- Dropdown -->
              <li class="nav-item me-3">
                <i class="bi bi-bell-fill"></i>
              </li>
              <!-- End Dropdown -->

              <!-- Nav Item -->
              <li class="nav-item">
                <i class="bi bi-person-lines-fill"></i>
              </li>
              <!-- End Nav Item -->
            </ul>
            <!-- End Navbar -->
          </nav>
        </div>
      </div>
    </header>
    <!-- End Header -->

    <main class="pt-2">
        <div class="container-fluid">
          <div class="row px-2">
            <div class="col-2 px-6 sidebar">
              <div class="sub-catego">
                <h6 class="">Browse</h6>
                <p class=""><a href="#" class="py-1"><i class="bi bi-clipboard-data"></i> Top Books</a></p>
                <p><a href="#" class="active py-1"><i class="bi bi-globe-europe-africa"></i> Discover</a></p>
                <p><a href="#" class="py-1"><i class="bi bi-inbox-fill"></i> Categories</a></p>
              </div>
              <div class="sub-catego">
                <h6 class="">Your Books</h6>
                <p><a href="#" class="py-1"><i class="bi bi-book"></i> Reading</a></p>
                <p><a href="#" class="py-1 d-flex flex-row align-items-center align-content-center gap-1"><i class="bi bi-star-fill circle"></i> Favorite Reads</a></p>
                <p><a href="#" class="py-1"><i class="bi bi-clock-history"></i> History</a></p>
              </div>
              <div class="">
                <h6 class="gray">Shelves</h6>
                <p><a href="#" class="py-1"><i class="bi bi-receipt"></i> Your Shelves</a></p>
                <button type="button" class="btn btn-primary btn-sm me-md-4">Create a Shelf</button>
              </div>
            </div>
            <div class="col-8">
              <h6 class="gray pb-3">Recently Added</h6>
              <div class="js-shuffle row row-cols-1 row-cols-sm-2 row-cols-md-6">
                <div class="js-shuffle-item col-sm-6 mb-3" data-groups='["branding"]'>
                  <!-- Card -->
                  <a class="card card-flush card-transition" href="">
                    <img class="card-img-top" src="https://pictures.abebooks.com/inventory/md/md18438027210.jpg" alt="Image Description">
                    <div class="card-body py-1">
                      <div class="d-flex flex-row justify-content-around align-items-center w-100 actions">
                        <i class="fa-regular fa-share-from-square"></i>
                        <i class="fa-regular fa-book-open"></i>
                        <i class="fa-regular fa-circle-plus"></i>
                      </div>
                      <h6 class="card-title pt-1 fw-bold pb-0 mb-0">Steve Jobs</h6>
                      <span class="card-subtitle text-body text-sm">Walter Isaacson</span>
                      <p class="text-sm">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill gray"></i>
                      </p>
                    </div>
                  </a>
                  <!-- End Card -->
                </div>
                <!-- End Col -->

                <div class="js-shuffle-item col-sm-6 mb-3" data-groups='["development"]'>
                  <!-- Card -->
                  <a class="card card-flush card-transition" href="">
                    <img class="card-img-top" src="https://pictures.abebooks.com/inventory/md/md31318643817.jpg" alt="Image Description">
                    <div class="card-body py-1">
                      <div class="d-flex flex-row justify-content-around align-items-center w-100 actions">
                        <i class="fa-regular fa-share-from-square"></i>
                        <i class="fa-regular fa-book-open"></i>
                        <i class="fa-regular fa-circle-plus"></i>
                      </div>
                      <h6 class="card-title fw-bold pt-1 pb-0 mb-0">Radical</h6>
                      <span class="card-subtitle text-body text-sm">David Platt</span>
                      <p class="text-sm">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                      </p>
                    </div>
                  </a>
                  <!-- End Card -->
                </div>
                <!-- End Col -->

                <div class="js-shuffle-item col-sm-6 mb-3" data-groups='["product-design"]'>
                  <!-- Card -->
                  <a class="card card-flush card-transition" href="">
                    <img class="card-img-top" src="https://pictures.abebooks.com/inventory/md/md31318651635.jpg" alt="Image Description">
                    <div class="card-body py-1">
                      <div class="d-flex flex-row justify-content-around align-items-center w-100 actions">
                        <i class="fa-regular fa-share-from-square"></i>
                        <i class="fa-regular fa-book-open"></i>
                        <i class="fa-regular fa-circle-plus"></i>
                      </div>
                      <h6 class="card-title fw-bold pt-1 pb-0 mb-0">Ender's Game</h6>
                      <span class="card-subtitle text-body text-sm">Orson Scott Card</span>
                      <p class="text-sm">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill gray"></i>
                      </p>
                    </div>
                  </a>
                  <!-- End Card -->
                </div>
                <!-- End Col -->

                <div class="js-shuffle-item col-sm-6 mb-3" data-groups='["product-design"]'>
                  <!-- Card -->
                  <a class="card card-flush card-transition" href="">
                    <img class="card-img-top" src="https://pictures.abebooks.com/inventory/md/md31318660059.jpg" alt="Image Description">
                    <div class="card-body py-1">
                      <div class="d-flex flex-row justify-content-around align-items-center w-100 actions">
                        <i class="fa-regular fa-share-from-square"></i>
                        <i class="fa-regular fa-book-open"></i>
                        <i class="fa-regular fa-circle-plus"></i>
                      </div>
                      <h6 class="card-title fw-bold pt-1 pb-0 mb-0">The Perks of Being...</h6>
                      <span class="card-subtitle text-body text-sm">Stephen Chbosky</span>
                      <p class="text-sm">
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                      </p>
                    </div>
                  </a>
                  <!-- End Card -->
                </div>
                <!-- End Col -->

                <div class="js-shuffle-item col-sm-6 mb-3" data-groups='["product"]'>
                  <!-- Card -->
                  <a class="card card-flush card-transition" href="">
                    <img class="card-img-top" src="https://pictures.abebooks.com/inventory/md/md31318653544.jpg" alt="Image Description">
                    <div class="card-body py-1">
                      <div class="d-flex flex-row justify-content-around align-items-center w-100 actions">
                        <i class="fa-regular fa-share-from-square"></i>
                        <i class="fa-regular fa-book-open"></i>
                        <i class="fa-regular fa-circle-plus"></i>
                      </div>
                      <h6 class="card-title fw-bold pt-1 pb-0 mb-0">The Hobbit</h6>
                      <span class="card-subtitle text-body text-sm">J.R.R Tolken</span>
                      <p class="text-sm">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </p>
                    </div>
                  </a>
                  <!-- End Card -->
                </div>
                <!-- End Col -->

                <div class="js-shuffle-item col-sm-6 mb-3" data-groups='["branding"]'>
                  <!-- Card -->
                  <a class="card card-flush card-transition" href="">
                    <img class="card-img-top" src="https://pictures.abebooks.com/inventory/md/md31311104526.jpg" alt="Image Description">
                    <div class="card-body py-1">
                      <div class="d-flex flex-row justify-content-around align-items-center w-100 actions">
                        <i class="fa-regular fa-share-from-square"></i>
                        <i class="fa-regular fa-book-open"></i>
                        <i class="fa-regular fa-circle-plus"></i>
                      </div>
                      <h6 class="card-title fw-bold pt-1 pb-0 mb-0">Holbien - Masterpi...</h6>
                      <span class="card-subtitle text-body text-sm">S.L. Bensusan</span>
                      <p class="text-sm">
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                      </p>
                    </div>
                  </a>
                  <!-- End Card -->
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->
              <h6 class="gray pb-3">Recommended for you</h6>
              <div class="js-shuffle row row-cols-1 row-cols-sm-2 row-cols-md-6">

                <div class="js-shuffle-item col-sm-6 mb-3" data-groups='["product-design"]'>
                  <!-- Card -->
                  <a class="card card-flush card-transition" href="">
                    <img class="card-img-top" src="https://pictures.abebooks.com/inventory/md/md31318651635.jpg" alt="Image Description">
                    <div class="card-body py-1">
                      <div class="d-flex flex-row justify-content-around align-items-center w-100 actions">
                        <i class="fa-regular fa-share-from-square"></i>
                        <i class="fa-regular fa-book-open"></i>
                        <i class="fa-regular fa-circle-plus"></i>
                      </div>
                      <h6 class="card-title fw-bold pt-1 pb-0 mb-0">Ender's Game</h6>
                      <span class="card-subtitle text-body text-sm">Orson Scott Card</span>
                      <p class="text-sm">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill gray"></i>
                      </p>
                    </div>
                  </a>
                  <!-- End Card -->
                </div>
                <!-- End Col -->

                <div class="js-shuffle-item col-sm-6 mb-3" data-groups='["product-design"]'>
                  <!-- Card -->
                  <a class="card card-flush card-transition" href="">
                    <img class="card-img-top" src="https://pictures.abebooks.com/inventory/md/md31318660059.jpg" alt="Image Description">
                    <div class="card-body py-1">
                      <div class="d-flex flex-row justify-content-around align-items-center w-100 actions">
                        <i class="fa-regular fa-share-from-square"></i>
                        <i class="fa-regular fa-book-open"></i>
                        <i class="fa-regular fa-circle-plus"></i>
                      </div>
                      <h6 class="card-title fw-bold pt-1 pb-0 mb-0">The Perks of Being...</h6>
                      <span class="card-subtitle text-body text-sm">Stephen Chbosky</span>
                      <p class="text-sm">
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                      </p>
                    </div>
                  </a>
                  <!-- End Card -->
                </div>
                <!-- End Col -->

                <div class="js-shuffle-item col-sm-6 mb-3" data-groups='["product"]'>
                  <!-- Card -->
                  <a class="card card-flush card-transition" href="">
                    <img class="card-img-top" src="https://pictures.abebooks.com/inventory/md/md31318653544.jpg" alt="Image Description">
                    <div class="card-body py-1">
                      <div class="d-flex flex-row justify-content-around align-items-center w-100 actions">
                        <i class="fa-regular fa-share-from-square"></i>
                        <i class="fa-regular fa-book-open"></i>
                        <i class="fa-regular fa-circle-plus"></i>
                      </div>
                      <h6 class="card-title fw-bold pt-1 pb-0 mb-0">The Hobbit</h6>
                      <span class="card-subtitle text-body text-sm">J.R.R Tolken</span>
                      <p class="text-sm">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </p>
                    </div>
                  </a>
                  <!-- End Card -->
                </div>
                <!-- End Col -->

                <div class="js-shuffle-item col-sm-6 mb-3" data-groups='["branding"]'>
                  <!-- Card -->
                  <a class="card card-flush card-transition" href="">
                    <img class="card-img-top" src="https://pictures.abebooks.com/inventory/md/md31311104526.jpg" alt="Image Description">
                    <div class="card-body py-1">
                      <div class="d-flex flex-row justify-content-around align-items-center w-100 actions">
                        <i class="fa-regular fa-share-from-square"></i>
                        <i class="fa-regular fa-book-open"></i>
                        <i class="fa-regular fa-circle-plus"></i>
                      </div>
                      <h6 class="card-title fw-bold pt-1 pb-0 mb-0">Holbien - Masterpi...</h6>
                      <span class="card-subtitle text-body text-sm">S.L. Bensusan</span>
                      <p class="text-sm">
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                      </p>
                    </div>
                  </a>
                  <!-- End Card -->
                </div>
                <!-- End Col -->
                <div class="js-shuffle-item col-sm-6 mb-3" data-groups='["product"]'>
                  <!-- Card -->
                  <a class="card card-flush card-transition" href="">
                    <img class="card-img-top" src="https://pictures.abebooks.com/inventory/md/md31318653544.jpg" alt="Image Description">
                    <div class="card-body py-1">
                      <div class="d-flex flex-row justify-content-around align-items-center w-100 actions">
                        <i class="fa-regular fa-share-from-square"></i>
                        <i class="fa-regular fa-book-open"></i>
                        <i class="fa-regular fa-circle-plus"></i>
                      </div>
                      <h6 class="card-title fw-bold pt-1 pb-0 mb-0">The Hobbit</h6>
                      <span class="card-subtitle text-body text-sm">J.R.R Tolken</span>
                      <p class="text-sm">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </p>
                    </div>
                  </a>
                  <!-- End Card -->
                </div>
                <!-- End Col -->

                <div class="js-shuffle-item col-sm-6 mb-3" data-groups='["branding"]'>
                  <!-- Card -->
                  <a class="card card-flush card-transition" href="">
                    <img class="card-img-top" src="https://pictures.abebooks.com/inventory/md/md31311104526.jpg" alt="Image Description">
                    <div class="card-body py-1">
                      <div class="d-flex flex-row justify-content-around align-items-center w-100 actions">
                        <i class="fa-regular fa-share-from-square"></i>
                        <i class="fa-regular fa-book-open"></i>
                        <i class="fa-regular fa-circle-plus"></i>
                      </div>
                      <h6 class="card-title fw-bold pt-1 pb-0 mb-0">Holbien - Masterpi...</h6>
                      <span class="card-subtitle text-body text-sm">S.L. Bensusan</span>
                      <p class="text-sm">
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                        <i class="bi bi-star-fill gray"></i>
                      </p>
                    </div>
                  </a>
                  <!-- End Card -->
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->

            </div>
            <div class="col-2"></div>
          </div>
        </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
.divide {
  padding-right: 25px;
  border-right: solid 1px gray !important;
  margin-right: 24px !important;
}

.circle{
  border: solid 2px;
  border-radius: 50%;
  padding: 2px;
  font-size: 9px;
  height: 20px
}

.sub-catego{
  padding-bottom: 18px;
  border-bottom: solid 1px gray;
  margin-bottom: 27px;
  border-bottom-width: thin;
}

.text-sm{
  font-size: 13px;
}

.gray{
  color: gray;
}

.sub-catego h6{
  color: gray;
}

.sidebar a {
  color: #2f3032;
  display: block;
}

.sub-catego .active {
  background: gainsboro;
  border-radius: 3px;
  padding-left: 5px;
}

.sidebar p {
  margin-bottom: 5px;
  padding-left: 5px;
}
.actions  i{
  font-size: 20px;
  font-weight: bolder;
}

.actions  i:nth-child(2){
  font-size: 14px;
  font-weight: bolder;
  margin-bottom: 44px;
  border: 1px white solid;
  border-radius: 50%;
  padding: 7px;
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
  height: 75%;
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
  top: 59%;
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
  background: dodgerblue;
  color: white;
}
</style>
