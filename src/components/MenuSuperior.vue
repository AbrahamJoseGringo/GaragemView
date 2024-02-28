<script setup>
import { ref } from 'vue';

import CartPlus from 'vue-material-design-icons/CartPlus.vue';
import Account from 'vue-material-design-icons/Account.vue';
import Menu from 'vue-material-design-icons/Menu.vue';


const menuAberto = ref(false);
</script>

<template>
    <header>
      <div class="header--logo">
        <img src="@/assets/logoFakeStore.jpeg" alt="Logo" />
        <h1>FakeStore</h1>
      </div>
      <nav>
        <ul :class="menuAberto ? 'menu' : ''">
          <li>Home</li>
          <li>Eletrônicos</li>
          <li>Jóias</li>
          <li>Masculino</li>
          <li>Feminino</li>
        </ul>
      </nav>
      <div class="header--icons">
        <Account />
        <CartPlus />
        <Menu class="menu-hamburger" @click="menuAberto = !menuAberto" />
      </div>
    </header>
  </template>

<style scoped>
/* Estilo para o cabeçalho */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa; /* Cor de fundo do cabeçalho */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

/* Estilo para o logotipo e nome */
.header--logo {
  display: flex;
  align-items: center;
}

.header--logo img {
  width: 50px; /* Tamanho do logotipo */
  height: auto;
  margin-right: 10px; /* Espaçamento entre o logotipo e o nome */
}

.header--logo h1 {
  font-size: 24px;
  color: #333; /* Cor do texto do nome */
}

/* Estilo para a navegação */
nav ul {
  list-style-type: none;
  display: flex;
}

nav ul.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav ul.menu li {
  margin: 10px 0;
  font-size: 18px;
}

/* Estilo para os ícones */
.header--icons {
  display: flex;
  align-items: center;
}

.header--icons svg {
  width: 30px;
  height: 30px;
  fill: #333;
  transition: fill 0.3s ease;
  cursor: pointer;
}

.header--icons svg:hover {
  fill: #007bff;
}

/* Estilo para o ícone do menu hamburger */
.menu-hamburger path {
  stroke: #333; /* Cor da linha do ícone */
  stroke-width: 2; 
}

/* Estilo para os itens de navegação */
nav{
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin-right: 20px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;
}

nav ul li:hover {
  color: #007bff;
}

/* Estilo para o link ativo */
nav ul li{
  color: #007bff;
}

/* Estilo para o separador entre os itens de navegação */
nav ul li:not(:last-child)::after {
  content: '|';
  margin-left: 5px;
  margin-right: 5px;
  color: #999;
}

</style>