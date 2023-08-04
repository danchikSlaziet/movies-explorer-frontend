import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

export default function Movies({setIsActivePreloader}) {
  const [cards, setCards] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [searchError, setSearchError] = useState('');

  useEffect(() => {
    if (cards.length === 0) {
      setSearchError('Ничего не найдено')
    }
    else {
      setSearchError()
    }
  }, [setCards, cards.length])

  return (
        <main className='movies page__movies auto-width auto-width-movies'>
          <section className='search'>
            <SearchForm setSearchError={setSearchError} setIsActivePreloader={setIsActivePreloader} setIsChecked={setIsChecked} isChecked={isChecked} setCards={setCards} />
            <div className='search__error'>
              {searchError}
            </div>
          </section>
          <section className='movie-cardList'>
            <MoviesCardList checkboxBool={isChecked} cards={cards} inSavedMovies={false}/>
          </section>
        </main>
  );
}