<template>
  <v-app-bar flat>
    <RouterLink to="/">
      <img src="@/assets/logo.png"
           alt=""
           style="width: 40px; margin-left: 20px;">
    </RouterLink>
    <v-app-bar-title>
      <span class="d-none d-sm-inline">
        The Complete Encyclopedia of Rick and Morty
      </span>
      <span class="d-sm-none">CERM</span>
    </v-app-bar-title>

    <v-tabs class="d-none d-md-flex">
      <v-tab to="/characters">Characters</v-tab>
      <v-tab to="/locations">Locations</v-tab>
      <v-tab to="episodes">Episodes</v-tab>
    </v-tabs>

    <v-app-bar-nav-icon @click="menuOpen = !menuOpen"
                        icon="mdi-menu"
                        class="d-md-none" />
  </v-app-bar>

  <v-navigation-drawer flat
                       v-model="menuOpen"
                       location="right"
                       class="d-md-none">
    <v-list density="compact"
            nav>
      <v-list-item prepend-icon="mdi-space-invaders"
                   title="Characters"
                   value="characters"
                   to="/characters"></v-list-item>
      <v-list-item prepend-icon="mdi-earth"
                   title="Locations"
                   value="locations"
                   to="/locations"></v-list-item>
      <v-list-item prepend-icon="mdi-movie-open-outline"
                   title="Episodes"
                   value="episodes"
                   to="episodes"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const menuOpen = ref(false);
</script>
