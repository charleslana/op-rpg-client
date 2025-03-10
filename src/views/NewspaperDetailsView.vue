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
</style>