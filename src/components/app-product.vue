<template>
   <div class="product">
      <a href="#" class="product__image">
         <img :src="product.image" :alt="product.title">
      </a>
      <div class="product__info ">
         <div class="product__name">{{ product.title }}</div>
         <div class="product__category">{{ textFirstCharCapitalize(product.category) }}</div>
         <div class="product__price">${{ product.price }}</div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { Product } from "@/types";
import { textFirstCharCapitalize } from '@/service-functions'
defineProps<{ product: Product }>()
</script>

<style lang="scss" scoped>
.product {
   display: flex;
   flex-direction: column;
   border: 1px solid #000;
   padding: 0 10px;
   width: 312px;
   height: 500px;

   &__image {
      position: relative;
      flex: 1 1 100%;

      img {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         object-fit: contain;
      }
   }

   &__info {
      display: flex;
      flex-wrap: wrap;
      font-size: 1rem;
      line-height: 135.5%;
      justify-content: space-between;
   }

   &__name {
      flex: 0 0 100%;
      text-align: center;
   }
}
</style>