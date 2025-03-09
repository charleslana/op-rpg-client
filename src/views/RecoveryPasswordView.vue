<template>
  <div class="layout">
    <div class="container pt-5 px-5">
      <HeaderComponent/>
      <div class="columns is-mobile mt-5">
        <div class="column is-half-desktop is-full-mobile is-offset-one-quarter-desktop">
          <form @submit.prevent="recoveryPassword">
            <div class="field">
              <label class="label" for="email">Digite o e-mail</label>
              <div class="control has-icons-left has-icons-right">
                <input id="email" v-model.trim="email" autocomplete="email" class="input is-shadowless" placeholder="E-mail"
                       required type="email"/>
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fa', 'envelope']"/>
                </span>
              </div>
            </div>
            <div class="field">
              <button :class="{'is-loading': isLoading}" class="button is-link is-fullwidth" type="submit">
              <span class="icon">
                <font-awesome-icon :icon="['fa', 'paper-plane']"/>
              </span>
                <span>Enviar solicitação</span>
              </button>
            </div>
          </form>
          <router-link :class="{'is-loading': isLoading}" class="button is-dark is-fullwidth mt-3" to="/">
            <span class="icon">
              <font-awesome-icon :icon="['fa', 'arrow-left']"/>
            </span>
            <span>Voltar ao login</span>
          </router-link>
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

const email = ref('');
const isLoading = ref(false);

async function recoveryPassword() {
  isLoading.value = true;
  setTimeout(() => {
    alert(email.value);
    isLoading.value = false;
  }, 2000);
}
</script>

<style scoped>

</style>