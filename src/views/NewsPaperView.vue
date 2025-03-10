<template>
  <LayoutComponent title="Jornal">
    <template #content>
      <ContentComponent title="Últimas Notícias">
        <template #content>
          <div v-for="news in truncatedSubtitles" :key="news.id" class="card">
            <div class="card-content">
              <div class="content">
                <img :src="news.image" alt="newspaper" class="newspaper">
                <div>
                  <div class="newspaper-title">{{ news.title }}</div>
                  <div class="newspaper-subtitle">{{ news.subtitle }}</div>
                  <div>
                    <router-link :to="`/newspaper/${news.id}`" class="button is-white">
                      <span>Ver mais</span>
                      <span class="icon"><font-awesome-icon :icon="['fa', 'arrow-right']"/></span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </ContentComponent>
    </template>
  </LayoutComponent>
</template>

<script lang="ts" setup>
import LayoutComponent from '@/components/LayoutComponent.vue';
import ContentComponent from '@/components/ContentComponent.vue';
import {computed, ref} from 'vue';

interface Newspaper {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

//trazer apenas as 5 ultimas notícias
const newspapers = ref<Newspaper[]>([
  {
    id: '2f4b7c3e-9d6a-4b2b-99e8-5c7f3e2a1d8c',
    image: new URL('@/assets/images/newspaper/1.gif', import.meta.url).href,
    title: 'Lançamento oficial de OPRPG',
    subtitle: `Dia 10/03/2025 foi oficialmente lançado a versão 1.0.0 de One Piece RPG (OPRPG),
      a sua aventura começa agora. A administração do jogo escutará todos os jogadores com críticas e sugestões,
      não fique para trás, vamos lá!!!`
  },
  {
    id: '7c3e9d6a-4b2b-99e8-5c7f3e2a1d8c2f4b',
    image: new URL('@/assets/images/newspaper/2.gif', import.meta.url).href,
    title: 'Evento especial anunciado!',
    subtitle: `A equipe de desenvolvimento revelou um evento especial com recompensas incríveis!
      Participe agora e ganhe itens exclusivos para melhorar sua jornada no OPRPG!`
  }
]);

// const truncatedSubtitles = computed(() =>
//     newspapers.value.map(news => ({
//       ...news,
//       subtitle: news.subtitle.length > 99 ? news.subtitle.substring(0, 99) + '...' : news.subtitle
//     }))
// );
const truncatedSubtitles = computed(() =>
    newspapers.value
        .slice()
        .reverse()
        .map(news => ({
          ...news,
          subtitle: news.subtitle.length > 99 ? news.subtitle.substring(0, 99) + '...' : news.subtitle
        }))
);
</script>

<style scoped>
.card {
  background-color: #2c2c2c;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
}

.card .content {
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.newspaper {
  width: 90px;
  height: 90px;
  border-radius: 10px;
  object-fit: cover;
}

.newspaper-title {
  color: #fff;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.newspaper-subtitle {
  color: #ccc;
  font-size: 0.9rem;
  margin-bottom: 10px;
}
</style>