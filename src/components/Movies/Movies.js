import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

export default function Movies({setIsActivePreloader, cards, setCards, setSavedCards, savedCards, isLikedMovies}) {
  const [isChecked, setIsChecked] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [isSearchClick, setIsSearchClick] = useState(false);

  return (
        <main className='movies page__movies auto-width auto-width-movies'>
          <section className='search'>
            <SearchForm inMovies={true} setIsSearchClick={setIsSearchClick} setSearchError={setSearchError} setIsActivePreloader={setIsActivePreloader} setIsChecked={setIsChecked} isChecked={isChecked} setCards={setCards} cards={cards}/>
            <div className='search__error'>
              {searchError}
              {cards.length === 0 && isSearchClick ? 'Ничего не найдено' : ''}
            </div>
          </section>
          <section className='movie-cardList'>
            <MoviesCardList isLikedMovies={isLikedMovies} setSavedCards={setSavedCards} savedCards={savedCards} inMovies={true} cards={cards} setCards={setCards}/>
          </section>
        </main>
  );
}