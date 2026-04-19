// Portfolio.jsx
import { useTranslation } from 'react-i18next';
import img1 from '/public/imgs/background/background/projects/image.png';
import img2 from '/public/imgs/background/background/projects/صورة واتساب بتاريخ 1447-02-06 في 09.45.40_b579ea21.jpg';

import { useContext } from 'react';
import { AllContext } from '../context/context';
export default function Projects() {
  const { DarkMode, setDarkMode } = useContext(AllContext);
  const { t } = useTranslation();
  return (
    <div className='container my-5'>
      <ProjectCard
        images={[img1, img2]}
        title={t('Currency Rates Project')}
        link='https://currenccy-rates.netlify.app/'
        description={t(
          'This project is a web app using an exchange rate API to display currencies against USD. It includes search and convert functionality with full currency details.',
        )}
      />
    </div>
  );
}

function ProjectCard({ images, title, description, link }) {
  const carouselId = `carousel-${title.replace(/\s+/g, '-')}`;
  const { DarkMode, setDarkMode } = useContext(AllContext);
  const { t } = useTranslation();
  return (
    <div
      className='card mb-5 border border-secondary shadow '
      style={{ background: `${DarkMode ? '#3c0303' : '#260d2e'}` }}>
      <div id={carouselId} className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-inner'>
          {images.map((img, idx) => (
            <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
              <img src={img} className='d-block w-100 rounded-top' alt={`Slide ${idx + 1}`} />
            </div>
          ))}
        </div>
        {images.length > 1 && (
          <>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target={`#${carouselId}`}
              data-bs-slide='prev'>
              <span className='carousel-control-prev-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target={`#${carouselId}`}
              data-bs-slide='next'>
              <span className='carousel-control-next-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </>
        )}
      </div>
      <div className='card-body ' style={{ color: `${DarkMode ? '#ffffff' : '#eeeeee'}`, borderRadius: '10px' }}>
        <h5 className='card-title text-center text-warning fw-bold'>{title}</h5>
        <div className='mb-3 text-end'>
          <p className='card-text'>{description}</p>
          <div>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className={`btn  ${DarkMode ? 'btn-outline-warning' : 'btn-outline-primary'}`}>
              {t('Visit project')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
