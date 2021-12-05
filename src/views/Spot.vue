<template>
  <div class="container">
    <div class="banner" :style="`background-image: url(${require('../../src/assets/images/banners/banner_spots.png')})`"></div>
    <SuggestionBlock :titleBg="'#6E9292'" :assignedForward="'/'">熱門景點</SuggestionBlock>
    <SuggestionBlock :titleBg="'#6E9292'" :assignedForward="'/spot'">網紅攻略</SuggestionBlock>
    <SuggestionBlock :titleBg="'#6E9292'" :assignedForward="'/'">主題景點</SuggestionBlock>
    <Footer :bgColor="'#6E9292'" :gradientColor="'#A7D4DA'"/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import SuggestionBlock from '../components/SuggestionBlock.vue'

export default {
  name: 'Spot',
  components: { SuggestionBlock, Footer },

}
</script>

<style lang="scss">

</style>