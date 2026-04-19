// src/components/Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="container">
        <p>{t('footer.text')}</p>
      </div>
    </footer>
  );
};

export default Footer;