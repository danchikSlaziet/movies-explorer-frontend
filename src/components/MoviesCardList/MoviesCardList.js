import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useState } from 'react';

export default function MoviesCardList({inSavedMovies, cards}) {


  return (
    <>
      <div className='movie-cards'>
        <ul className='movie-cards__list'>
        {cards.map((elem) => <li key={elem.id} className='movie-cards__item'><MoviesCard  cardInfo={elem} inSavedMovies={inSavedMovies} cardId={elem.id} text={elem.text} image={elem.path} duration={elem.duration} like={elem.like}/></li>)}
        </ul>
      </div>
      {inSavedMovies ? <></> : <button className='movies__button' type="button">Ещё</button>}
    </>
  );
}