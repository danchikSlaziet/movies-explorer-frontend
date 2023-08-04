import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({inSavedMovies, cards, checkboxBool}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [initialIndex, setInitialIndex] = useState(0);
  const [buttonClass, setButtonClass] = useState('movies__button');
  
  function getCardsforSize() {
    if (windowWidth >= '1280') {
      return 16;
    }
    else if (windowWidth >= '768') {
      return 8;
    }
    else {
      return 5;
    }
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  useEffect(() => {
    // для перехода устройства из портретной ориентации в альбомную и наоборот
    setInitialIndex(getCardsforSize());
  }, [windowWidth])
  
  function buttonHandler() {
    if (getCardsforSize() === 16) {
      setInitialIndex(initialIndex + 4);
      if (cards.length - initialIndex <= 4) {
        setButtonClass('movies__button movies__button_no-visible');
      }
      else {
        setButtonClass('movies__button')
      }
    }
    else if (getCardsforSize() === 8) {
      setInitialIndex(initialIndex + 2);
      if (cards.length - initialIndex <= 2) {
        setButtonClass('movies__button movies__button_no-visible');
      }
      else {
        setButtonClass('movies__button')
      }
    }
    else if (getCardsforSize() === 5) {
      setInitialIndex(initialIndex + 1);
      if (cards.length - initialIndex <= 1) {
        setButtonClass('movies__button movies__button_no-visible');
      }
      else {
        setButtonClass('movies__button')
      }
    }
  };

  useEffect(() => {
    setInitialIndex(getCardsforSize());
    if (cards.length <= initialIndex - 1) {
      setButtonClass('movies__button movies__button_no-visible');
    }
    else {
      setButtonClass('movies__button')
    }
  }, [cards.length]);

  return (
    <>
      <div className='movie-cards'>
        <ul className='movie-cards__list'>
        {}
        {[...cards].slice(0, initialIndex).map((elem) => <li key={elem.id} className='movie-cards__item'><MoviesCard  cardInfo={elem} inSavedMovies={inSavedMovies} cardId={elem.id} text={elem.nameRU} image={elem.image.url} duration={elem.duration} /></li>)}
        </ul>
      </div>
      {inSavedMovies ? <></> : cards.length === 0 ? <></> : <button onClick={buttonHandler} className={buttonClass} type="button">Ещё</button>}
    </>
  );
}