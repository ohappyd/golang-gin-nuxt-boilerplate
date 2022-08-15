
<template>
<b-card no-body
    class="ig-rounded"
    :class="[bgClass]">
    <b-card-body class="p-0">
        <radial-multiple> </radial-multiple>
    </b-card-body>
</b-card>
</template>
<script>
import RadialMultiple from '@/components/Module/Chart/Apex/Radial/RadialMultiple'

export default {
  components: {
    RadialMultiple
  },
  props: ['bgClass']
}

</script>



