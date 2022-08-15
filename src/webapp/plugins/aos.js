import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function () {
// Init animate on scroll, inject on root instance
  Vue.prototype.$aos = AOS
}
