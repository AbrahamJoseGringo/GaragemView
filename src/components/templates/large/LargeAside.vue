<script setup>
import { onMounted } from 'vue';
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue';
import BrushOutline from 'vue-material-design-icons/BrushOutline.vue';
import Shapeplusoutline from 'vue-material-design-icons/ShapePlusOutline.vue';
import CardsDiamondOutline from 'vue-material-design-icons/CardsDiamondOutline.vue';

import CarBack from 'vue-material-design-icons/CarBack.vue'
import LogoTitle from '@/components/templates/LogoTitle.vue';


</script>
<template>
   <div class="logo_and_menu">
        <logo-title class="mb-2" />
        <div class="divider" />
    <div class="menu">
      <router-link to="/">
        <HomeOutline  size="30"/> Home
      </router-link>
    </div>
          <div class="divider" />
    <div class="menu">
      <router-link to="/categorias">
       <Shapeplusoutline size="30" /> Categoria
      </router-link>
      <router-link to="/acessorios">
        <CardsDiamondOutline size="30"/>Acessorios
      </router-link>
      <router-link to="/cores">
        <BrushOutline size="30"/> Cores
      </router-link>
      <router-link to="/marcas">
        <CarBack size="30"/> Marcas
      </router-link>
      <router-link to="/login">
        <HomeOutline  size="30"/>Login
      </router-link>
    </div>
  </div>
  <logo-title />
</template>
<style scoped>
.mb-2 {
  margin-bottom: 1.5rem;
}

.icon {
  font-size: 2rem;
  align-self: center;
}

.divider {
  margin-top: 1rem;
  border-top: 1px solid #eeeeee;
}

.menu {
  padding: 3rem;
}

.menu a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  gap: 1rem;
  font-size: 1.3rem;
  margin-top: 2.2rem;
}
</style>