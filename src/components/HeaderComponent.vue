<template>
  <div class="grid">
    <div class="cell">
      <div class="cell is-size-1 has-text-weight-bold">
        <router-link class="logo" to="/">OPRPG</router-link>
      </div>
      <div class="cell mt-5">
        Fan GAME brasileiro
        Embarque nessa aventura
        agora mesmo e torne-se o
        melhor jogador do OPRPG
      </div>
      <div class="cell mt-5">
        <a href="https://localhost:8080" target="_blank">
          <font-awesome-icon :icon="['fab', 'discord']" class="is-size-3"/>
        </a>
      </div>
    </div>
    <div class="cell is-hidden-mobile">
      <img alt="Cabeçalho luffy" src="@/assets/images/home/header.png">
    </div>
    <div class="cell is-hidden-mobile"></div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.logo {
  color: #FAFAFA;
}
</style>