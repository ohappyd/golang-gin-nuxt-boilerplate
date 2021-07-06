
<template>
<b-card no-body
    class="mb-0">
    <b-card-header>
        <card-title title="Invoices"
            subTitle="Last Created and Verified"> </card-title>
    </b-card-header>
    <b-card-body>
        <div class="card-table table-responsive mb-0 p-2">
            <table class="table  table-sm table-hover align-middle h-100">
                <thead class="thead-light">
                    <tr>
                        <th>Customer</th>
                        <th>Email</th>
                        <th class="text-center">Status</th>

                        <th class="text-right">Total</th>
                    </tr>
                </thead>
                <tbody class>
                    <tr v-for="invoice in invoices"
                        :key="invoice.id">
                        <td class="align-middle">
                            <div class="media">
                                <div class="profile-picture bg-primary inverse round float-right d-flex mr-3">
                                    <i class="la la-credit-card" />
                                </div>
                                <div class="media-body">
                                    <div class="heading mt-1">
                                        {{invoice.name}}
                                    </div>
                                    <div class="text-muted text-12">

                                        {{invoice.jobTitle}}

                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class=" align-middle">
                            {{invoice.email}}
                        </td>
                        <td class="text-center align-middle">
                            <b-badge :variant="invoice.variantState"
                                class="ig-badge inverse">{{invoice.textState}}</b-badge>
                        </td>

                        <td class="text-right align-middle">
                            ${{invoice.total}}
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

    </b-card-body>
    <b-card-footer class="d-flex">
        <div class=" w-100">
            <b-form-checkbox inline
                v-model="checked">

                Me

            </b-form-checkbox>
            <b-form-checkbox inline>

                Brian

            </b-form-checkbox>
            <b-form-checkbox inline>

                Anderson

            </b-form-checkbox>

        </div>
        <b-button-group>
            <b-button @click="currentIdx=0"
                :variant="currentIdx == 0 ? 'theme1' : 'link'"
                :class="currentIdx == 0 ? 'inverse' : ''">Daily</b-button>
            <b-button @click="currentIdx=1"
                :variant="currentIdx == 1 ? 'theme1' : 'link'"
                :class="currentIdx == 1 ? 'inverse' : ''">Weekly</b-button>
            <b-button @click="currentIdx=2"
                :variant="currentIdx == 2 ? 'theme1' : 'link'"
                :class="currentIdx == 2 ? 'inverse' : ''">Monthly </b-button>
        </b-button-group>
    </b-card-footer>

</b-card>
</template>
<script>
import faker from 'faker'
import CardTitle from '@/components/Base/Card/CardTitle'

/*
Show last generated invoices
*/
export default {
  components: {
    CardTitle
  },

  data () {
    return {
      currentIdx: 0,
      checked: true,
      invoices: []

    }
  },
  methods: {

  },

  created () {
    // Generate mock data
    const arrVariants = ['primary', 'primary', 'success', 'warning', 'warning']
    const arrTexts = ['Open', 'Open', 'Paid', 'Due', 'Due']
    faker.seed(3)

    for (let i of [0, 1, 2, 3, 4]) {
      const firstName = faker.name.firstName()
      this.invoices.push({
        id: i,
        name: firstName + ' ' + faker.name.lastName(),
        email: firstName.toLowerCase() + '@company.com',
        jobTitle: faker.name.jobType() + ' ' + faker.name.jobArea(),
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
  height: 45px;
  width: 45px;
  font-size: 25px;
}

</style>


