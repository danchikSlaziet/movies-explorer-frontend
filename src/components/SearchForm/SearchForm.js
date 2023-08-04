import { useState } from 'react';
import './SearchForm.css';
import searchPath from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import moviesApi from '../../utils/MoviesApi';

export default function SearchForm({setCards}) {
  const [film, setFilm] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    moviesApi.getAllMovies()
      .then((data) => {
        setCards(data.filter((card) => card.nameRU.toLowerCase().includes(film.toLowerCase()) || card.nameEN.toLowerCase().includes(film.toLowerCase())));
      })
      .catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <div className='search-form__input-wrapper'>
        <input required placeholder='Фильм' className='search-form__input' type="text" name="search" value={film} onChange={(e) => setFilm(e.target.value)} />
        <button className='search-form__button' type="submit">
          <img className='search-form__img' src={searchPath} alt="лупа иконка поиска" />
        </button>
      </div>
      <FilterCheckbox />
    </form>
  );
}