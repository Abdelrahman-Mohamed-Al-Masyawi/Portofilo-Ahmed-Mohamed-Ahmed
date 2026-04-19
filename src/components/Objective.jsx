// src/components/Objective.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Objective = () => {
  const { t } = useTranslation();

  return (
    <section id="objective" className="section">
      <div className="container">
        <h2 className="section-title">{t('nav.objective')}</h2>
        <div className="objective-card">
          <p>{t('objective.text')}</p>
        </div>
      </div>
    </section>
  );
};

export default Objective;