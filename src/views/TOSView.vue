<template>
  <div class="layout">
    <div class="container pt-5 px-5">
      <HeaderComponent/>
      <div class="list mt-5">
        <div v-for="(item, index) in tos" :key="index" class="list-item">
          <div class="list-item-content">
            <div class="list-item-title">{{ item.title }}</div>
            <div v-for="(desc, subIndex) in item.subtitle" :key="subIndex" class="list-item-description">
              {{ desc }}
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
import {ref} from 'vue';

const tos = ref([
  {
    title: '1. Notas Preliminares',
    subtitle: [
      'O uso do OPRPG requer a aceitação dos Termos de Serviço.',
      'As disposições garantem um ambiente seguro e justo para todos os usuários.',
    ],
  },
  {
    title: '2. Serviços e Conteúdos',
    subtitle: [
      'OPRPG é um jogo de RPG online.',
      'O usuário tem direito de acessar o jogo mediante cadastro.',
    ],
  },
  {
    title: '3. Obrigações dos Usuários',
    subtitle: [
      'O usuário deve utilizar a plataforma de forma legal.',
      'Informações fornecidas no cadastro devem ser corretas e atualizadas.',
    ],
  },
  {
    title: '4. Responsabilidade',
    subtitle: [
      'OPRPG não garante disponibilidade de 100% dos serviços.',
      'Não nos responsabilizamos por danos decorrentes da indisponibilidade dos serviços.',
    ],
  },
  {
    title: '5. Proteção de Dados',
    subtitle: [
      'O usuário aceita que suas informações sejam processadas conforme os Termos de Serviço.',
      'Os dados são tratados de forma confidencial e com a autorização do usuário.',
    ],
  },
  {
    title: '6. Regulamento para a Atividade do Jogo',
    subtitle: [
      'Todos os conteúdos e serviços seguem as regras do jogo.',
      'O usuário deve cumprir as regras estabelecidas.',
    ],
  },
  {
    title: '7. Cláusula Final',
    subtitle: [
      'Os conteúdos são protegidos por direitos autorais.',
      'O usuário deve revisar regularmente os Termos de Serviço para se manter atualizado.',
    ],
  },
]);
</script>

<style scoped>

</style>