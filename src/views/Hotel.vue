<template>
  <div class="container">
    <div class="banner" :style="`background-image: url(${require('../../src/assets/images/banners/banner_hotel.png')})`"></div>
    <div class="gradientBackground"></div>
    <div class="emptyBackground" style="position: relative;">
      <div class="hotel">
        <img class="hotel_img" :src="`${require('../../src/assets/images/hotelCards/north.png')}`" alt="northHotel" />
        <div>
          <img class="hotel_img" :src="`${require('../../src/assets/images/hotelCards/west.png')}`" alt="westHotel" />
          <img class="hotel_img" :src="`${require('../../src/assets/images/hotelCards/south.png')}`" alt="southHotel" />
        </div>
        <img class="hotel_img" :src="`${require('../../src/assets/images/hotelCards/east.png')}`" alt="eastHotel" />
      </div>
    </div>
    <SuggestionBlock :titleBg="'#C2BB96'" :assignedForward="'/'">住宿推薦</SuggestionBlock>
    <Footer :bgColor="'#C2BB96'" :gradientColor="'#E6DDB2'"/>
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

<style lang="scss">

.gradientBackground{
  height: 281px;
  background-image: linear-gradient($gradient-hotel, white);
}

.emptyBackground{
  height: 301px;
}

.hotel{
  display: flex;
  position: absolute;
  top: -221px;
  left: 70px;
  & img + div{
    margin-left: 40px;
  }
  & div + img{
    margin-left: 40px;
  }
  & img + img {
    margin-top: 12px;
  }
}
</style>