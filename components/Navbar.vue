<template lang="pug">
.container-fluid(:class="{'dark-mode': isDark}") 
    .container 
        .left 
            h3 where in the world 
        .right
            button.but(@click="toggle")
                h5
                    IconsDark/ Dark Mode
</template>

<script setup lang="ts">
const {isDark} = useDarkMode()
const toggle = ()=>{
    isDark.value = !isDark.value
}
</script>

<style scoped lang="scss">
.container-fluid{
    
    background: #fffefe;
    border-bottom: #f6f6f6 solid 2px;
    height: 80px;
    display: flex;
    align-items: center;
    &.dark-mode { 
        background-color: #2b3945;
        border-color: #1c2530;
        color: #fff;
    }
    
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .right{
            button{
                &.but{
                    background: inherit;
                    border: none;
                    color: inherit;
                    cursor: pointer;
                }
            }
            
        }
    }
}
</style>