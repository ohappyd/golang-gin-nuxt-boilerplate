
<template>
<section-container previousUrl="/admin/doc/other/libraries">
    <title-page title="Changelog">
        <div />
    </title-page>

    <div class="section-body">

        <div v-for="version in versions">
            <h3>{{version.version}}</h3>
            <ul>
                <li v-for="change in version.changes">
                    {{change}}

                </li>
            </ul>
        </div>
    </div>

</section-container>
</template>
<script>
import TitlePage from '@/components/Base/Title/TitlePage'
import BottomBar from '@/components/Module/Doc/BottomBar'
import SectionContainer from '@/components/Module/Doc/SectionContainer'

import { versions } from '@@/config/changelog.json'

export default {
  components: {
    TitlePage,
    BottomBar,
    SectionContainer
  },
  layout: 'admin',
  meta: {
    page: {
      contentCentered: true
    }
  },
  data () {
    return {
      versions
    }
  }
}

</script>
