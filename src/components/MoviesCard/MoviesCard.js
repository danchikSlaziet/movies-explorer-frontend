import './MoviesCard.css';
import notChosenPath from '../../images/not-chosen.svg';
import chosenPath from '../../images/chosen.svg';
import deleteIconPath from '../../images/deleteCard.svg';
import mainApi from '../../utils/MainApi';

export default function MoviesCard({cardInfo, inMovies, setSavedCards, savedCards, isLikedMovies}) {


  function buttonHandler(e) {
    if (inMovies) {
      if (e.target.src.includes('not-chosen')) {
        mainApi.addNewMovie(cardInfo.country, cardInfo.director, cardInfo.duration, cardInfo.year, cardInfo.description, `https://api.nomoreparties.co/${cardInfo.image.url}`, cardInfo.trailerLink, cardInfo.nameRU, cardInfo.nameEN, `https://api.nomoreparties.co/${cardInfo.image.formats.thumbnail.url}`, cardInfo.id)
          .then((data) => {
            setSavedCards([...savedCards, data]);
          })
          .catch(err => console.log(err));
        e.target.src = chosenPath;
      }
      else {
        mainApi.deleteMovie(cardInfo.id)
          .then(data => console.log(data))
          .catch(err => console.log(err));
        e.target.src = notChosenPath;
      }
    }
    else {
      mainApi.deleteMovie(cardInfo.movieId)
        .then((data) => {
          setSavedCards(savedCards.filter(c => c.movieId !== data.movieId))
        })
        .catch(err => console.log(err));
    }
  }

  function isLiked() {
    if (savedCards.some(e => e.movieId === cardInfo.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className='film-banner'>
      <img className='film-banner__img' src={inMovies ? `https://api.nomoreparties.co/${cardInfo.image.url}` : `${cardInfo.image}`} alt={`фотокарточка фильма ${cardInfo.nameRU}`}/>
      <div className='film-banner__wrapper'>
        <div className='film-banner__info'>
          <span className='film-banner__name'>
            {cardInfo.nameRU}
          </span>
          <span className='film-banner__duration'>
            {cardInfo.duration <= 60 ? `${cardInfo.duration}м` : `${Math.floor(cardInfo.duration/60)}ч${cardInfo.duration%60}м` }
          </span>
        </div>
        <button onClick={buttonHandler} className='film-banner__button' type="button">
          <img className='film-banner__svg' src={!inMovies ? deleteIconPath : isLiked() ? chosenPath : notChosenPath} alt={!inMovies ? 'кнопка удалить из избранного' : 'кнопка добавить в избранное'} />
        </button>
      </div>
    </div>
  );
}