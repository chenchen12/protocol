<template>
  <div id="app">
    <story-head></story-head>
    <footerHead></footerHead>
  </div>
</template>

<script>
import storyHead from './components/storyHeader.vue';
import footerHead from './components/footerHead.vue';
export default {
  name: 'app',
  components:{
    storyHead,
    footerHead
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="sass" type="text/scss">
    @import 'style/app.scss';
</style>




