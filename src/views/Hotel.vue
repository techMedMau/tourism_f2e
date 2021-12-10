<template>
  <div class="container">
    <div class="banner" :style="`background-image: url(${require('../../src/assets/images/banners/banner_hotel.png')})`">
      <Nav-bar class="navComponent"/>
      <img class="banner_logo" :src="`${require('@/assets/images/logo.png')}`" alt="logo" width="152" height="117">
      <div class="banner_title" style="margin-top: 40px;">
        <img :src="`${require('@/assets/images/pageTitle/zu.png')}`" alt="word_zu" width="297" height="287">
        <img :src="`${require('@/assets/images/pageTitle/su.png')}`" alt="word_su" width="282" height="284">  
      </div>
      <div class="hotelSearch">
        <div>
          <p class="hotelSearch_word">目的地</p>
          <input class="hotelSearch_input" style="width: 351px;" type="text" placeholder="你要去哪裡?">
        </div>
        <div>
          <p class="hotelSearch_word">入住-退房</p>
          <input class="hotelSearch_input" style="width: 159px;" type="date" placeholder="">
        </div>
        <div>
          <p class="hotelSearch_word">房間及人數</p>
          <input class="hotelSearch_input" style="width: 254px;" type="text" placeholder="2位成人，1間房間">
        </div>
        <button class="hotelSearch_button" type="button">
          <img class="hotelSearch_button_icon" :src="`${require('@/assets/images/icons/magnifier.png')}`" alt="icon_magnifier" width="18" height="18"/>
          <span>搜尋</span>
        </button>
      </div>
    </div>
    <div class="hotelGradientBg"></div>
    <div class="emptyBackground" style="position: relative;">
      <div class="hotel">
        <div class="hotel_img_outer">
          <img class="hotel_img_inner" :src="`${require('../../src/assets/images/hotelCards/north.png')}`" alt="northHotel" />
          <div class="hotel_img_word">
            <p class="hotel_img_word_district">北部地區</p>
            <small class="hotel_img_word_total">xxx間住宿{{}}</small>  
          </div>
        </div> 
        <div>
          <div class="hotel_img_outer">
            <img class="hotel_img_inner" :src="`${require('../../src/assets/images/hotelCards/west.png')}`" alt="westHotel" />
            <div class="hotel_img_word">
              <p class="hotel_img_word_district">西部地區</p>
              <small class="hotel_img_word_total">xxx間住宿{{}}</small>  
            </div>
          </div>
          <div class="hotel_img_outer">
            <img class="hotel_img_inner" :src="`${require('../../src/assets/images/hotelCards/south.png')}`" alt="southHotel" />
            <div class="hotel_img_word">
              <p class="hotel_img_word_district">南部地區</p>
              <small class="hotel_img_word_total">xxx間住宿{{}}</small>  
            </div>
          </div>    
        </div>
        <div class="hotel_img_outer">
          <img class="hotel_img_inner" :src="`${require('../../src/assets/images/hotelCards/east.png')}`" alt="eastHotel" />
          <div class="hotel_img_word">
            <p class="hotel_img_word_district">東部地區</p>
            <small class="hotel_img_word_total">xxx間住宿{{}}</small>  
          </div>
        </div>
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

.hotelSearch{
  display: flex;
  margin: 22px auto 0 auto;
  padding: 35px 20px 35px 20px;
  width: 1014px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  justify-content: space-between;
  align-items: flex-end;
  &_word{
    font-size: 28px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
  }
  &_input{
    padding: 14px;
    border-radius: 10px;
  }
  &_button{
    padding: 12px;
    font-size: 20px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
    background: white;
    height: max-content;
    border-radius: 10px;
    display: flex;
    align-items: center;
    &_icon{
      margin-right: 10px;
    }
  }
}

.hotelGradientBg{
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
  & > div + div {
    margin-left: 40px;
  }
  &_img{
    &_outer{
       position: relative;
       & + &{
         margin-top: 12px;
       }
    }
    &_word{
      color: white;
      position: absolute;
      top: .5rem;
      left: 1rem;
      &_district{
        font-size: 48px;
        font-weight: bold;
      }
      &_total{
        font-size: 24px;
      }
    }
  }

  
}
</style>