import logoPath from '../../images/logo.svg';
import './Header.css'

export default function Header({children}) {
  return (
    <header className="header page__header auto-width">
      <img src={logoPath} alt="изображение логотипа" />
      <div className='header__buttons-wrapper'>
        <button className='header__button header__button_type_registration' type="button">Регистрация</button>
        <button className='header__button header__button_type_login' type="button">Войти</button>
      </div>
    </header>
  );
};