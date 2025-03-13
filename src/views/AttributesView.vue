<template>
  <LayoutComponent title="Atributos">
    <template #content>
      <ContentComponent title="Informações Gerais">
        <template #content>
          <HelpCardComponent :items="helpItems"/>
        </template>
      </ContentComponent>
    </template>
  </LayoutComponent>
</template>

<script lang="ts" setup>
import LayoutComponent from '@/components/LayoutComponent.vue';
import ContentComponent from '@/components/ContentComponent.vue';
import HelpCardComponent from '@/components/HelpCardComponent.vue';
import {ref} from 'vue';

interface ListItem {
  icon: string[];
  description: string;
}

const helpItems = ref<ListItem[]>([
  {icon: ['fa', 'bullhorn'], description: 'Aqui você pode distribuir seus pontos.'},
  {
    icon: ['fa', 'question'],
    description: 'Escolha os atributos e insira a quantidade que deseja, até o máximo de pontos que você possui, no momento.'
  },
  {
    icon: ['fa', 'question'],
    description: 'Existem 2 tipos de build: A build principal (para a maioria dos modos do jogo) e a build para ranqueadas/torneio.'
  },
  {
    icon: ['fa', 'question'],
    description: 'A build ranqueada pode ser resetada a qualquer momento, sem custos. Já a build principal, precisa ser resetada na xxxxx.'
  },
  {
    icon: ['fa', 'question'],
    description: 'Todos os jogadores terão 10.000 pontos para distribuir na build ranqueada. Subir de nível não irá aumentar a quantidade de pontos para essa build.'
  },
  {
    icon: ['fa', 'heart'],
    description: 'Vida: vai determinar o quanto você dura no combate.'
  },
  {
    icon: ['fa', 'bolt'],
    description: 'Energia: vai determinar sua capacidade de usar técnicas, pois é preciso ter ki para executá-las.'
  },
  {
    icon: ['fa', 'hand-fist'],
    description: 'Força: vai determinar o dano que você irá causar ao alvo.'
  },
  {
    icon: ['fa', 'shield-alt'],
    description: 'Resistência: é a sua defesa contra o dano do inimigo, que vai diminuir esse dano final causado à sua vida.'
  },
  {
    icon: ['fa', 'running'],
    description: 'Velocidade: novidades sobre esse atributo em breve.'
  }
]);
</script>

<style scoped>

</style>