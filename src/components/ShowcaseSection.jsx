import React, { useRef }  from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    const replacementProjectImageUrl = "/images/autolux.png";


    useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y: 50, opacity: 0
            },
            {
                y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            }
        )
    })
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
    }, []);
    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <a href="https://aas3-alpha.vercel.app/"><img src={replacementProjectImageUrl} alt="AutoLux" /></a>
                        </div>
                        <div className="text-content">
                            <h2>AutoLux</h2>
                            <p className="text-white-50 md:text-xl">
                                AutoLux is a full-stack automobile accessories e-commerce platform built with the MERN stack. It enables users to browse and purchase products, manage orders, and interact with a streamlined shopping experience, with backend APIs supporting authentication, products, discounts, returns, and order management.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden" ref={project2Ref}>
                        <div className="project">
                            <div className="image-wrapper bg-[#ffefdb]">
                                <a href="https://www.figma.com/proto/qoIdmY3p4IJIvszpPUIhMw/Portfolio?node-id=301-3526&t=Yi0iguCXfS2vsmXA-1&scaling=scale-down&content-scaling=fixed&page-id=45%3A539&starting-point-node-id=301%3A4774"><img src="/images/aure_image.png" alt="Auré" /></a>
                            </div>
                            <h2>Prototype of an E-commerce Application - Auré</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper">
                                <a href="https://www.figma.com/proto/0vSOa0BLZxTEV74Im8ty7H/Moneytor---A-Personal-Finance-Tracker?node-id=96-4&t=gJpXCplJGILaJYaz-1"><img src="/images/moneytor-dashboard-image.png" alt="Moneytor" /></a>
                            </div>
                            <h2>Prototype of a Personal Finance tracking and Management made simple with a powerful, user-friendly and easy to use application named Moneytor.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
