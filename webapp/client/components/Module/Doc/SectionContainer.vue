
<template>
<section class="section-page d-flex flex-column">

    <slot />

    <bottom-bar class="btn-container py-4"
        :previousUrl="previousUrl"
        :nextUrl="nextUrl"> </bottom-bar>
</section>
</template>
<script>
import BottomBar from '@/components/Module/Doc/BottomBar'

export default {
  components: {
    BottomBar
  },
  props: ['previousUrl', 'nextUrl']
}

</script>


<style lang="scss" scoped>
.ig-content-view {
  height: auto !important;
}

.btn-container {
  border-top: 1px solid var(--theme1-mixed);
}

h2 {
  color: var(--theme1);
  font-weight: 600;
  font-size: 30px;
  padding-bottom: 1rem !important;
  padding-top: 0.25rem !important;
}

ul.ig-list {
  li {
    display: flex;
    padding: 8px;
    & > *:first-child {
      flex-basis: 160px;
      flex-shrink: 0;
      flex-wrap: 0;
      background-color: var(--primary-mixed);
      color: var(--primary);
      margin-right: 10px;
      padding: 4px;
      padding-left: 14px;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      font-weight: 600;
      border-radius: 8px;
      min-height: 62px;
    }
    & > *:last-child {
      padding: 4px;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
    }
  }
}

</style>


