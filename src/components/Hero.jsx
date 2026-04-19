import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaIdCard, FaHeart, FaBirthdayCake, FaIdCardAlt } from 'react-icons/fa';
import '../Styles/hero.css';
const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id='home' className='hero'>
      <div className='container'>
        <div className='hero-wrapper'>
          {/* 👇 IMAGE SIDE */}
          <div className='hero-image'>
            <img src='/imgs/background/abo hamza.jpeg' alt='profile' />
          </div>

          {/* 👇 TEXT SIDE */}
          <div className='hero-content'>
            <h1>{t('hero.name')}</h1>
            <div className='hero-title'>{t('hero.title')}</div>

            <div className='hero-info'>
              <span>
                <FaMapMarkerAlt /> {t('hero.location')}
              </span>
              <span>
                <FaPhone /> {t('hero.phone')}
              </span>
              <span>
                <FaEnvelope /> {t('hero.email')}
              </span>
              <span>
                <FaIdCard /> {t('hero.nationality')}
              </span>
              <span>
                <FaHeart /> {t('hero.marital')}
              </span>
              <span>
                <FaBirthdayCake /> {t('hero.dob')}
              </span>
              <span>
                <FaIdCardAlt /> {t('hero.license')}
              </span>
              <a href='/public/CV AHMED-.pdf' download className='cv-btn'>
                {t('hero.cv')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

