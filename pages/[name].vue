<template lang="pug">
.container
    .up
        .but
            NuxtLink.link(to="/" :style="isDark ? {backgroundColor:'hsl(209, 23%, 22%)',boxShadow:'0 0 3px 0 rgb(19, 19, 19)'} : {backgroundColor:'white'}") back
    div(v-for="i in data")
        main(v-if="i.name === namee")
            .le
                img(:src="i.flags.png")
            .ri 
                h1 {{ i.name }}
                .info 
                    .leftinfo
                        .item
                            .li 
                                p Native Name:
                            .rii 
                                p {{ i.nativeName }}
                        .item
                            .li
                                p Population:
                            .rii    
                                p {{ i.population }}
                        .item    
                            .li 
                                p Region:
                            .rii
                                p {{ i.region }}
                        .item
                            .li
                                p Sub Region:
                            .rii 
                                p {{ i.subregion }}
                        .item 
                            .li    
                                p Capital:
                            .rii 
                                p {{ i.capital }}   
                    .rightinfo
                        .item 
                            .li    
                                p top level domain:
                            .rii(v-for="item in i.topLevelDomain") 
                                p {{ item }}       
                        .item 
                            .li    
                                p currencies:
                            .rii(v-for="item in i.currencies") 
                                p {{ item.name }}  
                        .item 
                            .li    
                                p languages:
                            .rii(v-for="item in i.languages") 
                                p {{ item.name }}  
                .borders
                    .item
                        .li    
                            p Border countries:
                        .riii
                            .rii(v-for="border in i.borders" :key="border")
                                NuxtLink.link(:to="getBorderCountryName(border)") {{ getBorderCountryName(border) }}
    
    </template>

<script setup lang="ts">
const route = useRoute();
const { isDark } = useDarkMode();
const namee = route.params.name;
import data from "../data.json";

function getBorderCountryName(alpha3Code: string) {
  const country = data.find((item) => item.alpha3Code === alpha3Code);
  return country ? country.name : alpha3Code;
}
</script>

<style lang="scss" scoped>
.container {
  .up {
    margin: 40px 0;
    .but {
      width: 150px;
      height: 40px;
      .link {
        padding: 5px 20px;
        border: none;
        border-radius: 10px;
        box-shadow: 0px 0px 5px 0px rgb(183, 183, 183);
        background: #ffffff;
      }
    }
  }
  main {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 1em;
    height: 100vh;
    .le {
      height: 50vh;
    }
    .ri {
      margin: 25px;
      .item {
        margin-bottom: 5px;
        display: flex;
        .rii {
          margin-left: 3px;
          p {
            font-weight: 300;
          }
        }
        .li {
          font-weight: 600;
        }
      }
      .info {
        margin-top: 15px;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .borders {
        margin-top: 30px;
        .riii {
            display: flex;
            flex-wrap: wrap;
          .rii {
            margin-left: 10px;
            margin-bottom: 10px;
            width: 130px;
            display: flex;
            align-items: center;
            border-radius: 6px;
            justify-content: center;
            box-shadow: 0px 0px 3px 0px rgb(183, 183, 183);
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .container{
    main{
      display: grid;
      grid-template-columns: 1fr;
      .ri{
        .info{
          display: grid;
        grid-template-columns: 1fr;
        }
      }
    }
  }
}
</style>
