<template>
  <div>
    <div class="h-banner" :style="`background-image: url(${require('../../src/assets/images/banners/banner_spots.png')})`"></div>
    <SuggestionBlock :bgColor="'bg-spot'" :assignedForward="'/'">熱門景點</SuggestionBlock>
    <SuggestionBlock :bgColor="'bg-spot'" :assignedForward="'/'">網紅攻略</SuggestionBlock>
    <SuggestionBlock :bgColor="'bg-spot'" :assignedForward="'/'">主題景點</SuggestionBlock>
    <Footer :bgColor="'bg-spot'" :gradientColor="'primary'"/>
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