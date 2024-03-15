import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useGetDecks } from './useGetDecks.ts'

export const DecksList = () => {
  const { decks } = useGetDecks()
  return (
    <ul className={s.list}>
      {decks.map((el) => (
        <DeckItem deck={el} key={el.id} />
      ))}
    </ul>
  )
}
