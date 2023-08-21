<template>
   <nav class="categories">
      <ul class="categories__list">
         <li class="categories__item active"><a href="#">All Products</a></li>
         <li v-for="category in categories" :key="category" class="categories__item"><a href="#">{{
            textFirstCharCapitalize(category) }}</a></li>

      </ul>
      <a class="categories__sort-btn">По Возрастанию</a>
   </nav>
</template>

<script setup lang="ts">

const props = defineProps<{
   categories: string[]
}>()

//Help-function for category text
const textFirstCharCapitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

</script>

<style lang="scss" scoped>
.categories {
   display: flex;
   border: 1px solid #000;

   &__list {
      display: flex;
      flex-wrap: wrap;
      flex: 1 1 auto;
   }

   &__item {
      color: rgba($color: #000000, $alpha: 0.5);

      &:not(:last-child) {
         margin-right: 40px;
      }

      a {
         &:hover {
            color: #000;
         }
      }
   }

   &__sort-btn {
      display: inline-block;
      margin: 0px 20px 0px 50px;
      cursor: pointer;
      white-space: nowrap;
   }
}

.active {
   color: #000;
}
</style>