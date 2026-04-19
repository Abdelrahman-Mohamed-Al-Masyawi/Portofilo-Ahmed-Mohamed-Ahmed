// src/components/Education.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaUniversity, FaBook } from 'react-icons/fa';

const Education = () => {
  const { t } = useTranslation();
  const languages = [
    { name: t('languages.arabic'), level: 'Native' },
    { name: t('languages.english'), level: 'Good' }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">{t('education.title')}</h2>
        <div className="skills-grid">
          <div className="edu-card">
            <FaGraduationCap size={40} color="#D9B310" />
            <h3>{t('education.degree')}</h3>
            <p><FaUniversity /> {t('education.university')}</p>
            <p><FaBook /> {t('education.department')}</p>
          </div>
          <div className="edu-card">
            <h3>{t('languages.title')}</h3>
            {languages.map((lang, idx) => (
              <div key={idx} style={{ marginTop: '1rem' }}>
                <strong>{lang.name}</strong>
                <p style={{ color: '#D9B310' }}>{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;