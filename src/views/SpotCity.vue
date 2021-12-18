<template>
  <div class="container">
    <div
      class="banner"
      :style="
      `background-image: url(${require('../../src/assets/images/banners/banner_spots.png')})`"
    >
      <nav-bar class="navComponent" />
      <img
        class="banner_logo"
        :src="`${require('@/assets/images/logo.png')}`"
        alt="logo"
        width="152"
        height="117"
      />
      <div class="banner_title" style="margin-top: 42px">
        <img
          :src="`${require('@/assets/images/pageTitle/jin.png')}`"
          alt="word_jin"
          width="304"
          height="291"
        />
        <img
          :src="`${require('@/assets/images/pageTitle/dien.png')}`"
          alt="word_dien"
          width="302"
          height="301"
        />
      </div>
      <div class="spotSearch">
        <div class="spotSearch_inputSpace">
          <input
            type="text"
            placeholder="請輸入關鍵字"
            class="spotSearch_inputSpace_input"
          />
          <img
            class="spotSearch_inputSpace_icon"
            :src="`${require('@/assets/images/icons/magnifier.png')}`"
            alt="icon_magnifier"
            width="18"
            height="18"
          />
        </div>
        <button type="button" class="spotSearch_advanced">
          <img
            :src="`${require('@/assets/images/icons/menu.png')}`"
            alt="menu"
            width="24"
            height="24"
          />
          <span>進階搜尋</span>
        </button>
      </div>
    </div>
    <Breadcrumb :crumbList="['景點', '北部地區','臺北市']" @selected="selected"/>
    <div class="city">
      <img
        :src="`${require('@/assets/images/tmpCityImg.png')}`"
        alt="cityImage"
      />
      <div class="city_description">
        <p class="city_description_name">臺北市</p>
        <p class="city_description_detail">
          在臺北，您每個所到之處，多樣的文化特質都充沛鼓動著。
          雕龍畫棟的廟宇與現代的街道完美吻合，還有許多世界級餐廳隨時提供您最正統的各式中華料理。
          別忘了，美味的夜市小吃不僅僅帶給您口腹的滿足，更是引領您體驗臺灣生活的理想去處。
        </p>
      </div>
    </div>
    <suggestion-block
      :showPagination="true"
      :titleBg="'#6E9292'"
      :assignedForward="'/spot'">熱門景點</suggestion-block>
    <suggestion-block :titleBg="'#6E9292'" :assignedForward="'/spot'">網紅這樣玩</suggestion-block>
    <footer-component :bgColor="'#6E9292'" :gradientColor="'#A7D4DA'" />
  </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue';

export default {
  name: 'SpotCity-view',
  components: { Breadcrumb },
  methods: {
    selected(item) {
      console.log(item);
    },
  },
};
</script>

<style lang="scss">
</style>
