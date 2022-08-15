export default function (to, from, savedPosition) {
  const container = document.getElementById('main-content')
  const contextContainer = document.getElementById('context-content')
  if (container) container.scrollTop = 0
  if (contextContainer) contextContainer.scrollTop = 0
  return {
    x: 0,
    y: 0
  }
}
