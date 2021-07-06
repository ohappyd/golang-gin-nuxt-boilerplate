
<template>
<div>
    <getting-started> </getting-started>
    <div class="pagebreak"> </div>
    <features> </features>
    <div class="pagebreak"> </div>
    <project-structure />
    <div class="pagebreak"> </div>
    <new-page-route />
    <div class="pagebreak"> </div>
    <change-layout-color />
    <div class="pagebreak"> </div>
    <new-component />
    <div class="pagebreak"> </div>
    <why-feathers />
    <div class="pagebreak"> </div>
    <new-micro-service />
    <div class="pagebreak"> </div>
    <what-is />
    <div class="pagebreak"> </div>
    <libraries> </libraries>
    <div class="pagebreak"> </div>
    <changelog> </changelog>
</div>
</template>
<script>
import features from '@/pages/admin/doc/basic/features'
import libraries from '@/pages/admin/doc/other/libraries'
import changelog from '@/pages/admin/doc/other/changelog'

import GettingStarted from '@/pages/admin/doc/basic/getting-started'
import WhatIs from '@/pages/admin/doc/basic/what-is'
import ProjectStructure from '@/pages/admin/doc/basic/project-structure'
import NewPageRoute from '@/pages/admin/doc/client/new-page-route'
import ChangeLayoutColor from '@/pages/admin/doc/client/change-layout-color'
import NewComponent from '@/pages/admin/doc/client/new-component'
import WhyFeathers from '@/pages/admin/doc/server/why-feathers'
import NewMicroService from '@/pages/admin/doc/server/new-micro-service' // import ProjectStructure from '@/pages/admin/doc/basic/project-structure'
// import ProjectStructure from '@/pages/admin/doc/basic/project-structure'

export default {
  components: {
    GettingStarted,
    WhatIs,
    features,
    ProjectStructure,
    NewPageRoute,
    ChangeLayoutColor,
    NewComponent,
    WhyFeathers,
    NewMicroService,
    libraries,
    changelog
  }
}

</script>


<style lang="scss">
body {
  overflow: auto !important;
}

.btn-container {
  display: none !important;
}

@media print {
  .pagebreak {
    page-break-before: always;
  } /* page-break-after works, as well */
}

</style>


