import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Produk from "../views/Produk.vue";
import DetailKategori from '../components/DetailKategori.vue';
import DetailProduk from '../components/DetailProduk.vue';
import kategori from '../views/Kategori.vue';
import NotFound from '../components/NotFound.vue';


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: kategori,
  },
  {
    path: "/produk/:id_produk",
    name: "DetailProduk",
    component: DetailProduk,
    props: true,
  },
  {
    path: "/detail/:id_kategori",
    name: "DetailKategori",
    component: DetailKategori,
    props: true,
  },
  
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
