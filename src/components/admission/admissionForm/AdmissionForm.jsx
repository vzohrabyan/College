import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AdmissionForm.scss'; // Import the SCSS file
import { useTranslation } from 'react-i18next';

const AdmissionForm = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    email: Yup.string().email(t('Invalid email address')).required(t('Required')),
    name: Yup.string().required(t('Required')),
    phone: Yup.string()
      .matches(
        /^\+374(10|11|33|41|43|44|46|55|77|91|93|94|95|96|98|99)\d{6}$/,
        t('Invalid phone number')
      )
      .required(t('Required')),
    file: Yup.mixed().required(t('A file is required'))
  });

  const initialValues = {
    email: '',
    name: '',
    phone: '',
    file: null,
    faculty: t('nursing')
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="admission-form-container">
      <h1>{t('AdmissionForm')}</h1>
      <span>{t('OnlineAdmission')}</span>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ setFieldValue, isSubmitting }) => (
          <Form className="form">
            <div className="field">
              <label htmlFor="email">{t('email')}</label>
              <Field id="email" type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="field">
              <label htmlFor="name">{t('nameSurname')}</label>
              <Field id="name" type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="field">
              <label htmlFor="phone">{t('phone')}</label>
              <Field id="phone" type="tel" name="phone" placeholder="+374XYXYXYXY" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div className="field">
              <label htmlFor="faculty" className="select">
                {t('faculty')}
              </label>
              <Field as="select" id="faculty" name="faculty">
                <option value={t('nursing')} label={t('nursing')} />
                <option value={t('accountant')} label={t('accountant')} />
                <option value={t('stom')} label={t('stom')} />
                <option value={t('midwife')} label={t('midwife')} />
                <option value={t('designer')} label={t('designer')} />
                <option value={t('pharmacy')} label={t('pharmacy')} />
              </Field>
              <ErrorMessage name="faculty" component="div" className="error" />
            </div>

            <div className="field">
              <label htmlFor="file" className="file">
                {t('file')}
              </label>
              <input
                id="file"
                name="file"
                type="file"
                onChange={(event) => {
                  setFieldValue('file', event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="file" component="div" className="error" />
            </div>

            <div>
              <button type="submit" disabled={isSubmitting}>
                {t('submit')}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdmissionForm;
