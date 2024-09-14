import React from 'react';
import { Form, Field, ErrorMessage, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import './QuestionsForm.scss'; // Import the SCSS file
import { useTranslation } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionsForm = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    email: Yup.string().email(t('Invalid email address')).required(t('Required')),
    question: Yup.string().required(t('Required'))
  });

  const initialValues = {
    email: '',
    question: ''
  };

  const notify = (message, type = 'success') =>
    toast(message, {
      type
    });

  const handleSubmit = async (values, { setStatus }) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/support-questions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        },
        body: JSON.stringify(values)
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus({ error: result.message });
        return notify(result.message, 'error');
      }

      setStatus({ success: result.message });
      notify(result.message);
      formik.resetForm();
    } catch (e) {
      setStatus({ error: e.message });
      notify(e.message, 'error');
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit
  });

  const { isSubmitting } = formik;

  return (
    <>
      <ToastContainer className="toast-position" />
      <div className="Questionscontainer">
        <h1>{t('Questions')}</h1>
        <FormikProvider value={formik}>
          <Form className="form">
            <div className="field">
              <label htmlFor="email">{t('email')}</label>
              <Field id="email" type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="field">
              <label htmlFor="question">{t('Message')}</label>
              <Field as="textarea" id="question" name="question" />
              <ErrorMessage name="question" component="div" className="error" />
            </div>

            <div>
              <button type="submit" disabled={isSubmitting}>
                {t('submit')}
              </button>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </>
  );
};

export default QuestionsForm;
