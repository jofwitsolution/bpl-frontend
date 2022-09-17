import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import Joi from "joi-browser";
import emailjs, { init } from "@emailjs/browser";

const SectionTwo = () => {
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;

  init(publicKey);

  const formRef = useRef();

  let [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const schema = {
    name: Joi.string().required().label("Full name"),
    email: Joi.string().required().email().label("Email"),
    // subject: Joi.string().required().label("Subject"),
    message: Joi.string().required().label("Message"),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage("");

    // console.log("submitted");

    const obj = {
      name,
      email,
      message,
    };

    // console.log(formRef.current);

    const { error } = Joi.validate(obj, schema);

    if (error) {
      setErrorMessage(error.details[0].message);
    } else {
      setLoading(true);
      // (serviceID, templateID, templateParams, publicKey)
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
        (result) => {
          toast("Message sent successfully", { className: "submit-feedback" });
          setLoading(false);
          // console.log(result.text);
        },
        (error) => {
          toast("Message not successful", { className: "submit-feedback" });
          setLoading(false);
          // console.log(error.text);
        }
      );
    }
  };

  return (
    <section className="jof-contact-us__sect-2 container-fluid">
      <div className="jof-contact-us__sect-2-container container">
        <div className="jof-contact-us__sect-2-row row justify-content-center-align-items-center">
          <div className="col-12 col-md-7 jof-contact-us__sect-2-col-1">
            <h3 className="u-margin-bottom-small">Get in touch</h3>
            <p className="jof-paragraph-1 u-margin-bottom-medium">
              Leave your info in the form below and we will get back to you. It
              will be a step in the right direction.
            </p>
            <form
              className="page-contact-us__form"
              onSubmit={(e) => handleSubmit(e)}
              ref={formRef}
            >
              <div className="page-contact-us__form-row">
                <label htmlFor="name">
                  Full name <span>*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="page-contact-us__form-row">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div className="page-contact-us__form-row">
                <label htmlFor="subject">
                  Subject <span>*</span>
                </label>
                <input
                  type="text"
                  value={subject}
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div> */}
              <div className="page-contact-us__form-row">
                <label htmlFor="message">
                  Message <span>*</span>
                </label>
                <textarea
                  rows={5}
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="page-contact-us__form-row">
                <ClipLoader color="#54aa01" loading={loading} />
                <p>{errorMessage}</p>
                {!loading && <button type="submit">Send</button>}
              </div>
            </form>
          </div>
          <div className="col-12 col-md-5 jof-contact-us__sect-2-col-2">
            <h3 className="u-margin-bottom-small">Location</h3>
            <h4>Better Place Living Ltd</h4>
            <p className="jof-paragraph-1 u-margin-bottom-medium">
              1 Slate Lane, Nuneaton, <br />
              CV10 9FL United Kingdom. <br />
            </p>
            <h4>Contact:</h4>
            <p className="jof-paragraph-1 u-margin-bottom-medium">
              <a href="tel:+440758-146-7406">0758 146 7406</a>
              <br />
              <a href="tel:+440782-888-7031">0782 888 7031</a>
              <br />
              <a href="mailto: info@betterplaceliving.co.uk">
                info@betterplaceliving.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
