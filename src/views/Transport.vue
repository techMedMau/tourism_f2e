<template>
  <div class="container">
    <div class="banner" :style="`background-image: url(${require('../../src/assets/images/banners/banner_transport.png')})`">
      <Nav-bar class="navComponent"/>
      <img class="banner_logo" :src="`${require('@/assets/images/logo.png')}`" alt="logo" width="152" height="117">
      <div class="banner_title" style="margin-top: 59px;">
        <img :src="`${require('@/assets/images/pageTitle/jiao.png')}`" alt="word_jiao" width="284" height="291">
        <img :src="`${require('@/assets/images/pageTitle/tong.png')}`" alt="word_tong" width="298" height="295">  
      </div>
    </div>
    <div class="transportGradientBg"></div>  
    <div class="transport_content">
      <div class="transportCards">
        <div class="transportCard">
          <img class="transportCard_img" :src="`${require('../../src/assets/images/transportCards/train.png')}`" alt="transportTrain" />
          <p class="transportCard_word">火車</p>
        </div> 
        <div>
          <div class="transportCard">
            <img class="transportCard_img" :src="`${require('../../src/assets/images/transportCards/highspeed.png')}`" alt="transportHighspeed" />
            <p class="transportCard_word">高鐵</p>
            </div>
          <div class="transportCard">
            <img class="transportCard_img" :src="`${require('../../src/assets/images/transportCards/bus.png')}`" alt="transportBus" />
            <p class="transportCard_word">公車</p>
          </div>    
        </div>
        <div class="transportCard">
          <img class="transportCard_img" :src="`${require('../../src/assets/images/transportCards/mrt.png')}`" alt="transportMRT" />
          <p class="transportCard_word">捷運</p>  
        </div>
      </div>
        <SuggestionBlock :titleBg="'#AA796C'" :assignedForward="'/'">高速公路</SuggestionBlock>
        <SuggestionBlock :titleBg="'#AA796C'" :assignedForward="'/'">交通租賃</SuggestionBlock>
        <Footer :bgColor="'#AA796C'" :gradientColor="'#E6BEB4'"/>
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

<style lang="scss">
.transportGradientBg{
  height: 1424px;
  background-image: linear-gradient($gradient-transport, white);
}

.transport{
  &_content{
    position: absolute;
    top: 655px;
  }
}

.transportCards{
  display: flex;
  justify-content: center;
  margin-bottom: 72px;
  & > div + div {
    margin-left: 40px;
  }
}

.transportCard{
  position: relative;
  & + &{
    margin-top: 12px;
  }
  &_word{
    font-size: 48px;
    font-weight: bold;
    color: white;
    position: absolute;
    top: .5rem;
    left: 1rem;
  }
}

</style>
