
<template>
<div class="card blog-widget h-100">
    <div class="card-body p-0">
        <div class="blog-image">
            <img src="/804.jpg"
                alt="img"
                class="img-responsive" /></div>
        <div class="p-3">
            <h3 class="text-dark">Business development new rules for 2017</h3>
            <label class="text-muted">Technology</label>
            <p class="m-t-20 m-b-20">
                Lorem ipsum dolor sit amet, this is a consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut
            </p>
            <div class="d-flex">
                <div class="read"><a href="javascript:void(0)"
                        class="link font-medium text-primary">Read More</a></div>
                <div class="ml-auto">
                    <a href="javascript:void(0)"
                        class="link m-r-10 text-primary "
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Like"><i class="mdi mdi-heart-outline" /></a> <a href="javascript:void(0)"
                        class="link"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Share"><i class="mdi mdi-share-variant" /></a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>

/*
Show last post from blog, you can easily change this component to get data from any database.
See modules: Calendar, chat or todo to REAL working examples.
*/
export default {}

</script>


<style lang="scss">
.blog-widget .blog-image img {
  border-radius: 4px;
  margin-bottom: 20px;
  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

</style>
