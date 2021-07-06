
<template>
<div class="w-100 d-flex">
    <card-title :title="title"
        :subTitle="subTitle"
        class="mr-auto">

        <slot>
            <div v-if="!compact"
                class="ml-auto text-24 text-theme1 my-auto">
                <i class="la la-bar-chart" />
                <i class="la la-area-chart" />
                <i class="la la-pie-chart" />
            </div>

            <div v-else
                class="text-theme1 my-auto ml-auto">
                <b-dropdown variant="link"
                    no-caret
                    toggle-class="p-0"
                    class="header-button">
                    <template slot="button-content">
                        <i class="text-20 text-theme1"
                            :class="iconClass" /></template>

                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                </b-dropdown>
            </div>
        </slot>
    </card-title>

</div>
</template>
<script>
import CardTitle from '@/components/Base/Card/CardTitle'

/*
Simple chart toolbar example
*/
export default {
  components: {
    CardTitle
  },
  props: {
    compact: { default: false, type: Boolean },
    iconClass: { default: 'la la-ellipsis-v', type: String },
    title: { default: 'Sales Growth', type: String },
    subTitle: { default: 'Current Period', type: String }
  }
}

</script>


<style lang="scss" scoped>
/deep/ .btn {
  font-size: 12px !important;
}

</style>
