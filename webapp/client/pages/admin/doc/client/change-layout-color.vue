
<template>
<section-container previousUrl="/admin/doc/client/new-page-route"
    nextUrl="/admin/doc/server/why-feathers">
    <title-page title="Change layout and structure opts">
        <div />
    </title-page>

    <div class="section-body">
        <p>
            There are 2 groups of customizations that can be performed in the project using files with user-friendly variables.
            Layout variations, such as menu layout, container style, and other similar, are performed by a json file.
        </p>
        <p>This file is located in:</p>

        <p><code>/[Project Dir]/config/layouts.json</code></p>
        <p>
            Each layout is composed of a combination of the following variables:
        </p>
        <ul class="ig-list">

            <li>
                <div>headerBoxed</div>
                <div>
                    Determines whether the header is in a fluid container or not.

                </div>
            </li>
            <li>
                <div>headerBg</div>
                <div>Sets the background color of the header

                </div>
            </li>
            <li>
                <div>headerBgOnScroll</div>
                <div>Determines the background color of the header while the scroll bar was scrolled down.

                </div>
            </li>
            <li>
                <div>headerExtended</div>
                <div>The extended version adds a horizontal bar to the end of the header

                </div>
            </li>

            <li>
                <div>headerIconLighten</div>
                <div>
                    Enables the clear version of the header icons.

                </div>
            </li>
            <li>
                <div>breadcrumbHide</div>
                <div>Hides the main breadcrumb displayed in the layout.

                </div>
            </li>
            <li>
                <div>contentBoxed</div>
                <div> Determines whether the main content is in a fluid container or not.

                </div>
            </li>
            <li>
                <div>menuLogoBg</div>
                <div>Sets the background color of the logo on sidemenu

                </div>
            </li>
            <li>
                <div>menuCompacted</div>
                <div>Determines if the left side menu will be displayed in the compact version.

                </div>
            </li>
            <li>
                <div>menuMinimized</div>
                <div>Determines if the left side menu will be displayed in a minimized way.

                </div>
            </li>
            <li>
                <div>menuHide</div>
                <div>Hides the main side menu displayed in the layout.

                </div>
            </li>
            <li>
                <div>menuIconIndex</div>
                <div> The project has 2 types of icons enabled by default in the side menu. Set to <code>0</code> for <code>Line Awesome</code> or <code>1</code> for <code> DripIcons</code>

                </div>
            </li>

            <li>
                <div>topMenuHide</div>
                <div> Hides the top menu menu displayed in the layout.

                </div>
            </li>
            <li>
                <div>contextBarHide</div>
                <div> Hides the contextbar on app pages.
                </div>
            </li>
            <li>
                <div>skin</div>
                <div>Fill in the name of the selected skin, e.g. blue, dark-blue, green and more

                </div>
            </li>

        </ul>

    </div>

    <title-page title="Change color schema">
        <div />
    </title-page>

    <div class="section-body">

        <p>For changes in schema colors of the project, spacing and other style variables, use the SCSS file corresponding to the selected skin.
        </p>
        <p>
            The name of the color variables follows the bootstrap variable pattern (<code>primary</code>, <code>secondary</code>,<code> warning</code>, <code>danger</code>, <code>info</code>, <code>dark</code>, <code>light</code>).
        </p>
        <p>
            In addition, we have added 2 additional colors to facilitate the creation and maintenance of visual components, color <code>theme1</code> and color <code>theme1inv</code>, which help to highlight text and background color respectively.
        </p>
        <p>
            The SCSS variables are commented in each skin file for better understanding.

            <p>This file is in:</p>

            <p><code>/[Project Dir]/client/styles/variables/skin/[Skin Name].scss</code></p>

        </p>
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
