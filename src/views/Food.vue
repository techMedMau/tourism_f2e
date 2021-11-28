<template>
  <div>
    <div class="h-banner" :style="`background-image: url(${require('../../src/assets/images/banners/banner_food.png')})`"></div>
    <div class="h-48 bg-gradient-to-b from-food"></div>                
    <SuggestionBlock :bgColor="'bg-food'" :assignedForward="'/'">熱門美食</SuggestionBlock>
    <SuggestionBlock :bgColor="'bg-food'" :assignedForward="'/'">網紅必推美食</SuggestionBlock>
    <Footer :bgColor="'bg-food'" :gradientColor="'food'"/>
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