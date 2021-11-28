<template>
  <div class="box-border">
   
    <div class="h-banner" :style="`background-image: url(${require('../../src/assets/images/banners/banner_homepage.png')})`"></div>
    <div class="h-80 bg-gradient-to-b from-primary"></div>
    <div class="flex justify-around pb-14">
      <div class="h-96 w-1/5 shadow-sm bg-gray-100 rounded-2xl" v-for="(item,index) in choice" :key="index" :item="item">
      {{item}}
      </div>
    </div>
    <SuggestionBlock :bgColor="'bg-spot'">熱門景點</SuggestionBlock>
    <SuggestionBlock :bgColor="'bg-food'">熱門美食</SuggestionBlock>
    <SuggestionBlock :bgColor="'bg-hotel'">住宿推薦</SuggestionBlock>
    <Footer :bgColor="'bg-spot'" :gradientColor="'primary'"/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import SuggestionBlock from '../components/SuggestionBlock'

export default {
  name: 'Home',
  components: { Footer, SuggestionBlock },
  data(){
    return{
      choice:['景點','美食','住宿','交通']
    }
  }
}
</script>
