<template>
  <div>
    <div class="h-banner" :style="`background-image: url(${require('../../src/assets/images/banners/banner_food.png')})`"></div>
    <div class="h-48 bg-gradient-to-b from-food"></div>                
    <SuggestionBlock :titleBg="'#738677'" :assignedForward="'/'">熱門美食</SuggestionBlock>
    <SuggestionBlock :titleBg="'#738677'" :assignedForward="'/'">網紅必推美食</SuggestionBlock>
    <Footer :bgColor="'#738677'" :gradientColor="'#A7B4AA'"/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import SuggestionBlock from '../components/SuggestionBlock.vue'
export default {
    name: 'Food',
    components: { SuggestionBlock, Footer },
}
</script>