
<template>
<b-card no-body
    class="mb-0">
    <b-card-header>
        <card-title title="Customers"
            subTitle="Last Created and Verified"> </card-title>
    </b-card-header>
    <b-card-body class="mb-0 pt-3 p-4">

        <div class="table-responsive">
            <table class="table table-sm table-hover align-middle h-100">
                <thead v-show="false"
                    class="bg-secondary inverse">
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
                                    <img class=" ml-1"
                                        :src="customer.logo"
                                        width="35"
                                        height="35">
                                    </img>
                                </div>
                                <div class="media-body my-auto">
                                    <div class="heading ">
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
                                class="ig-badge inverse">
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
        <card-pagination size="md"> </card-pagination>
        <b-btn variant="primary"
            class="ml-auto inverse">
            List All
        </b-btn>
    </div>
</b-card>
</template>
<script>
import faker from 'faker'
import ButtonGroup from '@/components/Base/ActionButton/ButtonGroup'
import CardTitle from '@/components/Base/Card/CardTitle'
import CardPagination from '@/components/Base/Card/CardPagination'

/*
Render last customers list from user module
*/
export default {
  components: {
    ButtonGroup,
    CardTitle,
    CardPagination
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

    for (let i of [1, 2, 3, 4]) {
      const firstName = faker.name.firstName()
      this.customers.push({
        id: i,
        name: firstName + ' ' + faker.name.lastName(),
        email: firstName.toLowerCase() + '@company.com',
        jobTitle: faker.name.jobTitle(),
        created: faker.date.recent(),
        variant: variants[i],
        create: 'Today',
        logo: '/img/logo/' + i + '.svg',
        textVariant: textVariants[i]
      })
    }
  }

}

</script>


<style lang="scss" scoped>
.subtext {
  //font-size: 11px;
  color: var(--theme1-mixed-1);
}

.table-sm {
  //font-size: 12px;
}

.table > tbody > tr:first-child > td {
  border: none;
}
.media {
  align-items: center;
}

</style>


