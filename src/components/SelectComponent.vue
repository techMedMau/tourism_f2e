<template>
  <div class="select" :class="{'select-active': showOptions}" @click="showOptions = !showOptions">
    <div class="select_display" :class="{'display-active': showOptions}">{{placeholder}}
        <div class="select_display_img" :class="{'svg-active': showOptions}">
          <svg  width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.999999L11 11L21 1"
              :stroke="showOptions ? '#f8f8f8':'black'" :stroke-opacity="showOptions ? '1':'0.5'"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
    </div>
    <ul v-show="showOptions" class="select_ul">
      <li v-for="(item , index) in options" :key="index"
      :class="{'boxshadow': index !== options.length-1}">
      {{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Select-component',
  props: {
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showOptions: false,
    };
  },
};
</script>

<style lang="scss">
.select{
  font-size: 32px;
  text-indent: 5px;
  font-weight: bold;
  height: max-content;
  position: relative;
  &_display{
    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
    height: max-content;
    width: 195px;
    position: relative;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    &_img{
      position: absolute;
      padding: 22px 17px;
      height: 100%;
      top: 0px;
      right: 0px;
    }
  }
  &_ul{
    position: absolute;
    width: 195px;
    background-color: #fff;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
  & li{
    color: rgba(0, 0, 0, 0.5);
    display: block;
    padding: 5px;
    &:hover{
      background-color: #6E9292;
      color: #fff;
    }
  }
}

.boxshadow{
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
}

.svg-active{
  background-color: #6E9292;
  border-radius: 0px 10px 0px 0px;
}

.display-active{
  border-radius: 10px 10px 0px 0px;
  box-shadow: none;
}

.select-active{
  border-radius: 10px 10px 0px 0px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>
