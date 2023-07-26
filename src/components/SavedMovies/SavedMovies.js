import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

export default function SavedMovies() {
  return (
    <main>
      <section className='saved-movies page__saved-movies auto-width auto-width-movies'>
        <SearchForm />
        <MoviesCardList inSavedMovies={true}/>
      </section>
    </main>
  );
}