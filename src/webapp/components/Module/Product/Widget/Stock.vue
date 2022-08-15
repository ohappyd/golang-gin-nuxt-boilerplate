
<template>
<b-card no-body>
    <b-card-header>
        <card-title subTitle="Checkout my contacts here"
            title="Current Stock">
            <b-dropdown id="dropdown-1"
                variant="primary"
                toggle-class="inverse"
                text="Actions">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>

            </b-dropdown>
        </card-title>

    </b-card-header>

    <b-card-body>

        <div class="table-responsive">
            <table class="table stylish-table mb-0">

                <tbody>
                    <tr v-for="(product, i) in products"
                        :key="i">
                        <td>
                            <img :src="product.img"
                                class="ig-rounded opacity-5"
                                width="50"
                                height="50">
                            </img>
                        </td>
                        <td>
                            <div class>
                                <a href="javascript:void(0)"
                                    class="link">
                                    {{product.description}}
                                </a></div>
                            <div class="text-secondary">
                                Product id : {{product.code}}
                            </div>
                        </td>
                        <td>
                            <div class="d-flex justify-content-end">
                                <div>
                                    {{product.qty}}
                                </div>
                                <i class="status-icon fas fa-circle mixed-1 text-primary"
                                    :class2="{'text-success': product.qty>100, 'text-danger': product.qty <= 100}" />

                            </div>
                            <div class="d-flex justify-content-end">
                                <div>
                                    {{product.qty * 2}}
                                </div>
                                <i class="status-icon fas fa-circle mixed-1 text-success"
                                    :class2="{'text-success': product.qty>100, 'text-danger': product.qty <= 100}" />

                            </div>
                        </td>
                        <td class="text-right">

                            <bar22 height="30px"
                                style="max-width: 100px; min-width: 100px"
                                width="100px"
                                :seed="i"> </bar22>
                        </td>
                    </tr>

                </tbody>
                <tfoot>
                    <tr>
                        <th style="width:90px;">Product</th>
                        <th>Description</th>
                        <th class="text-right">Quantity</th>
                        <th class>Graph</th>
                    </tr>
                </tfoot>
            </table>
        </div>

    </b-card-body>
    <b-card-footer class="normalize">
        <card-pagination class="ml-auto"> </card-pagination>

    </b-card-footer>
</b-card>
</template>
<script>
import faker from 'faker'
import CardPagination from '@/components/Base/Card/CardPagination'
import CardTitle from '@/components/Base/Card/CardTitle'
import Line9 from '@/components/Module/Chart/Echarts/Line/Line9'
import Bar22 from '@/components/Module/Chart/Echarts/Bar/Bar22'

/* Stock overview component */
export default {
  components: {
    CardPagination,
    CardTitle,
    Line9,
    Bar22
  },

  data () {
    return {
      products: [],
      selected: null,
      options: [{
        value: null,
        text: 'Eletronics'
      }, {
        value: 'a',
        text: 'This is First option'
      }, {
        value: 'b',
        text: 'Selected Option'
      }, {
        value: {
          C: '3PO'
        },
        text: 'This is an option with object value'
      }, {
        value: 'd',
        text: 'This one is disabled',
        disabled: true
      }]
    }
  },

  created () {
    faker.seed(3)

    for (let i of [1, 2, 3, 4, 5]) {
      this.products.push({
        id: i,
        description: faker.commerce.productName(),
        qty: faker.random.number({
          min: 60,
          max: 180
        }),
        price: '$' + faker.random.number({
          min: 60,
          max: 900
        }),
        code: 'MI' + faker.random.number({
          min: 6000,
          max: 9000
        }),
        img: '/img/product/' + i + '.jpg'
      })
    }
  }

}

</script>


<style lang="scss" scoped>
.status-icon {
  font-size: 0.5rem;
  line-height: 20px;
  height: 20px;
}

h6 {
  margin-bottom: 0;
  line-height: 15px;
  height: 15px;
}

td {
  height: 74px;

  vertical-align: middle !important;
}

tr:first-child {
  border-top-style: hidden;
}

tr:last-child {
  border-bottom-style: hidden;
}

tfoot th {
  color: var(--theme1-mixed-1);
}

</style>


