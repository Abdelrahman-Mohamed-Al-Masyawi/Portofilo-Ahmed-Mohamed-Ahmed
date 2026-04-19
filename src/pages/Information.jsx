import '../Styles/Information.css';
import { useTranslation } from 'react-i18next';
import { AllContext } from '../context/context';
import { useContext } from 'react';
import Footer from './Footer';
import ButtonHomePage from '../components/ButtonHomePage';

export default function Information() {
    const { DarkMode, setDarkMode } = useContext(AllContext);
  const { t } = useTranslation();
  return (
    <div>
    <div className=' ms-auto '>
      <div className='information text-center w-100 ms-auto  '>
        <h3 className={`title ${DarkMode ? 'ColorDark-title' : 'ColorLight-title'}`}>{t('Basic Info')}</h3>
        <div className='d-flex justify-content-between flex-wrap'>
          <Icon Title={t('Name')} Details={t('Abdelrahman Mohamed Ahmed')} />
          <Icon Title={t('Age')} Details={t('25 year')} />
          <Icon Title={t('Marital Status')} Details={t('Single')} />
          <Icon Title={t('Birthday')} Details='31/1/2000' />
          <Icon Title={t('National')} Details={t('Egyptian')} />
          <Icon Title={t('Height')} Details='1.72m' />
          <Icon Title={t('Weight')} Details='72Kg' />
          <Icon Title={t('Military Status')} Details={t('Finished')} />
        </div>
      </div>
    </div>
    <ButtonHomePage/>
    <Footer/>
    </div>
  );
}

function Icon({ Title, Details }) {
  const { DarkMode, setDarkMode } = useContext(AllContext);
  return (
    <div className={`text-center  card-App ${DarkMode ? 'card-App-dark-mode' : 'card-App-light-mode'}`}>
      <p className={`text-center title-Card ${DarkMode ? 'title-Card-dark-mode' : 'title-Card-light-mode'}`}>{Title}:</p>
      <p className='card-Details'>{Details}</p>
    </div>
  );
}
