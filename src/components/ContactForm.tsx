import React from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import { graphql, useStaticQuery } from 'gatsby';
import { ContactFormQuery } from '../../graphql-types';
import useTranslation from '../hooks/useTranslation';

const ContactForm: React.FC = () => {
  const data = useStaticQuery<ContactFormQuery>(graphql`
    query ContactForm {
      contactForm: file(name: { eq: "contact" }) {
        childMarkdownRemark {
          frontmatter {
            el {
              formSuccessMessage
              formSubmitMessage
              formSubjectLabel
              formEmailLabel
              formBodyLabel
            }
            en {
              formSuccessMessage
              formSubmitMessage
              formSubjectLabel
              formEmailLabel
              formBodyLabel
            }
          }
        }
      }
    }
  `);

  const [isMessageSent, setMessageSent] = React.useState(false);
  const translatedData = useTranslation(data.contactForm);

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
          <p className="align-center">{translatedData.formSuccessMessage}</p>
        </div>
      </div>
    </Fade>
  ) : (
    <form method="post" action="/.netlify/functions/contact" onSubmit={handleSubmit}>
      <div className="row gtr-uniform gtr-50">
        <div className="col-6 col-12-xsmall">
          <label htmlFor="subject" className="visually-hidden">
            {translatedData.formSubjectLabel}
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder={translatedData.formSubjectLabel}
            required
            aria-required
          />
        </div>
        <div className="col-6 col-12-xsmall">
          <label htmlFor="email" className="visually-hidden">
            {translatedData.formEmailLabel}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={translatedData.formEmailLabel}
            required
            aria-required
          />
        </div>
        <div className="col-12">
          <label htmlFor="body" className="visually-hidden">
            {translatedData.formBodyLabel}
          </label>
          <textarea
            name="body"
            id="body"
            placeholder={translatedData.formBodyLabel}
            rows={6}
            required
            aria-required
          />
        </div>
        <div className="col-12">
          <input
            type="submit"
            name="submitBtn"
            value={translatedData.formSubmitMessage}
            className="primary fit"
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
