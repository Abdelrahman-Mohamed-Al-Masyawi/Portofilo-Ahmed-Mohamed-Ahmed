import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AllContext } from '../context/context';
import '../Styles/Education.css';
import Footer from './Footer';
import descriptionIcon from '../svg/closed-captioning-svgrepo-com.svg';
import date from '../svg/date-range-svgrepo-com.svg';
import handBag from '../svg/handbag-svgrepo-com.svg';
import ButtonHomePage from '../components/ButtonHomePage';
export default function Education() {
  const { DarkMode, setDarkMode } = useContext(AllContext);
  const { t } = useTranslation();
  return (
    <div>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <h2 className={`Title-Section ${DarkMode ? 'ColorDark-title' : 'ColorLight-title'}`}>{t('Education')}</h2>
          <ED />
        </div>

        <div className='row d-flex justify-content-between '>
          <h2 className={`Title-Section ${DarkMode ? 'ColorDark-title' : 'ColorLight-title'}`}>{t('Courses')}</h2>
          <CourseX />
        </div>
        <ButtonHomePage/>
      </div>
      <Footer/>
    </div>
  );
}

function ED() {
    const { DarkMode, setDarkMode } = useContext(AllContext);
  const { t } = useTranslation();
  return (
    
      <div
        className={`col-11 col-sm-11 col-md-5 col-lg-5 col-xl-5 AppCoursX ${DarkMode ? 'bgDark' : 'bgLight'} ${
          DarkMode ? 'QulDark' : 'QulLight'
        }`}>
        <div className={`d-flex card-title ${DarkMode ? 'TitleCarInDark' : 'TitleCarInLight'}`}>
          <img src={handBag} alt='' width={'70px'} style={{ marginRight: '30px' }} />
          <h4 className={` coursName ${DarkMode ? 'coursNameLight' : 'coursNameDark'}`}>
            {t('Bachelor of Arts and Education')}
          </h4>
        </div>
        <div>
          <span>💼</span>
          <span>{t('2018:2022')}</span>
          <span style={{ margin: '0 10px', padding: '2px' }}> {t('from')}</span>
          <span style={{ margin: '0 5px' }}>{t('Minia university')}</span>
        </div>
        <p>
          <span>📙</span>
          <span style={{ margin: ' 0 4px' }}>{t('Department')}</span>
          <span className='description'>{t('French language')}</span>
        </p>
      </div>
      
    
  );  
}
function CourseX() {
    const { DarkMode, setDarkMode } = useContext(AllContext);
  const { t } = useTranslation();
  const CoursData = [
    {
      id: 1,
      coursName: t('ICDL'),
      data: '2024',
      AcademyName: t('Minia university'),
      description: t(
        'Able to use Office programs such as Word, Excel, PowerPoint, Outlook, Google Chrome, Windows, and generalcomputer',
      ),
    },
    {
      id: 2,
      coursName: t('English: A1-A2'),
      data: '2022',
      AcademyName: t('Develop Yourself Academy'),
      description: t('Ability to communicate with foreigners regarding daily life'),
    },
    {
      id: 3,
      coursName: t('Financial accounting'),
      data: '2024',
      AcademyName: t('self learning and with Financial Accountant'),
      description: t(
        'Ability to create journal entries, generate the American journal in Excel, post to the general ledger, and prepare financial statements',
      ),
    },
    {
      id: 4,
      coursName: t('Learning evaluation and digital interactionFrom'),
      data: '2024',
      AcademyName: t('Edreak platform'),
      description: t(
        'Creating online tests using Google Drive or Kahoot and creating digital learning videos such as PowerPoint presentations',
      ),
    },
    {
      id: 5,
      coursName: t('Effective teaching strategies'),
      data: '2024',
      AcademyName: t('Maaref platform'),
      description: t(
        'Creating online tests using Google Drive or Kahoot and creating digital learning videos such as PowerPoint presentations',
      ),
    },
  ];
  return (
    <>
      {CoursData.map((el) => {
        return (
          <div
            key={el.id}
            className={`col-11 col-sm-11 col-md-5 col-lg-5 col-xl-5 AppCoursX ${DarkMode ? 'bgDark' : 'bgLight'}`}>
            <div className={`d-flex card-title ${DarkMode ? 'TitleCarInDark' : 'TitleCarInLight'}`}>
              <img src={handBag} alt='' width={'70px'} style={{ marginRight: '30px' }} />
              <h4 className={` coursName ${DarkMode ? 'coursNameLight' : 'coursNameDark'}`}>{el.coursName}</h4>
            </div>
            <div>
              <span>💼</span>
              <span>{el.data}</span>
              <span style={{ margin: '0 10px' }}> {t('from')}</span>
              <span>{el.AcademyName}</span>
            </div>
            <p>
              <span>📙</span>
              <span className='description'>{el.description}</span>
            </p>
          </div>
        );
      })}
    </>
  );
}
