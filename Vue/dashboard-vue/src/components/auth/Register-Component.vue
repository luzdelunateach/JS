<template>
    <section id="wrapper" class="login-register login-sidebar" style="background-image:url(/assets/images/background/login-register.jpg);">
      <div class="login-box card">
          <div class="card-body">
              <form @click="onSubmit()" class="form-horizontal form-material" id="loginform" action="index.html">
                  <a href="javascript:void(0)" class="text-center db"><img src="/assets/images/logo-icon.png" alt="Home" /><br/><img src="/assets/images/logo-text.png" alt="Home" /></a>
                  <h3 class="box-title m-t-40 m-b-0">Register Now</h3><small>Create your account and enjoy</small>
                  <div class="form-group m-t-20">
                      <div class="col-xs-12">
                          <input class="form-control" type="text" name="name" required placeholder="Name" v-model="name">
                      </div>
                      <div id="nameV" class="invalid-feedback">
                        Name is Required
                      </div>
                  </div>
                  <div class="form-group ">
                      <div class="col-xs-12">
                          <input class="form-control" type="text" name="email" required placeholder="Email" v-model="email">
                      </div>
                      <div id="emailV" class="invalid-feedback">
                        Email is Required
                      </div>
                  </div>
                  <div class="form-group ">
                      <div class="col-xs-12">
                          <input class="form-control" type="password" name="password" required placeholder="Password" v-model="password">
                      </div>
                      <div id="passwordV" class="invalid-feedback">
                        Password is Required
                      </div>
                  </div>
                  <div class="form-group">
                      <div class="col-xs-12">
                          <input class="form-control" type="password" name="vpassword" required placeholder="Confirm Password" v-model="vpassword">
                      </div>
                      <div id="passwordTwoV" class="invalid-feedback">
                        Password don't match
                      </div>
                  </div>
                  <div class="form-group row">
                      <div class="col-md-12">
                          <div class="checkbox checkbox-primary p-t-0">
                              <input id="checkbox-signup" type="checkbox">
                              <label for="checkbox-signup"> I agree to all <a href="#">Terms</a></label>
                          </div>
                      </div>
                  </div>
                  <div class="form-group text-center m-t-20">
                      <div class="col-xs-12">
                          <button class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Sign Up</button>
                      </div>
                  </div>
                  <div class="form-group m-b-0">
                      <div class="col-sm-12 text-center">
                          <p>Already have an account? <router-link to="/login" class="text-info m-l-5"><b>Sign In</b></router-link></p>
                        
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </section>
</template>

<script type="text/javascript">
 export default {
  methods: {
    onSubmit: function () {},
  },
};   
</script>

<style scoped>
.login-register {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  width: 100%;
  padding: 10% 0;
  position: fixed; }

.login-box {
  width: 400px;
  margin: 0 auto; }
  .login-box .footer {
    width: 100%;
    left: 0px;
    right: 0px; }
  .login-box .social {
    display: block;
    margin-bottom: 30px; }

#recoverform {
  display: none; }

.login-sidebar {
  padding: 0px;
  margin-top: 0px; }
  .login-sidebar .login-box {
    right: 0px;
    position: absolute;
    height: 100%; }
</style>