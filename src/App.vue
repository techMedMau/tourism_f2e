<template>
 
  <router-view/>
</template>

<style lang="scss">
*{
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif ;
}

.container{
  width: 100%;
  margin: 0 auto;
}

.banner{
  height: 700px;
  background-repeat: no-repeat;
  &_logo{
    margin: 0 auto;
  }
  &_title{
    display: flex;
    justify-content: center;
    & img+img{
      margin-left: 50px;
    }
  }
}

.breadcrumb{
    font-size: 18px;
    padding: 27px 0px 27px 28px;
}

.city{
    height: 633px;
    display: flex;
    margin-bottom: 33px;
    &_description{
        width: 302px;
        margin: 0 auto;
        &_name{
            text-align: center;
            font-size: 3rem;
            font-weight: bold;
            margin: 38px 0;
        }
        &_detail{
            font-size: 24px;
            line-height: 39px;
        }
    }
}

.spotSearch{
  margin-top: 21px;
  display: flex;
  justify-content: center;
  &_inputSpace, &_advanced{
    display: flex;
    justify-content: space-between;
  }
  &_inputSpace{
    position: relative;
    align-items: center;
    &_input{
      border-radius: 8px;
      width: 529px;
      text-indent: 8px;
      height: 100%;
      border-radius: 8px;
    }
    &_icon{
      position: absolute;
      right: 15px;
    }
  }
  &_advanced{
    background: white;
    border-radius: 8px;
    padding: 12px 8px;
    margin-left: 14px;
    width: 112px;
  }
}



</style>
