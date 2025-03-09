<template>
  <nav class="navbar is-fixed-top is-hidden-desktop">
    <button
        :class="{ 'is-active': isMenuOpen }"
        aria-expanded="false"
        aria-label="menu"
        class="navbar-burger"
        @click="toggleMenu"
    >
      <font-awesome-icon
          class="icon-size burger-icon"
          icon="fa-solid fa-bars"
      />
      <font-awesome-icon
          class="icon-size close-icon"
          icon="fa-solid fa-xmark"
      />
    </button>
  </nav>

  <div v-if="isMenuOpen" class="mobile-menu is-hidden-desktop">
    <div class="card is-shadowless">
      <div class="card-content">
        <router-link
            v-for="(menu, index) in props.items"
            :key="index"
            :to="menu.action"
            class="is-fullwidth"
            @click="closeMenu"
        >
          <div :class="['menu-info', { 'mt-4': index > 0 }]">
            <div>
              <img :src="menu.icon" alt="menu" class="menu-image">
            </div>
            <div>
              <div class="menu-title">{{ menu.title }}</div>
              <div class="menu-subtitle">{{ menu.subtitle }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

interface MenuItem {
  action: string;
  icon: string;
  title: string;
  subtitle: string;
}

const props = defineProps<{ items: MenuItem[] }>();

const isMenuOpen = ref(false);
let scrollY = 0;

const toggleMenu = () => {
  if (!isMenuOpen.value) {
    scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
  } else {
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
  }
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, scrollY);
  isMenuOpen.value = false;
};
</script>

<style scoped>
.navbar {
  background-color: transparent;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
}

.navbar-burger {
  background: #222222;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  position: relative;
  backdrop-filter: blur(5px);
}

.navbar-burger:hover {
  background: #222222;
}

.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background: #333;
  padding: 20px;
  z-index: 1000;
  height: calc(100vh - 70px);
  overflow-y: auto;
}

.menu-info {
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 2px solid;
  border-image-source: linear-gradient(to right, rgba(200, 200, 200, 0.01), rgba(220, 220, 220, 0.5), rgba(255, 255, 255, 1), rgba(220, 220, 220, 0.5), rgba(200, 200, 200, 0.01));
  border-image-slice: 1;
  padding-bottom: 15px;
}

.menu-image {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}

.menu-title {
  color: #fff;
}

.menu-subtitle {
  color: #acacac;
}

.icon-size {
  font-size: 30px;
  color: white;
}

.burger-icon, .close-icon {
  position: absolute;
  transition: transform 0.4s ease, opacity 0.4s ease;
  font-size: 30px;
  color: white;
}

.burger-icon {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

.close-icon {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

.is-active .burger-icon {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}

.is-active .close-icon {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
</style>
