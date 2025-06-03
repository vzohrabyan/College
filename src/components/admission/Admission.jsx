import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPassport } from 'react-icons/fa6';
import { TbCertificate } from 'react-icons/tb';
import { TbCurrencyDram } from 'react-icons/tb';
import { BsPersonSquare } from 'react-icons/bs';
import './Admission.scss';
import AdmissionForm from './admissionForm/AdmissionForm';
import { FaFileDownload } from "react-icons/fa";
//pdfs
import anatomy from "../../pdfs/ԿենսաբանությունՔույրական.pdf";
import chemistry from "../../pdfs/Քիմիա.docx.pdf";
import math from "../../pdfs/Մաթեմատիկա.pdf";
import anatomyA from "../../pdfs/Մանկաբարձ.docx.pdf";
import chemistryS from "../../pdfs/Ատամնատեխնիկ.pdf";
import AnimationSliders from './animationSlider/AnimationSliders';
const Admission = () => {
  const { t } = useTranslation();

  return (
    <main className="admission">
      {/* <div className="admission-slide" > */}
        <AnimationSliders />
      {/* </div> */}
      <div className="admission-section">
        <div className="admission-section-heading">
          <h1>{t('admissionHeading')}</h1>
        </div>
        <div className="admission-section-main">
          <span dangerouslySetInnerHTML={{ __html: t('admissionMain') }} />
        </div>
      </div>
      <div className="admissionExams">
        <h1>{t('admissionExams')}</h1>
        <section>
          <div className="admissionExamsSub">
            <h2>{t("nursing")}</h2>
            <div className="admissionExamsSubject">
              <a href={anatomy} target="_blank" rel="noopener noreferrer">
                <h5>{t("anatomy")}</h5>
                <FaFileDownload />
              </a>
                <span>{t("Interview")}</span>
            </div>
            <div className="admissionExamsSubject">
              <h5>{t("hajoc")}</h5>
              <span className='dictation'>{t("dictation")}</span>
            </div>
          </div>
          <div className="admissionExamsSub">
            <h2>{t("accountant")}</h2>
            <div className="admissionExamsSubject">
              <a href={math} target="_blank" rel="noopener noreferrer">
              <h5>{t("math")}</h5>
                <FaFileDownload />
              </a>
                <span>{t("test")}</span>
            </div>
            <div className="admissionExamsSubject">
              <h5>{t("hajoc")}</h5>
              <span className='dictation'>{t("dictation")}</span>
            </div>
          </div>
          <div className="admissionExamsSub">
            <h2>{t("pharmacy")}</h2>
            <div className="admissionExamsSubject">
              <a href={chemistry} target="_blank" rel="noopener noreferrer">
                <h5>{t("chemistry")}</h5>
                <FaFileDownload />
              </a>
                <span>{t("test")}</span>
            </div>
            <div className="admissionExamsSubject">
              <h5>{t("hajoc")}</h5>
              <span className='dictation'>{t("dictation")}</span>
            </div>
          </div>
          <div className="admissionExamsSub">
            <h2>{t("midwife")}</h2>
            <div className="admissionExamsSubject">
              <a href={anatomyA} target="_blank" rel="noopener noreferrer">
                <h5>{t("anatomy")}</h5>
                <FaFileDownload />
              </a>
                <span>{t("Interview")}</span>
            </div>
            <div className="admissionExamsSubject">
              <h5>{t("hajoc")}</h5>
              <span className='dictation'>{t("dictation")}</span>
            </div>
          </div>
          <div className="admissionExamsSub">
            <h2>{t("stom")}</h2>
            <div className="admissionExamsSubject">
              <a href={chemistryS} target="_blank" rel="noopener noreferrer">
                <h5>{t("chemistry")}</h5>
                <FaFileDownload />
              </a>
                <span>{t("test")}</span>
            </div>
            <div className="admissionExamsSubject">
              <h5>{t("hajoc")}</h5>
              <span className='dictation'>{t("dictation")}</span>
            </div>
          </div>
          <div className="admissionExamsSub">
            <h2>{t("designer")}</h2>
            <div className="admissionExamsSubject">
              <h5>{t("Drawing")}</h5>
              <span className='dictation'>{t("Interview")}</span>
            </div>
            <div className="admissionExamsSubject">
              <h5>{t("hajoc")}</h5>
              <span className='dictation'>{t("dictation")}</span>
            </div>
          </div>
        </section>
      </div>
      <AdmissionForm/>
      <div className="admission-doc">
        <h2>{t('necessaryDocuments')}</h2>
        <div className="admission-doc-1">
          <div>
            <FaPassport />
            <h3>{t('passport')}</h3>
            <span>{t('passportDesc')}</span>
          </div>
          <div>
            <TbCertificate />
            <h3>{t('certificate')}</h3>
            <span>{t('certificateDesc')}</span>
          </div>
        </div>
        <div className="admission-doc-2">
          <div>
            <TbCurrencyDram />
            <h3>{t('money')}</h3>
            <span>{t('moneyDesc')}</span>
          </div>
          <div>
            <BsPersonSquare />
            <h3>{t('photo')}</h3>
            <span>{t('photoDesc')}</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admission;
