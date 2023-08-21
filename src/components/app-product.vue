<template>
   <div class="product">
      {{ product.title }}
   </div>
</template>

<script setup lang="ts">
import {Product} from "../api";

defineProps<{ product: Product }>()
</script>

<style lang="scss" scoped>
.product {
   display: grid;
   grid-template: 1fr minmax(65px, auto) / 1fr;
   row-gap: 5px;
   border: 1px solid #000;
   padding: 0 10px;
   width: 310px;
   height: 500px;

   &__image {
      position: relative;

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
      justify-content: end;
   }

   &__name {
      flex: 0 0 100%;
   }
}
</style>