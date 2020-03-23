import React from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [isMessageSent, setMessageSent] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    try {
      form.submitBtn.disabled = true;
      await axios.post('/.netlify/functions/contact', {
        subject: form.subject.value,
        email: form.email.value,
        body: form.body.value,
      });
      setMessageSent(true);
    } catch (err) {
      form.submitBtn.disabled = false;
      alert(err);
    }
  };

  return isMessageSent ? (
    <Fade duration={2500}>
      <div className="wrapper style2">
        <div className="container">
          <p className="align-center">{t('contact.formSuccessMessage')}</p>
        </div>
      </div>
    </Fade>
  ) : (
    <form method="post" action="/.netlify/functions/contact" onSubmit={handleSubmit}>
      <div className="row gtr-uniform gtr-50">
        <div className="col-6 col-12-xsmall">
          <label htmlFor="subject" className="visually-hidden">
            {t('contact.formSubjectLabel')}
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder={t('contact.formSubjectLabel')}
            required
            aria-required
          />
        </div>
        <div className="col-6 col-12-xsmall">
          <label htmlFor="email" className="visually-hidden">
            {t('contact.formEmailLabel')}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t('contact.formEmailLabel')}
            required
            aria-required
          />
        </div>
        <div className="col-12">
          <label htmlFor="body" className="visually-hidden">
            {t('contact.formBodyLabel')}
          </label>
          <textarea
            name="body"
            id="body"
            placeholder={t('contact.formBodyLabel')}
            rows={6}
            required
            aria-required
          />
        </div>
        <div className="col-12">
          <input
            type="submit"
            name="submitBtn"
            value={t('contact.formSubmitMessage')!}
            className="primary fit"
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
