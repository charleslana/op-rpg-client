<template>
  <div class="layout">
    <div class="container pt-5 px-5">
      <HeaderComponent/>
      <div class="columns is-mobile mt-5">
        <div class="column is-half-desktop is-full-mobile is-offset-one-quarter-desktop">
          <form @submit.prevent="register">
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
              <label class="label" for="nickname">Digite o nickname</label>
              <div class="control has-icons-left has-icons-right">
                <input id="nickname" v-model.trim="nickname" class="input is-shadowless" placeholder="Nickname" required
                       type="text"/>
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fa', 'id-badge']"/>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label" for="email">Digite o e-mail</label>
              <div class="control has-icons-left has-icons-right">
                <input id="email" v-model.trim="email" class="input is-shadowless" placeholder="E-mail" required
                       type="email"/>
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fa', 'envelope']"/>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label" for="selectedFaction">Selecione a facção</label>
              <div class="control has-icons-left has-icons-right">
                <div class="select is-borderless is-fullwidth">
                  <select id="selectedFaction" v-model="selectedFaction" class="is-shadowless" required>
                    <option disabled value="">Escolha sua facção</option>
                    <option value="pirate">Pirata</option>
                    <option value="marine">Marinha</option>
                    <option value="revolutionary">Revolucionário</option>
                  </select>
                </div>
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fa', 'users']"/>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label" for="selectedSea">Selecione o mar</label>
              <div class="control has-icons-left has-icons-right">
                <div class="select is-borderless is-fullwidth">
                  <select id="selectedSea" v-model="selectedSea" class="is-shadowless" required>
                    <option disabled value="">Escolha o seu mar</option>
                    <option value="north-blue">North Blue</option>
                    <option value="east-blue">East Blue</option>
                    <option value="south-blue">South Blue</option>
                    <option value="west-blue">West Blue</option>
                  </select>
                </div>
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fa', 'water']"/>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label" for="selectedBreed">Selecione a raça</label>
              <div class="control has-icons-left has-icons-right">
                <div class="select is-borderless is-fullwidth">
                  <select id="selectedBreed" v-model="selectedBreed" class="is-shadowless" required>
                    <option disabled value="">Escolha sua raça</option>
                    <option value="human">Humano</option>
                    <option value="dwarf">Anão</option>
                    <option value="giant">Gigante</option>
                    <option value="merman">Tritão</option>
                    <option value="cyborg">Ciborgue</option>
                  </select>
                </div>
                <span class="icon is-small is-left">
                  <i class="ra ra-player"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label" for="selectedClass">Selecione a classe</label>
              <div class="control has-icons-left has-icons-right">
                <div class="select is-borderless is-fullwidth">
                  <select id="selectedClass" v-model="selectedClass" class="is-shadowless" required>
                    <option disabled value="">Escolha sua classe</option>
                    <option value="swordsman">Espadachim</option>
                    <option value="shooter">Atirador</option>
                    <option value="fighter">Lutador</option>
                  </select>
                </div>
                <span class="icon is-small is-left">
                  <i class="ra ra-archery-target"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="checkbox">
                <input v-model="termsAgreed" type="checkbox"/>
                Declaro que li e concordo com as
                <router-link to="/rules">Regras</router-link>
                do OPRPG.
              </label>
            </div>
            <div class="field">
              <button :disabled="!isAcceptTerms" class="button is-link is-fullwidth" type="submit">
              <span class="icon">
                <font-awesome-icon :icon="['fa', 'user-plus']"/>
              </span>
                <span>Criar conta</span>
              </button>
            </div>
          </form>
          <router-link class="button is-dark is-fullwidth mt-3" to="/">
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
import {computed, ref} from 'vue';
import type {FactionType} from '@/types/faction-type.ts';
import type {SeaType} from '@/types/sea-type.ts';
import type {BreedType} from '@/types/breed-type.ts';
import type {ClassType} from '@/types/class-type.ts';

const user = ref('');
const password = ref('');
const passwordFieldType = ref<'password' | 'text'>('password');
const nickname = ref('');
const email = ref('');
const selectedFaction = ref<FactionType | string>('');
const termsAgreed = ref(false);
const selectedSea = ref<SeaType | string>('');
const selectedBreed = ref<BreedType | string>('');
const selectedClass = ref<ClassType | string>('');
const isAcceptTerms = computed(() => termsAgreed.value);

function togglePassword() {
  passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
}

async function register() {
  alert(user.value);
}
</script>

<style scoped>

</style>