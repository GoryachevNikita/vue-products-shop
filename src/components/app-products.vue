<template>
   <div class="products">
      <app-products-categories @select="handleCategorySelect" :categories="categories" class="products__categories" />
      <div class="grid">
         <app-product v-for="(product) in products" :key="product.id" :product="product" />
      </div>
   </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAllCategories, getProducts, getProductsInCategory } from "@/api";
import AppProduct from "./app-product.vue";
import AppProductsCategories from "./app-products-categories.vue";
import { Product } from "@/types";

const products = ref([] as Product[]);
const categories = ref([] as string[]);

const handleCategorySelect = async (category: string) => {
   products.value = await getProductsInCategory(category, { limit: 8 });
};

onMounted(() => {
   getProducts({ limit: 8 }).then(data => products.value = data);
   getAllCategories().then(data => categories.value = data);
})
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