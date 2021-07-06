
<template>
<b-card overlay
    no-body
    text-variant="white"
    style2="height:200px"
    class="h-100">
    <b-card-body class="p-0 h-100">
        <b-carousel id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            class="carousel h-100"
            img-width="1024"
            img-height="100%">
            <b-carousel-slide>
                <img slot="img"
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="100%"
                    src="~/static/1055.jpg"
                    alt="image slot">
                </img>
            </b-carousel-slide>
            <b-carousel-slide>
                <img slot="img"
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="100%"
                    src="~/static/804.jpg"
                    alt="image slot">
                </img>
            </b-carousel-slide>

            <b-carousel-slide>
                <img slot="img"
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="100%"
                    src="~/static/748.jpg"
                    alt="image slot">
                </img>
            </b-carousel-slide>
        </b-carousel>
    </b-card-body>
</b-card>
</template>
<script>

/*
SImple image widget
*/
export default {
}

</script>


<style lang="scss" scoped>
.carousel img {
  height: 550px;
  opacity: 0.5;
  transition: opacity 0.5s, visibility 0.3s;
}
.carousel:hover img {
  opacity: 0.8;
}

</style>
