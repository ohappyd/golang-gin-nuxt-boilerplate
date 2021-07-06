
<template>
<b-card no-body
    class="mb-0">
    <b-card-header>
        <card-title title="Customers"
            subTitle="Last Created and Verified"> </card-title>
    </b-card-header>
    <b-card-body class="mb-0 pb-0">

        <div class="table-responsive">
            <table class="table table-sm table-hover align-middle h-100">
                <thead class="thead-light bg-theme2inv">
                    <tr>
                        <th>Customer</th>
                        <th>Email</th>
                        <th class="text-center">Status</th>
                        <th>Created</th>
                        <th class="text-right">Action</th>
                    </tr>
                </thead>
                <tbody class>
                    <tr v-for="(customer, i) in customers"
                        :key="i">
                        <td class="align-middle">
                            <div class="media">
                                <div class="profile-picture   float-right d-flex mr-3">
                                    <img class="avatar ml-1"
                                        :src="'/img/user/'+i+'.jpg'"
                                        width="45"
                                        height="45">
                                    </img></div>
                                <div class="media-body my-auto">
                                    <div class="heading font-weight-bolder">
                                        {{customer.name}}
                                    </div>
                                    <div class="subtext d-none d-xl-block">
                                        {{customer.jobTitle}}
                                    </div>

                                    <div class="subtext d-block d-xl-none"
                                        :title="customer.jobTitle">
                                        {{abbreviation(customer.jobTitle)}}
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td class="font-14 text-lowercase align-middle">
                            {{customer.email}}
                        </td>
                        <td class="text-center align-middle">
                            <b-badge :variant="customer.variant"
                                class="badge-outlined inverse">
                                {{customer.textVariant}}
                            </b-badge>
                        </td>
                        <td class="font-14 align-middle"> {{customer.create}}</td>
                        <td class="text-right align-middle">
                            <button-group> </button-group>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </b-card-body>
    <div class="card-footer d-flex">
        <button class="btn btn-sm btn-danger ml-auto align-self-center inverse">
            View All
        </button>
    </div>
</b-card>
</template>
<script>
import faker from 'faker'
import ButtonGroup from '@/components/Base/ActionButton/ButtonGroup'
import CardTitle from '@/components/Base/Card/CardTitle'

/*
Render last customers list from user module
*/
export default {
  components: {
    ButtonGroup,
    CardTitle
  },

  data () {
    return {
      customers: []
    }
  },
  methods: {
    abbreviation (str1) {
      var splitNames = str1.trim().split(' ')
      let name = ''
      for (let i = 0; i < splitNames.length; i++) {
        name = name + splitNames[i].charAt(0) + '. '
      }
      return name
    }

  },
  created () {
    // Generate mock data
    faker.seed(1)
    const variants = ['primary', 'primary', 'success', 'success', 'danger']
    const textVariants = ['Completed', 'Completed', 'Approved', 'Approved', 'Canceled']
    for (let i of [0, 1, 2, 3, 4]) {
      const firstName = faker.name.firstName()
      this.customers.push({
        id: i,
        name: firstName + ' ' + faker.name.lastName(),
        email: firstName.toLowerCase() + '@company.com',
        jobTitle: faker.name.jobTitle(),
        created: faker.date.recent(),
        variant: variants[i],
        textVariant: textVariants[i]
      })
    }
  }

}

</script>


<style lang="scss" scoped>
.subtext {
  font-size: 11px;
}

.table-sm {
  font-size: 12px;
}

</style>


