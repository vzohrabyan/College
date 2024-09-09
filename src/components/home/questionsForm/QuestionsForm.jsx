import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './QuestionsForm.scss'; // Import the SCSS file
import { useTranslation } from 'react-i18next';

const QuestionsForm = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    email: Yup.string().email(t('Invalid email address')).required(t('Required')),
    message: Yup.string().required(t('Required')),
  });

  const initialValues = {
    email: '',
    message: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="Questionscontainer">
      <h1>{t('Questions')}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="field">
              <label htmlFor="email">{t('email')}</label>
              <Field id="email" type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="field">
              <label htmlFor="message">{t('Message')}</label>
              <Field as="textarea" id="message" name="message" />
              <ErrorMessage name="message" component="div" className="error" />
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

export default QuestionsForm;
