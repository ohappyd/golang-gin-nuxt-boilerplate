
<template>
<section class="section feature bg-white text-theme1">

    <section-title title="Advanced Features"
        subTitle="Full List"> </section-title>
    <ul>
        <li>Easy Components writing Vue</li>
        <li>Automatic Code Splitting</li>
        <li>SEO Friendly</li>
        <li>Working Authentication</li>
        <li>Real database apps (3+)</li>
        <li>Powerful Auto Routing</li>
        <li>Well documented source code</li>
        <li>Minifying of your JS &amp; CSS</li>
        <li>Universal Code. Run on server and client </li>
        <li>Realtime changes in Development</li>
        <li>Extendable with Modular architecture</li>
        <li>Several skins to customize as you wish</li>
        <li>Color scheme for the entire project in one file</li>
        <li>Dual tone responsive icons</li>
    </ul>
</section>
</template>
<script>
import MultipleScreen from '@/components/Module/Frontend/MultipleScreen'
import SectionTitle from '@/components/Module/Frontend/SectionTitle'

export default {
  components: {
    MultipleScreen,
    SectionTitle
  }
}

</script>


<style lang="scss" scoped>
ul {
  font-size: 1.1em;
  list-style: none;
  margin: 2em;
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 360px;
  width: 100%;

  li {
    margin: 0;
    margin-bottom: 1em;
    padding-left: 1.5em;
    position: relative;
    width: 235px;
    font-weight: 400;

    &:after {
      content: "";
      height: 0.4em;
      width: 0.4em;
      background: var(--theme1-mixed-1);
      display: block;
      position: absolute;
      transform: translateY(-50%) rotate(45deg);
      top: 50%;
      left: 0;
    }
  }
}

</style>


