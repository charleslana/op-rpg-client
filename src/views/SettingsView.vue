<template>
  <LayoutComponent title="Configurações">
    <template #content>
      <ContentComponent title="Informações Gerais">
        <template #content>
          <p>Content</p>
        </template>
      </ContentComponent>
    </template>
  </LayoutComponent>
</template>

<script lang="ts" setup>
import LayoutComponent from '@/components/LayoutComponent.vue';
import ContentComponent from '@/components/ContentComponent.vue';
</script>

<style scoped>

</style>