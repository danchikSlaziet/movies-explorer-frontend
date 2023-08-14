import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

export default function SavedMovies({setCopyLikedCards, copyLikedCards, setAllMovies, allMovies, savedCards, setSavedCards}) {
  const [isSavedChecked, setIsSavedChecked] = useState(false);
  const [isSavedClick, setIsSavedClick] = useState(false);
  const [isDeleteClick, setIsDeleteClick] = useState(false);

  return (
    <main className='saved-movies page__saved-movies auto-width auto-width-movies'>
      <section className='search'>
        <SearchForm isDeleteClick={isDeleteClick} setCopyLikedCards={setCopyLikedCards} setIsSavedClick={setIsSavedClick} copyLikedCards={copyLikedCards} setAllMovies={setAllMovies} allMovies={allMovies} inMovies={false} isSavedChecked={isSavedChecked} setIsSavedChecked={setIsSavedChecked} savedCards={savedCards} setSavedCards={setSavedCards}/>
        <div className='search__error'>
        {savedCards.length === 0 && isSavedClick ? 'Ничего не найдено' : ''}
        </div>
      </section>
      <section className='savedMovie-cardList'>
        <MoviesCardList isDeleteClick={isDeleteClick} setIsDeleteClick={setIsDeleteClick} savedCards={savedCards} setSavedCards={setSavedCards} inMovies={false}/>
      </section>
    </main>
  );
}