<template>
  <div>
    <div class="h-banner" :style="`background-image: url(${require('../../src/assets/images/banners/banner_hotel.png')})`"></div>
    <div class="h-72 bg-gradient-to-b from-hotel"></div>
    <SuggestionBlock :bgColor="'bg-hotel'" :assignedForward="'/'">住宿推薦</SuggestionBlock>
    <Footer :bgColor="'bg-hotel'" :gradientColor="'hotel'"/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import SuggestionBlock from '../components/SuggestionBlock.vue'
export default {
    name: 'Hotel',
    components: { SuggestionBlock, Footer },
}
</script>

