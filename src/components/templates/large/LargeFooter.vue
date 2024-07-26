<script setup>
import Facebook from 'vue-material-design-icons/Facebook.vue';
import Twitter from 'vue-material-design-icons/Twitter.vue';
import Instagram from 'vue-material-design-icons/Instagram.vue';
</script>
<template>
    <div class="links">
        <RouterLink to="/">Help</RouterLink>
        <RouterLink to="/">Contact Us</RouterLink>
        <RouterLink to="/">Privacy & Terms</RouterLink>
    </div>
    <div class="icons">
        <Facebook size="30" />
        <Twitter size="30" />
        <Instagram size="30" />
    </div>
</template>
<style scoped>
.links {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 4rem;
  font-size: 1.2rem;
  color: #000;
}

.links a {
  text-decoration: none;
}

.icons {
  padding-right: 3rem;
  display: flex;
  gap: 4rem;
  font-size: 2.2rem;
}
</style>