
<template>
<b-pagination v-model="currentPage"
    class="mb-0"
    :total-rows="rows"
    :per-page="perPage"
    hide-goto-end-buttons
    :size="size"
    :align="align">
    <span slot="prev-text"><i class="la la-angle-left" /></span>
    <span slot="next-text"><i class="la la-angle-right" /></span>

</b-pagination>
</template>
<script>

export default {
  data () {
    return {
      rows: 30,
      perPage: 10,
      currentPage: 1
    }
  },
  props: {
    align: { type: String, default: 'right' },
    size: { type: String, default: 'md' }

  }
}

</script>



