"use client"

import React, { useState } from "react";

import Link from "next/link";

import { IconContext } from "react-icons";
import { AiFillFacebook, AiOutlineX, AiFillInstagram } from "react-icons/ai";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);





    fetch(`${process.env.NEXT_PUBLIC_FORM_ENDPOINT}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        form.submit();
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
          <IconContext.Provider value={{ color: "white", size: "30px" }}>
            <div className="iconGroupContact">
              <Link className="icon" href={"https://twitter.com/Realmlakewood"}><AiOutlineX /></Link>
              <Link className="icon" href={"https://www.facebook.com/realmlakewood/?fref=ts/"}><AiFillFacebook /></Link>
              <Link className="icon" href={"https://www.instagram.com/realmchiropractic/"}><AiFillInstagram /></Link>
            </div>
          </IconContext.Provider>
        </div>

      </div>
      <div className="contactRight">
        <div className="contactFormContainer">
          <form
            action={`${process.env.NEXT_PUBLIC_FORM_ENDPOINT}`}
            onSubmit={handleSubmit}
            method="POST"
            className="contactForm"
          >
            <div className="contactNameContainer">
              <label className="contactLabel" htmlFor="nameFirst">Name</label>
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
              <div className="contactSpacer"></div>
            </div>
            <div className="contactInputContainer">
              <label className="contactLabel" >Email</label>
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
              <div className="contactSpacer"></div>
            </div>
            <div className="contactInputContainer">
              <label className="contactLabel" >Phone</label>
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
              <div className="contactSpacer"></div>
            </div>
            <div className="contactInputAreaContainer">
              <label className="contactLabel" >Message</label>
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
              <div className="contactSpacer"></div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;