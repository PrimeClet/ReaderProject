<template>
<div class="navbar-sidebar-aside-lg">
  <!-- ========== HEADER ========== -->
  <header id="header" class="docs-navbar navbar navbar-expand-lg navbar-end navbar-light bg-white navbar-shadow navbar-light bg-white navbar-sticky-top" >
    <div class="container">
      <nav class="js-mega-menu navbar-nav-wrap">
        <!-- Default Logo -->
        <a class="navbar-brand d-block d-lg-none"  href="/" aria-label="Space">
          <img class="navbar-brand-logo" src="@/static/logos/logo.svg" alt="Image Description">
        </a>
        <!-- Default Logo -->
        <div class="input-group input-group-merge d-none d-lg-block">
          <div class="input-group-prepend input-group-text" id="inputGroupMergeFullNameAddOn">
            <i class="bi bi-search"></i>
          </div>
          <input type="text" class="form-control form-control-sm" id="inputGroupMergeFullName" placeholder="" aria-label="Mark Williams" aria-describedby="inputGroupMergeFullNameAddOn">
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
        <div class="collapse navbar-collapse" id="navbarNavDropdown" style="padding: 5px">
          <div class="navbar-sticky-top-scroller">
            <ul class="navbar-nav">
              <!-- Dropdown -->
              <li class="hs-has-sub-menu nav-item d-block d-lg-none">
                <a class="hs-mega-menu-invoker nav-link dropdown-toggle" href="#" id="headerWithMegaMenuDropdownResponsive" role="button" data-bs-toggle="dropdown" aria-expanded="false">Browse</a>

                <!-- Mega Menu -->
                <div class="hs-sub-menu dropdown-menu" aria-labelledby="headerWithMegaMenuDropdownResponsive" style="min-width: 12rem;">
                  <a class="dropdown-item tabLinks" href="#" @click="makeItActive($event, 'topBooks')" ref="topBooks">
                    <i class="bi bi-clipboard-data list-group-icon"></i> Top Books
                  </a>
                  <a class="dropdown-item tabLinks active" href="#" @click="makeItActive($event, 'discover')" ref="discover">
                    <i class="bi bi-globe-europe-africa list-group-icon"></i> Discover
                  </a>
                  <a class="dropdown-item tabLinks" href="#" @click="makeItActive($event, 'categorie')" ref="categorie">
                    <i class="bi bi-inbox-fill list-group-icon"></i> Categories
                  </a>
                  <!-- End Dropdown -->
                </div>
                <!-- End Mega Menu -->
              </li>
              <!-- End Dropdown -->
              <!-- Dropdown -->
              <li class="hs-has-sub-menu nav-item d-block d-lg-none">
                <a class="hs-mega-menu-invoker nav-link dropdown-toggle" href="#" id="headerWithMegaMenuDropdownResponsive" role="button" data-bs-toggle="dropdown" aria-expanded="false">Your books</a>

                <!-- Mega Menu -->
                <div class="hs-sub-menu dropdown-menu" aria-labelledby="headerWithMegaMenuDropdownResponsive" style="min-width: 12rem;">
                  <a class="dropdown-item tabLinks" href="#" @click="makeItActive($event, 'reading')" ref="reading">
                    <i class="bi bi-book list-group-icon"></i> Reading
                  </a>
                  <a class="dropdown-item tabLinks" href="#" @click="makeItActive($event, 'favorite')" ref="favorite">
                    <i class="bi bi-heart-fill list-group-icon"></i> Favorite Reads
                  </a>
                  <a class="dropdown-item tabLinks" href="#" @click="makeItActive($event, 'history')" ref="history">
                    <i class="bi bi-clock-history list-group-icon"></i> History
                  </a>
                  <!-- End Dropdown -->
                </div>
                <!-- End Mega Menu -->
              </li>
              <!-- End Dropdown -->
              <!-- Dropdown -->
              <li class="hs-has-sub-menu nav-item d-block d-lg-none">
                <a class="hs-mega-menu-invoker nav-link dropdown-toggle" href="#" id="headerWithMegaMenuDropdownResponsive" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shelves</a>

                <!-- Mega Menu -->
                <div class="hs-sub-menu dropdown-menu" aria-labelledby="headerWithMegaMenuDropdownResponsive" style="min-width: 12rem;">
                  <a class="dropdown-item tabLinks" href="#" @click="makeItActive($event, 'shelves')" ref="shelves">
                    <i class="bi bi-receipt list-group-icon"></i> Your Shelves
                  </a>
                  <a class="dropdown-item " href="#" v-for="(data, $index) in shelves" :key="$index">
                    <p> {{ data.title }}</p>
                  </a>
                  <!-- End Dropdown -->
                </div>
                <!-- End Mega Menu -->
              </li>
              <!-- End Dropdown -->

              <li class="nav-divider"></li>

              <!-- Log in -->
              <li class="nav-item">
                <a class="js-animation-link btn btn-ghost-secondary btn-no-focus me-2 me-lg-0" href="javascript:;" role="button" data-bs-toggle="modal" data-bs-target="#signupModal"
                   data-hs-show-animation-options='{
                         "targetSelector": "#signupModalFormLogin",
                         "groupName": "idForm"
                       }'>Log in</a>

                <a class="js-animation-link d-lg-none btn btn-primary" href="javascript:;" role="button" data-bs-toggle="modal" data-bs-target="#signupModal"
                   data-hs-show-animation-options='{
                         "targetSelector": "#signupModalFormSignup",
                         "groupName": "idForm"
                       }'>
                  <i class="bi-person-circle me-1"></i> Sign up
                </a>
              </li>
              <!-- End Log in -->

              <!-- Sign up -->
              <li class="nav-item">
                <a class="js-animation-link d-none d-lg-inline-block btn btn-primary" href="javascript:;" role="button" data-bs-toggle="modal" data-bs-target="#signupModal"
                   data-hs-show-animation-options='{
                         "targetSelector": "#signupModalFormSignup",
                         "groupName": "idForm"
                       }'>
                  <i class="bi-person-circle me-1"></i> Sign up
                </a>
              </li>
              <!-- End Sign up -->
            </ul>
          </div>
        </div>
        <!-- End Collapse -->
      </nav>
    </div>
  </header>
  <!-- ========== END HEADER ========== -->

  <!-- ========== SECONDARY CONTENTS ========== -->
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
          <div id="loginModalForm">
            <!-- Heading -->
            <div class="text-center mb-7">
              <h4>Log in</h4>
              <p>Don't have an account yet?
                <a class="js-animation-link" href="javascript:;" role="button"
                   data-hs-show-animation-options='{
                       "targetSelector": "#signupModalForm",
                       "groupName": "idForm"
                     }'>Sign up here</a>
              </p>
            </div>
            <!-- End Heading -->

            <div class="d-grid gap-2">
              <a class="btn btn-white btn-lg" href="#">
                <span class="d-flex justify-content-center align-items-center">
<!--                  <img class="avatar avatar-xss me-2" src="@/static/logos/logo.svg" alt="Image Description">-->
                  Log in with Google
                </span>
              </a>

              <a class="js-animation-link btn btn-primary btn-lg" href="#"
                 data-hs-show-animation-options='{
                     "targetSelector": "#loginWithEmailModalForm",
                     "groupName": "idForm"
                   }'>Log in with Email</a>
            </div>
          </div>
          <!-- End Log in -->

          <!-- Log in with Modal -->
          <div id="loginWithEmailModalForm" style="display: none; opacity: 0;">
            <!-- Heading -->
            <div class="text-center mb-7">
              <h4>Log in</h4>
              <p>Don't have an account yet?
                <a class="js-animation-link" href="javascript:;" role="button"
                   data-hs-show-animation-options='{
                       "targetSelector": "#signupModalForm",
                       "groupName": "idForm"
                     }'>Sign up here</a>
              </p>
            </div>
            <!-- End Heading -->

            <form class="js-validate needs-validation" novalidate>
              <!-- Form -->
              <div class="mb-3">
                <label class="form-label" for="loginModalFormEmail">Your email</label>
                <input type="email" class="form-control form-control-lg" name="email" id="loginModalFormEmail" placeholder="email@site.com" aria-label="email@site.com" required>
                <span class="invalid-feedback">Please enter a valid email address.</span>
              </div>
              <!-- End Form -->

              <!-- Form -->
              <div class="mb-3">
                <div class="d-flex justify-content-between align-items-center">
                  <label class="form-label" for="loginModalFormPassword">Password</label>

                  <a class="js-animation-link form-label-link" href="javascript:;"
                     data-hs-show-animation-options='{
                     "targetSelector": "#forgotPasswordModalForm",
                     "groupName": "idForm"
                   }'>Forgot Password?</a>
                </div>

                <input type="password" class="form-control form-control-lg" name="password" id="loginModalFormPassword" placeholder="8+ characters required" aria-label="8+ characters required" required minlength="8">
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
          <div id="signupModalForm" style="display: none; opacity: 0;">
            <!-- Heading -->
            <div class="text-center mb-7">
              <h4>Sign up</h4>
              <p>Already have an account?
                <a class="js-animation-link" href="javascript:;" role="button"
                   data-hs-show-animation-options='{
                       "targetSelector": "#loginModalForm",
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

              <a class="js-animation-link btn btn-primary btn-lg" href="#"
                 data-hs-show-animation-options='{
                     "targetSelector": "#signupWithEmailModalForm",
                     "groupName": "idForm"
                   }'>Sign up with Email</a>

              <div class="text-center">
                <p class="small mb-0">By continuing you agree to our <a href="#">Terms and Conditions</a></p>
              </div>
            </div>
          </div>
          <!-- End Sign up -->

          <!-- Sign up with Modal -->
          <div id="signupWithEmailModalForm" style="display: none; opacity: 0;">
            <!-- Heading -->
            <div class="text-center mb-7">
              <h4>Sign up</h4>
              <p>Already have an account?
                <a class="js-animation-link" href="javascript:;" role="button"
                   data-hs-show-animation-options='{
                       "targetSelector": "#loginModalForm",
                       "groupName": "idForm"
                     }'>Log in here</a>
              </p>
            </div>
            <!-- End Heading -->

            <form class="js-validate need-validate" novalidate>
              <!-- Form -->
              <div class="mb-3">
                <label class="form-label" for="signupModalFormEmail">Your email</label>
                <input type="email" class="form-control form-control-lg" name="email" id="signupModalFormEmail" placeholder="email@site.com" aria-label="email@site.com" required>
                <span class="invalid-feedback">Please enter a valid email address.</span>
              </div>
              <!-- End Form -->

              <!-- Form -->
              <div class="mb-3">
                <label class="form-label" for="signupModalFormPassword">Password</label>
                <input type="password" class="form-control form-control-lg" name="password" id="signupModalFormPassword" placeholder="8+ characters required" aria-label="8+ characters required" required>
                <span class="invalid-feedback">Your password is invalid. Please try again.</span>
              </div>
              <!-- End Form -->

              <!-- Form -->
              <div class="mb-3">
                <label class="form-label" for="signupModalFormConfirmPassword">Confirm password</label>
                <input type="password" class="form-control form-control-lg" name="confirmPassword" id="signupModalFormConfirmPassword" placeholder="8+ characters required" aria-label="8+ characters required" data-hs-validation-equal-field="#signupModalFormPassword" required>
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

          <!-- Forgot Password -->
          <div id="forgotPasswordModalForm" style="display: none; opacity: 0;">
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
                  <label class="form-label" for="resetPasswordSrEmailModalForm" tabindex="0">Your email</label>

                  <a class="js-animation-link form-label-link" href="javascript:;"
                     data-hs-show-animation-options='{
                       "targetSelector": "#loginModalForm",
                       "groupName": "idForm"
                     }'>
                    <i class="bi-chevron-left small me-1"></i> Back to Log in
                  </a>
                </div>
                <!-- End Form -->

                <!-- Form -->
                <div class="mb-3">
                  <input type="email" class="form-control form-control-lg" name="email" id="resetPasswordSrEmailModalForm" tabindex="1" placeholder="Enter your email address" aria-label="Enter your email address" required data-msg="Please enter a valid email address.">
                </div>
                <!-- End Form -->

                <div class="d-grid">
                  <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <!-- End Forgot Password -->
        </div>
        <!-- End Body -->
      </div>
    </div>
  </div>
  <!-- ========== END SECONDARY CONTENTS ========== -->

  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <!-- Navbar -->
    <nav class="js-nav-scroller navbar navbar-expand-lg navbar-expand-xl navbar-expand-xxl navbar-sidebar navbar-vertical navbar-light bg-white border-end d-none d-lg-block d-xl-block d-xxl-block" data-hs-nav-scroller-options='{
            "type": "vertical",
            "target": ".navbar-nav .active",
            "offset": 80
           }'>
      <!-- Navbar Toggle -->
      <button type="button" class="navbar-toggler btn btn-white d-grid w-100" data-bs-toggle="collapse" data-bs-target="#navbarVerticalNavMenu" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarVerticalNavMenu">
        <span class="d-flex justify-content-between align-items-center">
          <span class="h3 mb-0">Nav menu</span>

          <span class="navbar-toggler-default">
            <i class="bi-list"></i>
          </span>

          <span class="navbar-toggler-toggled">
            <i class="bi-x"></i>
          </span>
        </span>
      </button>
      <!-- End Navbar Toggle -->

      <!-- Navbar Collapse -->
      <div id="navbarVerticalNavMenu" class="collapse navbar-collapse">
        <div class="navbar-brand-wrapper border-end" style="height: auto;">
          <!-- Default Logo -->
          <div class="d-flex align-items-center justify-content-center">
            <a class="navbar-brand" href="../documentation/index.html" aria-label="Space">
              <img class="navbar-brand-logo" src="@/static/logos/logo.svg" alt="Logo">
            </a>
          </div>
          <!-- End Default Logo -->
        </div>

        <div class="docs-navbar-sidebar-aside-body navbar-sidebar-aside-body">
          <ul id="navbarSettings" class="navbar-nav nav nav-vertical nav-tabs nav-tabs-borderless nav-sm">
            <div class="col-12 px-6">
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
              </div>
            </div>
          </ul>
        </div>
      </div>
      <!-- End Navbar Collapse -->
    </nav>

    <!-- End Navbar -->

    <!-- Content -->
    <div class="navbar-sidebar-aside-content content-space-1 content-space-md-2 px-lg-4 px-xl-4">
      <nuxt/>
    </div>
    <!-- End Content -->
  </main>
  <!-- ========== END MAIN CONTENT ========== -->
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
            <input type="text" class="form-control form-control-lg" name="title" id="titleLg" placeholder="Shelf title" aria-label="" required v-model="title">
            <span class="invalid-feedback">Please enter a valid Shel Title address.</span>
          </div>
          <!-- End Form -->

          <!-- Form -->
          <div class="mb-3">
            <label class="form-label" for="contentLg">Content Description</label>
            <input type="text" class="form-control form-control-lg" name="content" id="contentLg" placeholder="Put a small description" aria-label="8+ characters required" required v-model="content">
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
</template>

<script>
export default {
  name: "navbar-layout-3",
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
.navbar-sidebar-aside-lg{
  padding-top: 1.25rem;
}
.navbar-sidebar-aside-lg .navbar-sidebar .navbar-brand-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 17rem;
  height: 5rem;
  background-color: #fff;
  z-index: 99;
  padding: 1rem 2rem;
  border-bottom: 0.0625rem solid rgba(0,34,28,.1);
}
.navbar-sidebar-aside-lg .navbar-sidebar .navbar-sidebar-aside-body {
  padding-top: 1.25rem !important;
}
.list-group-item.active {
  z-index: 2;
  color: black;
  background-color: #cacbcb;
  border-color: #b6b9b8;
  border-radius: 4px;
}

.input-group{
  width: auto;
}
@media (min-width: 1200px) {
  .container, .container-lg, .container-md, .container-sm, .container-xl {
    max-width: 1467px;
    margin-right: 140px;
  }
}
@media (min-width: 1400px) {
  .container, .container-lg, .container-md, .container-sm, .container-xl {
    max-width: 1050px;
    margin-right: 99px;
  }
}
@media (min-width: 2000px) {
  .container, .container-lg, .container-md, .container-sm, .container-xl {
    max-width: 1998px;
    margin-right: 230px;
  }
}
@media (min-width: 992px){

}
@media (min-width: 768px){

}
@media (min-width: 576px){

}
</style>
