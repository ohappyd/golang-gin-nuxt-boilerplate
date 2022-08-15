
<template>
<b-card no-body
    class="mb-0">
    <b-card-header>
        <card-title title="Newest Sales"
            subTitle="Lastest Orders"> </card-title>
    </b-card-header>
    <b-card-body>
        <div class="card-table  table-responsive mb-0">
            <table class="table table-sm table-hover align-middle h-100">

                <tbody class>
                    <tr v-for="sale in sales"
                        :key="sale.id">
                        <td class="align-middle">
                            <div class="media">
                                <div class="profile-picture bg-primary inverse round  float-right d-flex mr-3">
                                    <i class="la la-image" />
                                </div>
                                <div class="media-body">
                                    <div class="heading mt-1">
                                        {{sale.name}}
                                    </div>
                                    <div class="text-theme1 mixed-1 ">
                                        {{sale.jobTitle}}
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="align-middle d-none d-sm-table-cell">
                            {{sale.email}}
                        </td>
                        <td class="text-center align-middle">
                            <b-badge :variant="sale.variantState"
                                class="ig-badge inverse">{{sale.textState}}</b-badge>
                        </td>

                        <td class=" font-weight-bold text-right align-middle d-none d-sm-table-cell">
                            ${{sale.total}}
                        </td>
                    </tr>

                </tbody>
                <tfoot>
                    <tr>
                        <th>Customer</th>
                        <th class="d-none d-sm-table-cell">Email</th>
                        <th class="text-center">Status</th>

                        <th class="text-right  d-none d-sm-table-cell">Total</th>
                    </tr>
                </tfoot>
            </table>
        </div>

    </b-card-body>
    <b-card-footer class="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start">
        <div class="flex-grow-1">
            <card-pagination class="justify-content-center justify-content-sm-start"> </card-pagination>

        </div>
        <b-button-group class="my-2 justify-content-center justify-content-sm-start">
            <b-button @click="currentIdx=0"
                :variant="currentIdx == 0 ? 'theme1' : 'link'"
                :class="currentIdx == 0 ? 'inverse' : ''">Done</b-button>
            <b-button @click="currentIdx=1"
                :variant="currentIdx == 1 ? 'theme1' : 'link'"
                :class="currentIdx == 1 ? 'inverse' : ''">Pending</b-button>
            <b-button @click="currentIdx=2"
                :variant="currentIdx == 2 ? 'theme1' : 'link'"
                :class="currentIdx == 2 ? 'inverse' : ''">Delayed </b-button>
        </b-button-group>
    </b-card-footer>

</b-card>
</template>
<script>
import faker from 'faker'
import CardTitle from '@/components/Base/Card/CardTitle'
import CardPagination from '@/components/Base/Card/CardPagination'

/*
Show last created oders
*/
export default {
  components: {
    CardTitle,
    CardPagination
  },

  data () {
    return {
      sales: [],
      currentIdx: 0,
      checked: true
    }
  },

  created () {
    faker.seed(6)
    const arrVariants = ['primary', 'primary', 'success', 'danger', 'danger']
    const arrTexts = ['Finished', 'Finished', 'Paid', 'Canceled', 'Canceled']

    for (let i of [0, 1, 2, 3, 4]) {
      const firstName = faker.name.firstName()
      this.sales.push({
        id: i,
        name: firstName + ' ' + faker.name.lastName(),
        email: firstName.toLowerCase() + '@company.com',
        jobTitle: faker.commerce.department(),
        created: faker.date.recent(),
        total: faker.random.number({
          min: 60,
          max: 400
        }),
        variantState: arrVariants[i],
        textState: arrTexts[i]
      })
    }
  }

}

</script>


<style lang="scss" scoped>
.round i {
  height: 50px;
  width: 50px;
  font-size: 25px;
}

.table {
  margin-bottom: 0rem !important;

  th {
    border-color: transparent !important;
  }

  th:first-child {
    border-radius: 4px 0;
  }
  th:last-child {
    border-radius: 0 4px 0;
  }
}

tfoot th {
  color: var(--theme1-mixed-1);
}

</style>


