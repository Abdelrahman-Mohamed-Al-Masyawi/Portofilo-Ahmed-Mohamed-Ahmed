// src/components/Contact.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();

  const contactItems = [
    { icon: FaPhone, text: t('contact.phone'), link: 'tel:+966592060065', color: '#25D366' },
    { icon: FaWhatsapp, text: t('contact.whatsapp'), link: 'https://wa.me/966592060065', color: '#25D366' },
    { icon: FaEnvelope, text: t('contact.email'), link: 'mailto:ahmedelsayed9174@gmail.com', color: '#D44638' },
    { icon: FaMapMarkerAlt, text: t('contact.location'), link: 'https://maps.google.com/?q=Riyadh+Saudi+Arabia', color: '#0B3C5D' }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="contact-grid">
          {contactItems.map((item, index) => (
            <a key={index} href={item.link} className="contact-card" target="_blank" rel="noopener noreferrer">
              <item.icon className="contact-icon" style={{ color: item.color }} />
              <h3>{item.text}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;