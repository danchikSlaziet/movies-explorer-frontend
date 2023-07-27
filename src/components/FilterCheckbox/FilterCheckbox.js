import './FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
    <div className='search-form__filter filter'>
      <input id='short-films' className='filter__checkbox' type="checkbox" name="short-films" value="" />
      <label htmlFor='short-films' className='filter__text'>
        Короткометражки
      </label>
    </div>
  );
}