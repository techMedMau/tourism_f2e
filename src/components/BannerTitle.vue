<template>
  <div class="bannerTitle">
    <img v-for="(item, index) in imageArr" :key="index"
      :src="require(`@/assets/${item}`)"
      :alt="index === 0 ? 'title_left':'title_right'"
      width="300"
      height="290"/>
  </div>
</template>

<script>
export default {
  name: 'Banner-title',
  props: {
    imageArr: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.bannerTitle{
  width: 640px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}
</style>
