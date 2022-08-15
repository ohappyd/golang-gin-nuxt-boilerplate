
<template>
<b-card no-body>

    <b-card-header class="d-flex">

        <card-title :title="title ? title : 'Preview'"
            :subTitle="subTitle ? subTitle : 'Result:'">

            <b-button-group>
                <b-button @click="currentIdx=0"
                    variant="secondary"
                    class="inverse"
                    :class="currentIdx == 0 ? '' : 'ig-ghost'">Preview</b-button>
                <b-button @click="currentIdx=1"
                    variant="secondary"
                    class="inverse"
                    :class="currentIdx == 1 ? '' : 'ig-ghost'">Source</b-button>

            </b-button-group>

            <div>
                <b-btn variant="secondary"
                    class="inverse  btn-square"><i class="dripicons-code" />
                </b-btn>
                <b-btn variant="secondary"
                    class="inverse  btn-square"><i class="dripicons-chevron-down" />
                </b-btn>
                <b-btn variant="secondary"
                    class="inverse  btn-square"><i class="dripicons-cross" />
                </b-btn>
            </div>
        </card-title>

    </b-card-header>
    <b-card-body>

        <slot />
    </b-card-body>
</b-card>
</template>
<script>
import CardTitle from '@/components/Base/Card/CardTitle'

export default {
  components: {
    CardTitle
  },
  props: ['title', 'subTitle'],

  data () {
  	return { currentIdx: 0 }
  }
}

</script>


<style lang="scss" scoped>
.card {
  margin-bottom: 2rem;
}

.card-body {
  padding-bottom: 2rem;
}

</style>


