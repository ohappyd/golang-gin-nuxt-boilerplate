
<template>
    <div class="container h-100"
      data-b-loc-uid="7e5aa7f7-f74d-490a-89e1-07416ea7acb3">
      <div class="d-flex justify-content-center h-100"
          data-b-loc-uid="0570a33f-1d80-4175-9b0f-8ba7ebefe598">
          <div class="card"
              data-b-loc-uid="720c20ec-09e7-4c76-a7e6-2f20e4664030">
              <div class="card-header"
                  data-b-loc-uid="1d98d7b4-6f7d-4612-82b4-d5acb8a4cd02">
                  <h3 data-b-loc-uid="dc195d9a-ea90-446e-82aa-ec8b5e5bb0e6">Sign In</h3>
                  <div class="d-flex justify-content-end social_icon"
                      data-b-loc-uid="95857da4-acff-4494-8885-03ba8ff785b7">
                      <span data-b-loc-uid="9846b588-ad4d-4314-acdd-917b6e469197"><i class="fab fa-facebook-square"
                              data-b-loc-uid="e2717267-4a23-4482-bbcb-dfd9532de144" /></span>
                      <span data-b-loc-uid="deb5fba2-4093-4e70-bee6-4bf0557d0765"><i class="fab fa-google-plus-square"
                              data-b-loc-uid="7a9837d9-c1e0-46c9-95f5-2e7f61d1b39c" /></span>
                      <span data-b-loc-uid="68ce8cdf-6a62-45ec-849a-98719ba0af68"><i class="fab fa-twitter-square"
                              data-b-loc-uid="5d7086e1-48f2-43be-b9db-0cffc06d0c6c" /></span>
                  </div>
              </div>
              <div class="card-body"
                  data-b-loc-uid="801fb8c1-6c53-45e8-a29a-1c2d00dddc27">
                  <form data-b-loc-uid="3be277a9-d083-4cd1-9337-0c2dd47a3da7">
                      <div class="input-group form-group"
                          data-b-loc-uid="9c185c64-7b8a-4329-8348-2115b95267af">
                          <div class="input-group-prepend"
                              data-b-loc-uid="b0e630fc-9f50-47ca-8f55-b8f192843314">
                              <span class="input-group-text"
                                  data-b-loc-uid="592ef8e0-6fbf-4b5d-b6d4-4f5f6d7a715a"><i class="fas fa-user"
                                      data-b-loc-uid="72159d53-42da-4bf6-be21-fd656c246e61" /></span>
                          </div>
                          <input type="text"
                              class="form-control"
                              placeholder="username"
                              data-b-loc-uid="9adc99a9-01d5-4956-a9f7-5edab5da7b08">

                          </input>
                      </div>
                      <div class="input-group form-group"
                          data-b-loc-uid="ceb3e5fd-effa-46e3-88a2-914b848951a8">
                          <div class="input-group-prepend"
                              data-b-loc-uid="691cb537-8ed9-4faf-b57a-0c1efa742e6c">
                              <span class="input-group-text"
                                  data-b-loc-uid="17daa3ee-fc93-4870-994a-322223496b55"><i class="fas fa-key"
                                      data-b-loc-uid="711db21b-54fd-4337-a309-10a64f686f46" /></span>
                          </div>
                          <input type="password"
                              class="form-control"
                              placeholder="password"
                              data-b-loc-uid="9c3886c9-95fc-4ad3-8111-e1be69a35038">
                          </input>
                      </div>
                      <div class="row align-items-center remember"
                          data-b-loc-uid="c421ee8d-556c-4fea-b9b5-3c33836c86f4">
                          <input type="checkbox"
                              data-b-loc-uid="8d20f8e6-b33a-4c54-bc86-283161c526b8">Remember Me
                          </input></div>
                      <div class="form-group"
                          data-b-loc-uid="0bd34bfe-49b9-492d-ab99-3f35ac2fd40d">
                          <input type="submit"
                              value="Login"
                              class="btn float-right login_btn"
                              data-b-loc-uid="8fdd3778-9c67-49ee-b13f-ebe2eeb08e15">
                          </input></div>
                  </form>
              </div>
              <div class="card-footer"
                  data-b-loc-uid="5ca76a8b-800b-467e-a543-068b78b390b9">
                  <div class="d-flex justify-content-center links"
                      data-b-loc-uid="fce2316a-8898-4f68-aa5a-68f9a746938f">
                      Don't have an account?<a href="#"
                          data-b-loc-uid="ba3fd004-7ab3-4c80-af0e-73ac04cfebb6">Sign Up</a>
                  </div>
                  <div class="d-flex justify-content-center"
                      data-b-loc-uid="940f89f9-2928-460e-96bc-b6f47408f2e1">
                      <a href="#"
                          data-b-loc-uid="d37ebf29-61f1-48f8-ad99-ce33c02a42c4">Forgot your password?</a>
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
  background-image: url("https://images.unsplash.com/photo-1486946255434-2466348c2166?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80");
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
