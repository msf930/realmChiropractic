import Image from "next/image";
import Link from "next/link";

import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import styles from "./styles.module.css";
import NavBar from "../components/NavBar";
import Hero from "@/public/contactHeroNew.jpg";

export default function Contact() {
    const contentCards = [
   
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
                "To Schedule Your Appointment at our Lakewood chiropractic office, please call 720.722.3357 or fill out the form below and we will contact you promptly!"]
           
        },
    ];
    function getCardByKey(key) {
        return contentCards.find((cardItem) => cardItem.key === key)
    }
    return (
        <div>
            <NavBar />
            <section className="hero">
                <div className="newHeroImgContainer">
                    <Image
                        src={Hero}
                        alt="clipboard"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"

                    />
                </div>
                <div className="logoFull">
                    <div className="heroText">
                        <h1>Book Your Appointment</h1>

                    </div>
                    <div className="heroCTAContainer">
                        <Link href="tel:+7207223357" className="heroCTATop">
                            <p>Lakewood:</p>
                            <span>720-722-3357</span>
                        </Link>
                        <Link href="tel:+7205880498" className="heroCTABottom">
                            <p>Arvada:</p>
                            <span>720-588-0498</span>
                        </Link>
                    </div>
                </div>
            </section>
            <div className="infoContentBook">
                    <h2>{contentCards[0]?.title}</h2>
                    {contentCards[0]?.text.map((line, id) => (
                        <p className="p-5" key={id}>{line}</p>
                    ))}
                    <div className="infoListCont">
                        <ul className="infoList">
                            {contentCards[0]?.list ? contentCards[0]?.list.map((item, id) => (<li key={id}>{item}</li>)) : <></>}
                        </ul>
                    </div>
                    <div className="servicesLineCont">
                        <hr className="servicesLine"></hr>
                    </div>
                   
                </div>
            <ContactForm />
            <Footer />
        </div>
    )
}
