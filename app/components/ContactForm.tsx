"use client"

import React, { useEffect, useRef, useState, } from "react";

import Link from "next/link";

import { IconContext } from "react-icons";
import { AiFillFacebook, AiOutlineX, AiFillInstagram, AiOutlineArrowRight } from "react-icons/ai";
import HCaptcha from '@hcaptcha/react-hcaptcha';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(["", ""]);
  const [token, setToken] = useState<string | null>(null);
  const [formEndpoint, setFormEndpoint] = useState<string>(
    () => process.env.NEXT_PUBLIC_FORM_ENDPOINT_LAKEWOOD ?? ''
  );
  const captchaRef = useRef(null);
  useEffect(() => {
    if (token) console.log(`hCaptcha Token: ${token}`);
  }, [token]);

  const onHCaptchaChange = (token: string) => {
    setToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('access_key', formEndpoint);
    if (token) formData.set('h-captcha-response', token);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
      else console.error('Form error:', data.message);
    } catch (err) {
      console.error('Submit error:', err);
    }
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
          <h2>Your Health Story Matters </h2>
          <p className="contactHeroTextFull">
          Tell us a little about what&apos;s going on and we&apos;ll reach out to schedule your complimentary consultation. 
          </p>
          <p className="contactHeroTextMobile">
          Tell us a little about what&apos;s going on and we&apos;ll reach out to schedule your complimentary consultation. 
          </p>
          {/* <IconContext.Provider value={{ color: "white", size: "30px" }}>
            <div className="iconGroupContact">
              <Link className="icon" href={"https://twitter.com/Realmlakewood"}><AiOutlineX /></Link>
              <Link className="icon" href={"https://www.facebook.com/realmlakewood/?fref=ts/"}><AiFillFacebook /></Link>
              <Link className="icon" href={"https://www.instagram.com/realmchiropractic/"}><AiFillInstagram /></Link>
            </div>
          </IconContext.Provider> */}
        </div>

      </div>
      <div className="contactRight">
        <div className="contactFormContainer">
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="contactForm"
          >
            <input type="hidden" name="access_key" value={formEndpoint} />
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
            <div className="contactInputContainer">
              <label className="contactLabel">Location</label>
              <div className="contactLocationButtons" role="group" aria-label="Location">
                <label className="contactLocationBtn">
                  <input
                    type="radio"
                    name="location"
                    value="lakewood"
                    title="Lakewood"
                    aria-label="Lakewood"
                    className="contactLocationBtnInput"
                    defaultChecked
                    onChange={() => setFormEndpoint(process.env.NEXT_PUBLIC_FORM_ENDPOINT_LAKEWOOD ?? '')}
                    required
                  />
                  <span>Lakewood</span>
                </label>
                <label className="contactLocationBtn">
                  <input
                    type="radio"
                    name="location"
                    value="arvada"
                    title="Arvada"
                    aria-label="Arvada"
                    className="contactLocationBtnInput"
                    onChange={() => setFormEndpoint(process.env.NEXT_PUBLIC_FORM_ENDPOINT_ARVADA ?? '')}
                    required
                  />
                  <span>Arvada</span>
                </label>
                <label className="contactLocationBtn">

                  <Link href="/locations">Learn More  </Link>

                </label>
              </div>
              <div className="contactSpacer"></div>
            </div>
            
            <div className="contactCaptchaContainer">

              <HCaptcha
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? ''}
                // onLoad={onLoad}
                onVerify={onHCaptchaChange}
                ref={captchaRef}
                reCaptchaCompat={false}
                size="normal"
                theme="dark"
              />
            </div>
            <div className="contactSubmitContainer">
              {/* <div></div> */}
              <button
                className="contactSubmitBtn"
                type="submit"
                value="Submit"
              >
                Unlock My Health
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