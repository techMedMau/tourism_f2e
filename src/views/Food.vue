<template>
  <div>
    <div
      class="banner"
      :style="
      `background-image: url(${require('../../src/assets/images/banners/banner_food.png')})`"
    >
      <nav-bar class="navComponent" />
      <img
        class="banner_logo"
        :src="`${require('@/assets/images/logo.png')}`"
        alt="logo"
        width="152"
        height="117"
      />
      <BannerTitle :imageArr="$store.state.bannerTitleImages.food" />
      <SearchBar style="margin-top: 10px;"/>
    </div>
    <div class="foodGradientBg">
      <div class="foodCards">
        <div class="foodCard">
          <img
            :src="`${require('../../src/assets/images/foodCards/food_culture.png')}`"
            alt="cultureFood"
          />
          <div class="foodCard_word foodCard_word_left">台灣文化</div>
        </div>
        <div class="foodCard">
          <img
            :src="`${require('../../src/assets/images/foodCards/food.png')}`"
            alt="food"
          />
          <div class="foodCard_word">台灣小吃</div>
        </div>
        <div class="foodCard">
          <img
            :src="`${require('../../src/assets/images/foodCards/food_special.png')}`"
            alt="specialFood"
          />
          <div class="foodCard_word foodCard_word_right">台灣各地特色</div>
        </div>
      </div>
    </div>
    <suggestion-block :titleBg="'#738677'" :assignedForward="'/'"
      >熱門美食</suggestion-block
    >
    <suggestion-block :titleBg="'#738677'" :assignedForward="'/'"
      >網紅必推美食</suggestion-block
    >
    <footer-component :bgColor="'#738677'" :gradientColor="'#A7B4AA'" />
  </div>
</template>

<script>
import BannerTitle from '../components/BannerTitle.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
  name: 'Food-view',
  components: { BannerTitle, SearchBar },
};
</script>

<style lang="scss">
.foodGradientBg {
  height: 199px;
  background-image: linear-gradient($gradient-food, white);
  position: relative;
}

.foodCards {
  display: flex;
  position: absolute;
  top: -84px;
  left: 151px;
}

.foodCard {
  position: relative;
  &_word {
    position: absolute;
    font-size: 28px;
    color: white;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.28);
    width: 326px;
    text-align: center;
    padding: 6px;
    &_left {
      border-bottom-left-radius: 20px;
    }
    &_right {
      border-bottom-right-radius: 20px;
    }
  }
}
</style>
