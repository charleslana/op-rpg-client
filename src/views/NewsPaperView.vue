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
                <div class="mr-2">
                  <font-awesome-icon :icon="card.icon"/>
                </div>
                <div>{{ card.text }}</div>
              </div>
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
}

.card-info:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  color: #000 !important;
}
</style>