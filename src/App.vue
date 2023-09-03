<template>
   <div class="wrapper">
      <header class="header">
         <div class="container">
            <div class="header__wrapper">
               <router-link to="/" class="header__title">
                  <span>CORAL</span>
               </router-link>
               <header-search v-model="searchText" class="header__search"></header-search>
               <div class="header__btns">
                  <a class="header__btn header__btn_like">
                     <img src="./assets/img/header__like-icon.svg" alt="like-icon">
                     <span>Избранное</span>
                  </a>
                  <router-link to="/basket" class="header__btn header__btn_bag">
                     <img src="./assets/img/header__bag-icon.svg" alt="bag-icon">
                     <span>Корзина</span>
                  </router-link>
               </div>
            </div>
         </div>
      </header>
      <main class="main" :class="{ 'grey-background': router.currentRoute.value.fullPath == '/basket' }">
         <div class="container"><router-view /></div>
      </main>
      <footer class="footer">
         <div class="container">fOOTER</div>
      </footer>
   </div>
</template>

<script setup lang="ts">
import headerSearch from './components/header-search.vue';
import appProducts from './components/app-products.vue'
import { ref } from 'vue';
import router from './router/router';

const searchText = ref("" as string);

</script>

<style lang="scss">
.wrapper {
   min-height: 100vh;
   overflow: hidden;
   display: grid;
   grid-template: minmax(120px, auto) 1fr minmax(90px, auto) / 1fr;
   border: 1px solid #e01818;
}

.container {
   width: 100vw;
   max-width: 1350px;
   margin: 0 auto;
   padding: 0 15px;
   border: 1px solid #000;
}

.header {
   border: 1px solid #0cc2f0;
   margin-bottom: 30px;
   display: flex;
   align-items: center;

   &__wrapper {

      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: 600px) {
         flex-wrap: wrap;
         justify-content: center;
      }
   }

   &__title {
      font-family: 'STIX Two Text', serif;
      font-weight: normal;
      font-size: 2rem;
      display: flex;
      align-items: center;

      &::before,
      &::after {
         content: "";
         display: inline-block;
         width: 31px;
         height: 15px;
         background-image: url(./assets/img/header__svg.svg);
      }

      span {
         margin: 0 10px;
      }

      @media only screen and (max-width: 600px) {
         flex: 0 0 100%;
         justify-content: center;

      }
   }

   &__search {
      flex: 0 0 50%;

      @media only screen and (max-width: 600px) {
         flex-basis: 70%;
         margin-right: 20px;

      }
   }

   &__btns {
      flex: 0 0 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      @media only screen and (max-width: 992px) {
         justify-content: start;
         gap: 25px;
         flex-basis: auto;
      }
   }

   .header__btn {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      row-gap: 3px;

      @media only screen and (max-width: 992px) {
         span {
            display: none;
         }
      }
   }

}

.grey-background {
   background-color: #f6f6f9;
}
</style>
