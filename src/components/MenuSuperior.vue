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

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}


.header--logo {
  display: flex;
  align-items: center;
}

.header--logo img {
  width: 50px; 
  height: auto;
  margin-right: 10px;
}

.header--logo h1 {
  font-size: 24px;
  color: #333; 
}

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


.menu-hamburger path {
  stroke: #333; 
  stroke-width: 2; 
}

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

nav ul li{
  color: #007bff;
}

nav ul li:not(:last-child)::after {
  content: '|';
  margin-left: 5px;
  margin-right: 5px;
  color: #999;
}

@media (max-width: 768px) {
  nav {
    gap: 0.5rem;
  }
  nav {
    width: 92%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  nav {
    width: 22rem;
  }
}

</style>