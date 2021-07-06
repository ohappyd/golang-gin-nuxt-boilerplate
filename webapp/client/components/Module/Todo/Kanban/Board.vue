
<template>
<client-only>
    <kanban-board :stages="stages"
        :blocks="blocks">

        <div v-for="stage in stages"
            :slot="stage"
            :key="stage"
            class2="col-md-4 col-lg-2 col-2 teste">
            <h2>{{ stage }}</h2>
        </div>
        <div v-for="block in blocks"
            :slot="block.id"
            :key="block.id">
            <div class="text-theme1 mb-1">
                <strong> {{ block.title }} </strong>

                <div class="ig-date">{{ block.day }} <small>Apr</small></div>

            </div>
            <div class="text-theme2 mb-2">
                {{ block.description }}
            </div>
            <div class="ig-footer-todo ">

                <b-badge :variant="block.variant"> Status</b-badge>

                <avatar-list> </avatar-list>
            </div>

        </div>
    </kanban-board>
</client-only>
</template>
<script>
import faker from 'faker'
import AvatarList from '@/components/Module/User/Widget/AvatarList'

import { debounce } from 'lodash'
/* Wrapper for vue kanban board component */

export default {
  components: {
    AvatarList
  },
  name: 'app',

  data () {
    return {
      stages: ['on-hold', 'in-progress', 'needs-review', 'approved', 'done'],
      blocks: []
    }
  },

  mounted () {
    faker.seed(4)
    const variants = ['primary', 'danger', 'secondary', 'warning', 'success', 'info']

    // Populate mock data
    for (let i = 0; i <= 30; i += 1) {
      const x = faker.random.number({
        'min': 0,
        'max': 5
      })
      const y = faker.random.number({
        'min': 0,
        'max': 5
      })

      this.blocks.push({
        id: i,
        title: faker.company.catchPhrase(),
        description: faker.hacker.phrase(),
        day: i + 1,
        status: this.stages[x],
        variant: variants[y]
      })
    }
  },

  methods: {
    // Update block method
    updateBlock: debounce(function (id, status) {
      this.blocks.find(b => b.id === Number(id)).status = status
    }, 500),
    // Add block to list
    addBlock: debounce(function (stage) {
      this.blocks.push({
        id: this.blocks.length,
        status: stage,
        title: 'Test'
      })
    }, 500)
  }
}

</script>


<style lang="scss">
@import "~@@/client/styles/variables/base/_default-skin.scss";
@import "~@@/client/styles/variables/base/all.scss";

$ease-out: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

.ig-footer-todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
  border-top: 1px solid var(--theme1-mixed);

  .ig-date {
    font-weight: 500;
    font-size: 1.05rem;
  }
}
ul.drag-list,
ul.drag-inner-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.drag-list {
  display: flex;
  align-items: flex-start;

  @media (max-width: 790px) {
    display: block;
  }
}

.drag-column {
  flex: 1;
  margin-right: 10px;
  position: relative;
  background: var(--theme1inv);
  overflow: hidden;
  box-shadow: $themeShadow1;

  @media (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 30px;
  }

  &:last-child {
    margin-right: 0px;
  }

  h2 {
    font-size: 0.8rem;
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--theme1);
  }
}

.drag-column-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.drag-inner-list {
  min-height: 50px;
  color: var(--secondary);
}

.drag-item {
  padding: 13px;
  margin: 10px;
  min-height: 100px;
  background: var(--theme2inv);
  transition: $ease-out;

  &.is-moving {
    transform: scale(1.5);
    background: var(--theme3inv);
  }
}

.drag-header-more {
  cursor: pointer;
}

.drag-options {
  position: absolute;
  top: 44px;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  transform: translateX(100%);
  opacity: 0;
  transition: $ease-out;

  &.active {
    transform: translateX(0);
    opacity: 1;
  }

  &-label {
    display: block;
    margin: 0 0 5px 0;

    input {
      opacity: 0.6;
    }

    span {
      display: inline-block;
      font-size: 0.9rem;
      font-weight: 400;
      margin-left: 5px;
    }
  }
}

/* Dragula CSS  */

.gu-mirror {
  position: fixed !important;
  margin: 0 !important;
  z-index: 9999 !important;
  opacity: 0.8;
  list-style-type: none;
}

.gu-hide {
  display: none !important;
}

.gu-unselectable {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}

.gu-transit {
  opacity: 0.2;
}

</style>


