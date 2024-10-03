import Image from "next/image";
import Link from "next/link";


import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import Hero from "@/public/servicesHero.jpg";


export default function MyofascialCupping() {
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
                        <h1>Myofascial Gliding <br /> and Static Cupping</h1>

                    </div>
                    <div className="heroCTA">
                        <a href="tel:+7207223357">Call Now: 720-722-3357</a>
                    </div>
                </div>
            </section>
            <section className="structuralText">
                <div className="structuralTextCont">
                    <h1>Myofascial Gliding and Static Cupping</h1>
                    <p>At Realm Chiropractic, we offer gliding and static cupping as part of our comprehensive chiropractic care services. Cupping therapy, an ancient technique, enhances our ability to treat a variety of conditions and improve overall well-being. Our approach includes:</p>
                    <ul>
                        <li><b>Gliding Cupping: </b>This technique involves moving the cups across the skin to promote increased blood flow, reduce muscle tension and enhance mobility. It&#39;s particularly effective for addressing larger muscle groups and areas with significant tension</li>
                        <li><b>Static Cupping: </b>In this method, cups are placed on specific points and left static for a duration. This helps to relieve deep-seated muscle tension, improve circulation, and promote relaxation and healing.</li>
                    </ul>
                </div>
                <hr className="structuralLine"></hr>
                <div className="structuralTextCont">
                    <h1>Benefits of Cupping Therapy</h1>
                    <ul>
                        <li><b>Enhanced Circulation: </b>Cupping increases blood flow to targeted areas, aiding in the delivery of oxygen and nutrients to tissues and promoting faster healing.</li>
                        <li><b>Pain Relief: </b>Both gliding and static cupping can effectively reduce muscle pain and stiffness by alleviating muscle knots and improving tissue elasticity.</li>
                        <li><b>Detoxification: </b>Cupping helps to draw out toxins and waste products from the tissues, promoting detoxification and overall wellness.</li>
                        <li><b>Relaxation and Stress Reduction: </b>The therapeutic effects of cupping promote relaxation and reduce stress, complementing the benefits of chiropractic adjustments.</li>
                        <li><b>Improved Mobility: </b>By reducing muscle tension and enhancing flexibility, cupping can improve your range of motion and overall mobility.</li>
                    </ul>
                    <p>Our cupping therapy is designed to work synergistically with functional correction chiropractic care, offering a holistic approach to your health and well-being. Whether you&#39;re dealing with chronic pain, recovering from an injury, or looking to enhance your overall wellness, our integrated treatments can help you achieve your health goals.</p>
                </div>
                <hr className="structuralLine"></hr>
            </section>


            <ContactForm />

            <section>
                <Footer />
            </section>
        </div>
    );
}
