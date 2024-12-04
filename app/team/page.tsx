import Image from "next/image";
import Link from "next/link";


import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import Hero from "@/public/teamHero.jpg";
import Team1 from "@/public/team1.jpg"
import Team2 from "@/public/team2.jpg"

export default function Team() {
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
            unoptimized={true}
            priority={true}
          />
        </div>
        <div className="logoFull">
          <div className="heroText">
            <h1>Our Team</h1>

          </div>
          <div className="heroCTA">
            <a href="tel:+7207223357">Call Now: 720-722-3357</a>
          </div>
        </div>
      </section>
      <section className="teamCont">
        <div className="teamImgCont">
          <div className="teamImg">
            <Image
              src={Team1}
              alt="plant"
              layout="fill"
              objectFit="contain"
              placeholder="blur"

            />
          </div>
        </div>
        <div className="teamText">
          <h2>Dr. Rachel Kapustka</h2>
          <hr className="teamLine"></hr>
          <p>
            Dr. Rachel brings over 20 years of service to the chiropractic profession. Her experience, as an athlete throughout college,
            with chiropractic care kept her healthy, strong, injury free and recovering quickly. She learned the value of having a highly
            functioning structure as a student athlete and became so passionate about helping others in this way that she started working at
            16 years old in chiropractic offices. As she finished her B.S. in Kinesiology, she decided to continue on and become a Doctor of Chiropractic.
            She graduated with honors as a Magna Cum Laude and a master structural adjuster. Throughout the years she has added in functional nutrition to
            support the healing process. By teaching clients how to eat to heal and receive consistent structural chiropractic work, the body functions better.
            She loves practicing with her life partner, learning ASL, playing with her son, exercise of all kinds, and learning about the body. Her purpose in
            life is to experience joy in all things!
          </p>
        </div>
      </section>
      <section className="team2Cont">
        <div className="team2text">
          <h2>Dr. Nick Kapustka</h2>
          <hr className="teamLine"></hr>
          <p>
            Dr. Nick graduated from Sherman College of Chiropractic in 2004 where he earned the honors of Magna Cum Laude and the Rising Star award given to a recent Sherman College graduate who has demonstrated exceptional achievements and service in the community. Dr. Nick’s focus on education came from growing up in a household with two amazing teachers as his parents. He has lectured both internationally and locally on a wide variety of health and life topics. Dr. Nick first learned about the importance of a healthy functioning body during an internship in a pediatric oncology unit in Madrid, Spain. From that point on, it was his mission to learn as much as possible to be able to help as many people as possible.              </p>
          <p>
            When Dr. Nick is away from the office, you will find him spending time with Dr. Rachel and their “magic man” of a son, Noah. He also enjoys spending time with friends, gardening, running, practicing American Sign Language, spending time in nature, reading, and playing basketball.              </p>

        </div>
        <div className="teamImg1Cont">
          <div className="team1img">
            <Image
              src={Team2}
              alt="plant"
              layout="fill"
              objectFit="cover"
              placeholder="blur"

            />
          </div>
        </div>
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