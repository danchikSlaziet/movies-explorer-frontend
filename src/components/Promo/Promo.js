import './Promo.css';
import promoImgPath from '../../images/promo-img.png';

export default function Promo() {

  return (
    <div className='bg-blue'>
      <section className='promo page__promo auto-width auto-width-main'>
        <div className='promo__info'>
          <h1 className='promo__title'>
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className='promo__subtitle'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button className='promo__button' type="button">
            Узнать больше
          </button>
        </div>
        <img className='promo__image' src={promoImgPath} alt="изображение планета веб" />
      </section>
    </div>
  );
} 