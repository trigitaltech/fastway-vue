<template>
  <div class="authentication-bg">
    <div class="account-pages">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="card mt-4">
              <!-- Logo -->
              <div class="card-header pt-3 pb-3 text-center bg-primary">
                <span class="text-white font-weight-bold h2">Fastway</span>
              </div>
              <div class="card-body p-4">
                <div class="text-center w-75 m-auto">
                  <h4 class="text-dark-50 text-center mt-0 font-weight-bold">Sign In</h4>
                  <p
                    class="text-muted mb-4"
                  >Enter your user name and password to access cutomer panel.</p>
                </div>
                <div>
                  <eb-input
                    lable="User Name"
                    id="emailaddress"
                    placeholder="Enter User Name"
                    v-model="userName"
                  ></eb-input>
                  <eb-input
                    lable="Password"
                    id="Password"
                    placeholder="Enter your password"
                    v-model="password"
                    type="password"
                    :isRouteLink="true"
                    routeLink="/recoverpw"
                    routeLinkText="Forgot your password?"
                  ></eb-input>
                  <div class="form-group mb-3">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="checkbox-signin"
                        checked
                      >
                      <label class="custom-control-label" for="checkbox-signin">Remember me</label>
                    </div>
                  </div>
                  <div class="form-group mb-0 text-center">
                    <button class="btn btn-primary mr-2" @click="login">Log In</button>
                  </div>
                </div>
              </div>
              <!-- end card-body -->
            </div>
            <!-- end card -->
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
import ebInput from '@/components/FormElements/Input.vue';
import LoginParam from '@/Interface/ILoginParam.ts';
import { API } from '@/config';
import axios from 'axios';
@Component({
  components: {
    ebInput,
  },
})
export default class Login extends Vue {
  private userName: string = '';
  private password: string = '';

  private async login() {
    try {
      if (this.userName) {
        const data  = {
          USERID: this.userName,
          PASSWORD: this.password,
          DEVICEIMEI: '352356079376711',
        };
        const result = await axios({
          method: 'POST',
          url: API + '/login/',
          headers: {
            CREDS: JSON.stringify(data),
          },
        });
        this.$store.dispatch('auth/loginUser', data);
        localStorage.setItem("user", JSON.stringify(data));
        this.$toasted.success('you have successfully logged in');
        this.$router.push({ name: 'Dashboard' });
      }
    } catch (e) {
      this.$toasted.error(e.response.data);
    }
  }
}
</script>
