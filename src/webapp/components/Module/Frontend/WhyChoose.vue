
<template>
<section class="page-section page-menu bg-dark text-white">
    <div class="container">
        <div class="row">

            <div class="col text-center">
                <p class="text-light h5 mb-2">Why Choose Us?</p>
                <h1 class="text-white mb-5 max2">Current Numbers</h1>

            </div>

        </div>
        <div class="row text-center">
            <div class="col"
                v-for="(item, i) in items"
                :key="i">
                <div class="counter">
                    <i class="lnr icon-4x"
                        :class="item.icon" />
                    <h1 class="timer count-title count-number font-weight-bold text-info">{{item.value}}+ </h1>
                    <p class="count-text text-secondary font-weight-bold ">{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>

export default {
  data () {
    return {
      items: [
        {
          title: 'YEARS EXPERIENCE',
          icon: 'lnr-code',
          value: 15,
          variant: 'danger'
        },
        {
          title: 'SOLUTIONS DELIVERED',
          icon: 'lnr-rocket',
          value: 1532,
          variant: 'warning'
        },
        {
          title: 'HAPPY CLIENTS',
          icon: 'lnr-diamond',
          value: 1050,
          variant: 'info'
        },
        {
          title: 'IN-HOUSE EXPERTS',
          icon: 'lnr-bug',
          value: 15,
          variant: 'primary'
        }
      ]
    }
  }
}

</script>



