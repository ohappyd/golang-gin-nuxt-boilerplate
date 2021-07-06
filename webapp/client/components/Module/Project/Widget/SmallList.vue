
<template>
<b-card no-body>
    <b-card-header>
        <card-title title="Projects"
            subTitle="Progress indicators">
            <button-icon iconClass="la la-plus"
                class="inverse"> Add Project </button-icon>
        </card-title>
    </b-card-header>
    <b-card-body class="projects ig-p-1">

        <b-list-group class="text-theme2 list-group-flush w-100">
            <b-list-group-item v-for="(project, i) in projects"
                :key="i"
                class="project d-flex ig-p">

                <div class="project-title d-flex flex-grow-1">
                    <div class="image">

                        <img :src="project.logo"
                            class="opacity-8 my-auto"
                            width="40"
                            height="40" />

                    </div>
                    <div class="text px-1">
                        <h3 class="h5 text-theme2"> {{ project.title }} </h3>
                        <div class="text-theme1 mixed-1">Lorem Ipsum Dolor</div>
                    </div>
                </div>

                <div class="summary d-flex  flex-wrap align-items-center text-left">
                    <div class="comments info-icon"><i class="la la-clock-o" />{{project.hour}}:00 </div>
                    <div class="comments info-icon"><i class="la la-comment-o" />{{project.comments}}</div>
                    <div class="comments info-icon"><i class="la la-share" />{{project.comments}}</div>
                    <div class="comments info-icon"><i class="la la-compass" />{{project.comments}}</div>

                    <div class="project-progress mt-1">
                        <div class="progress">
                            <div role="progressbar"
                                style="width: 45%; height: 6px;"
                                :style="{width: project.percentage+'%'}"
                                :aria-valuenow="project.percentage"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                class="progress-bar bg-primary" />
                        </div>
                    </div>
                </div>

            </b-list-group-item>
        </b-list-group>
    </b-card-body>
    <b-card-footer class="d-flex normalize">

        <b-btn class="inverse ml-auto"
            variant="primary">Show Projects</b-btn>
    </b-card-footer>
</b-card>
</template>
<script>
import faker from 'faker'
import CardTitle from '@/components/Base/Card/CardTitle'
import ButtonIcon from '@/components/Base/Button/ButtonIcon'

/*
Card to show small project list
*/
export default {
  components: {
    CardTitle,
    ButtonIcon
  },
  computed: {
    skin () {
      return this.$store.state.theme.skin
    }

  },

  mounted () {},

  data () {
    faker.seed(4)
    const projects = []
    const variants = ['primary', 'primary', 'primary', 'danger', 'warning']

    for (var i in [1, 2, 4, 5, 6]) {
      // Generate mock data
      projects.push({
        title: faker.company.catchPhrase(),
        id: i,
        variation: variants[i],
        iconVariantion: variants[i],
        percentage: faker.random.number({
          min: 30,
          max: 90
        }),
        comments: faker.random.number({
          min: 10,
          max: 150
        }),
        hour: faker.random.number({
          min: 1,
          max: 12
        }),

        logo: '/img/logo/' + i + '.svg'
      })
    }

    return {
      projects
    }
  }

}

</script>


<style lang="scss" scoped>
.summary {
  text-align: center;
  align-items: center;
  display: flex;
  flex-shrink: 1;
  flex-basis: 250px;
  margin-left: auto;
  min-width: 80px;
}

.project-title {
  flex-grow: 0;
  flex-basis: 210px;
  flex-shrink: 0;
  padding-right: 0.4rem;
  align-items: center;
}

.comments {
  width: 50px;
}

.info-icon i {
  font-size: 20px;
  color: var(--primary-mixed-1);
}

.projects {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
}
.project {
  flex-grow: 1;
  display: flex;
  align-items: center;
}
.project .row {
  margin: 0;
  padding: 10px 0;
  font-size: 1em;
}

.project .text h3 {
  margin-bottom: 0;
  color: #555;
  font-size: 1em;
}

.project .text small {
  color: #aaa;
}

.project .project-date span {
  font-size: 0.8em;
  color: #999;
}

.project .image {
  margin: 5px;
  margin-right: 5px;
}

.project .time,
.project .comments,
.project .project-progress {
  color: #999;
  font-size: 0.8em;
  margin-right: 10px;
}

.project .time i,
.project .comments i,
.project .project-progress i {
  margin-right: 5px;
}

.project .project-progress {
  width: 100%;
}

.project .project-progress .progress {
  height: 4px;
}

.project .card {
  margin-bottom: 0;
}

@media (max-width: 991px) {
  .project .project-progress {
    width: 99%;
  }
}

@media (max-width: 480px) {
  .project .project-progress {
    display: none;
  }

  .project-title {
    flex-basis: 170px;
  }
}

</style>


