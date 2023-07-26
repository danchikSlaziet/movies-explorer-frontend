import './Profile.css';

export default function Profile() {
  return (
    <section className='profile page__profile'>
      <p className='profile__greeting'>
        Привет, Виталий!
      </p>
      <div className='profile__info'>
        <div className='profile__wrapper'>
          <span className='profile__field'>
            Имя
          </span>
          <span className='profile__name'>
            Виталий
          </span>
        </div>
        <div className='profile__wrapper'>
          <span className='profile__field'>
            E-mail
          </span>
          <span className='profile__mail'>
            pochta@yandex.ru
          </span>
        </div>
      </div>
      <div className='profile__buttons'>
        <button className='profile__edit-btn profile__btn' type="button">Редактировать</button>
        <button className='profile__exit-btn profile__btn' type="button">Выйти из аккаунта</button>
      </div>
    </section>
  );
}