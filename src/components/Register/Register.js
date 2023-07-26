import { NavLink, useNavigate } from 'react-router-dom';
import './Register.css';
import logoPath from '../../images/logo.svg';
import AuthForm from '../AuthForm/AuthForm';
import { useState } from 'react';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  function logoHandler() {
    navigate('/');
  }

  return (
    <section className='register page__register'>
      <img onClick={logoHandler} className='register__logo' src={logoPath} alt="изображение логотипа" />
      <p className='register__text'>
        Добро пожаловать!
      </p>
      <AuthForm mail={mail} setMail={setMail} password={password} setPassword={setPassword}>
        <div className='auth-form__input-wrapper'>
          <span className='auth-form__label'>
            Имя
          </span>
          <input className='auth-form__input auth-form__input_type_name' type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <span className='auth-form__error'>
            {/* Что-то пошло не так... */}
          </span>
        </div>
      </AuthForm>
      <button className='register__button' type="button">Зарегистрироваться</button>
      <div className='register__link-wrapper'>
        <span className='register__question'>
          Уже зарегистрированы?
        </span>
        <NavLink className='register__link' to='/signin'>
          Войти
        </NavLink>
      </div>
    </section>
  );
}