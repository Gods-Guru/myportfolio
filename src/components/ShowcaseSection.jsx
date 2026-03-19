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
                            <img src="/images/moneytor-dashboard-image.png" alt="Moneytor" />
                        </div>
                        <div className="text-content">
                            <h2>Prototype of a Personal Finance tracking and Management made simple with a powerful, user-friendly and easy to use application named Moneytor.</h2>
                            <p className="text-white-50 md:text-xl">
                                Designed using tools like Figma and Figjam for enhanced UI and good Developer Experience.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden" ref={project2Ref}>
                        <div className="project">
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/financer_image.png" alt="Financer" />
                            </div>
                            <h2>Prototype of a Library Management Platform - Financer</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/resturant-web-image.png" alt="Tastier" />
                            </div>
                            <h2>Prototype of a Restaurant Website - Tastier</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
