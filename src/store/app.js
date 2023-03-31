import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useQuery } from '@vue/apollo-composable'

import { CHARACTERS_QUERY } from '@/api/queries'

export const useAppStore = defineStore('appStore', () => {
  const graphqlUrl = ref('https://rickandmortyapi.com/graphql');
  const characters = ref([])

  const getAllCharacters = () => {
    characters.value = useQuery(CHARACTERS_QUERY)
  }

  return { graphqlUrl, characters, getAllCharacters }
})
