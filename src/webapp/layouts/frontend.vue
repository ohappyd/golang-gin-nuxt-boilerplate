<template>
	<nuxt/>
</template>

<script>



export default {
  data () {
    return  {
    	scrollTop: 0
    }
  },

  head() {
  	return {
      bodyAttrs: {
      	// class: 'bg-white'
    	},
      script: [
      {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js",
        type: "text/javascript"
      },

    ]
  	}
  },
  methods: {
    handleScroll () {
      this.scrollTop = window.document.getElementById('main-container').scrollTop
        // Collapse now if page is not at top
  		this.navbarCollapse();
    },
    navbarCollapse () {
      if (this.scrollTop  > 100) {
        $("#mainNav").addClass("navbar-scrolled");
      } else {
        $("#mainNav").removeClass("navbar-scrolled");
      }
  }
  },
  mounted () {
     this.$aos.init(
      {
        scrollContainer: '#main-container',
        duration: 700
      }
		)
    window.document.getElementById('main-container').addEventListener('scroll', this.handleScroll);

     // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {

      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('#main-container').animate({
            scrollTop: (target.offset().top)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });


  },
  destroyed () {
  	window.document.getElementById('main-container').removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">
  @import "~@/styles/frontend/styles.scss";
  @import "~@/styles/skin/blue.scss";
  @import "~@/styles/skin/purple.scss";
  @import "~@/styles/skin/red.scss";
  @import "~@/styles/skin/grey.scss";
  @import "~@/styles/skin/green.scss";
  @import "~@/styles/skin/material.scss";
  @import "~@/styles/skin/dark-blue.scss";
  @import "~@/styles/skin/dark-golden.scss";
  @import "~@/styles/skin/dark-grey.scss";
  @import "~@/styles/skin/dark-purple.scss";
  @import "~@/styles/skin/dark-material.scss";
  @import "~@/styles/skin/color-purple-air.scss";
  @import "~@/styles/skin/color-dark-sky.scss";
  @import "~@/styles/skin/color-carbon.scss";
  @import "~@/styles/skin/back-image.scss";
</style>
