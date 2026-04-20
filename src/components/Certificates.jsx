import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "../Styles/Certificates.css"
import 'swiper/css';
import 'swiper/css/pagination';

const Certificates = () => {
  const { t, i18n } = useTranslation();
  const swiperRef = useRef(null);

  const certificates = [
    { id: 1, name: t('certificates.cert1'), image: '/img109.jpg' },
    { id: 2, name: t('certificates.cert2'), image: '/img115.jpg' },
    { id: 3, name: t('certificates.cert3'), image: '/img118.jpg' },
  ];

  return (
    <section id='certificates' className='section'>
      <div className='container'>
        <h2 className='section-title'>{t('certificates.title')}</h2>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} // 🔥 حل العربي
          key={i18n.language} // 🔥 ده الحل الأساسي
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}>
          {certificates.map((cert) => (
            <SwiperSlide key={cert.id}>
              <div className='cert-card'>
                <img src={cert.image} alt={cert.name} />
                <div className='cert-info'>
                  <h3>{cert.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔥 أزرار تحت */}
        <div className='slider-buttons'>
          <button onClick={() => swiperRef.current.slidePrev()}>
            <FaArrowLeft />
          </button>

          <button onClick={() => swiperRef.current.slideNext()}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
