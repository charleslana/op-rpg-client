<template>
  <div class="layout">
    <div class="container pt-5 px-5">
      <HeaderComponent/>
      <div class="list mt-5">
        <div v-for="(item, index) in rules" :key="index" class="list-item">
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

const rules = ref([
  {
    title: '1. Direitos das Contas de Jogo',
    subtitle: [
      'Os jogadores não têm direito legal a uma conta de jogo.',
      'Os jogadores devem aceitar as instruções dadas pelo administrador do jogo.',
    ],
  },
  {
    title: '2. Bugs e Exploits',
    subtitle: [
      'Todos os bugs (defeitos decorrentes do cronograma do jogo) devem ser comunicados imediatamente à equipe do OPRPG.',
      'O uso de um bug conhecido sujeitará o jogador envolvido ao banimento, incluindo todas as contas envolvidas no uso do bug.',
    ],
  },
  {
    title: '3. Múltiplas Contas',
    subtitle: [
      'Múltiplas contas são permitidas APENAS sob as seguintes regras:',
      'a) Várias contas devem ter e-mails existentes; caso contrário, podem ser excluídas por nossa rotina de limpeza.',
      'b) Múltiplas contas que atrapalharem a batalha de times serão penalizadas.',
      'c) Contas criadas para ofender outros jogadores serão banidas, incluindo contas principais relacionadas.',
    ],
  },
  {
    title: '4. Uso de Scripts e Bots',
    subtitle: [
      'A utilização de scripts, bots e programas similares para automatizar ações no jogo acarretará no banimento do jogador.',
      'Scripts/Bots incluem programas que executam ações automáticas ou com controle manual no jogo.',
    ],
  },
  {
    title: '5. Insultos e Comportamento Agressivo',
    subtitle: [
      'Contas de jogadores que insultem outros jogadores ou membros da equipe OPRPG podem ser banidas ou bloqueadas sem aviso prévio.',
    ],
  },
  {
    title: '6. Leilão de Contas',
    subtitle: [
      'Os jogadores não estão autorizados a leiloar partes do jogo, como contas.',
      'Contas envolvidas em tais atividades serão banidas.',
    ],
  },
  {
    title: '7. Acesso Não Autorizado',
    subtitle: [
      'Contas que fizerem login em contas de outros jogadores sem autorização ou tiverem contas roubadas serão banidas.',
    ],
  },
  {
    title: '8. Apelidos e Conteúdos Ofensivos',
    subtitle: [
      'Contas com apelidos ofensivos, pornográficos, ilegais ou politicamente extremistas serão banidas.',
      'Mensagens ofensivas, pornográficas, ilegais ou politicamente extremistas também resultarão em banimento.',
    ],
  },
  {
    title: '9. Spamming e Assédio',
    subtitle: [
      'Spamming ou provocar deliberadamente outros jogadores é proibido.',
      'Jogadores que ofenderem repetidamente serão bloqueados ou banidos.',
    ],
  },
  {
    title: '10. Distribuição de Ferramentas Ilegais',
    subtitle: [
      'A distribuição de ferramentas/bots/certificados destinados ao manuseio do OPRPG é proibida.',
      'O envolvimento em tais práticas resultará na exclusão dos clientes do jogo.',
    ],
  },
]);
</script>

<style scoped>

</style>