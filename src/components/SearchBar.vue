<template>
  <div class="searchBar">
      <div class="searchBar_inputSpace">
          <input
            class="searchBar_inputSpace_input"
            type="text"
            placeholder="請輸入關鍵字"
          />
          <img
            class="searchBar_inputSpace_icon"
            :src="`${require('@/assets/images/icons/magnifier.png')}`"
            alt="icon_magnifier"
            width="18"
            height="18"
          />
      </div>
      <button type="button" class="searchBar_buttonSpace">
          <img
            :src="`${require('@/assets/images/icons/menu.png')}`"
            alt="menu"
            width="24"
            height="24"
          />
          <span>進階搜尋</span>
      </button>
  </div>
</template>

<script>
export default {
  name: 'Search-bar',
};
</script>

<style lang="scss">
.searchBar{
    display: flex;
    justify-content: center;
    height: 48px;
    &_inputSpace{
      position: relative;
      &_input{
        width: 529px;
        height: 100%;
        background-color: white;
        border-radius: 8px;
        text-indent: .5rem;
      }
      &_icon{
          position: absolute;
          top: 15px;
          right: 15px;
      }
    }
    &_buttonSpace{
        background-color: white;
        width: 112px;
        height: 100%;
        padding: 12px 8px;
        display: flex;
        justify-content: space-between;
        border-radius: 8px;
        margin-left: 14px;
    }
}

</style>
