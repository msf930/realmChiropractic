"use client"

import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/06059640-e647-11ee-96b6-0d5b8cafec4b";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <div className="contactSubmited">
        <div className="contactSubmitedTitle">Thank you!</div>
        <div className="contactSubmitedBody">We&apos;ll be in touch soon.</div>
      </div>
    );
  }

  return (
    <section className="contact">
        <div className="contactLeft">
            <div className="contactHeroTextContainer">
                <h2>Contact Us</h2>
                <p className="contactHeroTextFull">
                    Let us know how we can serve you!
                </p>
                <p className="contactHeroTextMobile">
                Let us know how we can serve you! 
                </p>
            </div>

        </div>
        <div className="contactRight">
            <div className="contactFormContainer">
                <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                className="contactForm"
                >
                <div className="contactNameContainer">
                    <label for="nameFirst">Name</label>
                    <div className="nameContainer">
                        <div className="nameInputItem">
                            <input
                            type="text"
                            placeholder="First"
                            name="nameFirst"
                            title="First Name"
                            aria-label="First Name"
                            className="contactInputName"
                            required
                            />
                        </div>
                        <div className="nameInputItem">
                            <input
                            type="text"
                            placeholder="Last"
                            name="nameLast"
                            title="Last Name"
                            aria-label="Last Name"
                            className="contactInputName"
                            required
                            />
                        </div>
                    </div>
                </div>
                <div className="contactInputContainer">
                    <label>Email</label>
                    <div className="contactTextContainer">
                        <div className="textInputItem">
                            <input
                            type="email"
                            placeholder="you@gmail.com"
                            name="email"
                            title="Email"
                            aria-label="Email"
                            className="contactInputText"
                            required
                            />
                        </div>
                    </div>
                </div>
                <div className="contactInputContainer">
                    <label>Phone</label>
                    <div className="contactTextContainer">
                        <div className="textInputItem">
                            <input
                            type="tel"
                            placeholder="111-111-1111"
                            name="phone"
                            title="Telephone Number"
                            aria-label="Telephone Number"
                            className="contactInputText"
                            required
                            />
                        </div>
                    </div>
                </div>
                <div className="contactInputAreaContainer">
                    <label>Message</label>
                    <div className="contactTextAreaContainer">
                        <div className="textInputItem">
                            <textarea
                                placeholder="Your message"
                                name="message"
                                title="Type a detailed message about your plumbing needs"
                                aria-label="Type a detailed message about your plumbing needs"
                                className="contactInputTextArea"
                                required
                                />
                        </div>
                    </div>
                </div>
                
                <div className="contactSubmitContainer">
                    <div></div>
                    <button
                    className="contactSubmitBtn"
                    type="submit"
                    value="Submit"
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>
        </div>
    </section>
  );
};

export default ContactForm;