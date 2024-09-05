import Image from "next/image";
import Link from "next/link";

import Carousel from "./components/Carousel";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import Hero from '../public/Hero.jpg';
import Logo from "../public/og.png";
import Functional1 from "../public/functional1.jpg"
import Functional2 from "../public/functional2.jpg"
import New from "../public/new.jpg"
import Team from "../public/team.jpg"
import Spine from "../public/spine.jpg"
import Services from "../public/services.jpg"



export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="heroImgContainer">
          <Image
            src={Hero}
            alt="hands on back"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          //sizes="100vh"

          />
        </div>
        <div className="logoFull">
          <div className="logoContainer">
            <Image
              className="heroLogo"
              src={Logo}
              alt="Realm logo"
              layout="fill"
              objectFit="contain"
              objectPosition="center"

            />

          </div>
          <div className="heroCTA">
            <a href="tel:+7207223357">Call Now: 720-722-3357</a>
          </div>
        </div>
      </section>
      <section className="func1Cont">
        <div className="func1img">
          <Image
            src={Functional1}
            alt="man shoulder"
            layout="fill"
            objectFit="cover"
            placeholder="blur"

          />
        </div>
        <div className="func1text">
          <h2>FOCUSING ON FUNCTIONAL CORRECTION</h2>
          <hr className="functionalLine"></hr>
          <p>
            At Realm Chiropractic, we pride ourselves on correcting the cause of your condition,
            rather than focusing on the removal of your secondary conditions, otherwise known as symptoms.
            As you certainly know, pain, discomfort, and other signs, are not in and of themselves, a problem.
            They are merely indications that there is an underlying problem somewhere in the body.
            Does it make sense to remove those indications without correcting the real issue?
          </p>
          <p>Of course it doesn&apos;t.</p>
          <p>
            That is why at Realm Chiropractic, we focus on something completely different than most other chiropractors.
            Instead of removing symptoms, we address the cause of your symptoms using a method called Functional Correction.
            We use state of the art instrumentation and assessment tools to identify the underlying structural
            abnormality in your spine and nutritional imbalance that are causing your specific problem.
          </p>
        </div>
      </section>
      <section className="func2Cont">
        <div className="func2text">
          <hr className="functionalLine"></hr>
          <p>
            Whether you would like to finally address the cause of your ailments, or simply achieve optimal health through regular chiropractic adjustments, we would like to invite you to come in for a complementary consultation.
          </p>
          <p>A consultation in our office is simply a casual conversation where we get to know you, and you get to know us.  We understand that we are not the right office for every person, so doesn’t it make sense to discover that before you begin a relationship with our practice?  We believe so, and hopefully so do you.</p>
          <p>
            Browse our site to learn more about our practice and see if our unique focus might be the solution to your health challenges. Or simply give our staff a call and we will be happy to speak with you.
          </p>
          <hr className="functionalLine"></hr>
        </div>
        <div className="func2img">
          <Image
            src={Functional2}
            alt="man shoulder"
            layout="fill"
            objectFit="cover"
            placeholder="blur"

          />
        </div>
      </section>
      <section className="services">
        <div className="servicesContainer">
          <div className="servicesTitle">
            <h1>Quick Links</h1>
          </div>
          <div className="servicesItemContainer">
            <Link href="/newPatients" className="servicesItem">
              <h2 className="servicesItemTitle">New Patients</h2>
              <Image
                className="serviceImg"
                src={New}
                alt="plant"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder='blur'
              />
            </Link>
            <Link href="/team" className="servicesItem">
              <h2 className="servicesItemTitle">Meet Our Team</h2>
              <Image
                className="serviceImg"
                src={Team}
                alt="Handshake"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder='blur'
              />
            </Link>
            <Link href="/services" className="servicesItem">
              <h2 className="servicesItemTitle">Services</h2>
              <Image
                className="serviceImg"
                src={Services}
                alt="rock pile"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder='blur'
              />
            </Link>
            <Link href="/structuralChiro" className="servicesItem">
              <h2 className="servicesItemTitle">Structural Chiropractic</h2>
              <Image
                className="serviceImg"
                src={Spine}
                alt="spine"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder='blur'
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <Carousel />
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
