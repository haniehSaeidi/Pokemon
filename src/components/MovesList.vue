<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Pokemon, MoveType } from 'src/types/index';
import Move from './Move.vue';
import axios from 'axios';

const moves = ref<Pokemon[]>([]);
const moveDetails = ref<MoveType[]>([]);

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

onMounted(fetchMoves);

</script>

<template>
  <div class="cardContainer">
    <div class="movesContainer">
      <div v-for="(detail, index) in moveDetails" :key="index">
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
