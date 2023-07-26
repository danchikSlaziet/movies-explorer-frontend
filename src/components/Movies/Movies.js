import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

export default function Movies() {
  return (
        <main>
          <section className='movies page__movies auto-width auto-width-movies'>
            <SearchForm />
            <MoviesCardList inSavedMovies={false}/>
          </section>
        </main>
  );
}