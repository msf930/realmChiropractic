"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../public/og.png";
import Image from "next/image";

declare global {
    interface Window {
        safari: {
            pushNotification: unknown
        }
    }
}

const getIsSafari = (): boolean => {
    if (typeof window === "undefined") return false;
    return (
        /constructor/i.test(window.HTMLElement as unknown as string) ||
        (function (p: unknown): boolean {
            return !!p && (p as { toString(): string }).toString() === "[object SafariRemoteNotification]";
        })(typeof window.safari !== "undefined" ? window.safari.pushNotification : undefined)
    );
};

const NavBar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [isSafari, setIsSafari] = useState(false);
    const [navIcon, setNavIcon] = useState("nav-icon4");

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
        if (showNavbar) {
            return setNavIcon("nav-icon4")
        } else {
            return setNavIcon("nav-icon4open")
        }
    }

    const [header, setHeader] = useState("header")

    const listenScrollEvent = () => {
        if (window.scrollY < 73) {
            return setHeader("header")
        } else if (window.scrollY > 70) {
            return setHeader("header2")
        }
    }


    useEffect(() => {
        setIsSafari(getIsSafari());
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (isSafari) {
            setHeader("header2");
        } else {
            window.addEventListener("scroll", listenScrollEvent);
        }
        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, [isSafari]);

    //const isSafari: boolean = /constructor/i.test(window["HTMLElement"])|| (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof window["safari"] !== 'undefined' && window["safari"].pushNotification));








    return (
        <header>
            <nav>
                <div className={header}>
                    <div className="container mx-auto px-3 h-full w-full">
                        <div className="flex justify-between items-center h-full w-full">
                            <div className="flex flex-row items-center gap-1">
                                <div className="navLogoCont">
                                    <Link href='/'>
                                        <Image
                                            src={Logo}
                                            alt="Realm logo for navagation bar"
                                            layout="fill"
                                            objectFit="contain"
                                        >
                                        </Image>
                                    </Link>
                                </div>

                            </div>
                            <div className="flex sm:hidden headerLinkContainer">
                                <div className="mx-3 text-center items-center justify-center border-2 border-white  px-4 py-2">
                                    <Link href="/contact">
                                        <p>Book Now</p>
                                    </Link>
                                </div>
                            </div>

                            <ul className="hidden sm:flex text-black text-center items-center">
                                <li className="mx-3 text-center items-center justify-center">
                                    <Link href="/">
                                        <p>Functional <br /> Correction</p>
                                    </Link>
                                </li>
                                <li className="mx-3 text-center items-center justify-center">
                                    <Link href="/newPatients">
                                        <p>New <br />Patients</p>
                                    </Link>
                                </li>
                                <li className="mx-3 text-center items-center justify-center">
                                    <Link href="/locations">
                                        <p>Locations</p>
                                    </Link>
                                </li>
                                <li className="mx-3 text-center items-center justify-center">
                                    <Link href="/team">
                                        <p>Team</p>
                                    </Link>
                                </li>
                                <li className="mx-3 text-center items-center justify-center">
                                    <Link href="/services">
                                        <p>Services</p>
                                    </Link>
                                </li>
                                {/* <li className="mx-3 text-center items-center justify-center">
                                {/* <li className="mx-3 text-center items-center justify-center">
                                    <Link href="/myofascialCupping">
                                        <p>Myofascial<br />Cupping</p>
                                    </Link>
                                </li> */}
                                <li className="mx-3 text-center items-center justify-center border-2 border-white  px-4 py-2">
                                    <Link href="/contact">
                                        <p>Book Now</p>
                                    </Link>
                                </li>
                                {/* <li>
                                    <div >
                                        <a  href="tel:+7202631345">720-263-1345</a>
                                    </div>
                                </li> */}
                            </ul>

                            <div className="flex sm:hidden white w-[100px]" onClick={handleShowNavbar}>
                                <div className={navIcon}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className={`nav-elements  ${showNavbar && 'active'}`}>
                                <nav>
                                    <ul>
                                        <li>
                                            <Link href="/" className="navMenuLink" onClick={handleShowNavbar}>Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/newPatients" className="navMenuLink" onClick={handleShowNavbar}>New Patients</Link>
                                        </li>
                                        <li>
                                            <Link href="/locations" className="navMenuLink" onClick={handleShowNavbar}>Locations</Link>
                                        </li>
                                        <li>
                                            <Link href="/team" className="navMenuLink" onClick={handleShowNavbar}>Team</Link>
                                        </li>
                                        <li>
                                            <Link href="/services" className="navMenuLink" onClick={handleShowNavbar}>Services</Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/structuralChiro" className="navMenuLink" onClick={handleShowNavbar}>Structural Chiropractic</Link>
                                        </li> */}
                                        {/* <li>
                                            <Link href="/myofascialCupping" className="navMenuLink" onClick={handleShowNavbar}>Myofascial<br />Cupping</Link>
                                        </li> */}
                                        <li>
                                            <Link href="/contact" className="navMenuLinkBook" onClick={handleShowNavbar}>Book Now</Link>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;