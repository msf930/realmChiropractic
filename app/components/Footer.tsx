"use client"

import Logo from "../../public/og.png";
import Image from "next/image";

import Link from "next/link";

import { IconContext } from "react-icons";
import { AiFillFacebook, AiOutlineX, AiFillInstagram } from "react-icons/ai";


export default function Footer() {

    return (
        <footer>
            <div className="footerTop">
                <div className="footerLogoContainer">
                    <Image
                        src={Logo}
                        alt="FloWorks logo for footer"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <div className="footerNewsletterContainer">
                    <div className="footerNewsletterTitleContainer">
                        <h3>Step Inside The Realm! </h3>
                        <p>Get health insights, recovery tips and performance strategies delivered to you inbox weekly! </p>
                    </div>
                    <div className="footerNewsletterInputContainer">
                        <Link href="http://eepurl.com/g2eGi5" target="_blank">
                           
                            <button >Enter The Realm</button>
                        </Link>
                    </div>
                </div>
                <div className="footerLinkContainerRow">
                    <div className="footerLinkContainer">
                        <p>Lakewood Location</p>
                        <a href="tel:+7207223357">720-722-3357</a>
                        <a href="mailto:realmlakewood@gmail.com">realmlakewood@gmail.com</a>
                    </div>
                    <div className="footerLinkContainer">
                        <p>Arvada Location</p>
                        <a href="tel:+7205880498">720-588-0498</a>
                        <a href="mailto:realmarvada@gmail.com">realmarvada@gmail.com</a>
                    </div>
                </div>
                <IconContext.Provider value={{ color: "white", size: "17px" }}>
                    <div className="iconGroup">
                        <Link target="_blank" href={"https://twitter.com/Realmlakewood"}><AiOutlineX /></Link>
                        <Link target="_blank" href={"https://www.facebook.com/realmlakewood/?fref=ts/"}><AiFillFacebook /></Link>
                        <Link target="_blank" href={"https://www.instagram.com/realmchiropractic/"}><AiFillInstagram /></Link>
                    </div>
                </IconContext.Provider>
            </div>
            <div className="footerBottom">
                <div className="footerCopyContainer">
                    <h3>Realm Chiropractic</h3>
                </div>
            </div>
        </footer>

    );

}