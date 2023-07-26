import './MoviesCard.css';
import notChosenPath from '../../images/not-chosen.svg';
import chosenPath from '../../images/chosen.svg';
import deleteIconPath from '../../images/deleteCard.svg';

export default function MoviesCard({text, image, duration, like, inSavedMovies, setCards, cards, cardId}) {
  function buttonHandler(e) {
    if (!inSavedMovies) {
      if (e.target.src.includes('not-chosen')) {
        e.target.src = chosenPath;
      }
      else {
        e.target.src = notChosenPath;
      }
    }
    else {
      setCards(cards.filter(c => c.id !== cardId));
    }
  }

  return (
    <div className='film-banner'>
      <img className='film-banner__img' src={image} alt="фотокарточка фильма" />
      <div className='film-banner__wrapper'>
        <div className='film-banner__info'>
          <span className='film-banner__name'>
            {text}
          </span>
          <span className='film-banner__duration'>
            {duration}
          </span>
        </div>
        <button onClick={buttonHandler} className='film-banner__button' type="button">
          <img className='film-banner__svg' src={inSavedMovies ? deleteIconPath : like ? chosenPath : notChosenPath} alt="кнопка добавить в избранное" />
        </button>
      </div>
    </div>
  );
}