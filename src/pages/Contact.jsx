import { useTranslation } from 'react-i18next';
import '../Styles/Contact.css';
import facebook from '../svg/facebook-color-svgrepo-com.svg';
import github from '../svg/github-color-svgrepo-com.svg';
import gmail from '../svg/gmail-svgrepo-com (1).svg';
import linkedin from '../svg/linkedin-svgrepo-com.svg';
import whatsapp from '../svg/whatsapp-svgrepo-com.svg';
import { AllContext } from '../context/context';
import { useContext } from 'react';
import Footer from './Footer';
import ButtonHomePage from '../components/ButtonHomePage';
export default function Contact() {
    const { DarkMode, setDarkMode } = useContext(AllContext);
  const { t } = useTranslation();
  return (
    <div>
      <div className='container'>
        <div className='ContainerGroupPageContact'>
          <h3 className={`titleContrairePageContact ${DarkMode ? 'ColorDark-title' : 'ColorLight-title'}`}>
            {t('Contact')}
          </h3>
          <div className='AppAllSkillsPageContact'>
            <ContactIcon
              Icon={linkedin}
              click={t('Click here')}
              NameContact={t('linkedin')}
              Link='https://www.linkedin.com/in/abdelrahman-mohammed-ahmed-6736a7283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            />
            <ContactIcon
              Icon={whatsapp}
              NameContact={t('whatsapp')}
              click={t('Click here')}
              Link='https://wa.me/966580370681'
            />
            <ContactIcon
              Icon={facebook}
              NameContact={t('facebook')}
              click={t('Click here')}
              Link='https://www.facebook.com/share/1Cdniw2x9M/'
            />
            <ContactIcon
              Icon={github}
              NameContact={t('github')}
              click={t('Click here')}
              Link='https://github.com/Monsieur-Code1?tab=repositories'
            />
            <ContactIcon
              Icon={gmail}
              NameContact={t('gmail')}
              fontSize='11px'
              click={'abdelrhmanelsyed7@gmail.com'}
              Link='abdelrhmanelsyed7@gmail.com'
            />
          </div>
        </div>
      </div>
      <ButtonHomePage/>
      <Footer />
    </div>
  );
}
function ContactIcon({ Icon, NameContact, Link, Children, click, fontSize }) {
      const { DarkMode, setDarkMode } = useContext(AllContext);

  return (
    
    <div className={` AppContainerIcons ${DarkMode ? 'AppContainerIconsLight' : 'AppContainerIconsDark'}`}>
      <img src={Icon} alt='linkedin' style={{ width: '90px' }} />
      <div style={{ marginLeft: '15px' }}>
        <p style={{ margin: '0 5px' }} className={`${DarkMode?"TitleIconDark":"TitleIconLight"}`}>{NameContact}</p>
        <a href={Link} className='linkSite' style={{ fontSize: fontSize }}>
          {click}
        </a>
        <p>{Children}</p>
      </div>
    </div>
    
  );
}
