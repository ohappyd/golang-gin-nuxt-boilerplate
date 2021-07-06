
<template>
<section-container previousUrl="/admin/doc/basic/features"
    nextUrl="/admin/doc/client/new-page-route">
    <title-page title="Project Structure">
        <div />
    </title-page>
    <div class="section-body">
        <p>
            This kit is designed to give you access to components separated by modules, each responsible for a business domain.

            The standard structure of the application (provided by Nuxt.js) gives you an excellent starting point to organize your application in an intuitive way.
        </p>
        <p>
            Here is a summary of the main directories and their usefulness:

        </p>

        <p>
            In the <code>/client</code> folder contained in the <code>project root</code>, we have the following folders:</p>
        <ul class="project-list ig-list">
            <li class="graf graf--li graf-after--p">
                <div>/components </div>
                <div>Main project directory, where you will make most of your changes.
                    In this directory you will find the .vue files responsible for the design and behavior of all the components that make up the kit.
                </div>
            </li>
            <li class="graf graf--li graf-after--li">
                <div>/layouts</div>
                <div>Contains special .vue files that define layouts that are used by the pages included in the project.
                </div>
            </li>
            <li class="graf graf--li graf-after--li">
                <div>/pages </div>
                <div>A folder containing the routes of your application. Nuxt.js reads all the .vue files inside this directory and creates the application's router based on their respective directories and names. Learn more here:
                </div>
            </li>
            <li class="graf graf--li graf-after--li">
                <div>/store</div>
                <div>This project comes with a store designed to centralize the handling of information displayed throughout the project. Learn more at Vuex
                </div>
            </li>

            <li class="graf graf--li graf-after--li">
                <div>/middleware</div>
                <div>This folder contains js files with functions that are executed in specific events of the project execution lifecycle. These functions are useful for various tasks such as: authentication, validation, skins management and much more.

                </div>
            </li>

            <li class="graf graf--li graf-after--li">
                <div>/plugins</div>
                <div>
                    The plugins directory allows you to load and register plugins to be used in every application in an organized and highly maintainable way.
                </div>
            </li>
            <li class="graf graf--li graf-after--li">
                <div>/static</div>
                <div>
                    It contains all the static content that will be consumed by the project, such as images, fonts and icons.
                </div>
            </li>
            <li class="graf graf--li graf-after--li">
                <div>/styles</div>
                <div>Directory of all SCSS files, used to generate the global project style sheet, skins definition, colors, spacing, rounding, and more, can be made in the .scss files in this directory.
                </div>
            </li>
            <li class="graf graf--li graf-after--li">
                <div>/util</div>
                <div>
                    This directory contains JS files that help in several small functions, such as control of menu items, fake data generation (for demonstration) and similar.
                </div>
            </li>

        </ul>
    </div>

</section-container>
</template>
<script>
import TitlePage from '@/components/Base/Title/TitlePage'
import BottomBar from '@/components/Module/Doc/BottomBar'
import SectionContainer from '@/components/Module/Doc/SectionContainer'

export default {
  components: {
    TitlePage,
    BottomBar,
    SectionContainer
  },
  layout: 'admin',
  meta: {
    page: {
      contentCentered: true
    }
  }
}

</script>


<style lang="scss" scoped>


</style>
