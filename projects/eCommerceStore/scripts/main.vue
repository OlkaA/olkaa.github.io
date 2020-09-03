<template>
  <div>
    <basket />
  </div>
</template>

<script>
import createBasket from './components/basket.vue';
import createProductList from './components/products_list.js';

createProductList(createBasket());
</script>