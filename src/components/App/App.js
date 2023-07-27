import { Route, Routes, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import Movies from '../Movies/Movies';
import accountPath from '../../images/account-svg.svg';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

export default function App() {
  const navigate = useNavigate();
  function profileHandler() {
    navigate('/profile');
  }
  function loginHandler() {
    navigate('/signin');
  }
  function registerHandler() {
    navigate('/signup');
  }

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Header profileHandler={profileHandler} inMain={true} background='bg-blue'>
              <button onClick={registerHandler} className='header__button header__button_type_registration' type="button">Регистрация</button>
              <button onClick={loginHandler} className='header__button header__button_type_login' type="button">Войти</button>
            </Header>
            <Main />
            <Footer />
          </>} />
        <Route path='/movies' element={
          <>
            <Header profileHandler={profileHandler} background='bgHeader-logged'>
              <button onClick={profileHandler} className='header__account account' type="button">
                <span className='account__text'>
                  Аккаунт
                </span>
                <img className='account__img' src={accountPath} alt="svg изображение кнопки профиля, белый силуэт на черном фоне" />
              </button>
            </Header>
            <Movies />
            <Footer />
          </>} />
        <Route path='/saved-movies' element={
          <>
            <Header profileHandler={profileHandler} background='bgHeader-logged'>
              <button onClick={profileHandler} className='header__account account' type="button">
                <span className='account__text'>
                  Аккаунт
                </span>
                <img className='account__img' src={accountPath} alt="svg изображение кнопки профиля, белый силуэт на черном фоне" />
              </button>
            </Header>
            <SavedMovies />
            <Footer />
          </>} />
          <Route path='/profile' element={
          <>
            <Header profileHandler={profileHandler} background='bgHeader-logged'>
              <button onClick={profileHandler} className='header__account account' type="button">
                <span className='account__text'>
                  Аккаунт
                </span>
                <img className='account__img' src={accountPath} alt="svg изображение кнопки профиля, белый силуэт на черном фоне" />
              </button>
            </Header>
            <Profile />
          </>} />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}
