import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Home.css';
import { AllContext } from '../context/context';
import MyPhoto from '../images/MyPhoto/Abdo-icon.png';

import github from '../svg/github-color-svgrepo-com.svg';
import linkedin from '../svg/linkedin-svgrepo-com.svg';
import whatsapp from '../svg/whatsapp-svgrepo-com.svg';
import Footer from './Footer';

export default function Home() {
  const { DarkMode, setDarkMode } = useContext(AllContext);
  const { t } = useTranslation();
  return (
    <>
      <div className='container'>
        <div className='Home-App'>
          <img src={MyPhoto} alt='' className={DarkMode ? 'MyPhotoDarkMode' : 'MyPhotoLightMode'} />
          <div style={{ visibility: 'hidden', height: '30%' }}>-</div>
          <div>
            <div>
              <h1 className={`animation-font text-center ${DarkMode ? 'ColorDark-title' : 'ColorLight-title'}`}>
                {t('Abdelrahman Mohamed Ahmed')}
              </h1>
              <div className={`${DarkMode ? 'ColorDark-text' : 'ColorLight-text'} text-center`}>
                {t(
                  'I am an ambitious and calm person who is interested in technology and its application in daily business tomake tasks easier, faster, and more accurate in terms of results. 🚀',
                )}
              </div>
            </div>

            <div className='d-flex text-center justify-content-center m-3'>
              <a href='https://wa.me/966580370681'>
                <img src={whatsapp} alt='whatsapp' width={'60px'} style={{ margin: '10px 30px' }} />
              </a>
              <a href='https://github.com/Monsieur-Code1?tab=repositories'>
                <img src={github} alt='github' width={'60px'} style={{ margin: '10px 30px' }} />
              </a>
              <a href='https://www.linkedin.com/in/abdelrahman-mohammed-ahmed-6736a7283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                <img src={linkedin} alt='linkedin' width={'60px'} style={{ margin: ' 10px 30px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
