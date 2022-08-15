
<template>
<b-row class="text-13">
    <b-col cols="12"
        lg="4"
        v-for="(comment, index) in comments"
        :key="index">
        <b-card no-body
            class="mb-0">
            <b-card-body>
                <div class="d-flex align-items-center">
                    <div class="d-flex">
                        <div class="icon-container hexagono flex-column align-items-center justify-content-begin">
                            <i class="la text-60"
                                :class="'la-'+comment.icon" />
                        </div>

                        <div class="border border-light p-3 mr-1">

                            <div class="comment-top text-11 text-theme1">
                                <div> <i class="la la-comments" />12 April</div>
                                <div><span class="text-dark">From:</span> {{comment.from}} </div>
                                <div><span class="text-dark">Status:</span>
                                    <b-badge :variant="comment.state">{{comment.status}}</b-badge>
                                </div>

                            </div>
                            <div class="comment-container">

                                <div>
                                    <div class="text-theme1 font-weight-bold comment-content text-12">
                                        "{{comment.content}}"
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-0 d-flex">
                            <button-group class="my-auto"
                                vertical
                                :buttonList="buttonList"> </button-group>

                        </div>

                    </div>
                </div>
            </b-card-body>
        </b-card>
    </b-col>

</b-row>
</template>
<script>
import faker from 'faker'
import ButtonGroup from '@/components/Base/ActionButton/ButtonGroup'

/*
Show pending comments from social module
*/
export default {
  components: {
    ButtonGroup
  },

  data () {
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus. Nam sagittis dui in.'
    return {
      buttonList: [{
        icon: 'la la-thumbs-up text-theme1'
      }, {
        icon: 'la la-thumbs-down text-theme1'
      }],
      comments: [{
        from: faker.name.firstName(),
        content,
        state: 'warning',
        status: 'Pending',
        icon: 'twitter-square',
        day: faker.random.number({ min: 2, max: 10 })
      }, {
        from: faker.name.firstName(),
        content,
        state: 'primary',
        status: 'Approved',
        icon: 'facebook-official',
        day: faker.random.number({ min: 11, max: 19 })
      }, {
        from: faker.name.firstName(),
        content,
        state: 'danger',
        status: 'Cancelled',
        icon: 'instagram',
        day: faker.random.number({ min: 20, max: 28 })
      } /* {
        from: faker.name.firstName(),
        content,
        state: 'danger',
        status: 'Cancelled'
      } */
      ]
    }
  }

}

</script>


<style lang="scss" scoped>
.comment-container {
  display: flex;
  flex-direction: column;
}
.comment-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.comment-content {
  text-align: justify;
  text-justify: inter-word;
}

.badge {
  font-size: 100%;
}

.date-comment {
  margin-top: -15px;
}

.icon-container {
  //border-radius: 25%; //40% 60% 60% 40% / 60% 30% 70% 40%;
  background-color: var(--light);

  i {
    color: var(--primary);
  }
}

.hexagono {
  position: relative;
  margin: auto;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  display: table;
  min-width: 50px;
}
.hexagono:before {
  content: "";
  padding-top: 120%;
  display: inline-block;
  vertical-align: middle;
}

.hexagono:after {
  content: "";
  position: absolute;
  top: 0%;
  left: -10%;
  width: 120%;
  padding-top: 120%;
  transform: rotatex(51deg) rotate(45deg);
  text-align: center;
  box-shadow: 0 0 0 200px white;
}
.hexagono img {
  display: inline-block;
  vertical-align: middle;
  margin: 0 -10px;
}

</style>


