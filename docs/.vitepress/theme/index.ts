import DefaultTheme from 'vitepress/theme'
import LiveStats from './components/LiveStats.vue'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('LiveStats', LiveStats)
  }
}
