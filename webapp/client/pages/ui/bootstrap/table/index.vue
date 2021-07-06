
<template>
<div>

    <title-page title="Tables">
        <p class="bd-lead">For displaying tabular data, <code>&lt;b-table&gt;</code> supports pagination, filtering, sorting, custom
            rendering, various style options, events, and asynchronous data.</p>
    </title-page>

    <card-component>
        <b-table striped
            hover
            :items="items" />
    </card-component>

    <title-page title="Fields as an object">
        <p>Also, fields can be a an object providing similar control over the fields as the <em>array of objects</em>
            above does. Only columns listed in the fields object will be shown. The order of the fields will
            typically be in the order they were defined in the object, although <strong>field order is not guaranteed
                (this may cause issues with Server Side Rendering and client rehydration)</strong>.</p>
    </title-page>

    <card-component>
        <div>
            <b-table striped
                hover
                small
                :items="items2"
                :fields="fields" />
        </div>
    </card-component>

    <title-page title="Basic table styles">
    </title-page>

    <card-component>
        <b-form-group label="Table Options">
            <b-form-checkbox v-model="striped"
                inline>Striped</b-form-checkbox>
            <b-form-checkbox v-model="bordered"
                inline>Bordered</b-form-checkbox>
            <b-form-checkbox v-model="borderless"
                inline>Borderless</b-form-checkbox>
            <b-form-checkbox v-model="outlined"
                inline>Outlined</b-form-checkbox>
            <b-form-checkbox v-model="small"
                inline>Small</b-form-checkbox>
            <b-form-checkbox v-model="hover"
                inline>Hover</b-form-checkbox>
            <b-form-checkbox v-model="dark"
                inline>Dark</b-form-checkbox>
            <b-form-checkbox v-model="fixed"
                inline>Fixed</b-form-checkbox>
            <b-form-checkbox v-model="footClone"
                inline>Foot Clone</b-form-checkbox>
        </b-form-group>

        <b-table :striped="striped"
            :bordered="bordered"
            :borderless="borderless"
            :outlined="outlined"
            :small="small"
            :hover="hover"
            :dark="dark"
            :fixed="fixed"
            :foot-clone="footClone"
            :items="items3"
            :fields="fields3" />
    </card-component>

    <title-page title="Row Styling">
        <p>You can also style every row using the <code>tbody-tr-class</code> prop</p>
    </title-page>

    <card-component>
        <b-table :items="items"
            :fields="fields"
            :tbody-tr-class="rowClass" />
    </card-component>

    <title-page title="Responsive tables">
        <p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive
            across all viewports by setting the prop <code>responsive</code> to <code>true</code>. Or, pick a maximum breakpoint with
            which to have a responsive table up to by setting the prop <code>responsive</code> to one of the breakpoint
            values: <code>sm</code>, <code>md</code>, <code>lg</code>, or <code>xl</code>.</p>
    </title-page>

    <card-component>
        <b-table responsive
            :items="items4" />
    </card-component>

    <title-page title="Stacked tables">
    </title-page>

    <card-component>
        <b-table stacked
            :items="items" />

    </card-component>

    <title-page title="Scoped Field Slots">
        <p>Scoped slots give you greater control over how the record data appears. If you want to add an extra
            field which does not exist in the records, just add it to the <code>fields</code> array, And then reference the
            field(s) in the scoped slot(s).</p>
    </title-page>

    <card-component>
        <b-table small
            :fields="fields5"
            :items="items5">
            <!-- A virtual column -->
            <template v-slot:cell(index)="data">
                {{ data.index + 1 }}
            </template>

            <template v-slot:cell(name)="data">
                <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b>
            </template>

            <!-- A virtual composite column -->
            <template v-slot:cell(nameage)="data">
                {{ data.item.name.first }} is {{ data.item.age }} years old
            </template>
            <template v-slot:cell()="data">
                <i>{{ data.value }}</i>
            </template>
        </b-table>
    </card-component>

    <title-page title="Displaying raw HTML">
        <p>By default <code>b-table</code> escapes HTML tags in items data and results of formatter functions, if you need
            to display raw HTML code in <code>b-table</code>, you should use <code>v-html</code> directive on an element in a in
            scoped field slot</p>
    </title-page>

    <card-component>
        <b-table :items="items6">
            <span slot="html"
                slot-scope="data"
                v-html="data.value" />
        </b-table>
    </card-component>
    <title-page title="Formatter callback">
        <p>One more option to customize field output is to use formatter callback function. To enable this
            field's property <code>formatter</code> is used. Value of this property may be String or function reference. In
            case of a String value, the function must be defined at the parent component's methods. Providing
            formatter as a <code>Function</code>, it must be declared at global scope (window or as global mixin at Vue),
            unless it has been bound to a <code>this</code> context.</p>
    </title-page>

    <card-component>
        <b-table :fields="fields7"
            :items="items7">
            <template v-slot:cell(name)="row">
                <!-- `data.value` is the value after formatted by the Formatter -->
                <a href="#">{{ row.value }}</a>
            </template>
        </b-table>
    </card-component>

    <title-page title="Custom empty/emptyfiltered rendering via slots">
        <p>Aside from using <code>empty-text</code>, <code>empty-filtered-text</code>, <code>empty-html</code>, and <code>empty-filtered-html</code>, it is
            also possible to provide custom rendering for tables that have no data to display using named slots.</p>
    </title-page>

    <card-component>
        <b-table :fields="fields"
            :items="items"
            show-empty>
            <template slot="empty"
                slot-scope="scope">
                <h4>{{ scope.emptyText }}</h4>
            </template>
            <template slot="emptyfiltered"
                slot-scope="scope">
                <h4>{{ scope.emptyFilteredText }}</h4>
            </template>
        </b-table>
    </card-component>
    <title-page title="Adding additional rows to the header">
        <p>If you wish to add additional rows to the header you may do so via the <code>thead-top</code> slot. This slot
            is inserted before the header cells row, and is not encapsulated by <code>&lt;tr&gt;..&lt;/tr&gt;</code> tags.</p>
    </title-page>

    <card-component>
        <b-table :items="items8"
            :fields="fields8"
            responsive="sm">
            <template slot="thead-top"
                slot-scope="data">
                <tr>
                    <th colspan="2">&nbsp;</th>
                    <th>Type 1</th>
                    <th colspan="3">Type 2</th>
                    <th>Type 3</th>
                </tr>
            </template>
        </b-table>
    </card-component>

    <title-page title="Complete Example">
        <div />
    </title-page>

    <card-component>
        <b-container fluid>
            <!-- User Interface controls -->
            <b-row>
                <b-col md="6"
                    class="my-1">
                    <b-form-group label-cols-sm="3"
                        label="Filter"
                        class="mb-0">
                        <b-input-group>
                            <b-form-input v-model="filter"
                                placeholder="Type to Search" />
                            <b-input-group-append>
                                <b-button :disabled="!filter"
                                    @click="filter = ''">Clear</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                </b-col>

                <b-col md="6"
                    class="my-1">
                    <b-form-group label-cols-sm="3"
                        label="Sort"
                        class="mb-0">
                        <b-input-group>
                            <b-form-select v-model="sortBy"
                                :options="sortOptions">
                                <option slot="first"
                                    :value="null">-- none --</option>
                            </b-form-select>
                            <b-form-select v-model="sortDesc"
                                :disabled="!sortBy"
                                slot="append">
                                <option :value="false">Asc</option>
                                <option :value="true">Desc</option>
                            </b-form-select>
                        </b-input-group>
                    </b-form-group>
                </b-col>

                <b-col md="6"
                    class="my-1">
                    <b-form-group label-cols-sm="3"
                        label="Sort direction"
                        class="mb-0">
                        <b-input-group>
                            <b-form-select v-model="sortDirection"
                                slot="append">
                                <option value="asc">Asc</option>
                                <option value="desc">Desc</option>
                                <option value="last">Last</option>
                            </b-form-select>
                        </b-input-group>
                    </b-form-group>
                </b-col>

                <b-col md="6"
                    class="my-1">
                    <b-form-group label-cols-sm="3"
                        label="Per page"
                        class="mb-0">
                        <b-form-select v-model="perPage"
                            :options="pageOptions" />
                    </b-form-group>
                </b-col>
            </b-row>

            <!-- Main table element -->
            <b-table show-empty
                stacked="md"
                :items="items9"
                :fields="fields9"
                :current-page="currentPage"
                :per-page="perPage"
                :filter="filter"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :sort-direction="sortDirection"
                @filtered="onFiltered">
                <template v-slot:cell(name)="row">
                    {{ row.value.first }} {{ row.value.last }}
                </template>

                <template slot="isActive"
                    slot-scope="row">
                    {{ row.value ? 'Yes :)' : 'No :(' }}
                </template>

                <template slot="actions"
                    slot-scope="row">
                    <b-button size="sm"
                        @click="info(row.item, row.index, $event.target)"
                        class="mr-1">
                        Info modal
                    </b-button>
                    <b-button size="sm"
                        @click="row.toggleDetails">
                        {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                    </b-button>
                </template>

                <template slot="row-details"
                    slot-scope="row">
                    <b-card>
                        <ul>
                            <li v-for="(value, key) in row.item"
                                :key="key">{{ key }}: {{ value }}</li>
                        </ul>
                    </b-card>
                </template>
            </b-table>

            <b-row>
                <b-col md="6"
                    class="my-1">
                    <b-pagination v-model="currentPage"
                        :total-rows="totalRows"
                        :per-page="perPage"
                        class="my-0" />
                </b-col>
            </b-row>

            <!-- Info modal -->
            <b-modal id="modal-info"
                @hide="resetModal"
                :title="modalInfo.title"
                ok-only>
                <pre>{{ modalInfo.content }}</pre>
            </b-modal>
        </b-container>
    </card-component>

</div>
</template>
<script>
import TitlePage from '@/components/Base/Title/TitlePage'
import CardComponent from '@/components/Base/Card/CardComponent'

export default {
  components: {
    TitlePage,
    CardComponent
  },
  layout: 'admin',
  meta: {
    component: {
      tag: 'b-table',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/table/#component-reference'
    }
  },
  methods: {
    rowClass (item, type) {
      if (!item) return
      if (item.status === 'awesome') return 'table-success'
    },

    fullName (value) {
      return `${value.first} ${value.last}`
    },

    info (item, index, button) {
      this.modalInfo.title = `Row index: ${index}`
      this.modalInfo.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', 'modalInfo', button)
    },

    resetModal () {
      this.modalInfo.title = ''
      this.modalInfo.content = ''
    },

    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }

  },

  mounted () {
    // Set the initial number of items
    this.totalRows = this.items.length
  },

  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields9.filter(f => f.sortable).map(f => {
        return {
          text: f.label,
          value: f.key
        }
      })
    }

  },

  data () {
    return {
      fields3: ['first_name', 'last_name', 'age'],
      items3: [{
        age: 40,
        first_name: 'Dickerson',
        last_name: 'Macdonald'
      }, {
        age: 21,
        first_name: 'Larsen',
        last_name: 'Shaw'
      }, {
        age: 89,
        first_name: 'Geneva',
        last_name: 'Wilson'
      }],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      items9: [{
        isActive: true,
        age: 40,
        name: {
          first: 'Dickerson',
          last: 'Macdonald'
        }
      }, {
        isActive: false,
        age: 21,
        name: {
          first: 'Larsen',
          last: 'Shaw'
        }
      }, {
        isActive: false,
        age: 9,
        name: {
          first: 'Mini',
          last: 'Navarro'
        },
        _rowVariant: 'success'
      }, {
        isActive: false,
        age: 89,
        name: {
          first: 'Geneva',
          last: 'Wilson'
        }
      }, {
        isActive: true,
        age: 38,
        name: {
          first: 'Jami',
          last: 'Carney'
        }
      }, {
        isActive: false,
        age: 27,
        name: {
          first: 'Essie',
          last: 'Dunlap'
        }
      }, {
        isActive: true,
        age: 40,
        name: {
          first: 'Thor',
          last: 'Macdonald'
        }
      }, {
        isActive: true,
        age: 87,
        name: {
          first: 'Larsen',
          last: 'Shaw'
        },
        _cellVariants: {
          age: 'danger',
          isActive: 'warning'
        }
      }, {
        isActive: false,
        age: 26,
        name: {
          first: 'Mitzi',
          last: 'Navarro'
        }
      }, {
        isActive: false,
        age: 22,
        name: {
          first: 'Genevieve',
          last: 'Wilson'
        }
      }, {
        isActive: true,
        age: 38,
        name: {
          first: 'John',
          last: 'Carney'
        }
      }, {
        isActive: false,
        age: 29,
        name: {
          first: 'Dick',
          last: 'Dunlap'
        }
      }],
      fields9: [{
        key: 'name',
        label: 'Person Full name',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'age',
        label: 'Person age',
        sortable: true,
        class: 'text-center'
      }, {
        key: 'isActive',
        label: 'is Active'
      }, {
        key: 'actions',
        label: 'Actions'
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: {
        title: '',
        content: ''
      },
      items8: [{
        name: 'Stephen Hawking',
        id: 1,
        type1: false,
        type2a: true,
        type2b: false,
        type2c: false,
        type3: false
      }, {
        name: 'Johnny Appleseed',
        id: 2,
        type1: false,
        type2a: true,
        type2b: true,
        type2c: false,
        type3: false
      }, {
        name: 'George Washington',
        id: 3,
        type1: false,
        type2a: false,
        type2b: false,
        type2c: false,
        type3: true
      }, {
        name: 'Albert Einstein',
        id: 4,
        type1: true,
        type2a: false,
        type2b: false,
        type2c: true,
        type3: false
      }, {
        name: 'Isaac Newton',
        id: 5,
        type1: true,
        type2a: true,
        type2b: false,
        type2c: true,
        type3: false
      }],
      fields8: ['name', {
        key: 'id',
        label: 'ID'
      }, {
        key: 'type1',
        label: 'Type 1'
      }, {
        key: 'type2a',
        label: 'Type 2A'
      }, {
        key: 'type2b',
        label: 'Type 2B'
      }, {
        key: 'type2c',
        label: 'Type 2C'
      }, {
        key: 'type3',
        label: 'Type 3'
      }],
      items7: [
        { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
        { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
        { name: { first: 'Rubin', last: 'Kincade' }, sex: 'male', age: 73 },
        { name: { first: 'Shirley', last: 'Partridge' }, sex: 'female', age: 62 }
      ],
      fields7: [ {
        // A column that needs custom formatting,
        // calling formatter 'fullName' in this app
        key: 'name',
        label: 'Full Name',
        formatter: value => {
          return value.first + ' ' + value.last
        }
      },
      // A regular column
      'age',
      {
        // A regular column with custom formatter
        key: 'sex',
        formatter: value => {
          return value.charAt(0).toUpperCase()
        }
      },
      {
        // A virtual column with custom formatter
        key: 'birthYear',
        label: 'Calculated Birth Year',
        formatter: (value, key, item) => {
          return new Date().getFullYear() - item.age
        }
      }],
      items6: [{
        text: 'This is <i>escaped</i> content',
        html: 'This is <i>raw <strong>HTML</strong></i> <span style="color:red">content</span>'
      }],
      items: [{
        age: 40,
        first_name: 'Dickerson',
        last_name: 'Macdonald'
      }, {
        age: 21,
        first_name: 'Larsen',
        last_name: 'Shaw'
      }, {
        age: 89,
        first_name: 'Geneva',
        last_name: 'Wilson'
      }, {
        age: 38,
        first_name: 'Jami',
        last_name: 'Carney'
      }],
      fields5: [// A virtual column that doesn't exist in items
        'index', // A column that needs custom formatting
        {
          key: 'name',
          label: 'Full Name'
        }, // A regular column
        'age', // A regular column
        'sex', // A virtual column made up from two fields
        {
          key: 'nameage',
          label: 'First name and age'
        }],
      items5: [{
        name: {
          first: 'John',
          last: 'Doe'
        },
        sex: 'Male',
        age: 42
      }, {
        name: {
          first: 'Jane',
          last: 'Doe'
        },
        sex: 'Female',
        age: 36
      }, {
        name: {
          first: 'Rubin',
          last: 'Kincade'
        },
        sex: 'Male',
        age: 73
      }, {
        name: {
          first: 'Shirley',
          last: 'Partridge'
        },
        sex: 'Female',
        age: 62
      }],
      items4: [{
        'heading 1': 'table cell',
        'heading 2': 'table cell',
        'heading 3': 'table cell',
        'heading 4': 'table cell',
        'heading 5': 'table cell',
        'heading 6': 'table cell',
        'heading 7': 'table cell',
        'heading 8': 'table cell',
        'heading 9': 'table cell',
        'heading 10': 'table cell'
      }, {
        'heading 1': 'table cell',
        'heading 2': 'table cell',
        'heading 3': 'table cell',
        'heading 4': 'table cell',
        'heading 5': 'table cell',
        'heading 6': 'table cell',
        'heading 7': 'table cell',
        'heading 8': 'table cell',
        'heading 9': 'table cell',
        'heading 10': 'table cell'
      }, {
        'heading 1': 'table cell',
        'heading 2': 'table cell',
        'heading 3': 'table cell',
        'heading 4': 'table cell',
        'heading 5': 'table cell',
        'heading 6': 'table cell',
        'heading 7': 'table cell',
        'heading 8': 'table cell',
        'heading 9': 'table cell',
        'heading 10': 'table cell'
      }],
      fields: ['first_name', 'last_name', 'age'],
      items2: [{
        age: 40,
        first_name: 'Dickerson',
        last_name: 'Macdonald',
        address: {
          country: 'USA',
          city: 'New York'
        }
      }, {
        age: 21,
        first_name: 'Larsen',
        last_name: 'Shaw',
        address: {
          country: 'Canada',
          city: 'Toronto'
        }
      }, {
        age: 89,
        first_name: 'Geneva',
        last_name: 'Wilson',
        address: {
          country: 'Australia',
          city: 'Sydney'
        }
      }, {
        age: 38,
        first_name: 'Jami',
        last_name: 'Carney',
        address: {
          country: 'England',
          city: 'London'
        }
      }]
    }
  }

}

</script>
