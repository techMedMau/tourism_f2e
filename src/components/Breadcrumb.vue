<template>
  <div class="breadcrumb">
      <ol class="breadcrumb_items">
          <li class="breadcrumb_item" v-for="(item, index) in crumbList" :key="index">
            <button type="button"
              @click="selected(item)"
              :disabled="isLast(index)">
            <span class="breadcrumb_arrow" v-if="index !== 0">></span>
              {{item}}
            </button>
          </li>
      </ol>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb-component',
  props: {
    crumbList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    isLast(index) {
      return index === this.crumbList.length - 1;
    },
    selected(crumb) {
      this.$emit('selected', crumb);
    },
  },
};
</script>

<style lang="scss">
.breadcrumb{
    font-size: 18px;
    padding: 27px 0px 27px 28px;
    &_items{
      display: flex;
    }
    &_arrow{
      padding: 0 8px;
    }
}

</style>
