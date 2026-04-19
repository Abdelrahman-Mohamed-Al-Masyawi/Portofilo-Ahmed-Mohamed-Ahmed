// src/components/Experience.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const { t } = useTranslation();
  const experiences = t('experience.items', { returnObjects: true });

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-card">
              <FaBriefcase size={30} color="#D9B310" />
              <h3>{exp.title}</h3>
              <div className="exp-date">
                <FaCalendarAlt /> {exp.period}
              </div>
              <div className="exp-location">
                <FaMapMarkerAlt /> {exp.location}
              </div>
              <ul>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;