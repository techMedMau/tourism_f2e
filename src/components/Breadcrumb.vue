<template>
  <div>

  </div>
</template>

<script>
export default {
    name:'Breadcrumb-component',
    props:{
        crumbList:{
            type: Array,
            required: true
        }
    },
    data(){
        return{

        }
    },
    methods:{
        isLast(index) {
            return index === this.crumbs.length - 1;
        },
        selected(crumb) {
            this.$emit('selected', crumb);
        },
    }
}
</script>

<style>

</style>