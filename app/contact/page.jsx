"use client"

import React, {useRef, useState, useEffect} from "react";

import Image from "next/image";
import Link from "next/link";

import { IconContext } from "react-icons";
import { AiFillFacebook, AiOutlineX, AiFillInstagram } from "react-icons/ai";

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


import Footer from "../components/Footer";

import Hero from "@/public/contactHero.jpg";
import HCaptcha from "@hcaptcha/react-hcaptcha";



const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 39.71635284708693,
    lng: -105.07989313719689
};

const mapStyle = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
    },
    {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
    },
    {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
    },
    {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
    },
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState(["", ""]);
    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);

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


    return (
        <div>
            <section className="hero">
                <div className="newHeroImgContainer">
                    <Image
                        src={Hero}
                        alt="plants"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        sizes="100vh"
                        priority={true}
                        unoptimized={true}
                    />
                </div>
                <div className="logoFull">
                    <div className="heroText">
                        <h1>Contact Us</h1>

                    </div>
                    <div className="heroCTA">
                        <a href="tel:+17207223357">Call Now: 720-722-3357</a>
                    </div>
                </div>
            </section>
            <section className="contactPageCont">

                <section className="contactPageinfo">
                    <h2>Get in touch</h2>
                    <div className="contactPageinfoGrid">
                        <div>
                            <h3>Phone:</h3>
                            <h3>Email:</h3>
                            <h3>Address:</h3>
                        </div>
                        <div>
                            <a href="tel:+17207223357"><h3>720-722-3357</h3></a>
                            <a href="mailto:example@example.com"><h3>realmlakewood@gmail.com</h3></a>
                            <h3>Realm Chiropractic <br></br> 98 Wadsworth Blvd.<br></br>Lakewood, CO 80226</h3>

                        </div>
                    </div>
                    <IconContext.Provider value={{ color: "white", size: "30px" }}>
                        <div className="iconGroup">
                            <Link href={"https://twitter.com/Realmlakewood"}><AiOutlineX /></Link>
                            <Link href={"https://www.facebook.com/realmlakewood/?fref=ts/"}><AiFillFacebook /></Link>
                            <Link href={"https://www.instagram.com/realmchiropractic/"}><AiFillInstagram /></Link>
                        </div>
                    </IconContext.Provider>

                </section>
                {submitted
                    ?
                    <div className="contactSubmited">
                        <div className="contactSubmitedTitle">{result[0]}</div>
                        <div className="contactSubmitedBody">{result[1]}</div>
                        <button className="w-[100%] justify-center items-center py-3 text-white"
                                onClick={() => setSubmitted(false)}>Reset
                        </button>
                    </div>
                    :
                    <section className="contactPage">

                        <div className="contactPageLeft">
                        <div className="contactHeroTextContainer">
                        <h2>Send us a message</h2>
                            <p className="contactHeroTextFull">
                                Let us know how we can serve you!
                            </p>
                            <p className="contactHeroTextMobile">
                                Let us know how we can serve you!
                            </p>
                        </div>

                    </div>
                    <div className="contactPageRight">
                        <div className="contactFormContainer">
                            <form
                                onSubmit={onSubmit}
                                className="contactForm"
                            >
                                <div className="contactNameContainer">
                                    <label htmlFor="nameFirst">Name</label>
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
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                }
            </section>
            <section>
                <LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={13}
                        options={{
                            styles: mapStyle,
                        }}
                    >
                        <Marker position={center}/>
                    </GoogleMap>
                </LoadScript>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
    );
}