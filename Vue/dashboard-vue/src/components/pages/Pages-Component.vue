<template>
    <div id="main-wrapper">
      <HeaderComponent />
      <SideBarComponent />
      <div id="main-wrapper">
        <app-header></app-header>
        <app-sidebar></app-sidebar>
        <div class="page-wrapper">
          <div class="container-fluid">
            <BreadcrumbsComponent/>
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <router-view />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="footer">© 2017 Admin Pro by wrappixel.com</footer>
        </div>
      </div>
    </div>
</template>

<script>
import HeaderComponent from "@/components/shared/Header-Component.vue";
import SideBarComponent from "@/components/shared/SideBar-Component.vue";
import BreadcrumbsComponent from "@/components/shared/Breadcrumbs-Component.vue";

export default {
 
  components: {
    HeaderComponent,
    SideBarComponent,
    BreadcrumbsComponent,
  },
};
</script>