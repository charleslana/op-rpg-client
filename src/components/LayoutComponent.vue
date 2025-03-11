<template>
  <div class="layout">
    <div class="container pt-5 px-5">
      <HeaderComponent/>
      <NavBarComponent :items="menuItems"/>
      <div class="columns is-multiline">
        <div class="column is-4 is-full-mobile">
          <div class="card is-shadowless">
            <div class="card-content avatar-frame">
              <div :style="{ backgroundImage: `url(${frame})` }" class="frame mx-auto">
                <img alt="avatar" class="avatar" src="@/assets/images/avatars/default.gif">
              </div>
              <p class="title is-size-3 has-text-centered mx-auto my-4">nickname</p>
              <div v-for="(card, index) in visibleCards" :key="index" class="card-info" @click="goPage(card.action)">
                <div>
                  <font-awesome-icon :icon="card.icon"/>
                </div>
                <div>{{ card.text }}</div>
              </div>
              <div v-for="(item, index) in infoItems" :key="index" class="text-info">
                <div>
                  <font-awesome-icon :icon="item.icon"/>
                </div>
                <div>{{ item.text }}</div>
                <div>{{ item.value }}</div>
              </div>
              <button class="button is-white is-fullwidth" @click="logout">
                <span class="icon"><font-awesome-icon :icon="['fa', 'right-from-bracket']"/></span>
                <span>Sair</span>
              </button>
            </div>
          </div>
          <div class="card is-shadowless expanded-card is-hidden-mobile">
            <div class="card-content">
              <router-link v-for="(menu, index) in menuItems" :key="index" :to="menu.action" class="is-fullwidth">
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
        <div id="content" class="column is-8 is-full-mobile">
          <div class="card is-shadowless expanded-card">
            <div class="card-content">
              <div class="content-title mb-5">
                <div class="title-circle"></div>
                <p class="title is-size-3">{{ props.title }}</p>
              </div>
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GoToTopComponent/>
    <FooterComponent/>
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import {getFrame} from '@/utils/frame-utils.ts';
import {computed, onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import newspaperIcon from '@/assets/images/menus/newspaper.png';
import attributesIcon from '@/assets/images/menus/attributes.png';
import settingsIcon from '@/assets/images/menus/settings.jpg';
import NavBarComponent from '@/components/NavBarComponent.vue';
import GoToTopComponent from '@/components/GoToTopComponent.vue';

interface Card {
  icon: string[];
  text: string;
  action: string;
  isHidden: boolean;
}

interface InfoItem {
  icon: string[];
  text: string;
  value: string | number;
}

interface MenuItem {
  action: string;
  icon: string;
  title: string;
  subtitle: string;
}

const props = defineProps<{
  title: string;
  scrollToContent?: boolean
}>();

const frame = ref('');
const cards = ref<Card[]>([
  {
    icon: ['fa', 'gift'],
    text: 'Você possui um prêmio diário para receber!',
    action: '/gift',
    isHidden: false,
  },
  {
    icon: ['fa', 'circle-plus'],
    text: 'Você possui -- pontos para distribuir!',
    action: '/attribute',
    isHidden: false,
  },
  {
    icon: ['fa', 'newspaper'],
    text: 'Você possui -- nova(s) notícia(s) não lida(s)!',
    action: '/newspaper',
    isHidden: false,
  }
]);
const infoItems = ref<InfoItem[]>([
  {
    icon: ['fa', 'arrow-up'],
    text: 'Nível:',
    value: '1',
  },
  {
    icon: ['fa', 'star'],
    text: 'Exp:',
    value: '0 / 100',
  },
  {
    icon: ['fa', 'battery-full'],
    text: 'Stamina:',
    value: '1000 / 1000',
  },
  {
    icon: ['fa', 'coins'],
    text: 'Berries:',
    value: '1000',
  },
  {
    icon: ['fa', 'dollar-sign'],
    text: 'Créditos:',
    value: '0',
  },
  {
    icon: ['fa', 'crown'],
    text: 'Vip até:',
    value: 'Não é VIP',
  },
]);

const menuItems = ref<MenuItem[]>([
  {
    action: '/newspaper',
    icon: newspaperIcon,
    title: 'Jornal',
    subtitle: 'Veja as últimas notícias',
  },
  {
    action: '/attributes',
    icon: attributesIcon,
    title: 'Atributos',
    subtitle: 'Distribua seus pontos aqui',
  },
  {
    action: '/settings',
    icon: settingsIcon,
    title: 'Configurações',
    subtitle: 'Configure sua conta aqui',
  },
]);

const router = useRouter();

onMounted(async () => {
  const image = await getFrame(4);
  frame.value = image.default;
  cards.value[1].text = 'Você possui 100 pontos para distribuir!';
  cards.value[2].text = 'Você possui 1 nova(s) notícia(s) não lida(s)!';
  cards.value[2].isHidden = false;
  scrollToContent();
});

const visibleCards = computed(() => {
  return cards.value.filter(card => !card.isHidden);
});

function goPage(page: string) {
  router.push(page);
}

function logout() {
  goPage('/');
}

function isMobile(): boolean {
  return window.innerWidth <= 768;
}

function scrollToContent() {
  const contentElement = document.getElementById('content');
  if (contentElement && props.scrollToContent && isMobile()) {
    contentElement.scrollIntoView({behavior: 'smooth'});
  }
}

const duplicateMenuItems = (times: number) => {
  const newMenuItems = [];
  for (let i = 0; i < times; i++) {
    newMenuItems.push(...menuItems.value);
  }
  menuItems.value = newMenuItems;
};

duplicateMenuItems(30);
</script>

<style scoped>
.columns {
  display: flex;
  align-items: stretch;
}

.column {
  display: flex;
  flex-direction: column;
}

.card.expanded-card {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.avatar-frame {
  position: relative;
  z-index: 1;
}

.frame {
  width: 150px;
  height: 150px;
  background-size: cover;
  cursor: pointer;
  position: relative;
}

.avatar {
  width: 120px;
  height: 120px;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: -1;
  border-radius: 10px;
}

.card-info {
  width: 100%;
  background-color: #ddd;
  color: #000 !important;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-weight: 500;
  font-size: 1em;
  margin-bottom: 20px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  gap: 10px;
}

.card-info:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  color: #000 !important;
}

.text-info {
  width: 100%;
  border-radius: 9px;
  font-size: 13px;
  padding: 5px 10px;
  background: #222222;
  color: #fff;
  margin-top: -11px;
  display: flex;
  margin-bottom: 15px;
  align-items: baseline;
  gap: 5px;
}

.is-white {
  border-radius: 11px;
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
  width: 65px;
  height: 65px;
  border-radius: 5px;
}

.menu-title {
  color: #fff;
}

.menu-subtitle {
  color: #acacac;
}

.is-fullwidth {
  width: 100%;
}

.content-title {
  display: flex;
  gap: 10px;
  align-items: center;
}

.title-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(0, 255, 0);
}
</style>