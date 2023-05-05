<template lang="pug">
.container(:class="{'dark-mode': isDark}") 
    .up 
        .srch
            .ico
              IconsSearch
            input(type="search" placeholder=" search for a country... " v-model="input" :style="isDark ? {backgroundColor:'hsl(209, 23%, 22%)',boxShadow:'0 0 3px 0 rgb(19, 19, 19)'} : {backgroundColor:'white'}")
        .check 
            .menBut 
              button(@click="toggleMenu" :style="isDark ? {backgroundColor:'hsl(209, 23%, 22%)',color:'white',boxShadow:'0 0 3px 0 rgb(19, 19, 19)'} : {backgroundColor:'white'}") filter by region
            .menu(v-show="menu")  
              ul(:style="isDark? {backgroundColor:'hsl(209, 23%, 22%)'} : {backgroundColor:'white'}")
                li(v-on:click="selectedRegion = null") All Regions
                li(v-for="region in regions" v-on:click="selectedRegion = region") {{ region }}
    .cards
        div(v-for="i in filteredData")
            NuxtLink.card.link(:to="`/${i.name}`" :class="{'dark': isDark}" )
                img(:src="i.flags.png")
                
                .container
                    .title
                        h5 {{ i.name }}
                    .description
                        .info
                            .le
                                p population: 
                            .ri
                                p {{ i.population }}
                        .info
                            .le
                                p region:
                            .ri
                                p {{ i.region }}
                        .info
                            .le
                                p capital:
                            .ri
                                p {{ i.capital }}
</template>

<script setup lang="ts">
import data from "../data.json";
const input = ref<string | undefined>("");
const { isDark } = useDarkMode();
const selectedRegion = ref<string | null>(null);
const filteredData = computed(() =>
  data.filter(
    (country) =>
      (selectedRegion.value === null ||
        country.region === selectedRegion.value) &&
      country.name.toLowerCase().includes(input.value?.toLowerCase() ?? "")
  )
);
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const menu = ref(false);
const toggleMenu = () => {
  menu.value = !menu.value;
};
</script>

<style scoped lang="scss">
.container {
  &.dark-mode {
    color: #fff;
  }
  .up {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0;
    .srch {
      display: flex;
      align-items: center;

      .ico {
        position: absolute;
      }
      input {
        width: 350px;
        height: 40px;
        border: none;
        box-shadow: 0 0 3px 0 rgb(199, 199, 199);
        border-radius: 10px;
        padding: 2px 20px;
      }
    }
    .check {
      .menBut {
        button {
          height: 40px;
          width: 150px;
          border: none;
          box-shadow: 0 0 3px 0 rgb(199, 199, 199);
          padding: 2px 20px;
          border-radius: 5px;
        }
      }
      .menu {
        position: absolute;
        margin-top: 5px;
        z-index: 999;
        ul {
          border-radius: 5px;
          list-style: none;
          width: 150px;
          li {
            cursor: pointer;

            padding: 2px 5px;
            &:hover {
              color: #beafe3;
            }
          }
        }
      }
    }
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;

    .card {
      &.dark {
        background-color: hsl(209, 23%, 22%);
      }
      &:hover {
        transform: translateY(5px);
      }
      box-shadow: 0px 0px 3px 0px rgb(183, 183, 183);
      background-color: white;
      border-radius: 10px;
      transition: 350ms;
      border: none;

      img {
        height: 150px;
      }
      .container {
        .description {
          margin-top: 15px;
          .info {
            margin-bottom: 4px;
            display: flex;
            font-size: 14px;
            .le {
              margin-right: 4px;
              font-weight: 500;
            }
            .ri {
              color: rgb(113, 113, 113);
            }
          }
        }
      }
    }
  }
}
@media (max-width: 992px) {
  .container {
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 50px;
    }
  }
}
@media (max-width: 768px) {
  .container {
    .up {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 50px;
    }
  }
}
@media (max-width: 480px) {
  .container {
    .cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: 50px;
      
    }
  }
}
</style>
