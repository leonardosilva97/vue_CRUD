<template>
  <div class="about">
    <h1>Produtos</h1>

    <ListaProdutos/>
  </div>
</template>

<script>
import ListaProdutos from '@/components/ListaProdutos.vue';
  export default{
    name: "Produtos",
    components: { ListaProdutos }
}
</script>

<style scoped>
    h1{
      text-align: center;
      margin: 40px;
    }
</style>