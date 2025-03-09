<template>
  <div class="content-wrapper">
    <div class="title-button mb-5">
      <div>{{ title }}</div>
      <div class="title-circle"></div>
    </div>
    <div class="content-info">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<style scoped>
.content-wrapper {
  width: 100%;
  padding: 20px;
}

.title-button {
  background-color: #FAFAFA;
  color: #151515;
  padding: 6px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-family: 'Space Grotesk', serif !important;
  font-weight: 300;
  gap: 7px;
}

.title-button:hover {
  opacity: 0.8;
}

.title-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(0, 255, 0);
}

.content-info {
  padding: 20px 50px;
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 10px;
  }

  .content-info {
    padding: 10px;
  }
}
</style>