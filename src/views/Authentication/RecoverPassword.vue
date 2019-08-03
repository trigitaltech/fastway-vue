<template>
  <div class="authentication-bg">
    <div class="account-pages">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="card mt-5">
              <!-- Logo -->
              <div class="card-header pt-3 pb-3 text-center bg-primary">
                <span class="text-white font-weight-bold h2">Nipige</span>
              </div>
              <div class="card-body p-4">
                <div class="text-center w-75 m-auto">
                  <h4 class="text-dark-50 text-center mt-0 font-weight-bold">Reset Password</h4>
                  <p
                    class="text-muted mb-4"
                  >Enter your email address and we'll send you an email with instructions to reset your password.</p>
                </div>
                <form action="#">
                  <div class="form-group mb-3">
                    <label for="emailaddress">Email address</label>
                    <input
                      class="form-control"
                      type="email"
                      id="emailaddress"
                      required
                      placeholder="Enter your email"
                    >
                  </div>
                  <div class="form-group mb-0 text-center">
                    <button class="btn btn-primary" type="submit">Reset Password</button>
                  </div>
                </form>
              </div>
              <!-- end card-body-->
            </div>
            <!-- end card -->
            <div class="row mt-3 mb-4">
              <div class="col-12 text-center">
                <p class="text-muted">Back to
                  <router-link to="/login">
                    <a class="text-muted ml-1">
                      <b>Log In</b>
                    </a>
                  </router-link>
                </p>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
    <!-- end page -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class RecoveryPassword extends Vue {}
</script>
