
<template>
<aside class="sm-side px-1">
    <b-nav vertical
        class="nav nav-pills nav-stacked labels-info  inbox-divider mt-2 text-theme1">
        <h4>Folder</h4>

        <b-nav-item href="#">
            <div>Inbox</div>
            <svg-icon icon="home" />
        </b-nav-item>
        <b-nav-item>
            <div> Sent Mail</div>
            <svg-icon icon="envelope"> </svg-icon>
        </b-nav-item>
        <b-nav-item>

            <div>Important</div>
            <svg-icon icon="flame"> </svg-icon>
        </b-nav-item>
        <b-nav-item>

            <div> Drafts </div>

            <svg-icon icon="pencil"> </svg-icon>
        </b-nav-item>
        <b-nav-item>

            <div>Trash</div>
            <svg-icon icon="trash"> </svg-icon>
        </b-nav-item>
    </b-nav>

    <b-nav vertical
        class="nav nav-pills nav-stacked labels-info  inbox-divider">

        <h4>Labels</h4>

        <b-nav-item>
            Work <svg-icon icon="tag"
                variant="primary"> </svg-icon>
        </b-nav-item>
        <b-nav-item>
            Design <svg-icon icon="tag"
                variant="secondary"> </svg-icon>
        </b-nav-item>
        <b-nav-item>
            Family <svg-icon icon="tag"
                variant="danger"> </svg-icon>
        </b-nav-item>
        <b-nav-item>
            Friends <svg-icon icon="tag"
                variant="warning"> </svg-icon>
        </b-nav-item>
        <b-nav-item>
            Office <svg-icon icon="tag"
                variant="success"> </svg-icon>
        </b-nav-item>
    </b-nav>

    <b-nav vertical
        class="nav nav-pills nav-stacked labels-info inbox-divider ">

        <h4>Buddy online</h4>

        <b-nav-item>

            <div>
                Alireza Zare <p>I do not think</p>
            </div>

            <svg-icon icon="user"
                variant="primary"> </svg-icon>
        </b-nav-item>
        <b-nav-item>

            <div>
                Alireza Zare <p>I do not think</p>
            </div>
            <svg-icon icon="user"
                variant="secondary"> </svg-icon>
        </b-nav-item>
        <b-nav-item>

            <div>
                Alireza Zare <p>I do not think</p>
            </div>
            <svg-icon icon="user"
                variant="success"> </svg-icon>
        </b-nav-item>
        <b-nav-item>

            <div>
                Alireza Zare <p>I do not think</p>
            </div>
            <svg-icon icon="user"
                variant="success"> </svg-icon>
        </b-nav-item>
    </b-nav>
    <div class="inbox-body text-center ">
        <button-group isCollapsed> </button-group>
    </div>
</aside>
</template>
<script>
import ButtonGroup from '@/components/Base/ActionButton/ButtonGroup'
import SvgIcon from '@/components/Base/Icon/SvgIcon'

/*
Contextual sidebar for mail module
*/
export default {
  components: {
    ButtonGroup,
    SvgIcon
  }
}

</script>


<style lang="scss" scoped>
.context-sidebar {
  font-size: 0.8rem;
}

.nav-link {
  min-height: 40px;
  display: flex !important;
  //justify-content: center;
  align-items: center;
  .ig-icon-dual-tone {
    margin-left: auto;
  }
}

.ig-icon {
  margin-right: 0.4rem;
}

.nav.nav-pills.nav-stacked.labels-info p {
  //font-size: 11px;
  margin-bottom: 0;
  color: var(--theme1-mixed-1);
}

ul.inbox-nav {
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 100%;
}
.inbox-divider {
  border-bottom: 1px solid var(--theme1-mixed);
  padding-bottom: 0.3rem;
  margin-bottom: 0.8rem;
}
ul.inbox-nav li {
  display: inline-block;
  line-height: 30px;
  width: 100%;
}
ul.inbox-nav li a {
  display: inline-block;
  line-height: 30px;
  padding: 0 20px;
  width: 100%;
}
ul.inbox-nav li a:hover,
ul.inbox-nav li.active a,
ul.inbox-nav li a:focus {
  background: none repeat scroll 0 0 var(--theme1-mixed);
}
ul.inbox-nav li a i {
  font-size: 16px;
  padding-right: 10px;
  width: 20px;
}
ul.labels-info li h4 {
  font-size: 13px;
  padding-left: 22px;
  padding-right: 15px;
  padding-top: 5px;
  font-weight: 700;
  //text-transform: uppercase;
}
ul.labels-info li {
  margin: 0;
}
ul.labels-info li a {
  border-radius: 0;
  padding-left: 10px;
}
ul.labels-info li a:hover,
ul.labels-info li a:focus {
  background: none repeat scroll 0 0 var(--theme1-mixed);
}
ul.labels-info li a i {
  padding-right: 10px;
}

</style>


