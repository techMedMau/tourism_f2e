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
      <BannerTitle :imageArr="$store.state.bannerTitleImages.spot" />
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
    <div class="spotGradientBg">
      <suggestion-block :titleBg="'#6E9292'" :assignedForward="'/'"
        >熱門景點</suggestion-block
      >
      <suggestion-block :titleBg="'#6E9292'" :assignedForward="'/spot'"
        >網紅攻略</suggestion-block
      >
      <suggestion-block :titleBg="'#6E9292'" :assignedForward="'/'"
        >主題景點</suggestion-block
      >
      <footer-component :bgColor="'#6E9292'" :gradientColor="'#A7D4DA'" />
    </div>
  </div>
</template>

<script>
import BannerTitle from '../components/BannerTitle.vue';

export default {
  name: 'Spot-view',
  components: { BannerTitle },
};
</script>

<style lang="scss">
.spotGradientBg {
  background: linear-gradient(
    179.72deg,
    $gradient-spot 0.72%,
    rgba(173, 204, 206, 0) 67.54%
  );
}
</style>
