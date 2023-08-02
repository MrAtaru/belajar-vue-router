<template>
  <div>
    <h1>Nama Kategori : {{ detailkategori }}</h1>
    <div class="flex-container">
      <div v-for="produk in filterProduk" :keys="produk.id" class="card">
        <img :src="getImgSrc(produk.img)" alt="#">
        <router-link class="container" :to="{ name: 'DetailProduk', params: { id_produk: produk.id } }">
          <h4>{{ produk.nama }}</h4>
        </router-link>
      </div>
    </div>
    <router-link :to="{ name: 'Kategori' }">Kembali</router-link>
  </div>
</template>
<script>
import { kategori } from "../assets/Kategori";
import { produk } from "../assets/Produk";
import { computed } from "vue";

export default {
  props: ["id_kategori"],
  setup(props) {
    const detailkategori = computed(() => {
      const cariKategori = kategori.kategori.find((item) => item.id == props.id_kategori);
      return cariKategori ? cariKategori.nama : "";
    });

    const filterProduk = computed(() => {
      return produk["produk"].filter((item) => item.kategori_id == props.id_kategori);
    });

    const getImgSrc = (imgFileName) => {
      return '../src/assets/img/' + imgFileName + '';
    };

    return {
      detailkategori,
      filterProduk,
      getImgSrc
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
