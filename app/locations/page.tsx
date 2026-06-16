import Image from "next/image";
import Link from "next/link";

import { AiFillFacebook, AiOutlineX, AiFillInstagram } from "react-icons/ai";

import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import {
  arvadaCenter,
  lakewoodCenter,
  LocationMap,
  MapsLoadProvider,
} from "../components/LocationsMap";

import Hero from "@/public/contactHero.jpg";

export default function Locations() {
  return (
    <div>
      <section className="hero">
        <div className="newHeroImgContainer">
          <Image
            src={Hero}
            alt="plants"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vh"
            priority
          />
        </div>
        <div className="logoFull">
          <div className="heroText">
            <h1>Our Locations</h1>
          </div>
          <div className="heroCTAContainer">
            <Link href="tel:+17207223357" className="heroCTATop">
              <p>Lakewood:</p>
              <span>720-722-3357</span>
            </Link>
            <Link href="tel:+17205880498" className="heroCTABottom">
              <p>Arvada:</p>
              <span>720-588-0498</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="contactPageCont">
        <section className="contactPageinfo">
          <h2>Our Locations</h2>
          <MapsLoadProvider>
            <div className="contactPageinfoText">
              <div className="contactPageinfoTextLeft">
                <h2>Lakewood Location</h2>
                <div className="contactPageinfoGrid">
                  <div>
                    <h3>Phone:</h3>
                    <h3>Email:</h3>
                    <h3>Address:</h3>
                  </div>
                  <div>
                    <a href="tel:+7207223357">
                      <h3>720-722-3357</h3>
                    </a>
                    <a href="mailto:realmlakewood@gmail.com">
                      <h3>realmlakewood@gmail.com</h3>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/e9E6tyZgz2XQVq1z6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3>
                        Realm Chiropractic <br />
                        98 Wadsworth Blvd.
                        <br />
                        Lakewood, CO 80226
                      </h3>
                    </a>
                  </div>
                </div>
                <section className="contactPageinfoMap">
                  <LocationMap center={lakewoodCenter} />
                </section>
              </div>
              <div className="contactPageinfoTextRight">
                <h2>Arvada Location</h2>
                <div className="contactPageinfoGrid">
                  <div>
                    <h3>Phone:</h3>
                    <h3>Email:</h3>
                    <h3>Address:</h3>
                  </div>
                  <div>
                    <a href="tel:+7205880498">
                      <h3>720-588-0498</h3>
                    </a>
                    <a href="mailto:realmarvada@gmail.com">
                      <h3>realmarvada@gmail.com</h3>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/dKzr1HKRxx88PaTY8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3>
                        Realm Chiropractic <br />
                        6580 Holman St #104
                        <br />
                        Arvada, CO 80004
                      </h3>
                    </a>
                  </div>
                </div>
                <section className="contactPageinfoMap">
                  <LocationMap center={arvadaCenter} />
                </section>
              </div>
            </div>
          </MapsLoadProvider>
          <div className="iconGroup">
            <Link target="_blank" href={"https://twitter.com/Realmlakewood"}>
              <AiOutlineX color="white" size={30} />
            </Link>
            <Link
              target="_blank"
              href={"https://www.facebook.com/realmlakewood/?fref=ts/"}
            >
              <AiFillFacebook color="white" size={30} />
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/realmchiropractic/"}
            >
              <AiFillInstagram color="white" size={30} />
            </Link>
          </div>
        </section>
        <ContactForm />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
