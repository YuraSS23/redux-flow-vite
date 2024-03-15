import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET-DECKS':
      return { ...state, decks: action.decks }
    case 'DECKS/ADD-DECK':
      return { ...state, decks: [action.deck, ...state.decks] }
    default:
      return state
  }
}

type DecksActions = SetDecksACType | AddDeckACType

export type SetDecksACType = ReturnType<typeof setDecksAC>
export const setDecksAC = (decks: Deck[]) => ({ type: 'DECKS/SET-DECKS', decks }) as const

export type AddDeckACType = ReturnType<typeof addDeckAC>
export const addDeckAC = (deck: Deck) => ({ type: 'DECKS/ADD-DECK', deck }) as const
