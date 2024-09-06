import React from 'react'
import { useTranslation } from 'react-i18next'
import nursing from "../../../assets/pictures/professionsIcons/nursing.png"
import midwife from "../../../assets/pictures/professionsIcons/midwife.png"
import pharmacy from "../../../assets/pictures/professionsIcons/pharmacy.png"
import stom from "../../../assets/pictures/professionsIcons/stom.png"
import designer from "../../../assets/pictures/professionsIcons/designer.png"
import accountant from "../../../assets/pictures/professionsIcons/accountant.png"
import "./ProfessionsSection.scss"
import { Link } from 'react-router-dom'
const ProfessionsSection = () => {
  const {t} = useTranslation();
  const professionsData = [
    {
      id: 0,
      name: t("nursing"),
      image: nursing
    },
    {
      id: 1,
      name: t("stom"),
      image: stom
    },
    {
      id: 2,
      name: t("pharmacy"),
      image: pharmacy
    },
    {
      id: 3,
      name: t("midwife"),
      image: midwife
    },
    {
      id: 4,
      name: t("designer"),
      image: designer
    },
    {
      id: 5,
      name: t("accountant"),
      image: accountant
    },
  ]

  return (
    <section className='professionsSection'>
        <h1>{t("Profession")}</h1>
        <div className='professions'>
          {professionsData.map(({id, name, image}) => {
            return (
              <div className='profession' key={id}>
                <img src={image} alt="Profession" />
                <div className='profession-content'>
                  <h4>{name}</h4>
                  <Link to={"/Professions"}>
                    <button>{t("More")}</button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
    </section>
  )
}

export default ProfessionsSection