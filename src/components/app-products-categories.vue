<template>
   <nav class="categories">
      <ul class="categories__list">
         <li class="categories__item">
            <a href="#" @click.prevent="handleAllProductsClick" :class="{ active: isAllProductsActive }">All Products</a>
         </li>
         <li v-for="(category, index) in categories" :key="category" class="categories__item">
            <a href="#" @click.prevent="handleCategoryClick(category, index)"
               :class="{ active: index == selectedCategoryIndex }">
               {{ textFirstCharCapitalize(category) }}
            </a>
         </li>
      </ul>
      <select class="categories__sort-btn" @change="emit('sort', ($event.target as HTMLSelectElement).value)">
         <option selected disabled>Сортировать</option>
         <option value="asc">По возрастанию</option>
         <option value="desc">По убыванию</option>
      </select>
   </nav>
</template>

<script setup lang="ts">
import { textFirstCharCapitalize } from '@/service-functions'
import { ref } from 'vue'

defineProps<{ categories: string[] }>()

const emit = defineEmits<{
   (e: 'select', value: string): void,
   (e: 'allProducts'): void,
   (e: 'sort', value: string): void,
}>()

//Functional of toogling an Active class for category item
const isAllProductsActive = ref(true as boolean);
const selectedCategoryIndex = ref<number>();

const handleCategoryClick = (category: string, index: number) => {
   emit('select', category);
   selectedCategoryIndex.value = index;
   isAllProductsActive.value = false;
}
const handleAllProductsClick = () => {
   emit('allProducts');
   isAllProductsActive.value = true;
   selectedCategoryIndex.value = undefined;
}



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
            color: #FF6F61;
         }
      }
   }

   &__sort-btn {
      font-family: inherit;
      font-weight: inherit;
      font-size: inherit;
      margin: 0px 20px 0px 50px;
      cursor: pointer;
      white-space: nowrap;

      option {
         font-family: inherit;
         font-weight: inherit;
         font-size: inherit;
      }
   }
}

.active {
   color: #000;
}
</style>