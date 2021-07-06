
<template>
<b-card no-body>
    <b-card-body>
        <card-title title=""
            subTitle="Last Comments"> </card-title>
        <b-row class="text-13">
            <b-col cols="4"
                v-for="(comment, index) in comments"
                :key="index">
                <div class="d-flex">

                    <div class="border border-light p-3 mr-1">

                        <div class="comment-top text-10">
                            <div> <i class="la la-comments" />12 April</div>
                            <div>From: <span class="text-muted">{{comment.from}}</span> </div>
                            <div>Status: <b-badge :variant="comment.state">{{comment.status}}</b-badge>
                            </div>

                        </div>
                        <div class="comment-container">

                            <div>
                                <div class="text-muted comment-content text-12">"{{comment.content}}"</div>
                            </div>
                        </div>
                    </div>
                    <div class="p-0 d-flex">
                        <button-group class="my-auto"
                            vertical
                            :buttonList="buttonList"> </button-group>

                    </div>

                </div>
            </b-col>

        </b-row>

    </b-card-body>
</b-card>
</template>
<script>
import faker from 'faker'
import ButtonGroup from '@/components/Base/ActionButton/ButtonGroup'
import CardTitle from '@/components/Base/Card/CardTitle'

/*
Show pending comments from social module
*/
export default {
  components: {
    ButtonGroup,
    CardTitle
  },

  data () {
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus. Nam sagittis dui in.'
    return {
      buttonList: [{
        icon: 'la la-thumbs-up text-primary'
      }, {
        icon: 'la la-thumbs-down text-danger'
      }],
      comments: [{
        from: faker.name.firstName(),
        content,
        state: 'warning',
        status: 'Pending'
      }, {
        from: faker.name.firstName(),
        content,
        state: 'primary',
        status: 'Approved'
      }, {
        from: faker.name.firstName(),
        content,
        state: 'danger',
        status: 'Cancelled'
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

</style>
