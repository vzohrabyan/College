import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaPassport } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import { TbCurrencyDram } from "react-icons/tb";
import { BsPersonSquare } from "react-icons/bs";
import "./Admission.scss"
import { useEffect } from 'react';

const Admission = () => {
    const {t} = useTranslation();
  return (
    <main className='admission'>
        <div className='admission-slide'>
            <h1>
                {t("Admission")}
            </h1>
        </div>
        <div className="admission-section">
            <div className="admission-section-heading">
                <h1>{t("admissionHeading")}</h1>
            </div>
            <div className="admission-section-main">
                <span dangerouslySetInnerHTML={{ __html: t('admissionMain') }} />
            </div>
        </div>
        <div className='admission-doc'>
            <h2>{t("necessaryDocuments")}</h2>
            <div className="admission-doc-1">
                <div>
                    <FaPassport />
                    <h3>
                        {t("passport")}
                    </h3>
                    <span>{t("passportDesc")}</span>
                </div>
                <div>
                    <TbCertificate />
                    <h3>
                        {t("certificate")}
                    </h3>
                    <span>{t("certificateDesc")}</span>
                </div>
            </div>
            <div className="admission-doc-2">
                <div>
                    <TbCurrencyDram />
                    <h3>
                        {t("money")}
                    </h3>
                    <span>{t("moneyDesc")}</span>
                </div>
                <div>
                    <BsPersonSquare />
                    <h3>
                        {t("photo")}
                    </h3>
                    <span>{t("photoDesc")}</span>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Admission