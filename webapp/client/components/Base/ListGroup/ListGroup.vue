
<template>
<b-list-group>
    <b-list-group-item v-for="i in 30"
        :key="i"
        class=" align-items-center">
        Cras justo odio
        <b-badge variant="primary"
            class="ml-auto"
            pill>{{i}}</b-badge>
    </b-list-group-item>
</b-list-group>
</template>
<script>

/// Simple list group with badge
export default {}

</script>
