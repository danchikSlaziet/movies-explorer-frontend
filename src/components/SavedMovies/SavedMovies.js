import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

export default function SavedMovies() {
  return (
    <main className='saved-movies page__saved-movies auto-width auto-width-movies'>
      <section className='search'>
        <SearchForm />
      </section>
      <section className='savedMovie-cardList'>
        <MoviesCardList inSavedMovies={true}/>
      </section>
    </main>
  );
}