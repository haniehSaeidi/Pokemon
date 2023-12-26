<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { Pokemon, MoveType } from 'src/types/index';
import Move from './Move.vue';
import axios from 'axios';
import Filter from './Filter.vue';

const moves = ref<Pokemon[]>([]);
const moveDetails = ref<MoveType[]>([]);
const currentFilter = ref<string>('all');

const fetchMoveDetails = async (moveUrl: string) => {
  try {
    const response = await axios.get(moveUrl);
    return {
      type: response.data.type.name,
      damageClass: response.data.damage_class.name,
    };
  } catch (error) {
    console.error(error);
    return { type: '', damageClass: '' };
  }
}

const fetchMoves = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/move?limit=919');
    moves.value = response.data.results;
    
    moveDetails.value = await Promise.all(moves.value.map(item => fetchMoveDetails(item.url)));

  } catch(error) {
    console.error(error);
  }
};

const filteredMoveDetails = computed(() => {
  if (currentFilter.value === 'all') {
    return moveDetails.value;
  }
  return moveDetails.value.filter(detail => detail.damageClass === currentFilter.value);
});

const updateFilter = (newVal: string) => {
  currentFilter.value = newVal;
};

onMounted(fetchMoves);

</script>

<template>
  <div class="card-container">
    <Filter @updateFilter="updateFilter" />
    <div class="movesContainer">
      <div v-for="(detail, index) in filteredMoveDetails" :key="index">
        <Move :pokemon="detail" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cardContainer { 
  margin: 30px;
}
.movesContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  width: 100%;
  gap: 10px; 
  height: calc(100vh - 120px);
  overflow: scroll;
}

</style>
