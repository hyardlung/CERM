<template>
  <h1>Home</h1>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/store/app';

const store = useAppStore()

onMounted(() => {
  store.getAllCharacters()
})
</script>
