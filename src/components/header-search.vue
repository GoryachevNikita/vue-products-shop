<template>
   <div class="search">
      <input :value="modelValue" @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)" type="text"
         class="search__input" placeholder="Искать товары">
      <button class="search__btn"><span></span></button>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
   modelValue: string;
}>();

const emits = defineEmits<{
   (eventName: 'update:modelValue', value: string): void
}>()
</script>

<style lang="scss" scoped>
.search {
   border: 3px solid #1e28320d;
   border-radius: 0 5px 5px 0;
   display: flex;
   justify-content: space-between;
   background-color: #1e28320d;

   &__input {
      flex: 0 0 90%;
      padding-left: 15px;
   }

   &__btn {
      flex: 0 0 10%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
         content: "";
         display: inline-block;
         width: 25px;
         height: 25px;
         background-image: url(../img/header__search-svg.svg);
         background-repeat: no-repeat;
      }

   }
}
</style>