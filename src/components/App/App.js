import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import Movies from '../Movies/Movies';
import accountPath from '../../images/account-svg.svg';
import SavedMovies from '../SavedMovies/SavedMovies';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Header inMain={true} background='bg-blue'>
              <button className='header__button header__button_type_registration' type="button">Регистрация</button>
              <button className='header__button header__button_type_login' type="button">Войти</button>
            </Header>
            <Main />
          </>} />
        <Route path='/movies' element={
          <>
            <Header background='bgHeader-logged'>
              <button className='header__account account' type="button">
                <p className='account__text'>
                  Аккаунт
                </p>
                <img className='account__img' src={accountPath} alt="картинка кнопки профиля" />
              </button>
            </Header>
            <Movies />
          </>} />
        <Route path='/saved-movies' element={
          <>
            <Header background='bgHeader-logged'>
              <button className='header__account account' type="button">
                <p className='account__text'>
                  Аккаунт
                </p>
                <img className='account__img' src={accountPath} alt="картинка кнопки профиля" />
              </button>
            </Header>
            <SavedMovies />
          </>} />
      </Routes>
      <Footer />
    </>
  );
}
