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
            :src="require('@/assets/images/icons/magnifier.svg')"
            alt="icon_magnifier"
            width="18"
            height="18"
          />
      </div>
      <button type="button" class="searchBar_buttonSpace" @click="showAdvanced = !showAdvanced">
          <img
            :src="require('@/assets/images/icons/menu.png')"
            alt="menu"
            width="24"
            height="24"
          />
          <span>進階搜尋</span>
      </button>
      <!-- v-show="showAdvanced" -->
      <div class="advancedSearch"  v-show="showAdvanced">
        <div class="advancedSearch_searchSpace">
          <SelectComponent :options="['北部地區','中部地區','南部地區','東部地區','離島地區']" :placeholder="'選擇地區'"/>
          <SelectComponent :options="['北部地區','中部地區','南部地區','東部地區','離島地區']" :placeholder="'選擇縣市'"/>
          <button type="button" class="advancedSearch_searchSpace_button">
            <img :src="require('@/assets/images/icons/magnifier.svg')" alt="icon_search"
            width="24" height="24"/>
            <span>搜尋</span>
          </button>
        </div>
        <button type="button" class="advancedSearch_closeButton" @click="showAdvanced = false">
            <img :src="require('@/assets/images/icons/close.svg')" alt="icon_close"
              width="22" height="22"/>
        </button>
      </div>
  </div>
</template>

<script>
import SelectComponent from './SelectComponent.vue';

export default {
  name: 'Search-bar',
  components: { SelectComponent },
  data() {
    return {
      showAdvanced: false,
    };
  },
};
</script>

<style lang="scss">
.searchBar{
    display: flex;
    justify-content: center;
    height: 48px;
    position: relative;
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

.advancedSearch{
  display: flex;
  top: -160px;
  position: absolute;
  &_searchSpace{
    width: 647px;
    display: flex;
    justify-content: space-between;
    padding: 38px 28px;
    background: rgba(255, 255, 255, 0.66);
    border-radius: 20px 0px 20px 20px;
    &_button{
      font-size: 32px;
      color: rgba(0, 0, 0, .5);
      background-color: #f8f8f8;
      border-radius: 10px;
      display: flex;
      width: 152px;
      padding: 4px 25px;
      align-items: center;
      justify-content: space-between;
      & img{
        width: 30px;
        height: 100%;
      }
    }
  }
  &_closeButton{
    height: max-content;
    padding: 14px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 0px 10px 10px 0px;
  }
}

.activeSelect{
   transform: rotate(-90deg);
}

</style>
