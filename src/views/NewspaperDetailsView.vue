<template>
  <LayoutComponent title="Notícia">
    <template #content>
      <ContentComponent title="Ver Notícia">
        <template #content>
          <div class="is-size-3 has-text-weight-medium is-uppercase newspaper-title mb-4">Lançamento oficial de OPRPG
          </div>
          <div class="newspaper-author mb-5">
            <font-awesome-icon :icon="['fa', 'user']"/>
            Por: [ADM] DevNull
          </div>
          <div class="has-text-centered">
            <img alt="newspaper" class="newspaper-image" src="@/assets/images/newspaper/1.gif">
          </div>
          <div class="card mt-5 mb-5">
            <div class="card-content">
              Dia 10/03/2025 foi oficialmente lançado a versão 1.0.0 de One Piece RPG (OPRPG),
              a sua aventura começa agora. A administração do jogo escutará todos os jogadores com críticas e sugestões,
              não fique para trás, vamos lá!!!
              <br/>
              <br/>
              Atenciosamente, ADM DevNull
            </div>
          </div>
        </template>
      </ContentComponent>
      <div class="card mt-5 w-100">
        <div class="card-content">
          <p class="title">Comentários ({{ comments.length }})</p>
          <div v-for="comment in comments" :key="comment.id" class="card is-shadowless mb-4">
            <div class="card-content">
              <div class="is-flex is-flex-direction-column is-gap-2">
                <div>
                  <div class="is-flex is-gap-2">
                    <img :src="comment.avatar" alt="avatar" class="comment-avatar">
                    <div class="has-text-weight-medium">{{ comment.author }}</div>
                  </div>
                </div>
                <div class="comment">
                  <div>{{ comment.message }}</div>
                  <div class="is-flex is-justify-content-flex-end is-size-7">{{ comment.date }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card is-shadowless mt-5">
            <div class="card-content">
              <form @submit.prevent="post">
                <div class="field">
                  <div class="control">
                    <textarea
                        id="message"
                        v-model.trim="message"
                        class="textarea has-fixed-size is-shadowless"
                        placeholder="Digite um comentário"
                        required>
                    </textarea>
                  </div>
                  <div class="field">
                    <button
                        :class="{'is-loading': isLoading}"
                        class="button is-white is-fullwidth mt-4"
                        type="submit"
                    >
                      <span class="icon">
                        <font-awesome-icon :icon="['fa', 'paper-plane']"/>
                      </span>
                      <span>Postar comentário</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </template>
  </LayoutComponent>
</template>

<script lang="ts" setup>
import LayoutComponent from '@/components/LayoutComponent.vue';
import ContentComponent from '@/components/ContentComponent.vue';
import {ref} from 'vue';

interface Comment {
  id: string;
  author: string;
  avatar: string;
  message: string;
  date: string;
}

const comments = ref<Comment[]>([
  {
    id: '1',
    author: '[ADM] DevNull',
    avatar: new URL('@/assets/images/avatars/default.gif', import.meta.url).href,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas magna nisl, malesuada sit amet lorem quis, finibus pretium dui. In hac habitasse platea dictumst. Praesent vitae cursus orci.',
    date: '10/03/2025 21:47'
  },
  {
    id: '2',
    author: 'Usuário Anônimo',
    avatar: new URL('@/assets/images/avatars/default.gif', import.meta.url).href,
    message: 'Muito bom ver o lançamento! Parabéns para toda a equipe!',
    date: '10/03/2025 22:15'
  }
]);

const message = ref('');
const isLoading = ref(false);

function post() {
  isLoading.value = true;
  setTimeout(() => {
    alert(message.value);
    isLoading.value = false;
  }, 2000);
}
</script>

<style scoped>
.newspaper-title {
  color: #FAFAFA;
  text-align: center;
}

.newspaper-author {
  color: #ffd700;
  font-weight: 600;
  text-align: center;
}

.newspaper-image {
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  height: 125px;
}

.card {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
}

.card-content {
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  color: #ddd;
}

.card .title {
  color: #FAFAFA;
}

.comment-avatar {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}

.comment {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
}
</style>