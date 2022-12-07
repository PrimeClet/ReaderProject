<template>
 <div class="m-0 p-0">
   <!-- Header -->
   <header id="header" class="navbar navbar-expand-lg navbar-light navbar-end bg-white my-3">
     <div class="container-fluid px-6">
       <nav class="js-mega-menu navbar-nav-wrap hs-menu-initialized hs-menu-horizontal">
         <!-- Default Logo -->
         <a class="navbar-brand" href="/" aria-label="Space">
           <img class="navbar-brand-logo" src="@/static/logos/logo.svg" alt="Image Description">
         </a>
         <ul class="navbar-nav">
           <li class="nav-divider d-none d-md-block d-lg-block d-xl-block"></li>
         </ul>
         <div class="pl-2 d-none d-md-block d-lg-block d-xl-block">
           <input class="form-control form-control-sm d-inline-block" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
         </div>

         <!-- End Default Logo -->

         <!-- Toggler -->
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-default">
            <i class="bi-list"></i>
          </span>
           <span class="navbar-toggler-toggled">
            <i class="bi-x"></i>
          </span>
         </button>
         <!-- End Toggler -->

         <!-- Collapse -->
         <div class="collapse navbar-collapse" id="navbarNavDropdown">
           <ul class="navbar-nav">
             <div class="col-12 px-6 d-lg-none d-xl-none d-xxl-none">
               <p class="form-label">BROWSE</p>
               <ul class="list-group list-group-flush">
                 <a class="list-group-item tabLinks" href="#" @click="makeItActive($event, 'topBooks')" ref="topBooks">
                   <i class="bi bi-clipboard-data list-group-icon"></i> Top Books
                 </a>
                 <a class="list-group-item tabLinks active" href="#" @click="makeItActive($event, 'discover')" ref="discover">
                   <i class="bi bi-globe-europe-africa list-group-icon"></i> Discover
                 </a>
                 <a class="list-group-item tabLinks" href="#" @click="makeItActive($event, 'categorie')" ref="categorie">
                   <i class="bi bi-inbox-fill list-group-icon"></i> Categories
                 </a>
               </ul>
               <span class="divider-end py-4" ></span>
               <p class="form-label">YOUR BOOKS</p>
               <ul class="list-group list-group-flush">
                 <a class="list-group-item tabLinks" href="#" @click="makeItActive($event, 'reading')" ref="reading">
                   <i class="bi bi-book list-group-icon"></i> Reading
                 </a>
                 <a class="list-group-item tabLinks" href="#" @click="makeItActive($event, 'favorite')" ref="favorite">
                   <i class="bi bi-heart-fill list-group-icon"></i> Favorite Reads
                 </a>
                 <a class="list-group-item tabLinks" href="#" @click="makeItActive($event, 'history')" ref="history">
                   <i class="bi bi-clock-history list-group-icon"></i> History
                 </a>
               </ul>
               <span class="divider-end py-4"></span>
               <p class="form-label">SHELVES</p>
               <ul class="list-group list-group-flush">
                 <a class="list-group-item tabLinks" href="#" @click="makeItActive($event, 'shelves')" ref="shelves">
                   <i class="bi bi-receipt list-group-icon"></i> Your Shelves
                 </a>
                 <a class="list-group-item" href="#" v-for="(data, $index) in shelves" :key="$index">
                   <p> {{ data.title }}</p>
                 </a>
                 <!--             <button type="button" class="btn btn-primary btn-sm list-group-item" href="#">-->
                 <!--               <i class="bi bi-clock-history list-group-icon"></i> History-->
                 <!--             </button>-->
               </ul>
               <div class="py-2 px-3">
                 <!-- Button trigger modal -->
                 <button type="button" class="btn btn-primary btn-sm me-md-4" data-bs-toggle="modal" data-bs-target="#createShelf">
                   Create a Shelf
                 </button>
                 <!-- End Button trigger modal -->

                 <!-- Modal -->
                 <div id="createShelf" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                   <div class="modal-dialog modal-dialog-centered" role="document">
                     <div class="modal-content">
                       <div class="modal-header">
                         <h5 class="modal-title" id="exampleModalCenterTitle">Add Shelves</h5>
                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                       </div>
                       <div class="modal-body">
                         <!-- Form -->
                         <div class="mb-3">
                           <label class="form-label" for="titleLg">Shelf's Title</label>
                           <input type="text" class="form-control form-control-lg" name="title" id="titleLg" placeholder="shelf title" aria-label="" required v-model="title">
                           <span class="invalid-feedback">Please enter a valid Shel Title address.</span>
                         </div>
                         <!-- End Form -->

                         <!-- Form -->
                         <div class="mb-3">
                           <label class="form-label" for="contentLg">Content Description</label>
                           <input type="password" class="form-control form-control-lg" name="password" id="contentLg" placeholder="8+ characters required" aria-label="8+ characters required" required v-model="content">
                           <span class="invalid-feedback">Your password is invalid. Please try again.</span>
                         </div>
                       </div>
                       <div class="modal-footer">
                         <button type="button" class="btn btn-white" data-bs-dismiss="modal">Close</button>
                         <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addShelves">Add </button>
                       </div>
                     </div>
                   </div>
                 </div>
                 <!-- End Modal -->
               </div>
             </div>

             <li class="nav-divider"></li>

             <!-- Log in -->
             <li class="nav-item">
               <a class="js-animation-link btn btn-ghost-secondary btn-no-focus me-2 me-lg-0" href="/login" role="button" data-bs-toggle="modal" data-bs-target="#signupModal" data-hs-show-animation-options="{
                           &quot;targetSelector&quot;: &quot;#signupModalFormLogin&quot;,
                           &quot;groupName&quot;: &quot;idForm&quot;
                         }" data-hs-show-animation-link-group="idForm">Log in</a>

               <a class="js-animation-link d-lg-none btn btn-primary" href="/signup" role="button" data-bs-toggle="modal" data-bs-target="#signupModal" data-hs-show-animation-options="{
                           &quot;targetSelector&quot;: &quot;#signupModalFormSignup&quot;,
                           &quot;groupName&quot;: &quot;idForm&quot;
                         }" data-hs-show-animation-link-group="idForm">
                 <i class="bi-person-circle me-1"></i> Sign up
               </a>
             </li>
             <!-- End Log in -->

             <!-- Sign up -->
             <li class="nav-item">
               <a class="js-animation-link d-none d-lg-inline-block btn btn-primary" href="javascript:;" role="button" data-bs-toggle="modal" data-bs-target="#signupModal" data-hs-show-animation-options="{
                           &quot;targetSelector&quot;: &quot;#signupModalFormSignup&quot;,
                           &quot;groupName&quot;: &quot;idForm&quot;
                         }" data-hs-show-animation-link-group="idForm">
                 <i class="bi-person-circle me-1"></i> Sign up
               </a>
             </li>
             <!-- End Sign up -->
           </ul>
         </div>
         <!-- End Collapse -->
       </nav>
     </div>
   </header>
   <!-- Header -->
   <header class="docs-navbar navbar navbar-expand-lg navbar-end navbar-light bg-white">
     <div class="container">
       <div class="js-mega-menu navbar-nav-wrap">
         <!-- Logo -->
         <a class="navbar-brand" href="../index.html" aria-label="Space">
<!--           <img class="navbar-brand-logo" src="../assets/svg/logos/logo.svg" alt="Logo">-->
           toto
         </a>
         <!-- End Logo -->

         <!-- Toggle -->
         <button type="button" class="navbar-toggler ms-auto" data-bs-toggle="collapse" data-bs-target="#megaMenuAlignmentToggler" aria-label="Toggle navigation" aria-expanded="false" aria-controls="megaMenuAlignmentToggler">
        <span class="navbar-toggler-default">
          <i class="bi-list"></i>
        </span>
           <span class="navbar-toggler-toggled">
          <i class="bi-x"></i>
        </span>
         </button>
         <!-- End Toggle -->

         <nav class="navbar-nav-wrap-col collapse navbar-collapse" id="megaMenuAlignmentToggler">
           <!-- Navbar -->
           <ul class="navbar-nav ms-auto">
             <!-- Nav Item -->
             <li class="hs-has-mega-menu nav-item"
                 data-hs-mega-menu-item-options='{
                "desktop": {
                  "maxWidth": "85%"
                }
              }'>
               <a class="hs-mega-menu-invoker nav-link dropdown-toggle" href="#" id="megaMenuAlignmentMegaMenu20rem" role="button" data-bs-toggle="dropdown" aria-expanded="false">Left aligned</a>

               <!-- Mega Menu -->
               <div class="hs-mega-menu dropdown-menu w-100" aria-labelledby="megaMenuAlignmentMegaMenu20rem">
                 <!-- Main Content -->
                 <div class="navbar-dropdown-menu-inner">
                   <div class="row">
                     <div class="col-sm-6 col-md mb-3 mb-md-0">
                       <span class="dropdown-header">One</span>
                       <a class="dropdown-item" href="#">One</a>
                       <a class="dropdown-item" href="#">Two</a>
                       <a class="dropdown-item" href="#">Three</a>
                     </div>

                     <div class="col-sm-6 col-md">
                       <span class="dropdown-header">Two</span>
                       <a class="dropdown-item" href="#">One</a>
                       <a class="dropdown-item" href="#">Two</a>
                       <a class="dropdown-item" href="#">Three</a>
                     </div>
                   </div>
                   <!-- End Row -->
                 </div>
                 <!-- End Main Content -->
               </div>
               <!-- End Mega Menu -->
             </li>
             <!-- End Nav Item -->

             <!-- Nav Item -->
             <li class="hs-has-mega-menu nav-item"
                 data-hs-mega-menu-item-options='{
                "desktop": {
                  "position": "right",
                  "maxWidth": "85%"
                }
              }'>
               <a class="hs-mega-menu-invoker nav-link dropdown-toggle" href="#" id="megaMenuAlignmentMegaMenuRightAligned" role="button" data-bs-toggle="dropdown" aria-expanded="false">Right aligned</a>

               <!-- Mega Menu -->
               <div class="hs-mega-menu dropdown-menu w-100" aria-labelledby="megaMenuAlignmentMegaMenuRightAligned">
                 <!-- Main Content -->
                 <div class="navbar-dropdown-menu-inner">
                   <div class="row">
                     <div class="col-sm-6 col-md mb-3 mb-md-0">
                       <span class="dropdown-header">One</span>
                       <a class="dropdown-item" href="#">One</a>
                       <a class="dropdown-item" href="#">Two</a>
                       <a class="dropdown-item" href="#">Three</a>
                     </div>

                     <div class="col-sm-6 col-md mb-3 mb-md-0">
                       <span class="dropdown-header">Two</span>
                       <a class="dropdown-item" href="#">One</a>
                       <a class="dropdown-item" href="#">Two</a>
                       <a class="dropdown-item" href="#">Three</a>
                     </div>

                     <div class="col-sm-6 col-md">
                       <span class="dropdown-header">Three</span>
                       <a class="dropdown-item" href="#">One</a>
                       <a class="dropdown-item" href="#">Two</a>
                       <a class="dropdown-item" href="#">Three</a>
                     </div>
                   </div>
                   <!-- End Row -->
                 </div>
                 <!-- End Main Content -->
               </div>
               <!-- End Mega Menu -->
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
         <div class="col-md-2 px-6 d-none d-md-none d-lg-block">
           <p class="form-label">BROWSE</p>
           <ul class="list-group list-group-flush">
             <a class="list-group-item tabLinks" href="#" @click="makeItActive($event, 'topBooks')" ref="topBooks">
               <i class="bi bi-clipboard-data list-group-icon"></i> Top Books
             </a>
             <a class="list-group-item tabLinks active" href="#" @click="makeItActive($event, 'discover')" ref="discover">
               <i class="bi bi-globe-europe-africa list-group-icon"></i> Discover
             </a>
             <a class="list-group-item tabLinks" href="#" @click="makeItActive($event, 'categorie')" ref="categorie">
               <i class="bi bi-inbox-fill list-group-icon"></i> Categories
             </a>
           </ul>
           <span class="divider-end py-4" ></span>
           <p class="form-label">YOUR BOOKS</p>
           <ul class="list-group list-group-flush">
             <a class="list-group-item tabLinks" href="#" @click="makeItActive($event, 'reading')" ref="reading">
               <i class="bi bi-book list-group-icon"></i> Reading
             </a>
             <a class="list-group-item tabLinks" href="#" @click="makeItActive($event, 'favorite')" ref="favorite">
               <i class="bi bi-heart-fill list-group-icon"></i> Favorite Reads
             </a>
             <a class="list-group-item tabLinks" href="#" @click="makeItActive($event, 'history')" ref="history">
               <i class="bi bi-clock-history list-group-icon"></i> History
             </a>
           </ul>
           <span class="divider-end py-4"></span>
           <p class="form-label">SHELVES</p>
           <ul class="list-group list-group-flush">
             <a class="list-group-item tabLinks" href="#" @click="makeItActive($event, 'shelves')" ref="shelves">
               <i class="bi bi-receipt list-group-icon"></i> Your Shelves
             </a>
             <a class="list-group-item" href="#" v-for="(data, $index) in shelves" :key="$index">
               <p> {{ data.title }}</p>
             </a>
<!--             <button type="button" class="btn btn-primary btn-sm list-group-item" href="#">-->
<!--               <i class="bi bi-clock-history list-group-icon"></i> History-->
<!--             </button>-->
           </ul>
           <div class="py-2 px-3">
             <!-- Button trigger modal -->
             <button type="button" class="btn btn-primary btn-sm me-md-4" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
               Create a Shelf
             </button>
             <!-- End Button trigger modal -->

             <!-- Modal -->
             <div id="exampleModalCenter" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
               <div class="modal-dialog modal-dialog-centered" role="document">
                 <div class="modal-content">
                   <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalCenterTitle">Add Shelves</h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <div class="modal-body">
                     <!-- Form -->
                     <div class="mb-3">
                       <label class="form-label" for="title">Shelf's Title</label>
                       <input type="text" class="form-control form-control-lg" name="title" id="title" placeholder="shelf title" aria-label="" required v-model="title">
                       <span class="invalid-feedback">Please enter a valid Shel Title address.</span>
                     </div>
                     <!-- End Form -->

                     <!-- Form -->
                     <div class="mb-3">
                       <label class="form-label" for="content">Content Description</label>
                       <input type="password" class="form-control form-control-lg" name="password" id="content" placeholder="8+ characters required" aria-label="8+ characters required" required v-model="content">
                       <span class="invalid-feedback">Your password is invalid. Please try again.</span>
                     </div>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-white" data-bs-dismiss="modal">Close</button>
                     <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addShelves">Add </button>
                   </div>
                 </div>
               </div>
             </div>
             <!-- End Modal -->
           </div>
         </div>
         <nuxt/>
       </div>
     </div>
   </main>
   <!-- ========== SECONDARY CONTENTS ========== -->
   <!-- Sign Up -->
   <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered" role="document">
       <div class="modal-content">
         <!-- Header -->
         <div class="modal-close">
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <!-- End Header -->

         <!-- Body -->
         <div class="modal-body p-sm-5">
           <!-- Log in -->
           <div id="signupModalFormLogin" style="display: none; opacity: 0;">
             <!-- Heading -->
             <div class="text-center mb-7">
               <h4>Log in</h4>
               <p>Don't have an account yet?
                 <a class="js-animation-link" href="javascript:;" role="button" data-hs-show-animation-options='{
                           "targetSelector": "#signupModalFormSignup",
                           "groupName": "idForm"
                         }'>Sign up here</a>
               </p>
             </div>
             <!-- End Heading -->

             <div class="d-grid gap-2">
               <a class="btn btn-white btn-lg" href="#">
                <span class="d-flex justify-content-center align-items-center">
<!--                  <img class="avatar avatar-xss me-2" src="./assets/svg/brands/google-icon.svg" alt="Image Description">-->
                  Log in with Google
                </span>
               </a>

               <a class="js-animation-link btn btn-primary btn-lg" href="#" data-hs-show-animation-options='{
                         "targetSelector": "#signupModalFormLoginWithEmail",
                         "groupName": "idForm"
                       }'>Log in with Email</a>
             </div>
           </div>
           <!-- End Log in -->

           <!-- Log in with Modal -->
           <div id="signupModalFormLoginWithEmail" style="display: none; opacity: 0;">
             <!-- Heading -->
             <div class="text-center mb-7">
               <h4>Log in</h4>
               <p>Don't have an account yet?
                 <a class="js-animation-link" href="javascript:;" role="button" data-hs-show-animation-options='{
                           "targetSelector": "#signupModalFormSignup",
                           "groupName": "idForm"
                         }'>Sign up here</a>
               </p>
             </div>
             <!-- End Heading -->

             <form class="js-validate needs-validation" novalidate>
               <!-- Form -->
               <div class="mb-3">
                 <label class="form-label" for="signupModalFormLoginEmail">Your email</label>
                 <input type="email" class="form-control form-control-lg" name="email" id="signupModalFormLoginEmail" placeholder="email@site.com" aria-label="email@site.com" required>
                 <span class="invalid-feedback">Please enter a valid email address.</span>
               </div>
               <!-- End Form -->

               <!-- Form -->
               <div class="mb-3">
                 <div class="d-flex justify-content-between align-items-center">
                   <label class="form-label" for="signupModalFormLoginPassword">Password</label>

                   <a class="js-animation-link form-label-link" href="javascript:;" data-hs-show-animation-options='{
                         "targetSelector": "#signupModalFormResetPassword",
                         "groupName": "idForm"
                       }'>Forgot Password?</a>
                 </div>

                 <input type="password" class="form-control form-control-lg" name="password" id="signupModalFormLoginPassword" placeholder="8+ characters required" aria-label="8+ characters required" required minlength="8">
                 <span class="invalid-feedback">Please enter a valid password.</span>
               </div>
               <!-- End Form -->

               <div class="d-grid mb-3">
                 <button type="submit" class="btn btn-primary btn-lg">Log in</button>
               </div>
             </form>
           </div>
           <!-- End Log in with Modal -->

           <!-- Sign up -->
           <div id="signupModalFormSignup">
             <!-- Heading -->
             <div class="text-center mb-7">
               <h4>Sign up</h4>
               <p>Already have an account?
                 <a class="js-animation-link" href="javascript:;" role="button" data-hs-show-animation-options='{
                           "targetSelector": "#signupModalFormLogin",
                           "groupName": "idForm"
                         }'>Log in here</a>
               </p>
             </div>
             <!-- End Heading -->

             <div class="d-grid gap-3">
               <a class="btn btn-white btn-lg" href="#">
                <span class="d-flex justify-content-center align-items-center">
<!--                  <img class="avatar avatar-xss me-2" src="./assets/svg/brands/google-icon.svg" alt="Image Description">-->
                  Sign up with Google
                </span>
               </a>

               <a class="js-animation-link btn btn-primary btn-lg" href="#" data-hs-show-animation-options='{
                         "targetSelector": "#signupModalFormSignupWithEmail",
                         "groupName": "idForm"
                       }'>Sign up with Email</a>

               <div class="text-center">
                 <p class="small mb-0">By continuing you agree to our <a href="./page-terms.html">Terms and Conditions</a></p>
               </div>
             </div>
           </div>
           <!-- End Sign up -->

           <!-- Sign up with Modal -->
           <div id="signupModalFormSignupWithEmail" style="display: none; opacity: 0;">
             <!-- Heading -->
             <div class="text-center mb-7">
               <h4>Sign up</h4>
               <p>Already have an account?
                 <a class="js-animation-link" href="javascript:;" role="button" data-hs-show-animation-options='{
                           "targetSelector": "#signupModalFormLogin",
                           "groupName": "idForm"
                         }'>Log in here</a>
               </p>
             </div>
             <!-- End Heading -->

             <form class="js-validate need-validate" novalidate>
               <!-- Form -->
               <div class="mb-3">
                 <label class="form-label" for="signupModalFormSignupEmail">Your email</label>
                 <input type="email" class="form-control form-control-lg" name="email" id="signupModalFormSignupEmail" placeholder="email@site.com" aria-label="email@site.com" required>
                 <span class="invalid-feedback">Please enter a valid email address.</span>
               </div>
               <!-- End Form -->

               <!-- Form -->
               <div class="mb-3">
                 <label class="form-label" for="signupModalFormSignupPassword">Password</label>
                 <input type="password" class="form-control form-control-lg" name="password" id="signupModalFormSignupPassword" placeholder="8+ characters required" aria-label="8+ characters required" required>
                 <span class="invalid-feedback">Your password is invalid. Please try again.</span>
               </div>
               <!-- End Form -->

               <!-- Form -->
               <div class="mb-3" data-hs-validation-validate-class>
                 <label class="form-label" for="signupModalFormSignupConfirmPassword">Confirm password</label>
                 <input type="password" class="form-control form-control-lg" name="confirmPassword" id="signupModalFormSignupConfirmPassword" placeholder="8+ characters required" aria-label="8+ characters required" required data-hs-validation-equal-field="#signupModalFormSignupPassword">
                 <span class="invalid-feedback">Password does not match the confirm password.</span>
               </div>
               <!-- End Form -->

               <div class="d-grid mb-3">
                 <button type="submit" class="btn btn-primary btn-lg">Sign up</button>
               </div>

               <div class="text-center">
                 <p class="small mb-0">By continuing you agree to our <a href="#">Terms and Conditions</a></p>
               </div>
             </form>
           </div>
           <!-- End Sign up with Modal -->

           <!-- Reset Password -->
           <div id="signupModalFormResetPassword" style="display: none; opacity: 0;">
             <!-- Heading -->
             <div class="text-center mb-7">
               <h4>Forgot password?</h4>
               <p>Enter the email address you used when you joined and we'll send you instructions to reset your password.</p>
             </div>
             <!-- En dHeading -->

             <form class="js-validate need-validate" novalidate>
               <div class="mb-3">
                 <!-- Form -->
                 <div class="d-flex justify-content-between align-items-center">
                   <label class="form-label" for="signupModalFormResetPasswordEmail" tabindex="0">Your email</label>

                   <a class="js-animation-link form-label-link" href="javascript:;" data-hs-show-animation-options='{
                           "targetSelector": "#signupModalFormLogin",
                           "groupName": "idForm"
                         }'>
                     <i class="bi-chevron-left small me-1"></i> Back to Log in
                   </a>
                 </div>
                 <!-- End Form -->

                 <!-- Form -->
                 <div class="mb-3">
                   <input type="email" class="form-control form-control-lg" name="email" id="signupModalFormResetPasswordEmail" tabindex="1" placeholder="Enter your email address" aria-label="Enter your email address" required>
                   <span class="invalid-feedback">Please enter a valid email address.</span>
                 </div>
                 <!-- End Form -->

                 <div class="d-grid">
                   <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                 </div>
               </div>
             </form>
           </div>
           <!-- End Reset Password -->
         </div>
       </div>
     </div>
         <!-- End Body -->
   </div>
 </div>
</template>

<script>

export default {
  name: "navbar-layout",
  data(){
    return {
      title: '',
      content: '',
      shelves : []
    }
  },
  methods:{
    addShelves(){
      if (this.title && this.content){
        this.shelves.push({title: this.title, content: this.content})
      }
    },
    makeItActive(evt, activity) {
      let i, tabLinks;
      tabLinks = document.getElementsByClassName("tabLinks");
      for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", " ");
      }
      evt.currentTarget.className = "list-group-item tabLinks active";
    },
  },
  mounted: function () {
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
