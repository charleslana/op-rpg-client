<template>
  <div class="layout">
    <div class="container pt-5 px-5">
      <HeaderComponent/>
      <div class="columns is-multiline mt-5">
        <div class="column is-4 is-full-mobile">
          <div class="card is-shadowless">
            <div class="card-content">
              <p class="title is-size-3 has-text-centered">nickname</p>
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
</script>

<style scoped>

</style>