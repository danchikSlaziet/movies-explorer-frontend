import './Login.css';
import logoPath from '../../images/logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  function logoHandler() {
    navigate('/');
  }

  return (
    <main>
      <section className='login page__login'>
        <img onClick={logoHandler} className='login__logo' src={logoPath} alt="изображение логотипа" />
        <p className='login__text'>
          Рады видеть!
        </p>
        <AuthForm buttonText={'Войти'} mail={mail} setMail={setMail} password={password} setPassword={setPassword} />
        <div className='login__link-wrapper'>
          <span className='login__question'>
            Ещё не зарегистрированы?
          </span>
          <NavLink className='login__link' to='/signup'>
            Регистрация
          </NavLink>
        </div>
      </section>
    </main>
  );
}