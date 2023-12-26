<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emitType = defineEmits<{
  (event: 'updateFilter', payload: string): void;
}>();
const filterType = ref<string>('all');

const updateFilter = (filter: string) => {
  emitType('updateFilter', filter);
}

</script>

<template>
  <div class="container">
    <div>
      <input type="radio" id="all" value="all" v-model="filterType" @change="updateFilter('all')" />
      <label for="radio">All</label>
    </div>
    <div>
      <input type="radio" id="physical" value="physical" v-model="filterType" @change="updateFilter('physical')" />
      <label for="radio">Physical</label>
    </div>
    <div>
      <input type="radio" id="special" value="special" v-model="filterType" @change="updateFilter('special')" />
      <label for="radio">Special</label>
    </div>
    <div>
      <input type="radio" id="status" value="status" v-model="filterType" @change="updateFilter('status')" />
      <label for="radio">Status</label>
    </div>
  </div>
  
</template>

<style scoped>

.container {
  height: auto;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 3px solid #333;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
}

label {
  font-size: 20px;
  font-weight: 600;
}

</style>