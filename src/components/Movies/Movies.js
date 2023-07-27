import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

export default function Movies() {
  return (
        <main className='movies page__movies auto-width auto-width-movies'>
          <section className='search'>
            <SearchForm />
          </section>
          <section className='movie-cardList'>
            <MoviesCardList inSavedMovies={false}/>
          </section>
        </main>
  );
}