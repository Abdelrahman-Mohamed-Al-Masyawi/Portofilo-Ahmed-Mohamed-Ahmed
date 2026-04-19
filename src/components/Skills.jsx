// src/components/Skills.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaChartLine, 
  FaDatabase, 
  FaMicrosoft, 
  FaMoneyBillWave, 
  FaUsers, 
  FaFileInvoice 
} from 'react-icons/fa';

const Skills = () => {
  const { t } = useTranslation();
  
  const skillsList = t('skills.list', { returnObjects: true });
  const icons = [FaChartLine, FaDatabase, FaMicrosoft, FaMoneyBillWave, FaUsers, FaFileInvoice];
  
  const skillLevels = [95, 90, 98, 92, 88, 96];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">{t('skills.title')}</h2>
        <div className="skills-grid">
          {skillsList.map((skill, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <Icon />
                </div>
                <h3 className="skill-name">{skill}</h3>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${skillLevels[index]}%` }}
                  />
                </div>
                <div className="skill-level" style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                  {skillLevels[index]}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;