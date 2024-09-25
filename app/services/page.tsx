"use client"

import Image from "next/image";
import { useState } from "react";

import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import Hero from "@/public/structuralHero.jpg";





export default function NewPatients() {
    //STRUCTURAL
    const structuralTitle: string = "What is Structural Chiropractic?";
    const structuralText: string[] = [
        "Understand the Basics...",
        "Most chiropractors are what is known as \"conventional\" chiropractors. What does this mean? Conventional chiropractors focus on goals such as: decreasing muscular spasm, increasing range of motion, and reducing pain. This is how most chiropractors practice, and I believe most of them are great at what they do. It falls under the umbrella category of symptom relief/symptom management.",
        "Structural Chiropractic",
        "...Think of your spine as the foundation for a building. If the foundation was off, would you expect the floors to creak, the walls to crack, the windows and doors to break down? Now you can spend time patching all the damage, but you would be doing so with the expectation that in a short time the problems will have to be.....?",
        "...Repaired Again... and Again...",
        "And suddenly instead of achieving a true correction, we're relying on chiropractic like a natural (and sometimes expensive) aspirin.",
        "So Let's Get You Back to Normal!",
        "Rather than constantly repairing damage, at Realm Chiropractic, we have chosen to fix the underlying Foundation and help your spine reach Normal Structure.",
        "Of course our services aren't for everyone. However, if you are tired of constantly patching the problem and you're looking for a long term solution that you can both feel AND see for yourself, then Realm Chiropractic may be the right place for you. Once the foundation has been fixed, then we will teach you how to keep it that way through customized recommendations designed for your spine, so that the problem does not return."
    ];
    const structuralList: string[][] = [[""]];
    const structuralText2: string[] = []

    //YOGA
    const yogaTitle: string = "Personalized Yoga Sessions";
    const yogaText: string[] = ["At Realm Chiropractic, we believe in a comprehensive approach to wellness. To complement our functional correction chiropractic care, we offer personalized yoga sessions tailored to your individual needs. Our integrated approach to yoga and chiropractic care provides:"];
    const yogaList: string[][] =
        [
            ["Enhanced Flexibility and Strength: ", "Personalized yoga sessions help improve your flexibility and strength, supporting your chiropractic adjustments and overall musculoskeletal health."],
            ["Stress Relief and Relaxation: ", "Yoga promotes relaxation and reduces stress, enhancing the benefits of your chiropractic care and contributing to your overall well-being."],
            ["Improved Posture and Alignment: ", "Through guided yoga practices, we focus on postural awareness and alignment, which supports the structural integrity of your spine and joints."],
            ["Holistic Healing: ", "Combining yoga with chiropractic care fosters a holistic healing environment, addressing both physical and mental health for a balanced lifestyle."]
        ];
    const yogaText2: string[] = ["To maximize the benefits, we recommend a minimum of three yoga sessions. This commitment allows us to tailor a program specifically for you, ensuring sustained improvements in flexibility, strength, and overall well-being.", "Our personalized yoga sessions are designed to work synergistically with your chiropractic adjuctments, ensuring a comprehensive and tailored approach to your health and wellness. Whether you're new to yoga or an experienced practitioner, our customized sessions will enhance your chiropractic care and help you achieve your health goals."]

    //ATHLETIC
    const athleticTitle: string = "Athletic Performance Consulting";
    const athleticText: string[] = ["At Realm Chiropractic, we understand that athletes require specialized care to perform at their best. Our athletic performance consulting services, combined with functional correction chiropractic care, are designed to optimize your physical capabilities and enhance your overall performance. Our approach includes:"];
    const athleticList: string[][] =
        [
            ["Performance Optimization:", "We assess and address any musculoskeletal imbalances, ensuring your body functions at its peak."],
            ["Injury Prevention: ", "Through chiropractic adjustments and targeted performance strategies, we help prevent injuries and keep you in top shape."],
            ["Enhanced Recovery: ", "Our treatments promote faster recovery times, allowing you to return to training and competition quickly and safely."],
            ["Customized Performance Plans: ", "We create individualized performance plans tailored to your specific sport, goals, and needs. Our plans incorporate advanced chiropractic techniques, exercises, stretches, nutrition, and other recovery and performance recommendations to help you achieve optimal performance."]
        ];
    const athleticText2: string[] = ["Whether you’re a professional athlete or a weekend warrior, our integrated approach to athletic performance consulting and chiropractic care will help you achieve your highest potential. Let us support your journey to peak performance and optimal health."]

    //KINESIO
    const kinesioTitle: string = "Kinesiotaping";
    const kinesioText: string[] = ["At Realm Chiropractic, we utilize Kinesiotaping to provide additional support for structural and neurological imbalances. Kinesiotaping is an effective tool used in conjunction with our chiropractic care to enhance your treatment outcomes. Our approach to Kinesiotaping includes:"];
    const kinesioList: string[][] =
        [
            ["Support Structural Integrity: ", "Kinesiotaping helps stabilize and support muscles and joints, promoting proper alignment and function."],
            ["Enhance Neurological Function: ", "By improving proprioception and neural feedback, Kinesiotaping aids in the body's natural healing processes."],
            ["Reduce Pain and Inflammation: ", "The application of Kinesiotaping can help alleviate discomfort and reduce swelling, facilitating faster recovery."],
            ["Improve Mobility: ", "Kinesiotaping allows for a full range of motion while providing the necessary support, making it ideal for active individuals and athletes."]
        ];
    const kinesioText2: string[] = ["Our Kinesiotaping services are designed to complement your functional correction chiropractic care, providing a holistic approach to your health and wellness. Whether you’re recovering from an injury, managing chronic pain, or seeking to improve your athletic performance, Kinesiotaping can be a valuable addition to your treatment plan."]

    //NUTRITION
    const nutritionTitle: string = "Functional Nutritional Support";
    const nutritionText: string[] = ["At Realm Chiropractic, we are dedicated to your holistic well-being. To complement our functional chiropractic care, we offer a range of high-grade functional nutrition products from trusted brands. These supplements are carefully selected to:"];
    const nutritionList: string[][] =
        [
            ["Support General Health: ", "Enhance your overall wellness with premium nutritional support."],
            ["Strengthen Musculoskeletal Structure: ", "Boost your body's resilience and recovery with targeted nutrients."],
            ["Restore Nutritional Imbalances: ", "Address deficiencies that may be affecting your body's ability to adapt and thrive."]
        ];
    const nutritionText2: string[] = ["Our functional nutrition products are integrated into your chiropractic care plan to maximize your health outcomes."]

    //HEALTH
    const healthTitle: string = "Nutritional Health Assessments";
    const healthText: string[] = ["In addition to our functional correction chiropractic services, we provide functional nutritional health assessments tailored to support a ketogenic lifestyle. Our assessments are designed to:"];
    const healthList: string[][] =
        [
            ["Evaluate Nutritional Needs: ", "Identify specific areas where dietary adjustments can improve your health."],
            ["Personalize Your Diet Plan: ", "Craft a ketogenic diet plan with specific supplement recommendations that suits your individual needs and lifestyle."],
            ["Monitor and Adjust: ", "Regularly review and adapt your diet to ensure optimal results."]
        ];
    const healthText2: string[] = ["Whether you're looking to enhance your overall wellness or address specific health concerns, our integrated approach combines chiropractic care with nutritional support to help you achieve your health goals."]


    //SAUNA
    const saunaTitle: string = "Full spectrum Infrared sauna";
    const saunaText: string[] = ["Infrared Saunas are an effective tool for natural healing and prevention.  Infrared has the ability to penetrate human tissue which in turn produces a host of anti-aging health benefits. If you want to get yourself back into balance, the benefits of an infrared sauna may be just what you need to achieve your wellness goals."];
    const saunaList: string[][] =
        [
            ["Detoxification: ", "We are exposed and we ingest toxins everyday. Toxic substances are in the air we breathe, the water we drink, the food we eat and in the products we put on our skin. The fundamental benefit of an infrared sauna is to naturally detox the body through sweat. The technology allows the body to heat from the inside up to 3 degrees allowing your body to experience a deep productive sweat rather than just hot ambient air that only heats your outer skin. The Sunlighten infrared will provide a deep productive detoxifying experience that will leave you feeling refreshed and energized."],
            ["Muscle Recovery and Performance: ", "When the body is trying to heal from an injury or recovering from a workout, deep penetrating infrared rays have been clinically proven to restore cellular repair while increasing circulation to remove cellular debris that includes pain producing chemicals such as lactic acid. Recovering with an infrared sauna session allows for damaged tissues to be healed and energy to be restored more effectively and more efficiently."],
            ["Relaxation: ", "The therapeutic heat helps relax muscles that become tense under chronic stress.  As chiropractors, it’s vitally important to provide support for our clients to balance the autonomic nerve system.  When you do an IR sauna, the technology of the Sunlighten Sauna helps to calm muscles allowing you to feel relaxed and energized. "],
            ["Strengthens Immune System: ", "It has been shown that when we increase our body’s core temperature (fever), we may increase our ability to fight infections by stimulating heat shock proteins that deter viruses from replicating and decrease inflammatory cytokine proteins. The Sunlighten’s infrared heating technology penetrates to the cellular level, clinically proven to raise core body temperature by 3 degrees. "]
        ];
    const saunaText2: string[] = ["Whether you're looking to enhance your overall wellness or address specific health concerns, our integrated approach combines chiropractic care with nutritional support to help you achieve your health goals.",
        "For more benefits such as weight loss, heart health and anti-aging read here: https://www.sunlighten.com/infrared-sauna-health-benefits",
        "To schedule or for questions, call our office! Sessions will be up to an hour.  Please bring proper attire such as a workout outfit or bathing suit, water, and a towel."
    ]

    //Myofascial
    const myofascialTitle: string = "Myofascial Gliding and Static Cupping";
    const myofascialText: string[] = ["At Realm Chiropractic, we offer gliding and static cupping as part of our comprehensive chiropractic care services. Cupping therapy, an ancient technique, enhances our ability to treat a variety of conditions and improve overall well-being. Our approach includes:"];
    const myofascialList: string[][] =
        [
            ["Gliding Cupping: ", "This technique involves moving the cups across the skin to promote increased blood flow, reduce muscle tension and enhance mobility. It’s particularly effective for addressing larger muscle groups and areas with significant tension."],
            ["Static Cupping: ", "In this method, cups are placed on specific points and left static for a duration. This helps to relieve deep-seated muscle tension, improve circulation, and promote relaxation and healing."]
        ];
    const myofascialText2: string[] = [""];


    //Cupping
    const cupTitle: string = "Benefits of Cupping Therapy";
    const cupText: string[] = [""];
    const cupList: string[][] =
        [
            ["Enhanced Circulation:", "Cupping increases blood flow to targeted areas, aiding in the delivery of oxygen and nutrients to tissues and promoting faster healing."],
            ["Pain Relief: ", "Both gliding and static cupping can effectively reduce muscle pain and stiffness by alleviating muscle knots and improving tissue elasticity."],
            ["Detoxification: ", "Cupping helps to draw out toxins and waste products from the tissues, promoting detoxification and overall wellness."],
            ["Relaxation and Stress Reduction: ", "The therapeutic effects of cupping promote relaxation and reduce stress, complementing the benefits of chiropractic adjustments."],
            ["Improved Mobility: ", "By reducing muscle tension and enhancing flexibility, cupping can improve your range of motion and overall mobility."]
        ];
    const cupText2: string[] = ["Our cupping therapy is designed to work synergistically with functional correction chiropractic care, offering a holistic approach to your health and well-being. Whether you’re dealing with chronic pain, recovering from an injury, or looking to enhance your overall wellness, our integrated treatments can help you achieve your health goals."];




    const [displayTitle, setDisplayTitle] = useState(structuralTitle);
    const [displayText, setDisplayText] = useState(structuralText);
    const [displayList, setDisplayList] = useState(structuralList);
    const [displayText2, setDisplayText2] = useState(structuralText2);

    const [selected, setSelected] = useState(0);

    const handleButtonClick0 = () => {
        setDisplayTitle(structuralTitle);
        setDisplayText(structuralText);
        setDisplayList(structuralList);
        setDisplayText2(structuralText2);
        setSelected(0);
    };
    const handleButtonClick1 = () => {
        setDisplayTitle(yogaTitle);
        setDisplayText(yogaText);
        setDisplayList(yogaList);
        setDisplayText2(yogaText2);
        setSelected(1);
    };
    const handleButtonClick2 = () => {
        setDisplayTitle(athleticTitle);
        setDisplayText(athleticText);
        setDisplayList(athleticList);
        setDisplayText2(athleticText2);
        setSelected(2);
    };
    const handleButtonClick3 = () => {
        setDisplayTitle(kinesioTitle);
        setDisplayText(kinesioText);
        setDisplayList(kinesioList);
        setDisplayText2(kinesioText2);
        setSelected(3);
    };
    const handleButtonClick4 = () => {
        setDisplayTitle(nutritionTitle);
        setDisplayText(nutritionText);
        setDisplayList(nutritionList);
        setDisplayText2(nutritionText2);
        setSelected(4);
    };
    const handleButtonClick5 = () => {
        setDisplayTitle(healthTitle);
        setDisplayText(healthText);
        setDisplayList(healthList);
        setDisplayText2(healthText2);
        setSelected(5);
    };
    const handleButtonClick6 = () => {
        setDisplayTitle(saunaTitle);
        setDisplayText(saunaText);
        setDisplayList(saunaList);
        setDisplayText2(saunaText2);
        setSelected(6);
    };
    const handleButtonClick7 = () => {
        setDisplayTitle(myofascialTitle);
        setDisplayText(myofascialText);
        setDisplayList(myofascialList);
        setDisplayText2(myofascialText2);
        setSelected(7);
    };
    const handleButtonClick8 = () => {
        setDisplayTitle(cupTitle);
        setDisplayText(cupText);
        setDisplayList(cupList);
        setDisplayText2(cupText2);
        setSelected(8);
    };

    return (
        <div>
            <section className="hero">
                <div className="newHeroImgContainer">
                    <Image
                        src={Hero}
                        alt="woman shoulder"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        sizes="100vh"
                    />
                </div>
                <div className="logoFull">
                    <div className="heroText">
                        <h1>Services</h1>

                    </div>
                    <div className="heroCTA">
                        <a href="tel:+7207223357">Call Now: 720-722-3357</a>
                    </div>
                </div>
            </section>
            <section className="infoContainer2">
                <div className="infoAside2">
                    <h3>Select Below to Learn More</h3>
                    <div className="infoAside2List">
                        <a onClick={handleButtonClick0} className={selected === 0 ? "font-semibold" : "font-normal"}>{structuralTitle}</a>
                        <a onClick={handleButtonClick1} className={selected === 1 ? "font-semibold" : "font-normal"}>{yogaTitle}</a>
                        <a onClick={handleButtonClick2} className={selected === 2 ? "font-semibold" : "font-normal"}>{athleticTitle}</a>
                        <a onClick={handleButtonClick3} className={selected === 3 ? "font-semibold" : "font-normal"}>{kinesioTitle}</a>
                        <a onClick={handleButtonClick4} className={selected === 4 ? "font-semibold" : "font-normal"}>{nutritionTitle}</a>
                        <a onClick={handleButtonClick5} className={selected === 5 ? "font-semibold" : "font-normal"}>{healthTitle}</a>
                        <a onClick={handleButtonClick6} className={selected === 6 ? "font-semibold" : "font-normal"}>{saunaTitle}</a>
                        <a onClick={handleButtonClick7} className={selected === 7 ? "font-semibold" : "font-normal"}>{myofascialTitle}</a>
                        <a onClick={handleButtonClick8} className={selected === 8 ? "font-semibold" : "font-normal"}>{cupTitle}</a>
                    </div>
                </div>
                <div className="infoContent2">
                    <h2>{displayTitle}</h2>
                    {displayText.map((line, id) => (
                        <p className="pb-5" key={id}>{line}</p>
                    ))}
                    <div className="infoListCont2">
                        <ul className="infoList2">
                            {displayList[0][0] !== ""
                                ?
                                displayList.map((item, itemId) =>
                                (<li key={itemId}>
                                    <div className="infoListItem2">
                                        <p><b>{item[0]}</b> {item[1]}</p>
                                    </div>
                                </li>))
                                :
                                <></>}
                        </ul>
                    </div>
                    {displayText2[0] !== ""
                        ?
                        displayText2.map((line, id) => (
                            <p className="pb-5" key={id}>{line}</p>
                        ))
                        :
                        <></>
                    }
                    <div className="servicesLineCont">
                        <hr className="servicesLine"></hr>
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