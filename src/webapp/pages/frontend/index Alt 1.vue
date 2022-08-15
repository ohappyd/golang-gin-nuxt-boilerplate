
<template>
<div v-scroll-spy="{ sectionSelector: '.page-menu' }"
    id="main-container">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger"
                href="#page-top">
                <logo> </logo>
            </a>
            <button class="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse"
                id="navbarResponsive">
                <ul class="navbar-nav ml-auto my-2 my-lg-0"
                    v-scroll-spy-active="{selector: 'li a', class: 'active'}"
                    v-scroll-spy-link>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger"
                            href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger"
                            href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger"
                            href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger"
                            href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Masthead -->
    <header class="masthead">
        <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center text-center">
                <div class="col-lg-10 align-self-end">
                    <h1 class="text-uppercase text-white font-weight-bold">
                        Theme + Ultimate starter development kit </h1>
                    <hr class="divider my-4">
                    </hr>
                </div>
                <div class="col-lg-8 align-self-baseline">
                    <p class="text-white-75 font-weight-light mb-5">
                        CLIENT/SERVER Together.
                        This theme and starter kit will give you access in a few moments, a fully functional, modularized panel, where you can start your development from scratch or reuse part of your legacy.
                    </p>
                    <a class="btn btn-primary btn-xl js-scroll-trigger"
                        href="#about">See Preview Now!</a>
                </div>
            </div>
        </div>
    </header>
    <!-- <div v-scroll-spy="{offset: 50}">-->

    <!-- About Section -->
    <section class="page-section bg-primary page-menu"
        id="about">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h2 class="text-white mt-0">Providing in a moment an intuitive and beautiful experience for your audience.</h2>
                    <hr class="divider light my-4">
                    <p class="text-white-50 mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
                    <a class="btn btn-light btn-xl js-scroll-trigger"
                        href="#services">Preview Admin</a>
                    </hr>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="page-section page-menu"
        id="services">
        <div class="container">
            <h2 class="text-center mt-0">Features</h2>
            <hr class="divider my-4">
            <div class="row">
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="mt-5">
                        <i class="fas fa-4x fa-gem text-primary mb-4" />
                        <h3 class="h4 mb-2">Awesome Visual</h3>
                        <p class="text-muted mb-0">
                            This theme was created solely aim to have a clean, but extremely pleasant look.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="mt-5">
                        <i class="fas fa-4x fa-laptop-code text-primary mb-4" />
                        <h3 class="h4 mb-2">Optional Server</h3>
                        <p class="text-muted mb-0">
                            To facilitate your life, along with theme is sent an optional server, modular, and with access to several databases.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="mt-5">
                        <i class="fas fa-4x fa-globe text-primary mb-4" />
                        <h3 class="h4 mb-2">Easy Publish</h3>
                        <p class="text-muted mb-0">You can use some components as is, or you can make changes!</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="mt-5">
                        <i class="fas fa-4x fa-heart text-primary mb-4" />
                        <h3 class="h4 mb-2">Made with Love</h3>
                        <p class="text-muted mb-0">
                            Made by the hand with all love, and updated weekly.
                        </p>
                    </div>
                </div>
            </div>
            </hr>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio"
        class="page-menu">
        <div class="container-fluid p-0">
            <div class="row no-gutters">
                <div class="col-lg-4 col-sm-6">
                    <a class="portfolio-box"
                        href="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/1.jpg">
                        <img class="img-fluid"
                            src="/img/screen/5d1e598a8296644c270ff156-xl.png"
                            alt="">
                        <div class="portfolio-box-caption">
                            <div class="project-category text-white-50">
                                Category
                            </div>
                            <div class="project-name">
                                Project Name
                            </div>
                        </div>
                        </img>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a class="portfolio-box"
                        href="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/2.jpg">
                        <img class="img-fluid"
                            src="/img/screen/5ce98b65926f36531ada89d6-xl.png"
                            alt="">
                        <div class="portfolio-box-caption">
                            <div class="project-category text-white-50">
                                Category
                            </div>
                            <div class="project-name">
                                Project Name
                            </div>
                        </div>
                        </img>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a class="portfolio-box"
                        href="https://blackrockdigital.github.io/startbootstrap-creative/img//portfolio/fullsize/3.jpg">
                        <img class="img-fluid"
                            src="/img/screen/5ce9e4a2428394492e7d26ef-xl.png"
                            alt="">
                        <div class="portfolio-box-caption">
                            <div class="project-category text-white-50">
                                Category
                            </div>
                            <div class="project-name">
                                Project Name
                            </div>
                        </div>
                        </img>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a class="portfolio-box"
                        href="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/4.jpg">
                        <img class="img-fluid"
                            src="/img/screen/5cdca394fabf954ea570541c-xl.png"
                            alt="">
                        <div class="portfolio-box-caption">
                            <div class="project-category text-white-50">
                                Category
                            </div>
                            <div class="project-name">
                                Project Name
                            </div>
                        </div>
                        </img>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a class="portfolio-box"
                        href="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/5.jpg">
                        <img class="img-fluid"
                            src="/img/screen/5c566550fc80030f490ce61f-xl.png"
                            alt="">
                        <div class="portfolio-box-caption">
                            <div class="project-category text-white-50">
                                Category
                            </div>
                            <div class="project-name">
                                Project Name
                            </div>
                        </div>
                        </img>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a class="portfolio-box"
                        href="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/6.jpg">
                        <img class="img-fluid"
                            src="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/thumbnails/6.jpg"
                            alt="">
                        <div class="portfolio-box-caption p-3">
                            <div class="project-category text-white-50">
                                Category
                            </div>
                            <div class="project-name">
                                Project Name
                            </div>
                        </div>
                        </img>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="page-section page-menu"
        id="contact">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h2 class="mt-0">Let's Get In Touch!</h2>
                    <hr class="divider my-4">
                    <p class="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                    </hr>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                    <i class="fas fa-phone fa-3x mb-3 text-muted" />
                    <div>+1 (202) 555-0149</div>
                </div>
                <div class="col-lg-4 mr-auto text-center">
                    <i class="fas fa-envelope fa-3x mb-3 text-muted" />
                    <!-- Make sure to change the email address in anchor text AND the link below! -->
                    <a class="d-block"
                        href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
                </div>
            </div>
        </div>
    </section>

    <!-- </div> -->

    <!-- Call to Action Section -->
    <section class="page-section bg-dark text-white">
        <div class="container text-center">
            <h2 class="mb-4">Free Download at Start Bootstrap!</h2>
            <a class="btn btn-light btn-xl"
                href="https://startbootstrap.com/themes/creative/">Download Now!</a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-light py-5">
        <div class="container">
            <div class="small text-center text-muted">Copyright &copy; 2019 - Start Bootstrap</div>
        </div>
    </footer>
</div>
</template>
<script>
import Logo from '@/components/Base/NavBar/Logo'

export default {
  components: {
    Logo
  },
  layout: 'frontend'
}

</script>


<style lang="scss">


</style>
