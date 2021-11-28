<template>
  <div class="w-container">
    <div class="h-banner" :style="`background-image: url(${require('../../src/assets/images/banners/banner_transport.png')})`"></div>
    <div class="h-transportBackground bg-gradient-to-b from-transport"></div>  
    <div class="absolute w-container" style="top: 930px">
        <SuggestionBlock :bgColor="'bg-transport'" :assignedForward="'/'">熱門美食</SuggestionBlock>
        <SuggestionBlock :bgColor="'bg-transport'" :assignedForward="'/'">網紅必推美食</SuggestionBlock>
        <Footer :bgColor="'bg-transport'" :gradientColor="'transport'"/>
    </div>               
  </div>
</template>

<script>
import Footer from '../components/Footer'
import SuggestionBlock from '../components/SuggestionBlock.vue'
export default {
    name: 'Transport',
    components: { SuggestionBlock, Footer },
}
</script>

