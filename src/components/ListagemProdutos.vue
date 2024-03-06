<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useScreen } from '@/composables/screen';


const produtos = ref([]);
const { browserWidth, deviceWidth, isMobile } = useScreen();


onMounted(async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  produtos.value = response.data;
});

const formatPrice = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;
</script>

<template>
  <div>
    <h1>Produtos</h1>
    <div class="container">
      <div class="card" v-for="produto in produtos" :key="produto.id">
        <h1 class="card--title">{{ produto.title }}</h1>
        <img class="card--avatar" :src="produto.image" :alt="produto.title" />
        <p class="card--descricao">{{ produto.description }}</p>
        <p class="formatado-preco">{{ formatPrice(produto.price) }}</p>
        
      </div>
    </div>
  </div>
  <div>
    <h1>
       Produtos - {{ browserWidth }} - {{ deviceWidth }} - {{
      isMobile}} 
      <span v-if="isMobile">É móvel</span>
    </h1>
    ...
  </div>
  <footer v-if="!isMobile" class="rodape">
      <div class="info">
        <h2>Informações sobre a loja</h2>
        <p>Endereço: Rua Principal, 123</p>
        <p>Telefone: (00) 1234-5678</p>
        <p>Email: contato@lojadesigner.com</p>
      </div>
    </footer>
    <div v-if="isMobile" class="bar-button">
      <button class="button">
        <img src="/public/home.jpeg" alt="Home">
        <span>Home</span>
      </button>
      <button class="button">
        <img src="/public/logo.png" alt="Carrinho">
        <span>Carrinho</span>
      </button>
      <button class="button">
        <img src="/public/usuario.jpeg" alt="Usuário">
        <span>Usuário</span>
      </button>
      <button class="button">
        <img src="/public/sobre.jpeg" alt="Sobre">
        <span>Sobre</span>
      </button>
    </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 1rem 0;
}
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 15rem;
  height: 25rem;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  margin: auto;
  overflow: hidden;
  position: relative;
}
.card--avatar {
  height: 12rem;
  object-fit: cover;
  margin-bottom: 1.5rem;
}
.card--title {
  color: #222;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 1.1rem;
  margin-left: 0.5rem;
  margin-top: 2.5rem;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.card--descricao {
    font-size: 12px;
    color: #333; 
    margin-bottom: 20px; 
    
}

p {
    font-size: 14px; 
    color: #666;
}

p.formatado-preco {
    font-weight: bold; 
    color: #ff6600; 
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: white;
    padding: 5px;
    border: 1px solid black;
}

.rodape {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  
  .info {
    max-width: 800px;
    margin: auto;
  }
  
  .info h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .info p {
    font-size: 16px;
  }
  .bar-button {
    display: flex;
    justify-content: space-around;
    background-color: #f0f0f0;
    padding: 10px;
  }
  
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
  .button img {
    width: 40px;
    height: 40px;
  }
  
  .button span {
    font-size: 12px;
    margin-top: 5px;
  }

ul.mobile {
  list-style-type: none;
  padding: 0;
}

ul.mobile li {
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
}


@media (max-width: 768px) {
  .container {
    gap: 0.5rem;
  }
  .card {
    width: 92%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .card {
    width: 22rem;
  }
}

</style>

