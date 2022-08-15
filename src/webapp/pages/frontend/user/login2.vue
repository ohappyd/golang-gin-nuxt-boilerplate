
<template>
    <div class="container"
      data-b-loc-uid="0fd78dd2-eb90-44da-9998-1ca7ea68f102">
      <div class="d-flex justify-content-center h-100"
          data-b-loc-uid="f4b98339-4ec4-4738-8d57-6effcd6d21cb">
          <div class="card"
              data-b-loc-uid="dbacdae4-b068-4981-b4a8-8aaa0ad5bc73">
              <div class="card-header"
                  data-b-loc-uid="7f269792-542c-4eb6-8cbb-9e3f6dcea6e5">
                  <h3 data-b-loc-uid="b5d34a8a-0acd-4a22-84bf-630469f2ebaf">Sign In</h3>
                  <div class="d-flex justify-content-end social_icon"
                      data-b-loc-uid="10bb2763-90e5-48e2-bdbd-be9245f26284">
                      <span data-b-loc-uid="f585a4b3-6b6c-4e51-8ee0-13dad366838c"><i class="fab fa-facebook-square"
                              data-b-loc-uid="44520165-b351-4c9d-919c-58ea78f6430e" /></span>
                      <span data-b-loc-uid="5d7bebdf-9080-4a8b-bee6-7781114b4de7"><i class="fab fa-google-plus-square"
                              data-b-loc-uid="7e7cd02a-c162-4194-ab71-1bb1f2715c57" /></span>
                      <span data-b-loc-uid="e8f6584d-3234-46c4-bc23-f8fbe5564169"><i class="fab fa-twitter-square"
                              data-b-loc-uid="52490a7a-54d4-4cce-a534-face3256687c" /></span>
                  </div>
              </div>
              <div class="card-body"
                  data-b-loc-uid="3c506507-e9b9-4425-bb49-bdc943a9e1be">
                  <form data-b-loc-uid="1eda7447-4902-4c8b-993d-66a45c27b953">
                      <div class="input-group form-group"
                          data-b-loc-uid="c60cc440-8a99-425b-aac1-771517488383">
                          <div class="input-group-prepend"
                              data-b-loc-uid="31dc5da9-19cf-4aa9-b99f-b1943bae2ea6">
                              <span class="input-group-text"
                                  data-b-loc-uid="005017fb-2ead-4fac-82d6-789572dadd18"><i class="fas fa-user"
                                      data-b-loc-uid="42013581-7b97-434a-8a61-efb54b090f43" /></span>
                          </div>
                          <input type="text"
                              class="form-control"
                              placeholder="username"
                              data-b-loc-uid="6b0943dd-d640-4aee-abfe-069430164494">

                          </input>
                      </div>
                      <div class="input-group form-group"
                          data-b-loc-uid="12610b05-8ac2-4c6b-9ba9-a793390b6e1a">
                          <div class="input-group-prepend"
                              data-b-loc-uid="8a55f85d-5da8-4686-ac07-8108e7539a53">
                              <span class="input-group-text"
                                  data-b-loc-uid="9e352761-8f0d-482a-bdbb-48eced8ab7a3"><i class="fas fa-key"
                                      data-b-loc-uid="255aecc2-aac1-4e56-bad6-b1e6f7ee5dd7" /></span>
                          </div>
                          <input type="password"
                              class="form-control"
                              placeholder="password"
                              data-b-loc-uid="2eef55a1-c8fc-49b0-979b-8d96355d671b">
                          </input>
                      </div>
                      <div class="row align-items-center remember"
                          data-b-loc-uid="7503b188-cca4-4392-80fd-469e8c4da590">
                          <input type="checkbox"
                              data-b-loc-uid="2f802a75-431e-417b-aca6-72a1c900cd29">Remember Me
                          </input></div>
                      <div class="form-group"
                          data-b-loc-uid="780f085b-ba79-495c-a429-f751cf48ef40">
                          <input type="submit"
                              value="Login"
                              class="btn float-right login_btn"
                              data-b-loc-uid="7bfb6793-a53e-4fc8-b980-aace851a55fa">
                          </input></div>
                  </form>
              </div>
              <div class="card-footer"
                  data-b-loc-uid="8f9ac40c-06e9-431e-a0e8-b4227bf64b0e">
                  <div class="d-flex justify-content-center links"
                      data-b-loc-uid="8b21f84e-7afa-4637-ad82-c7ac7d16476b">
                      Don't have an account?<a href="#"
                          data-b-loc-uid="2fb0cffe-8bba-4fec-b617-11578fbc0d4f">Sign Up</a>
                  </div>
                  <div class="d-flex justify-content-center"
                      data-b-loc-uid="4aa56aad-950b-4eb6-ba9d-3c4611bdf5e0">
                      <a href="#"
                          data-b-loc-uid="d92c57db-c2a7-4a0c-90b9-5917bc51f067">Forgot your password?</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<style lang="scss">

@import url("https://fonts.googleapis.com/css?family=Numans");

html,
body {
  background-image: url("https://images.unsplash.com/photo-1482053450283-3e0b78b09a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  font-family: "Numans", sans-serif;
}

body > div,
body > div > div {
  height: 100%;
}

.container {
  height: 100%;
  align-content: center;
}

.card {
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.social_icon span {
  font-size: 60px;
  margin-left: 10px;
  color: #ffc312;
}

.social_icon span:hover {
  color: white;
  cursor: pointer;
}

.card-header h3 {
  color: white;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend span {
  width: 50px;
  background-color: #ffc312;
  color: black;
  border: 0 !important;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.remember {
  color: white;
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn {
  color: black;
  background-color: #ffc312;
  width: 100px;
}

.login_btn:hover {
  color: black;
  background-color: white;
}

.links {
  color: white;
}

.links a {
  margin-left: 4px;
}

</style>
