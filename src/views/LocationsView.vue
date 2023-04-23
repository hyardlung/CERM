<template>
  <h1>Locations</h1>
  <pre v-if="store.locations.loading">Loading...</pre>
  <v-row v-else>
    <v-col cols="3"
           v-for="loc in store.locations.result.locations.results"
           :key="loc.id">
      <v-card elevation="4" max-height="300" min-height="300">
        <v-card-title class="text-h5 light-green-accent-1">
          {{ loc.name }}
        </v-card-title>
        <v-card-text>
          <div class="my-2">
            <p><strong>Dimension</strong></p>
            <p>{{ loc.dimension }}</p>
          </div>
          <div class="my-2">
            <p><strong>Residents</strong></p>
            <div class="overflow-y-scroll">
              <p v-for="char in loc.residents" :key="char.id">{{ char.name }}</p>
            </div>
          </div>
        </v-card-text>
        <v-card-text>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useAppStore } from '@/store/app';

const store = useAppStore()

onBeforeMount(() => {
  store.getAllLocations()

})

</script>

<style lang="sass" scoped>
.overflow-y-scroll
  height: 160px
  overflow-y: scroll
</style>
