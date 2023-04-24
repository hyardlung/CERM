<template>
  <h1>Characters</h1>
  <pre v-if="store.characters.loading">Loading...</pre>
  <v-row v-else>
    <v-col cols="3"
           v-for="char in store.characters.result.characters.results"
           :key="char.id">
      <v-hover v-slot="{ isHovering, props }">
        <v-card v-bind="props"
                :elevation="isHovering ? 10 : 2">
          <v-img :src="char.image"
                 class="align-start card__img">
            <v-card-title class="text-h5 pa-3">
              <template v-if="!isHovering">{{ char.name }}</template>
            </v-card-title>
          </v-img>

          <v-overlay :model-value="isHovering"
                     scrim="#333"
                     contained
                     class="card__overlay pa-3">
            <v-card-title class="text-h5 pa-0">
              {{ char.name }}
            </v-card-title>
            <div class="d-flex align-center">
              <span class="text-subtitle-1 mr-3">Status: </span>
              <v-img :src="checkCharStatus(char.status)"
                     class="card__status"
                     width="20" />
            </div>
            <div class="d-flex align-center">
              <span class="text-subtitle-1 mr-3">Gender: </span>
              <span>{{ char.gender }}</span>
            </div>
            <div class="d-flex align-baseline">
              <span class="text-subtitle-1 mr-3">Origin: </span>
              <span>{{ char.origin.name }}</span>
            </div>
            <div class="d-flex align-baseline">
              <span class="text-subtitle-1 mr-3">Episode: </span>
              <div class="d-flex flex-wrap overflow-y-scroll">
                <p v-for="(ep, i) in char.episode"
                   :key="i"
                   class="mr-4">{{ ep.episode }}<span
                        v-if="i + 1 !== char.episode.length">,</span> </p>
              </div>
            </div>
          </v-overlay>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useAppStore } from '@/store/app';
import alive from '@/assets/status_alive.svg';
import dead from '@/assets/status_dead.svg';
import unknown from '@/assets/status_unknown.svg';

const store = useAppStore()

onBeforeMount(() => {
  store.getAllCharacters()
})

function checkCharStatus(status) {
  switch (status) {
    case 'Alive': return alive;
    case 'Dead': return dead;
    case 'unknown': return unknown;
  }
}
</script>

<style lang="sass" scoped>
  .card
    &__overlay
      height: 100%
      color: #fff

    &__status
      max-width: 22px

  .overflow-y-scroll
    height: 120px
    overflow-y: scroll
</style>
