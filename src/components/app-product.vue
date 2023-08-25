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
   padding: 0 10px;
   gap: 20px;
   line-height: 1.375rem;

   &__image {
      position: relative;
      flex: 1 1 auto;

      img {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         object-fit: contain;
         padding: 20px;
      }
   }

   &__info {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 15px;
   }

   &__name {
      flex: 1 1 100%;
      height: 2.75rem;
      overflow: hidden;
      text-overflow: ellipsis;
   }

   &__category {
      color: rgba($color: #000000, $alpha: 0.5);
   }
}
</style>