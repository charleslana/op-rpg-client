<template>
  <div class="layout">
    <div class="container pt-5 px-5">
      <HeaderComponent/>
      <div class="columns is-multiline mt-5">
        <div class="column is-4 is-full-mobile">
          <div class="card is-shadowless">
            <div class="card-content avatar-frame">
              <div :style="{ backgroundImage: `url(${frame})` }" class="frame mx-auto">
                <img alt="avatar" class="avatar" src="@/assets/avatars/test.gif">
              </div>
              <p class="title is-size-3 has-text-centered my-4">nickname</p>
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
              <span class="icon">
                <font-awesome-icon :icon="['fa', 'right-from-bracket']"/>
              </span>
                <span>Sair</span>
              </button>
            </div>
          </div>
        </div>
        <div class="column is-8 is-full-mobile">
          <div class="card is-shadowless">
            <div class="card-content">
              <p class="title is-size-3">Jornal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent/>
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import {getFrame} from '@/utils/frame-utils.ts';
import {computed, onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';

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
    action: '/news-paper',
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

const router = useRouter();

onMounted(async () => {
  const image = await getFrame(4);
  frame.value = image.default;
  cards.value[1].text = 'Você possui 100 pontos para distribuir!';
  cards.value[2].text = 'Você possui 1 nova(s) notícia(s) não lida(s)!';
  cards.value[2].isHidden = false;
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
</script>

<style scoped>
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
</style>