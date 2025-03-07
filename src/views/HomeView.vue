<template>
  <div class="layout">
    <div class="container pt-5 px-5">
      <HeaderComponent/>
      <div class="columns is-multiline mt-5">
        <div class="column is-4 is-full-mobile">
          <div class="card is-shadowless">
            <div class="card-content">
              <p class="title is-size-1 is-uppercase">Versão {{ appVersion }}</p>
              <p class="subtitle has-text-weight-bold">Fique por dentro</p>
              <div class="grid">
                <div class="cell">
                  <p>
                    Prepare-se para zarpar rumo a uma nova era! OPRPG está chegando para trazer a experiência definitiva
                    para todos os fãs que sempre sonharam em viver suas próprias aventuras no universo dos piratas.
                  </p>
                </div>
                <div class="cell is-align-self-flex-end">
                  <img alt="Versão barba branca" src="@/assets/images/home/version.png">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4 is-full-mobile">
          <form @submit.prevent="login">
            <div class="field">
              <label class="label" for="user">Digite o usuário</label>
              <div class="control has-icons-left has-icons-right">
                <input id="user" v-model.trim="user" class="input is-shadowless" placeholder="Usuário" required
                       type="text"/>
                <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fa', 'user']"/>
              </span>
              </div>
            </div>
            <div class="field">
              <label class="label" for="password">Digite a senha</label>
              <div class="control has-icons-left has-icons-right">
                <input id="password" v-model.trim="password" :type="passwordFieldType" class="input is-shadowless"
                       placeholder="Senha"
                       required/>
                <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fa', 'lock']"/>
              </span>
                <span id="btn_toggle" class="icon is-small is-right is-clickable" @click="togglePassword">
                <font-awesome-icon v-if="passwordFieldType === 'password'" :icon="['fa', 'eye']"/>
                <font-awesome-icon v-else :icon="['fa', 'eye-slash']"/>
              </span>
              </div>
            </div>
            <div class="field">
              <button class="button is-link is-fullwidth" type="submit">
              <span class="icon">
                <font-awesome-icon :icon="['fa', 'right-to-bracket']"/>
              </span>
                <span>Entrar</span>
              </button>
            </div>
          </form>
          <router-link class="button is-dark is-fullwidth mt-3" to="/register">
          <span class="icon">
            <font-awesome-icon :icon="['fa', 'user-plus']"/>
          </span>
            <span>Cadastrar</span>
          </router-link>
          <router-link class="button is-dark is-fullwidth mt-3" to="/error">
          <span class="icon">
            <font-awesome-icon :icon="['fa', 'unlock']"/>
          </span>
            <span>Esqueci minha senha</span>
          </router-link>
        </div>
        <div class="column is-4 is-full-mobile">
          <p class="cell is-size-4 is-uppercase has-text-weight-bold has-text-grey-light">Dados do servidor</p>
          <p class="cell is-size-6 is-uppercase has-text-weight-bold has-text-grey-light">Versão {{ appVersion }}</p>
          <div class="grid mt-5">
            <div class="cell">
              <div class="card has-text-centered p-4 is-shadowless card-is-fullheight">
                <div class="card-content">
                <span class="icon is-large">
                  <font-awesome-icon :icon="['fa', 'users']" class="is-size-1"/>
                </span>
                  <p class="title is-size-3 mt-3">999</p>
                  <p class="subtitle is-size-6 has-text-weight-bold is-uppercase">Cadastrados</p>
                </div>
              </div>
            </div>
            <div class="cell">
              <div class="card has-text-centered p-4 is-shadowless card-is-fullheight">
                <div class="card-content">
                <span class="icon is-large">
                  <font-awesome-icon :icon="['fa', 'globe']" class="is-size-1"/>
                </span>
                  <p class="title is-size-3 mt-3">999</p>
                  <p class="subtitle is-size-6 has-text-weight-bold is-uppercase">Online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent/>
  </div>
</template>

<script lang="ts" setup>
import packageJson from '../../package.json';
import {ref} from 'vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

const appVersion = packageJson.version;

const user = ref('');
const password = ref('');
const passwordFieldType = ref<'password' | 'text'>('password');

function togglePassword() {
  passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
}

async function login() {
  alert(user.value);
}
</script>

<style scoped>
.card-is-fullheight {
  height: 100% !important;
}
</style>