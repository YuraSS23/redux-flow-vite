import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export type ResponseType = {
  items: Deck[]
  pagination: Pagination
}
export type Author = {
  id: string
  name: string
}
export type Deck = {
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type AddDeckParams = {
  cover?: string
  name: string
  isPrivate?: boolean
}

export const api = {
  getDecks() {
    return instance.get<ResponseType>('/v2/decks')
  },
  addDeck(params: AddDeckParams) {
    return instance.post<Deck>('/v1/decks', params)
  },
}
