import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

export default function SavedMovies({savedCards, setSavedCards}) {
  const [isSavedChecked, setIsSavedChecked] = useState(false);

  return (
    <main className='saved-movies page__saved-movies auto-width auto-width-movies'>
      <section className='search'>
        <SearchForm inMovies={false} isSavedChecked={isSavedChecked} setIsSavedChecked={setIsSavedChecked} savedCards={savedCards} setSavedCards={setSavedCards}/>
      </section>
      <section className='savedMovie-cardList'>
        <MoviesCardList savedCards={savedCards} setSavedCards={setSavedCards} inMovies={false}/>
      </section>
    </main>
  );
}