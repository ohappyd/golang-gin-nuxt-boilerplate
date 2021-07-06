
<template>
<section class="section feature text-theme1"
    id="feature">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <section-title title="App Features"
                    subTitle="More Benefits"> </section-title>

            </div>
        </div>
        <div class="row bg-elipse">
            <div class="col-lg-3 align-self-center text-center text-lg-right">
                <!-- Feature Item -->
                <div class="feature-item">
                    <!-- Icon -->
                    <div class="icon danger">
                        <i class="lnr lnr-star-half text-danger" />

                    </div>
                    <!-- Content -->
                    <div class="content">
                        <h5>Beautiful and Reusable Components</h5>
                        <p>
                            Total reuse of code, self-portable components that can be used in your own way. </p>
                    </div>
                </div>
                <!-- Feature Item -->
                <div class="feature-item theme1">
                    <!-- Icon -->
                    <div class="icon">
                        <i class="lnr lnr-database" />
                    </div>
                    <!-- Content -->
                    <div class="content">
                        <h5>Real Database Examples</h5>
                        <p>
                            Several pages contain real database access components in our universal code. Easily write servers with secure JS.
                        </p>

                    </div>
                </div>
            </div>
            <div class="col-lg-6 text-center">
                <!-- Feature Item -->
                <div class="feature-item mb-0 center secondary">
                    <!-- Icon -->
                    <div class="icon">
                        <i class="lnr lnr-bubble text-secondary" />
                    </div>
                    <!-- Content -->
                    <div class="content">
                        <h5>Dozens of Skins</h5>
                        <p>
                            Completely change the style of your project by choosing (or modifying) any of the many skins that go along in the package.
                        </p>
                    </div>
                </div>
                <div class="app-screen">
                    <multiple-screen> </multiple-screen>
                </div>
                <!-- Feature Item -->
                <div class="feature-item center theme1">
                    <!-- Icon -->
                    <div class="icon">
                        <i class="lnr lnr-laptop text-dark" />
                    </div>
                    <!-- Content -->
                    <div class="content">
                        <h5>Connect to any backend</h5>
                        <p>
                            Whether by web consumption, socket or directly to the database. Use virtually any existing legacy to power your components.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 text-center text-lg-left align-self-center">
                <!-- Feature Item -->
                <div class="feature-item dir warning">
                    <!-- Icon -->
                    <div class="icon">
                        <i class="lnr lnr-pie-chart text-warning" />
                    </div>
                    <!-- Content -->
                    <div class="content">
                        <h5>Be up to date</h5>
                        <p>
                            Vue 2, Bootstrap 4, Universal Code (Microservices using Feathers), Server Side Rendering for SEO (SSR), all this easily and quickly in this project.

                        </p>
                    </div>
                </div>
                <!-- Feature Item -->
                <div class="feature-item dir success">
                    <!-- Icon -->
                    <div class="icon">
                        <i class="lnr lnr-layers text-success" />
                    </div>
                    <!-- Content -->
                    <div class="content">
                        <h5>+ BONUS Bundle </h5>
                        <p>
                            Super optional NodeJs server, w/ SSR enabled, landing page, auto routing, working authentication and more.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>

</section>
</template>
<script>
import MultipleScreen from '@/components/Module/Frontend/MultipleScreen'
import SectionTitle from '@/components/Module/Frontend/SectionTitle'

export default {
  components: {
    MultipleScreen,
    SectionTitle
  }
}

</script>


<style lang="scss" scoped>
.support-container {
  display: flex;
  justify-content: center;

  i {
    font-size: 4em;
    margin: 0.5em 1em;
  }
}

.feature .feature-item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    color: var(--theme3);
  }

  &.dir {
    align-items: flex-start;
  }
  &.center {
    align-items: center;
  }
}

.feature .feature-item .icon {
  margin-bottom: 25px;
  width: 80px;
  height: 80px;
  position: relative;
}

.feature .feature-item .icon i {
  color: var(--primary);
  font-size: 4em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.feature .feature-item .content h5 {
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 15px;
}

.feature .feature-item:not(:last-child) {
  margin-bottom: 80px;
}

@media (max-width: 768px) {
  .feature .feature-item {
    margin-bottom: 80px;
  }
}

.feature .app-screen {
  margin: 40px 0;
}

.feature .feature-content h2,
.feature .feature-content p {
  margin-bottom: 25px;
}

@media (max-width: 768px) {
  .feature .feature-content h2,
  .feature .feature-content p {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .feature .testimonial {
    text-align: center;
  }
}

.feature .testimonial p {
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 10px;
  font-style: italic;
  color: #242424;
}

.feature .testimonial ul.meta li {
  font-size: 12px;
  margin-right: 10px;
}

.feature .testimonial ul.meta li img {
  height: 40px;
  width: 40px;
  border-radius: 100%;
}

/*# sourceMappingURL=maps/style.css.map */

</style>
