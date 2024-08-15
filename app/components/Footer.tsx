import Logo from "../../public/og.png";
import Image from "next/image";


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
            </div>
            <div className="footerBottom">
                <div className="footerCopyContainer">
                    <h3>Realm Chiropractic</h3>
                </div>
            </div>
        </footer>

    );

}