<template>
  <div class=" fnt ">
    <header-bar></header-bar>
    <float-bar></float-bar>
    <transition name="slide" mode="out-in">
    <nuxt />
     </transition>
    <footer-bar></footer-bar>

  </div>
</template>

<script>
import HeaderBar from '../components/headernx'
import FooterBar from '../components/Footer'
import FloatBar from '../components/floatmenu'

export default {
  scrollToTop: true,
  components: {
    HeaderBar,
    FloatBar,
    FooterBar
  }
}
</script>


<style>

.fnt{
   font-family: 'Nunito', sans-serif;
}

</style>
