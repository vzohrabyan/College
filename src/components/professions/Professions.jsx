import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Professions.scss';
// Images
import nursing from '../../assets/pictures/professions/nursingPic.jpeg';
import accountant from '../../assets/pictures/professions/accountantPic.jpg';
import designer from '../../assets/pictures/professions/designerPic.jpg';
import midwife from '../../assets/pictures/professions/midwifePic.png';
import pharmacy from '../../assets/pictures/professions/pharmacyPic.jpg';
import stomTech from '../../assets/pictures/professions/stomTechPic.jpg';

const truncateHtml = (html, maxLength) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  let textContent = doc.body.textContent || '';

  if (textContent.length <= maxLength) {
    return html;
  }

  const truncatedText = textContent.slice(0, maxLength);
  const truncatedHtml = doc.body.innerHTML.slice(0, maxLength);

  return truncatedHtml + '...';
};

const Professions = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleExpand = (id) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const professionsDescData = [
    { id: 0, name: t('nursing'), image: nursing, description: t('NursingDescription') },
    { id: 1, name: t('designer'), image: designer, description: t('DesignerDescription') },
    { id: 2, name: t('pharmacy'), image: pharmacy, description: t('PharmacyDescription') },
    { id: 3, name: t('accountant'), image: accountant, description: t('AccountantDescription') },
    { id: 4, name: t('stom'), image: stomTech, description: t('StomTechDescription') },
    { id: 5, name: t('midwife'), image: midwife, description: t('MidwifeDescription') }
  ];

  return (
    <main className="professions">
      <div className="professions-slide">
        <h1>{t('Profession')}</h1>
      </div>
      <div className="professions-descriptions">
        {professionsDescData.map(({ id, name, image, description }) => {
          const isExpanded = expandedItems[id];
          const truncatedDescription = isMobile ? truncateHtml(description, 200) : description;

          return (
            <div key={id} className="professions-descriptions-profession">
              <div className="professions-descriptions-profession-desc">
                <h1>{name}</h1>
                <span
                  dangerouslySetInnerHTML={{
                    __html: isExpanded ? description : truncatedDescription
                  }}
                />
                {isMobile && (
                  <button onClick={() => toggleExpand(id)}>
                    {isExpanded ? t('showLess') : t('showMore')}
                  </button>
                )}
              </div>
              <div className="professions-descriptions-profession-pic">
                <img src={image} alt={name} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Professions;
