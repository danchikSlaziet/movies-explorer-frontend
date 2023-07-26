import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import cardsInfo from '../../data/pseudoState';
import { useState } from 'react';

export default function MoviesCardList({inSavedMovies}) {
  const [cards, setCards] = useState(cardsInfo);

  return (
    <>
      <div className='movies__cards'>
        {cards.map((elem) => <MoviesCard setCards={setCards} cards={cards} inSavedMovies={inSavedMovies} key={elem.id} cardId={elem.id} text={elem.text} image={elem.path} duration={elem.duration} like={elem.like}/>)}
      </div>
      {inSavedMovies ? <></> : <button className='movies__button' type="button">Ещё</button>}
    </>
  );
}