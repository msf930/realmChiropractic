"use client"

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { IconContext } from "react-icons";
import { AiFillFacebook, AiOutlineX, AiFillInstagram } from "react-icons/ai";

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import Hero from "@/public/contactHero.jpg";



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
                        unoptimized={true}
                    />
                </div>
                <div className="logoFull">
                    <div className="heroText">
                        <h1>Contact Us</h1>

                    </div>
                    <div className="heroCTA">
                        <a href="tel:+7207223357">Call Now: 720-722-3357</a>
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
                            <h3>720-722-3357</h3>
                            <h3>realmlakewood@gmail.com</h3>
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
                                action={`${process.env.NEXT_PUBLIC_FORM_ENDPOINT}`}
                                onSubmit={handleSubmit}
                                method="POST"
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
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}