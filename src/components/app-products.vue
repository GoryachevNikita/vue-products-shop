<template>
   <div class="products">
      <app-products-categories v-if="ajaxDataIsLoaded" :categories="categories"
         class="products__categories"></app-products-categories>
      <div v-else>Идет загрузка категорий...</div>
      <div class="grid">
         <app-product v-if="ajaxDataIsLoaded" v-for="product in products" :key="product.title"
            :product="product"></app-product>
         <div v-else>Идет загрузка продуктов...</div>
      </div>
   </div>
</template>

<script setup lang="ts">
//Imports
import { ref } from 'vue';
import axios from 'axios';
import appProductsCategories from './app-products-categories.vue'
import appProduct from './app-product.vue';

//Types for categories, products and ajax-response
type TypeCategories = string[];
interface IProduct {
   id: string | number,
   category: string,
   title: string,
   description: string,
   price: string | number,
   image: string,
};
type AxiosResp = {
   data: []
}

//Declaration of ajax variables and child-props-variables with types
let ajaxCategories: AxiosResp, ajaxProducts: AxiosResp;
let categories: TypeCategories, products: IProduct[];

//Trigger to mount and render child-component
let ajaxDataIsLoaded = ref(false);

//Ajax request for categories and products lists
async function getAjaxData(urls: string[]): Promise<AxiosResp[]> {

   let resp: AxiosResp[] = await Promise.all(urls.map<Promise<AxiosResp>>((url) => axios<AxiosResp, AxiosResp>(url)));
   console.log(resp)
   return resp
}
getAjaxData(['https://fakestoreapi.com/products/categories', 'https://fakestoreapi.com/products?limit=8'])
   .then((resp) => {
      [ajaxCategories, ajaxProducts] = resp;
      [categories, products] = [ajaxCategories.data, ajaxProducts.data];
      ajaxDataIsLoaded.value = true;
      console.log(categories, products);
   })
   .catch((error: Error) => alert(error));

</script>

<script lang="ts">
export interface IProduct {
   id: string | number,
   category: string,
   title: string,
   description: string,
   price: string | number,
   image: string,
};
</script>

<style lang="scss" scoped>
.products {
   font-weight: 600;
   display: grid;
   grid-template: auto 1fr / 1fr;
   row-gap: 35px;
}

.grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, 312px);
   grid-auto-rows: 500px;
   gap: 24px;
   border: 1px solid #000;
}
</style>