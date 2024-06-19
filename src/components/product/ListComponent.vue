<script setup>

import useProductList from "../../hooks/useProductList.jsx";
import {onMounted, ref} from "vue";

const {refData, getData} = useProductList()

onMounted(() => {

  getData()

})

</script>

<template>
  <div>Product List Component</div>

  <ul>
    <li v-for="product in refData.content" :key="product.pno">
      <div>
        <div>
          {{product.productImage}}
        </div>
        <div>
          {{product.pno}}
        </div>
        <div>
          {{product.pname}}
        </div>
        <div>
          {{product.price}}
        </div>
      </div>
    </li>

  </ul>

</template>

<style scoped>

</style>