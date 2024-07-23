import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '../layouts/LayoutFull.vue';
import CategoriaView from "../views/CategoriaView.vue";
import AcessorioView from "../views/AcessorioView.vue";
import CorView from "../views/CorView.vue";
import MarcaView from "../views/MarcaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
        {
          path: "/categorias",
          name: "categorias",
          component: CategoriaView,
        },
        {
          path: "/acessorios",
          nome: "acesorrios",
          component: AcessorioView,
        },
        {
          path: "/cores",
          name: "cores",
          component: CorView,
        },
        {
          path: "/marcas",
          name: "marcas",
          component: MarcaView,
        },
      ],
    },
  ],
});

export default router;