
<template>
<section class="page-section page-menu ig-rounded"
    id="features">
    <div class="container">
        <div class="d-flex flex-column align-items-center">
            <logo variant="theme1"
                class="d-flex justify-content-center text-center"> </logo>

            <ul>
                <li>200+ Components</li>
                <li>10 Layouts/Skins</li>
                <li>4 Dashboards</li>
                <li>Working Apps</li>
                <li>2000+ Icons </li>
                <li>Awesome Design</li>
                <li>Reactivity</li>
                <li>Responsitvity</li>
                <li> + Bonus </li>

            </ul>

        </div>
        <div class="d-flex justify-content-center align-itens-center">

            <img class="img-fluid ig-rounded shadow"
                width="538px"
                :src="'/img/screen/white2.png'"
                alt="" />
            <div>

            </div>
        </div>

    </div>
</section>
</template>
<script>
import Logo from '@/components/Base/NavBar/Logo'

export default {
  components: {
    Logo
  },

  data () {
    return {
      features: [{
        title: 'Awesome Visual',
        icon: 'lnr-diamond',
        description: 'This theme was created solely aim to have a clean and extremely pleasant look.'
      }, {
        title: 'Optional Server',
        icon: 'lnr-laptop',
        description: 'To facilitate your life, along with theme is sent an optional server, modular, and with access to several databases.'
      }, {
        title: 'Easy Publish',
        icon: 'lnr-rocket',
        description: 'You can use some components as is, or you can make changes!'
      }, {
        title: 'Made with Love',
        icon: 'lnr-heart',
        description: 'Made by the hand with all love, and updated often.'
      }]
    }
  }

}

</script>


<style lang="scss" scoped>
.icon-feature {
  -webkit-text-stroke: 2px white;
}

.page-section {
  background-color: var(--primary-mixed);
}

/deep/ .text1 {
  color: var(--theme1-mixed-1);
}
/deep/ .text2 {
  color: var(--theme1);
}

ul {
  font-size: 1.1em;
  list-style: none;
  padding: 0px;
  display: flex;
  margin: 2rem 0;
  //margin-bottom: 2rem;
  justify-content: space-between;

  flex-wrap: wrap;
  //height: 340px;
  width: 90%;

  li {
    margin: 0;
    margin-bottom: 8px;
    color: var(--primary-mixed-1);
    padding-left: 15px;
    position: relative;
    font-weight: 500;
    flex-basis: 150px;
    flex-shrink: 0;

    &:after {
      content: "";
      height: 0.4em;
      width: 0.4em;
      background: var(--theme1);
      display: block;
      position: absolute;
      transform: translateY(-50%) rotate(45deg);
      opacity: 0.5;
      top: 50%;
      left: 0;
    }
  }
}

</style>


