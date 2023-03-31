<template>
  <h1>Characters</h1>
  <pre v-if="store.characters.loading">Loading...</pre>
  <v-row v-else>
    <v-col cols="3"
           v-for="char in store.characters.result.characters.results"
           :key="char.id">
      <v-card elevation="4">
        <v-img :src="char.image"
               class="align-end">
          <v-card-title class="text-h5 light-green-accent-1">
            {{ char.name }}
          </v-card-title>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useAppStore } from '@/store/app';

const store = useAppStore()

onBeforeMount(() => {
  store.getAllCharacters()
})
</script>
