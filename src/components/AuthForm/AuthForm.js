import './AuthForm.css';

export default function AuthForm({children, mail, setMail, password, setPassword}) {
  return (
    <form className='auth-form'>
      {children}
      <div className='auth-form__input-wrapper'>
        <span className='auth-form__label'>
          E-mail
        </span>
        <input className='auth-form__input auth-form__input_type_mail' type="email" name="mail" value={mail} onChange={(e) => setMail(e.target.value)} />
        <span className='auth-form__error'>
          {/* Что-то пошло не так... */}
        </span>
      </div>
      <div className='auth-form__input-wrapper'>
        <span className='auth-form__label'>
          Пароль
        </span>
        <input className='auth-form__input auth-form__input_type_password' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <span className='auth-form__error'>
          Что-то пошло не так...
        </span>
      </div>
    </form>
  );
}