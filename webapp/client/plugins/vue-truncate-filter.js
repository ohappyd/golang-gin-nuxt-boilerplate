import Vue from 'vue'

// A simple truncate text filter

Vue.filter('truncate', function (text, length, suffix) {
  if (text.length > length) {
    return text.substring(0, length) + suffix
  } else {
    return text
  }
})
