<template>
  <div class="container">
    <div class="header">
      <img
        class="header_logo"
        :src="`${require('@/assets/images/logo.png')}`"
        alt="logo"
        width="72"
        height="55"
      />
      <nav-bar />
    </div>
    <div class="spotIdGradientBg">
      <Breadcrumb :crumbList="['景點', '北部地區', '臺北市', '臺北101']"/>
      <div class="city">
        <img
          :src="`${require('@/assets/images/tmpCityImg.png')}`"
          alt="cityImage"
        />
        <div class="city_description">
          <p class="city_description_name">臺北101</p>
          <p class="city_description_detail">
            臺北101購物中心為地上5樓，地下1樓的購物空間，23000坪，是臺灣首座國際頂級購物中心。擁有許多精品旗艦店，
            如BALLY、LV、Prada、Gucci、Cartier、DIOR及FENDI等，消費者可以享受到最多樣的選擇，與全球流行零時差，輕鬆擁有愉悅的購物時刻。
          </p>
        </div>
      </div>
    </div>
    <suggestion-block :titleBg="'#6E9292'" :assignedForward="'/'"
      >網紅這樣玩</suggestion-block
    >
    <footer-component :bgColor="'#6E9292'" :gradientColor="'#A7D4DA'" />
  </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue';

export default {
  name: 'SpotId-view',
  components: { Breadcrumb },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.header {
  padding: 0 30px;
  height: 84px;
  width: 100%;
  background-color: $spot-green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &_logo {
    height: 55px;
  }
}

.spotIdGradientBg {
  background: linear-gradient(
    180deg,
    $gradient-spot 0%,
    rgba(230, 245, 245, 0) 50%
  );
}
</style>
