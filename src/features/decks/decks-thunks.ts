import { AddDeckParams, api } from './decks-api.ts'
import { addDeckAC, AddDeckACType, setDecksAC, SetDecksACType } from './decks-reducer.ts'
import { Dispatch } from 'redux'

export const getDecksTC = () => (dispatch: Dispatch<SetDecksACType>) => {
  api.getDecks().then((res) => dispatch(setDecksAC(res.data.items)))
}

export const addDeckTC = (params: AddDeckParams) => async (dispatch: Dispatch<AddDeckACType>) => {
  return api.addDeck(params).then((res) => dispatch(addDeckAC(res.data)))
}
