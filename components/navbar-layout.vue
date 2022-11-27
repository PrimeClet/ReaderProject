<template>
 <div class="m-0 p-0">
   <!-- Header -->
   <header class="navbar navbar-expand-lg navbar-shadow navbar-end mb-3">
     <div class="container-fluid mx-4">
       <div class="navbar-nav-wrap">
         <div class="navbar-brand-wrapper d-flex flex-row justify-content-center  align-items-center">
           <!-- Logo -->
           <a class="navbar-brand divide" href="/" aria-label="Space">
             <img class="navbar-brand-logo" src="@/static/logos/logo.svg" alt="Logo">
           </a>
           <!-- End Logo -->
           <div class="input-group input-group-merge d-none d-md-block d-lg-block">
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
         <div class="col-md-2 px-6 d-none d-md-block d-lg-block">
           <p class="">BROWSE</p>
           <ul class="list-group list-group-flush">
             <a class="list-group-item" href="#">
               <i class="bi bi-clipboard-data list-group-icon"></i> Top Books
             </a>
             <a class="list-group-item active" href="#">
               <i class="bi bi-globe-europe-africa list-group-icon"></i> Discover
             </a>
             <a class="list-group-item" href="#">
               <i class="bi bi-inbox-fill list-group-icon"></i> Categories
             </a>
           </ul>
           <span class="divider-end py-4" ></span>
           <p class="">YOUR BOOKS</p>
           <ul class="list-group list-group-flush">
             <a class="list-group-item" href="#">
               <i class="bi bi-book list-group-icon"></i> Reading
             </a>
             <a class="list-group-item" href="#">
               <i class="fa-sharp fa-solid fa-star-sharp list-group-icon"></i>Favorite Reads
             </a>
             <a class="list-group-item" href="#">
               <i class="bi bi-clock-history list-group-icon"></i> History
             </a>
           </ul>
           <span class="divider-end py-4"></span>
           <p class="">SHELVES</p>
           <ul class="list-group list-group-flush">
             <a class="list-group-item" href="#">
               <i class="bi bi-receipt list-group-icon"></i> Your Shelves
             </a>
<!--             <button type="button" class="btn btn-primary btn-sm list-group-item" href="#">-->
<!--               <i class="bi bi-clock-history list-group-icon"></i> History-->
<!--             </button>-->
           </ul>
           <div class="py-2 px-3">
             <button type="button" class="btn btn-primary btn-sm me-md-4">Create a Shelf</button>
           </div>
         </div>
         <nuxt/>
       </div>
     </div>
   </main>
 </div>

</template>

<script>
export default {
  name: "navbar-layout",
  mounted() {

  }
}
</script>

<style scoped>
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

.list-group-item.active {
  z-index: 2;
  color: black;
  background-color: #cacbcb;
  border-color: #b6b9b8;
  border-radius: 4px;
}
</style>
