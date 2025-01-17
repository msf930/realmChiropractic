"use client"

import Image from "next/image";
import { useState } from "react";

import ContactFormNew from "../components/ContactFormNew";
import Footer from "../components/Footer";

import Hero from "@/public/newPatients.jpg";
import newPatient1 from "@/public/newPatient1.jpg";
import newPatient2 from "@/public/newPatient2.jpg";
import newPatient3 from "@/public/newPatient3.jpg";
import newPatient4 from "@/public/newPatient4.jpg";
import newPatient5 from "@/public/newPatient5.jpg";

const contentCards: any = [
    {
        key: "spinal",
        title: "What is a Spinal Shift?",
        text: [
            "We can say that no one is structurally perfect; however, there is a normal range. In the same manner that we can understand what a fever is because we know what normal temperature should be, we can also look at the spine and determine if a Spinal Shift has occured by comparing them to an established set of normal measurements. There are established normals almost everywhere we look, from the gauges and warning indicators on the dashboard of your car to a headache in the middle of the day.  These warning indicators/secondary conditions (symptoms) are meant to help us know when something is wrong so that we can take the proper action to fix the root of the problem.",
            "The body uses secondary conditions (symptoms) as warning indicators of a potentially more serious problem. A Spinal Shift is such a problem that may be the cause of your secondary condition. Our office focuses on detecting and correcting these Spinal Shifts so that the body can heal on its own and you can be free from these secondary conditions.",
            "Spinal Shifts can occur due to a childhood fall, a sports injury, an automobile accident, repetitive stresses (such as sitting at a desk for hours per day), or a variety of other seemingly innocuous injuries."
        ],
        image: newPatient1,
    },
    {
        key: "options",
        title: "What are My Treatment Options?",
        text: [
            "There are a wide variety of treatment options offered by both medical and alternative medicine practitioners. Most doctors are focused on pain and symptom relief (secondary conditions), and they do an excellent job. People often start with medication or herbal/homeopathic remedies which can shut-off your body's pain receptors.",
            "If that does not work, then courses of physical therapy may be used to strengthen muscular weakness, address spasm, or increase mobility. Injection programs to calm the site of pain come in next.",
            "When those do not work, more invasive procedures like surgery start to fall into the picture. All of these treatment programs are effective in the appropriate time and place and have different goals.",
            "Our goal at Realm Chiropractic is to restore the structural integrity of your spine. Dr. Nick and Dr. Rachel have built excellent relationships with the best health care providers throughout the community. If during the consultation we find that Realm Chiropractic is not right for you, we will make sure to find the best practitioner to help resolve your specific condition."
        ],
        image: newPatient2,
    },
    {
        key: "conditions",
        title: "What are Secondary Conditions?",
        text: [
            "Have you ever had that engine light suddenly illuminate in your car? Is that light the actual problem, or is the light just an indication that there is an underlying issue with the car? Obviously, that light functions to let us know that there is a problem with the car. In this case, the engine light in the car is a  symptom  due to the underlying condition. Like your car, our bodies also have these warning lights, or symptoms that tell us that there is an underlying condition, something more serious, in our bodies. In structural chiropractic, we call these symptoms, Secondary Conditions, because that is exactly what they are. They are secondary to an underlying condition which is resulting in these secondary conditions. This underlying condition, a Spinal Shift, can result in many secondary conditions, some of which include:"
        ],
        list: [
            "Neck and Back Pain",
            "Sciatica and Hip Pain",
            "Numbness and Tingling",
            "Muscular Spasm/ Tension",
            "Headaches/ Migraines",
            "Pinched Nerve",
            "Herniated Disc",
            "Canal Stenosis",
            "Degenerative Joint Disease",
            "Less Range of Motion",
            "Poor Posture",
            "Muscular Imbalance",
            "Dizziness or Vertigo",
            "Carpal Tunnel",
            "ADHD",
            "Ear Infections",
            "Colic",
            "Fatigue",
            "Insomnia"
        ],
        image: newPatient3,
    },
    {
        key: "exam",
        title: "What Do I Need to Know Before My Exam?",
        text: [
            "Following a complimentary consultation, you will be given the opportunity to undergo a comprehensive functional corrective chiropractic examination. Unlike some other chiropractic offices where the exam is done in 15 minutes by someone other than the doctor, this exam will be thoroughly performed by Dr. Rachel or Dr. Nick to identify the nature of your Spinal Shift. The exam will include:",
            " - Neuro Functional Thermography Analysys",
            " - Neuro Functional Muscular Analysis",
            "- Multi-Axial Structural Analysis",
            "- Automatic Operating System Anaylsis",
            "***Please be prepared to dress appropriately for the examination. For the exam you will be in a gown from the waist up.  Wear something comfortable for the waist down such as athletic pants or shorts or yoga pants or shorts.  You can wear athletic shoes, socks or be barefoot for the exam.",
            "After the examination, if a spinal shift has been confirmed, a follow up conference to review the results will be scheduled. Dr. Rachel or Dr. Nick will discuss the nature of your specific spinal shift, care options, and deliver your first structural correction."
        ],
        image: newPatient4,
    },
    {
        key: "consult",
        title: "Schedule Your Complimentary Consultation!",
        text: [
            "At Realm Chiropractic, a consultation only means one thing: a conversation. When you schedule your consultation with us, you will have the opportunity to sit down with Dr. Nick or Dr. Rachel, not to have an exam, and not to be given a sales pitch, but for two distinct reasons:",
            "1) We want to get to know you and understand your life situation.",
            "2) You will get to know us, and how we may be able to assist you in achieving optimal health.",
            " During your consultation, we will provide you with an overview of structural chiropractic, and then explain how our focus - Functional Correction - is quite different from traditional chiropractic that you are probably accustomed to hearing about. But the most important aspect of the consultation is for us to determine if what we offer, can be the solution that you have been searching for.",
            " At the conclusion of your consultation, you will have the option of getting started that day if you so choose, or we can schedule you for a future date. At this time, we will get your full patient history, followed by a comprehensive Functional Chiropractic examination which includes:",
            "- Neuro Functional Thermography Analysys",
            "- Neuro Functional Muscular Analysis",
            "- Multi-Axial Structural Analysis",
            "- Automatic Operating System Anaylsis",
            "To be very clear, there is NO CHARGE for our consultation. We do not feel right charging for a conversation.",
            "To Schedule Your Appointment at our Lakewood chiropractic office, please call 720.722.3357 or fill out the form below and we will contact you promptly!"],
        image: newPatient5,
    },
];


function getCardByKey(key: string) {
    return contentCards.find((cardItem: any) => cardItem.key === key)
}

export default function NewPatients() {

    const [card, setCard] = useState(getCardByKey("spinal"));

    function handleContentChange(key: string) {
        setCard(getCardByKey(key))
    }
    return (
        <div>
            <section className="hero">
                <div className="newHeroImgContainer">
                    <Image
                        src={Hero}
                        alt="clipboard"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        priority={true}
                        unoptimized={true}
                    />
                </div>
                <div className="logoFull">
                    <div className="heroText">
                        <h1>New Patients</h1>

                    </div>
                    <div className="heroCTA">
                        <a href="tel:+17207223357">Call Now: 720-722-3357</a>
                    </div>
                </div>
            </section>
            <section className="infoContainer2">
                <div className="infoAside2">
                    <h3>Select Below to Learn More</h3>
                    <div className="infoAside2List">
                        {contentCards.map((cardItem: any) => (
                            <button 
                                key={cardItem.key} 
                                onClick={() => handleContentChange(`${cardItem.key}`)} 
                                className={
                                    card.key === `${cardItem.key}` 
                                    ? 
                                    "font-semibold" 
                                    : 
                                    "font-normal"}>
                                        {cardItem.title}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="infoContent">
                    <h2>{card?.title}</h2>
                    {card.text.map((line: any, id: any) => (
                        <p className="p-5" key={id}>{line}</p>
                    ))}
                    <div className="infoListCont">
                        <ul className="infoList">
                            {card.list ? card.list.map((item: any, id: any) => (<li key={id}>{item}</li>)) : <></>}
                        </ul>
                    </div>
                    <div className="servicesLineCont">
                        <hr className="servicesLine"></hr>
                    </div>
                    <div className="infoImgCont">
                        <div className="infoImg">
                            <Image
                                src={card?.image}
                                alt="clipboard"
                                layout="fill"
                                objectFit="contain"
                                placeholder="blur"
                                objectPosition="center"
                                unoptimized={true}

                            />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <ContactFormNew />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}