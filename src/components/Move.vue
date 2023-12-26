<script setup lang="ts">
  import { MoveType } from 'src/types/index';

  defineProps<{
    pokemon: MoveType;
  }>()

</script>

<template>
  <div class="container">
    <div class="card">
      <div class="name">{{ pokemon.type.toUpperCase() }}</div>
      <div class="line" />
      <div class="damageClass">
        <img 
          width="140"
          height="140"
          :src="`src/assets/images/${pokemon.damageClass}.png`" 
          :alt="pokemon.damageClass"
        />
      </div>
      <div class="line" />
      <div>
        <img 
          :src="`src/assets/images/${pokemon.type}.png`"
          :alt="pokemon.type"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

.card {
  display: flex;
  flex-direction: column;
  border: 3px solid #333;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
}

.name {
  font-size: 20px;
  font-weight: 600;
}

.moveItem {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 100%;
  gap: 10px; 
  padding: 10px 0 10px 0;
}

.line {
  width: 100%;
  height: 3px;
  background-color: #333;
  margin-bottom: 15px;
}

.damageClass {
  padding: 20px;
}
</style>