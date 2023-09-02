import { createRouter, createWebHistory } from 'vue-router';
import appBasket from "@/components/app-basket.vue";
import appProducts from "@/components/app-products.vue";

export default createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         component: appProducts,
      },
      {
         path: '/busket',
         component: appBasket,
      }
   ]
})