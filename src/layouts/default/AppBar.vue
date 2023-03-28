<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <!-- <v-icon icon="mdi-circle-slice-6" /> -->
      <span class="d-none d-sm-inline">
        The Complete Encyclopedia of Rick and Morty
      </span>
      <span class="d-sm-none">CERM</span>
    </v-app-bar-title>

    <v-tabs class="d-none d-md-flex">
      <v-tab>Characters</v-tab>
      <v-tab>Locations</v-tab>
      <v-tab>Episodes</v-tab>
    </v-tabs>

    <v-app-bar-nav-icon @click="menuOpen = !menuOpen"
                        icon="mdi-menu"
                        class="d-md-none" />
  </v-app-bar>

  <v-navigation-drawer flat
                       v-model="menuOpen"
                       location="right">
    <v-list density="compact"
            nav>
      <v-list-item prepend-icon="mdi-space-invaders"
                   title="Characters"
                   value="characters"></v-list-item>
      <v-list-item prepend-icon="mdi-earth"
                   title="Locations"
                   value="locations"></v-list-item>
      <v-list-item prepend-icon="mdi-movie-open-outline"
                   title="Episodes"
                   value="episodes"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);
</script>
