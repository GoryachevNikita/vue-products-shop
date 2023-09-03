<template>
   <div class="main__basket basket">
      <div class="basket__content">
         <div class="basket__header">Корзина</div>
         <div class="basket__product-list">
            <div class="basket__item">1</div>
            <div class="basket__item">2</div>
            <div class="basket__item">3</div>
         </div>

      </div>
      <div class="basket__sidebar">Заказать</div>
   </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.basket {
   display: flex;
   align-items: start;
   height: 500px;
   gap: 25px;

   &__content {
      flex: 1 1 auto;
      border: 1px solid #000;
      background-color: white;

   }

   &__item {
      height: 100px;
      border: 1px solid #000;

      &:not(:last-child) {
         margin-bottom: 25px;
      }
   }

   &__sidebar {
      flex: 0 0 350px;
      border: 1px solid #000;
      background-color: white;
      padding: 25px;
      height: 250px;
   }

}
</style>