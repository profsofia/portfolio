import DefaultTheme from 'vitepress/theme'
import LiveStats from './components/LiveStats.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('LiveStats', LiveStats)
  }
}
