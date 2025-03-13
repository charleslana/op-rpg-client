<template>
  <div class="card is-shadowless">
    <div class="card-content">
      <p class="title is-4 has-text-weight-medium">Seja bem-vindo aos Atributos:</p>
      <div class="list has-hoverable-list-items">
        <div v-for="(item, index) in props.items" :key="index" class="list-item">
          <div class="list-item-image">
            <font-awesome-icon :icon="item.icon"/>
          </div>
          <div class="list-item-content">
            <div class="list-item-description">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

interface ListItem {
  icon: string[];
  description: string;
}

const props = defineProps<{ items: ListItem[] }>();
</script>

<style scoped>
.card {
  background-color: #f8f9fa !important;
  border-radius: 8px !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
}

.card-content p {
  color: #333;
}

.list-item {
  border-block-end: none !important;
}

.list-item:hover {
  background-color: #ddd !important;
  border-radius: 5px !important;
}

.list-item-image {
  color: #000 !important;
  font-size: 1.3em !important;
}

.list-item-description {
  color: #555 !important;
}
</style>
