import '../Styles/Skils.css';

// import Svg
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AllContext } from '../context/context';
import AdobeXD from '../svg/adobe-xd-svgrepo-com.svg';
import Bootstrap from '../svg/bootstrap-svgrepo-com.svg';
import CSS from '../svg/css-3-svgrepo-com.svg';
import Excel from '../svg/excel-svgrepo-com.svg';
import Github from '../svg/github-color-svgrepo-com.svg';
import HTML from '../svg/html-5-svgrepo-com.svg';
import Canva from '../svg/icons8-canva.svg';
import JS from '../svg/js-official-svgrepo-com.svg';
import marketing from '../svg/marketing-market-social-svgrepo-com.svg';
import Outlook from '../svg/ms-outlook-svgrepo-com.svg';
import Photoshop from '../svg/photoshop-svgrepo-com.svg';
import PowerPoint from '../svg/powerpoint-svgrepo-com.svg';
import Publisher from '../svg/publisher-svgrepo-com.svg';
import ReactIcon from '../svg/react-javascript-js-framework-facebook-svgrepo-com.svg';
import TeamWork from '../svg/teamwork-svgrepo-com.svg';
import Solving from '../svg/think-creative-thinking-svgrepo-com.svg';
import Patience from '../svg/waiting-room-svgrepo-com.svg';
import Word from '../svg/word-svgrepo-com.svg';
import Footer from './Footer';
import ButtonHomePage from '../components/ButtonHomePage';
// ______________________
export default function Skils() {
  const { DarkMode, setDarkMode } = useContext(AllContext);
  const { t } = useTranslation();
  return (
    <div>
    <div className='containerX'>
      <div className={`  ${DarkMode ? 'bgDark-title' : 'bgLight-title'}`}>
        <h3 className={DarkMode ? 'titleContraireBlack' : 'titleContraireLight'}>{t('Front-End')}</h3>
        <div className={DarkMode ? 'AppSkillsDarkMode' : 'AppSkillsLightMode'}>
          <Skills Title='HTML' parcent='90%' Icon={HTML} />
          <Skills Title='CSS' parcent='80%' Icon={CSS} />
          <Skills Title={t('JS')} parcent='70%' Icon={JS} />
          <Skills Title={t('React')} parcent='60%' Icon={ReactIcon} />
          <Skills Title={t('Bootstrab')} parcent='70%' Icon={Bootstrap} />
          <Skills Title={t('Git and Githup')} parcent='70%' Icon={Github} />
        </div>
      </div>
      <div className={`  ${DarkMode ? 'bgDark-title' : 'bgLight-title'}`}>
        <h3 className={DarkMode ? 'titleContraireBlack' : 'titleContraireLight'}>{t('Microsoft-office')}</h3>
        <div className={DarkMode ? 'AppSkillsDarkMode' : 'AppSkillsLightMode'}>
          <Skills Title={t('Word')} parcent='80%' Icon={Word} />
          <Skills Title={t('Excel')} parcent='70%' Icon={Excel} />
          <Skills Title={t('Power Point')} parcent='80%' Icon={PowerPoint} />
          <Skills Title={t('Outlook')} parcent='60%' Icon={Outlook} />
        </div>
      </div>
      <div className={`${DarkMode ? 'bgDark-title' : 'bgLight-title'}`}>
        <h3 className={DarkMode ? 'titleContraireBlack' : 'titleContraireLight'}>{t('Design')}</h3>
        <div className={DarkMode ? 'AppSkillsDarkMode' : 'AppSkillsLightMode'}>
          <Skills Title={t('Photoshop')} parcent='50%' Icon={Photoshop} />
          <Skills Title={t('Adobe XD')} parcent='60%' Icon={AdobeXD} />
          <Skills Title={t('Canva')} parcent='70%' Icon={Canva} />
          <Skills Title={t('Publisher')} parcent='50%' Icon={Publisher} />
        </div>
      </div>
      <div className={`${DarkMode ? 'bgDark-title' : 'bgLight-title'}`}>
        <h3 className={DarkMode ? 'titleContraireBlack' : 'titleContraireLight'}>{t('Soft skills')}</h3>
        <div className={DarkMode ? 'AppSkillsDarkMode' : 'AppSkillsLightMode'}>
          <Skills Title={t('Teamwork')} parcent='80%' Icon={TeamWork} />
          <Skills Title={t('Patience')} parcent='80%' Icon={Patience} />
          <Skills Title={t('Marketing')} parcent='70%' Icon={marketing} />
          <Skills Title={t('Problem solving')} parcent='70%' Icon={Solving} />
        </div>
      </div>
    </div>
    <ButtonHomePage/>
    <Footer/>
    </div>
  );
}

function Skills({ Title, parcent, Icon }) {
  return (
    <div className='progressBar'>
      <div className='Title-progress-bar'>
        <span>
          <img src={Icon} alt='' className='iconPhoto' />
        </span>
        {Title}
      </div>
      <div className='progress '>
        <div className='progress-bar bg-success' role='progressbar' style={{ width: parcent }}>
          {parcent}
        </div>
      </div>
    </div>
  );
}
