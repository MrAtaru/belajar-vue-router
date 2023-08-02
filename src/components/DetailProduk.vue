<template>
  <div>
    <div v-if="detailproduk">
      <h1>Detail {{ detailproduk.nama }}</h1>
      <h4>Harga : {{ detailproduk.harga }}</h4>
      <h4>Deskripsi : {{ detailproduk.deskripsi }}</h4>
      <router-link :to="{ name: 'Kategori' }">Kembali</router-link>
    </div>
    <div v-else>
      <h1>404 Not Found</h1>
      <p>Halaman yang Anda cari tidak ditemukan.</p>
    </div>
  </div>
</template>

<script>
import { produk } from "../assets/Produk";

export default {
  props: ["id_produk"],
  setup(props) {
    const detailproduk = produk["produk"].find(function (item) {
      return item.id == props.id_produk;
    });
    return {
      detailproduk,
    };
  },
};
</script>
