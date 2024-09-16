import React from 'react';
import { useTranslation } from 'react-i18next';
import nursing from '../../../assets/pictures/professionsIcons/nursing.jpg';
import midwife from '../../../assets/pictures/professionsIcons/midwife.jpg';
import pharmacy from '../../../assets/pictures/professionsIcons/pharmacy.jpg';
import stom from '../../../assets/pictures/professionsIcons/denatTech.jpg';
import accountant from '../../../assets/pictures/professionsIcons/accountant2.jpg';
import designer from '../../../assets/pictures/professionsIcons/designer.jpg';
import './ProfessionsSection.scss';
import { Link, useNavigate } from 'react-router-dom';

const ProfessionsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const professionsData = [
    {
      id: 0,
      name: t('nursing'),
      image: nursing
    },
    {
      id: 1,
      name: t('stom'),
      image: stom
    },
    {
      id: 2,
      name: t('pharmacy'),
      image: pharmacy
    },
    {
      id: 3,
      name: t('midwife'),
      image: midwife
    },
    {
      id: 4,
      name: t('designer'),
      image: designer    },
    {
      id: 5,
      name: t('accountant'),
      image: accountant
    }
  ];

  return (
    <section className="professionsSection">
      <h1>{t('Professions')}</h1>
      <div className="professions">
        {professionsData.map(({ id, name, image }) => {
          return (
            <div
              onClick={() => {
                navigate('/Professions', { state: name });
              }}
              className="profession"
              style={{ backgroundImage: `url(${image})` }}
              key={id}>
              <div className="profession-content">
                <h4>{name}</h4>
                <Link to={'/Professions'}>{t('More')}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProfessionsSection;
