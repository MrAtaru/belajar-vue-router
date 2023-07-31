<template>
  <div>
    <h1>Detail {{ detail.nama }}</h1>
    <h4>Harga : {{ detail.harga }}</h4>
    <router-link :to="{ name: 'Produk' }">Kembali</router-link>
  </div>
</template>
<script>
import { produk } from "/src/assets/Produk";

export default {
  props: ["id_produk"],
  setup(props) {
    const detail = produk["produk"].find(function (item) {
      return item.id == props.id_produk;
    });
    return {
      detail,
    };
  },
};
</script>

