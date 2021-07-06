
<template>
<section-container nextUrl="/admin/doc/basic/features">

    <title-page title="Getting Started">
        <div />
    </title-page>
    <div class="section-body">

        <p>
            <strong>Ignity - Vue Admin Kit</strong>
            is totally developer-friendly, created with an ecosystem that adapts to the most diverse scenarios and needs, composed of reusable, editable components that allow extreme gains in efficiency and development speed.
            Ready for small and large corporations, it naturally introduces micro services and reactivity for high performance in real-time applications.
            You can also display data on our components easily connected to your legacy server through web, socket, rest and much more methods.
        </p>

        <p>

            All .vue components have been created to achieve the perfect consistency of spacing, alignment and shape on the various skins included in the package.
        </p>

        <p>
            For color adjustment, spacing and much more, a SCSS file with clearly documented variables separated by skin allows various adjustments. <p>
                With this kit you have a multitude of customizations with changes of few centralized parameters. To change the layout (menu, orientation, size of containers, etc.) a central .json file enables many customizations.
            </p>
            <p>
                In the "How to Customize" section, you will find more details on how to customize your project.

            </p>

        </p>
    </div>

    <title-page title="Premises">
        <div />
    </title-page>
    <div class="section-body">

        <p>
            This project uses several modern tools to provide a productive means for you or your development team, however to be more effective in the process of building a software using this tool, we start from the following assumptions regarding your skills:
        </p>
        <ul>
            <li>
                You have some knowledge with Javascript, NodeJs, NPM and related universe.
            </li>
            <li>
                You have some knowledge in Vue and/or reactive technologies.
            </li>
            <li>
                You have some knowledge of CSS processors (like SCSS).
            </li>
            <li>
                You have some knowledge of pure HTML and CSS.
            </li>
            <li>
                You have some knowledge of Javascripts.
            </li>
        </ul>
        <p>If you don't master any of the subjects above, don't be alarmed, most subjects have a low learning curve, you can improve your knowledge by seeing the functional examples in the project, using them as a basis for your changes according to your needs.
        </p>
    </div>

    <title-page title="Installation">
        <div />
    </title-page>
    <div class="section-body">

        <h5 class="mb-4"> Install using <span class="text-primary">npm</span></h5>
        <ul>
            <li>
                <p>
                    <span>Install latest node.js: </span>
                    <a href="https://nodejs.org/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="color: rgb(0, 131, 182);">
                        https://nodejs.org
                    </a>
                    <span data-slate-zero-width="z">​</span>
                </p>
            </li>
            <li>
                <p>Go to the directory where you extracted the project files.</p>
            </li>
            <li class>
                <p>
                    <span>Install node modules by running terminal command: </span>
                    <code spellcheck="false"
                        data-slate-leaf="true">npm install</code>
                </p>
            </li>
            <li class>
                <p>
                    <span>Run the app using: </span>
                    <span>
                        <code spellcheck="false"
                            data-slate-leaf="true">npm run dev</code>
                    </span>
                </p>

            </li>
            <li class>
                <p>
                    <span>For build production files use </span>
                    <span><code spellcheck="false"
                            data-slate-leaf="true">npm run build</code>
                    </span>
                </p>
            </li>
        </ul>

        <h5 class="my-4"> Install using <span class="text-primary">yarn </span></h5>
        <ul>
            <li>
                <p>
                    <span>Install latest node.js: </span>
                    <a href="https://nodejs.org/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="color: rgb(0, 131, 182);">
                        https://nodejs.org
                    </a>
                    <span data-slate-zero-width="z">​</span>
                </p>
            </li>
            <li>
                <p>
                    <span>
                        Install latest yarn package manager: </span>
                    <a href="https://yarnpkg.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="color: rgb(0, 131, 182);">
                        https://yarnpkg.com/
                    </a>
                    <span data-slate-zero-width="z">​</span>
                </p>

            </li>
            <li>
                <p>Go to the directory where you extracted the project files.</p>
            </li>
            <li class>
                <p>
                    <span>Install node modules by running terminal command </span>
                    <code spellcheck="false"
                        data-slate-leaf="true">yarn install</code>
                </p>
            </li>
            <li class>
                <p>
                    <span>Run the app </span>
                    <span>
                        <code spellcheck="false"
                            data-slate-leaf="true">yarn serve</code>
                    </span>
                </p>

            </li>
            <li class>
                <p>
                    <span>For build production files use </span>
                    <span><code spellcheck="false"
                            class="code-81e98f88"
                            data-slate-leaf="true">yarn build</code>
                    </span>
                </p>
            </li>
        </ul>

        <p class="mt-4">
            Wait for the build to finish. </p>
        <p>
            To access the theme locally, enter the address in your preferred browser: <br />
            <strong>http://localhost:3031/</strong>
        </p>
        <p>For access to complete documentation: <br />
            <strong> http://localhost:3031/admin/doc/basic/getting-started</strong>
        </p>
        <p>* First build can take a long time, but from the second this time is reduced considerably due to the cache generated by the webpack. </p>

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
