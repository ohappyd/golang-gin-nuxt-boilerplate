import PS from 'perfect-scrollbar'
import Vue from 'vue'

// Register a global custom directive called `v-focus`
Vue.directive('scroll', {
  inserted (el, binding, vnode) {
    el.style.position = 'relative'

    if (binding.value) {
      const callback = typeof binding.value === 'function'
        ? binding.value
        : binding.value.callback

      el.addEventListener('scroll', callback, { passive: true })
    }

    const ps = new PS(el, {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    })

    let ticks = 0
    const interval = setInterval(() => {
      ps.update()
      ticks++
      if (ticks >= 20) clearInterval(interval)
    }, 200)
  },
  unbind (el, binding) {
    if (binding.value) {
      el.removeEventListener('scroll', binding.callback, { passive: true })
    }

    el.style.position = 'static'
    // PS.destroy(el)
  },
  componentUpdated (el) {
    // PS.update(el)

    let ticks = 0
    const interval = setInterval(() => {
      // PS.update(el)
      ticks++
      if (ticks >= 20) clearInterval(interval)
    }, 200)
  }
}
)
