<template>
  <button v-if="isVisible" class="go-top-button" @click="scrollToTop">
    <font-awesome-icon :icon="['fa', 'arrow-up']"/>
  </button>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted, ref} from 'vue';

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
.go-top-button {
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(140 13 13);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 10px #000000;
  transition: opacity 0.3s ease-in-out;
}

.go-top-button:hover {
  opacity: 0.8;
}
</style>