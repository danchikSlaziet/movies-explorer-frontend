import { useState } from 'react';
import './SearchForm.css';
import searchPath from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm() {
  const [film, setFilm] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
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