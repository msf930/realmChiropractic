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

                <div className="footerLinkContainer">
                    <a href="tel:+7207223357">720-722-3357</a>
                    <a href="mailto:realmlakewood@gmail.com">realmlakewood@gmail.com</a>
                </div>
                <IconContext.Provider value={{ color: "white", size: "17px" }}>
                    <div className="iconGroup">
                        <Link href={"https://twitter.com/Realmlakewood"}><AiOutlineX /></Link>
                        <Link href={"https://www.facebook.com/realmlakewood/?fref=ts/"}><AiFillFacebook /></Link>
                        <Link href={"https://www.instagram.com/realmchiropractic/"}><AiFillInstagram /></Link>
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