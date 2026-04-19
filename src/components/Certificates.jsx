// src/components/Certificates.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Certificates = () => {
  const { t } = useTranslation();
  
  const certificates = [
    { id: 1, name: t('certificates.cert1'), image: 'https://placehold.co/600x400/0B3C5D/white?text=Advanced+Accounting' },
    { id: 2, name: t('certificates.cert2'), image: 'https://placehold.co/600x400/0B3C5D/white?text=Tax+%26+Zakat+Professional' },
    { id: 3, name: t('certificates.cert3'), image: 'https://placehold.co/600x400/0B3C5D/white?text=Financial+Analysis+Expert' }
  ];

  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="section-title">{t('certificates.title')}</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {certificates.map((cert) => (
            <SwiperSlide key={cert.id}>
              <div className="cert-card">
                <img src={cert.image} alt={cert.name} />
                <div className="cert-info">
                  <h3>{cert.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;