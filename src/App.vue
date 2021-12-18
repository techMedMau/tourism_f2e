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

</style>
