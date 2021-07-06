
<template>
<div>

    <div class>

        <title-page title="Basic Alert">

            Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
        </title-page>

        <card-component>
            <b-alert show
                variant="primary">Primary Alert</b-alert>
            <b-alert show
                variant="secondary">Secondary Alert</b-alert>
            <b-alert show
                variant="success">Success Alert</b-alert>
            <b-alert show
                variant="danger">Danger Alert</b-alert>
            <b-alert show
                variant="warning">Warning Alert</b-alert>
            <b-alert show
                variant="info">Info Alert</b-alert>
            <b-alert show
                variant="light">Light Alert</b-alert>
            <b-alert show
                variant="dark">Dark Alert</b-alert>

        </card-component>

        <title-page title="Auto dismissing alerts">
            Alert component that allows to automatically dismiss alert messages after a specific timeout.
        </title-page>
        <card-component>

            <b-alert :show="dismissCountDown"
                dismissible
                variant="secondary"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged">
                This alert will dismiss after {{ dismissCountDown }} seconds...
            </b-alert>
            <b-button @click="showAlert"
                variant="primary"
                class="m-1">
                Show alert with count-down timer
            </b-button>

        </card-component>
        <title-page title="Dismissible alerts">
            <p>Using the <code>dismissible</code> prop it's possible to dismiss any <code>&lt;b-alert&gt;</code> inline. This will add a close
                <code>X</code> button. Use the <code>dismiss-label</code> prop to change the hidden label text associated with the dismiss
                button.</p>
        </title-page>
        <card-component>
            <b-alert show
                variant="primary"
                dismissible>
                Dismissible Alert! Click the close button over there <b>&rArr;</b>
            </b-alert>
            <b-alert show
                variant="secondary"
                dismissible>
                Dismissible Alert! Click the close button over there <b>&rArr;</b>
            </b-alert>
            <b-alert show
                variant="dark"
                dismissible>
                Dismissible Alert! Click the close button over there <b>&rArr;</b>
            </b-alert>

        </card-component>

        <title-page title="Additional content inside alerts">

            <p><code>&lt;b-alerts&gt;</code> can also contain additional HTML elements like headings and paragraphs, which will be
                styled with the appropriate color matching the variant.</p>
        </title-page>
        <card-component>
            <b-alert show
                variant="primary">
                <h4 class="alert-heading">Well done!</h4>
                <p>
                    Aww yeah, you successfully read this important alert message. This example text is going to
                    run a bit longer so that you can see how spacing within an alert works with this kind of
                    content.
                </p>
                <hr>
                <p class="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                </p>
                </hr>
            </b-alert>

        </card-component>

    </div>
</div>
</template>
<script>
import TitlePage from '@/components/Base/Title/TitlePage'
import TitleTop from '@/components/Base/Title/TitleTop'
import CardComponent from '@/components/Base/Card/CardComponent'

export default {
  components: {
    TitlePage,
    TitleTop,
    CardComponent
  },
  layout: 'admin',
  meta: {
    component: {
      tag: 'b-alert',
      bsLink: 'https://bootstrap-vue.js.org/docs/components/alert/#component-reference'
    }
  },

  data () {
    return {
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },

  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }

  }
}

</script>



