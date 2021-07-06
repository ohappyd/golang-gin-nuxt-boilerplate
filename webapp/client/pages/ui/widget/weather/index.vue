
<template>
<div>

    <title-top title="Weather"> </title-top>
    <row-basic> </row-basic>

    <b-row>
        <b-col md="12"
            lg="3">
            <basic-alt5 city="Connecticut"
                temp="62"
                wind="36"
                lineVariant="danger"> </basic-alt5>
        </b-col>
        <b-col md="12"
            lg="3">
            <basic-alt5 city="New Jersey"
                temp="62"
                wind="36"
                lineVariant="primary"> </basic-alt5>
        </b-col>
        <b-col md="12"
            lg="3">
            <basic-alt5 city="New Orleans"
                wind="24"
                temp="49"
                lineVariant="secondary"> </basic-alt5>
        </b-col>
        <b-col md="12"
            lg="3">
            <basic-alt5> </basic-alt5>
        </b-col>
    </b-row>
    <b-row>
        <b-col md="12"
            lg="6">
            <basic-alt7> </basic-alt7>
        </b-col>
        <b-col md="12"
            lg="6">
            <basic-alt7> </basic-alt7>
        </b-col>
    </b-row>

    <b-row>
        <b-col md="12"
            lg="4">
            <basic-alt3 city="Connecticut"
                temp="62"
                wind="36"> </basic-alt3>
        </b-col>
        <b-col md="12"
            lg="4">
            <basic-alt3 city="New Jersey"
                temp="62"
                wind="36"> </basic-alt3>
        </b-col>
        <b-col md="12"
            lg="4">
            <basic-alt3> </basic-alt3>
        </b-col>
    </b-row>

    <b-row>
        <b-col md="12"
            lg="4">
            <basic-alt6 city="Connecticut"
                temp="62"
                wind="36"> </basic-alt6>
        </b-col>
        <b-col md="12"
            lg="4">
            <basic-alt6 city="New Jersey"
                temp="62"
                wind="36"> </basic-alt6>
        </b-col>
        <b-col md="12"
            lg="4">
            <basic-alt6 city="New Orleans"
                temp="42"
                wind="26"> </basic-alt6>
        </b-col>

    </b-row>
</div>
</template>
<script>
import BasicAlt2 from '@/components/Module/Weather/Widget/BasicAlt2'
import BasicAlt3 from '@/components/Module/Weather/Widget/BasicAlt3'
import BasicAlt4 from '@/components/Module/Weather/Widget/BasicAlt4'
import BasicAlt6 from '@/components/Module/Weather/Widget/BasicAlt6'
import BasicAlt5 from '@/components/Module/Weather/Widget/BasicAlt5'
import BasicAlt7 from '@/components/Module/Weather/Widget/BasicAlt7'
import RowBasic from '@/components/Module/Weather/Widget/RowBasic'
import TitleTop from '@/components/Base/Title/TitleTop'

export default {
  layout: 'admin',
  components: {
    BasicAlt2,
    BasicAlt3,
    BasicAlt4,
    BasicAlt6,
    BasicAlt5,
    BasicAlt7,
    RowBasic,
    TitleTop
  },
  meta: {
    component: {
      description: 'Awesome weather widgets.'
    }
  }
}

</script>



