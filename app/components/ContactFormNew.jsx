"use client"

import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";

import { IconContext } from "react-icons";
import { AiFillFacebook, AiOutlineX, AiFillInstagram } from "react-icons/ai";


import HCaptcha from '@hcaptcha/react-hcaptcha';

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState(["", ""]);
    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);

    const onLoad = () => {
        captchaRef.current.execute();
    };

    useEffect(() => {

        if (token)
            console.log(`hCaptcha Token: ${token}`);

    }, [token]);



    const onSubmit = async (e) => {
        setSubmitted(true);
        setResult(["Please Wait", "Sending...."]);
        const form = e.target;
        const formData = new FormData(form);
        formData.append("access_key", `${process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}`);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (data.success) {
            setResult(["Thank You!", "Form Submitted Successfully"]);
        } else {
            console.log("Error", data);
            setResult(["Error", `${data.message}`]);
        }

    };

    if (submitted) {
        return (
            <div className="contactSubmited">
                <div className="contactSubmitedTitle">{result[0]}</div>
                <div className="contactSubmitedBody">{result[1]}</div>
                <button className="w-[100%] justify-center items-center py-3 text-white" onClick={() => setSubmitted(false)}>Reset</button>
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
                        onSubmit={onSubmit}
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
                            <label className="contactLabel">Email</label>
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
                            <label className="contactLabel">Phone</label>
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
                            <label className="contactLabel">Message</label>
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
                        <div className="captchaContainer">
                            <div></div>
                            <div className="captcha">
                                <HCaptcha
                                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                                    // onLoad={onLoad}
                                    onVerify={setToken}
                                    ref={captchaRef}
                                    reCaptchaCompat={false}
                                    size="compact"
                                    theme="dark"
                                />
                            </div>
                            <div className="contactSpacer"></div>
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