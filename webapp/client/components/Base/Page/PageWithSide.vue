
<template>
<div class="d-flex">
    <div style="width: 200px">
        <context-side-bar> </context-side-bar>
    </div>
    <div style="width: 100%">
        <slot>
            Main Content (Replace with slot value)
        </slot>
    </div>
</div>
</template>
<script>
import ContextSideBar from '@/components/Base/Menu/ContextSideBar'

export default {
  components: {
    ContextSideBar
  }
}

</script>
