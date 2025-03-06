<template>
  <div class="layout">
    <div class="container">
      <section class="section is-medium">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column has-text-centered">
              <h1 class="title">404 - Página não encontrada</h1>
              <p class="subtitle">Bancando o espertinho? Estamos de olho.</p>
              <router-link class="button" to="/">Voltar para Home</router-link>
            </div>
            <div class="column has-text-centered">
              <figure class="image is-square">
                <img alt="not found sentomaru" src="@/assets/images/404.png"/>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
    <FooterComponent/>
  </div>
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<style scoped>

</style>