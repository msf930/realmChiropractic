import Image from "next/image";
import Link from "next/link";


import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import Hero from "@/public/structuralHero.jpg";


export default function StructuralChiropractic() {
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
                    />
                </div>
                <div className="logoFull">
                    <div className="heroText">
                        <h1>What is Structural Chiropractic?</h1>

                    </div>
                    <div className="heroCTA">
                        <a href="tel:+7207223357">Call Now: 720-722-3357</a>
                    </div>
                </div>
            </section>
            <section className="structuralText">
                <div className="structuralTextCont">
                    <p>Understand the Basics...</p>
                    <p>Most chiropractors are what is known as &quot;conventional&quot; chiropractors. What does this mean? Conventional chiropractors focus on goals such as: decreasing muscular spasm, increasing range of motion, and reducing pain. This is how most chiropractors practice, and I believe most of them are great at what they do. It falls under the umbrella category of symptom relief/symptom management.</p>
                    <p>Structural Chiropractic</p>
                    <p>...Think of your spine as the foundation for a building. If the foundation was off, would you expect the floors to creak, the walls to crack, the windows and doors to break down? Now you can spend time patching all the damage, but you would be doing so with the expectation that in a short time the problems will have to be.....?</p>
                    <p>...Repaired Again... and Again...</p>
                    <p>And suddenly instead of achieving a true correction, we&apos;re relying on chiropractic like a natural (and sometimes expensive) aspirin.</p>
                    <p>So Let&apos;s Get You Back to Normal!</p>
                    <p>Rather than constantly repairing damage, at Realm Chiropractic, we have chosen to fix the underlying Foundation and help your spine reach Normal Structure.</p>
                    <p>Of course our services aren&apos;t for everyone. However, if you are tired of constantly patching the problem and you&apos;re looking for a long term solution that you can both feel AND see for yourself, then Realm Chiropractic may be the right place for you. Once the foundation has been fixed, then we will teach you how to keep it that way through customized recommendations designed for your spine, so that the problem does not return.</p>
                </div>
                <hr className="structuralLine"></hr>
            </section>
            <section>
                <ContactForm />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}