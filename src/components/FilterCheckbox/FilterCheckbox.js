import { useEffect } from 'react';
import './FilterCheckbox.css';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

export default function FilterCheckbox({isChecked, setIsChecked, isSavedChecked, setIsSavedChecked, inMovies, setIsActivePreloader, setCards, cards, setSavedCards, savedCards, setSearchError, film}) {
  useEffect(() => {
    if (localStorage.getItem('checkbox') && inMovies) {
      setIsChecked(localStorage.getItem('checkbox') === 'true');
    }
  }, [])

  useEffect(() => {
    if (inMovies)
    localStorage.setItem('films', JSON.stringify(cards));
  }, [isChecked])

  function handleChange(e) {
    if (inMovies && film) {
      localStorage.setItem('checkbox', e.target.checked);
      setIsChecked(e.target.checked);
      setIsActivePreloader(true);
      moviesApi.getAllMovies()
        .then((data) => {
          if (!isChecked) {
            setCards(data.filter((card) => card.duration <= '40' && (card.nameRU.toLowerCase().includes(film.toLowerCase()) || card.nameEN.toLowerCase().includes(film.toLowerCase()))));
          }
          else {
            setCards(data.filter((card) => card.nameRU.toLowerCase().includes(film.toLowerCase()) || card.nameEN.toLowerCase().includes(film.toLowerCase())));
          }
          localStorage.setItem('films', JSON.stringify(cards));
        })
        .catch((err) => {
          console.log(err);
          setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
        .finally(() => {
          setIsActivePreloader(false);
        });
  }
  else if (!inMovies && film) {
    setIsSavedChecked(e.target.checked);
      mainApi.getMyMovies()
        .then((data) => {
          if (!isSavedChecked) {
            setSavedCards(data.filter((card) => card.duration <= '40' && (card.nameRU.toLowerCase().includes(film.toLowerCase()) || card.nameEN.toLowerCase().includes(film.toLowerCase()))))
          }
          else {
            setSavedCards(data.filter((card) => (card.nameRU.toLowerCase().includes(film.toLowerCase()) || card.nameEN.toLowerCase().includes(film.toLowerCase()))))
          }
        })
        .catch(err => console.log(err))
  }
}

  return (
    <div className='search-form__filter filter'>
      <input onChange={handleChange} id='short-films' className='filter__checkbox' type="checkbox" name="short-films" checked={inMovies ? isChecked : isSavedChecked} />
      <label htmlFor='short-films' className='filter__text'>
        Короткометражки
      </label>
    </div>
  );
}