import './BurgerButton.css';

export default function BurgerButton({isBurgerOpen, burgerHandler}) {
  return (
    <button onClick={burgerHandler} type="button" className='burger-button'>
      <div className={isBurgerOpen ? 'burger-button__line burger-button__line_active' : 'burger-button__line'}>
      </div>
      <div className={isBurgerOpen ? 'burger-button__line burger-button__line_active' : 'burger-button__line'}>
      </div>
      <div className={isBurgerOpen ? 'burger-button__line burger-button__line_active' : 'burger-button__line'}>
      </div>
    </button>
  );
}