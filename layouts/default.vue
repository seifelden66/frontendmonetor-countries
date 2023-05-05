<template>
    <div :class="{'dark-mode': isDark}">
        <Navbar />
        <slot />
    </div>
</template>

<script setup lang="ts">
const {isDark} = useDarkMode()
</script>

<style scoped>
.dark-mode{
    background-color: hsl(207, 26%, 17%);
    color: white;
}
</style>