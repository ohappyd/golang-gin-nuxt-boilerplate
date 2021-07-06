
<template>
<b-card class="box-info text-center"
    style="min-height: 330px;">

    <i class="la"
        :class="'la-'+iconNetwork"
        aria-hidden="true" />

    <div class="title">
        <h4 class="text-capitalize">{{network}}</h4>
    </div>

    <div class="text">
        Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.
    </div>

    <b-btn href="#"
        class="inverse mx-auto"
        size="md"
        pill
        :variant="variant">Follow</b-btn>

</b-card>
</template>
<script>

/*
Show social boxes
*/
export default {
  components: {

  },
  methods: {

  },
  props: {
    network: { default: 'Instagram' },
    iconNetwork: { default: 'instagram' },
    variant: { default: 'primary' }
  }

}

</script>


<style lang="scss" scoped>
.card-body {
  background: var(--theme1inv);
  color: var(--theme1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.text {
  margin: 0px 0px 20px 0;
}
.title {
  color: var(--theme1);
}

.la {
  color: var(--primary-mixed);
  font-size: 44px;
}

</style>


