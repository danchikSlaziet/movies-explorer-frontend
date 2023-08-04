import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

export default function Movies() {
  const [cards, setCards] = useState([]);
  console.log(cards);
  return (
        <main className='movies page__movies auto-width auto-width-movies'>
          <section className='search'>
            <SearchForm setCards={setCards}/>
          </section>
          <section className='movie-cardList'>
            <MoviesCardList cards={cards} inSavedMovies={false}/>
          </section>
        </main>
  );
}