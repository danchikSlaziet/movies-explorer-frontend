import { useEffect, useState } from 'react';
import './SearchForm.css';
import searchPath from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import moviesApi from '../../utils/MoviesApi';

export default function SearchForm({setCards, setIsChecked, isChecked, setIsActivePreloader, setSearchError}) {
  const [film, setFilm] = useState('');

  function setNormalSearch(data) {
    setCards(data.filter((card) => card.nameRU.toLowerCase().includes(film.toLowerCase()) || card.nameEN.toLowerCase().includes(film.toLowerCase())));
  }
  function setShortFilmsSearch(data) {
    setCards(data.filter((card) => card.duration <= '40' && (card.nameRU.toLowerCase().includes(film.toLowerCase()) || card.nameEN.toLowerCase().includes(film.toLowerCase()))));
  }
  function filterSearch(data) {
    if (isChecked) {
      setShortFilmsSearch(data);
    }
    else {
      setNormalSearch(data);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsActivePreloader(true);
    moviesApi.getAllMovies()
      .then((data) => filterSearch(data))
      .catch((err) => {
        console.log(err);
        setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => {
        setIsActivePreloader(false);
      });
  }
  useEffect(() => {
    setIsActivePreloader(true);
    moviesApi.getAllMovies()
      .then((data) => {
        if (isChecked) {
          if (film === '') {
            setCards([]);
          }
          else {
            setShortFilmsSearch(data);
          }
        }
        else {
          if (film === '') {
            setCards([]);
          }
          else {
            setNormalSearch(data);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => setIsActivePreloader(false));
  }, [isChecked])

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <div className='search-form__input-wrapper'>
        <input required placeholder='Фильм' className='search-form__input' type="text" name="search" value={film} onChange={(e) => setFilm(e.target.value)} />
        <button className='search-form__button' type="submit">
          <img className='search-form__img' src={searchPath} alt="лупа иконка поиска" />
        </button>
      </div>
      <FilterCheckbox setIsChecked={setIsChecked}/>
    </form>
  );
}