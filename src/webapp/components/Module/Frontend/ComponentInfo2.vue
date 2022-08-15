
<template>
    <section class="page-section bg-white"
        tyle="min-height: 100vh;">

        <div class="container">
            <div class="row">
                <div class="col-lg-6 text-center ">

                    <div class="img-container">
                        <img style="left: 0px;"
                            src="/img/screen/component/2.png"
                            class="img-fluid shadow img-component " />

                        <img style="left: -20px; top: 80px;"
                            src="/img/screen/component/1.png"
                            class="img-fluid shadow img-component " />

                        <img style="left: 0px;  top: 160px;"
                            src="/img/screen/component/3.png"
                            class="img-fluid shadow img-component " />

                    </div>

                </div>
                <div class="col-lg-6 text-left">
                    <h3 class="text-theme1 "
                        style="line-height: 1.25">Super components you can reuse. <br />
                        <span class="bg-theme1 inverse">Any business segment.</span>
                    </h3>
                    <hr class="divider light my-1">
                    <p class="text-theme1 mb-4">
                        Ignity Admin has everything you need to get your new website up and running in no time!
                        Choose one of our included skins, or easy edit anything!</p>
                    <b-btn size="xl"
                        variant="outline-info"
                        href="/admin/dashboard">250+ Components</b-btn>
                    </hr>
                </div>
            </div>

        </div>

    </section>
</template>


<style lang="scss" scoped>
.img-container {
  img {
    position: absolute;
    left: 0px;
    transition: transform 0.5s;

    &:hover {
      transform: translate(0px, -5px);
      z-index: 2;
    }
  }
}

.img-component {
  border-radius: 8px;
}

</style>


