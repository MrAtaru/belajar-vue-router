<template>
  <h1>Produk</h1>
  <div class="">
    <div v-for="produk in state" :keys="produk.id" class="card">
      <router-link class="container" :to="{ name: 'DetailProduk', params: { id_produk: produk.id } }">
        <h4>{{ produk.nama }}</h4>
      </router-link>
    </div>
  </div>
      <router-link :to="{ name: 'Kategori' }">Kembali</router-link>

</template>

<script>
import { onMounted, reactive } from "vue";
import { produk } from "../assets/Produk";

export default {
  setup(props, context) {
    const state = reactive(produk["produk"]);

    onMounted(() => {
      context.emit("id-menu", 4);
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
h4 {
  text-align: center;
  font-size: larger;
}
.flex-container {
  display: flex;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 10px;
  min-width: 200px;
  cursor: pointer;
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.container {
  padding: 2px 16px;
}
</style>
