
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  render(h) {
    return h('div',
    {
      attrs: { id: 'app' }
    },
    [
      h(
        'img',
        { attrs: { alt: 'Vue logo', src: require('./assets/logo.png') }}
      ),
      h(
        'hello-world',
        { attrs: { msg: 'Welcome to Your Vue.js App' }}
      )
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
