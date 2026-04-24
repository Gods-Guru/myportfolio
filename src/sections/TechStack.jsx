import React from 'react';
import TitleHeader from "../components/TitleHeader.jsx";
import { techStackImgs } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center'
            }
        })
    })

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="My Preferred Tech Stack"
                    sub="🤝 The Skills I Bring to the Table"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-16">
                    {techStackImgs.map((icon) => (
                        <div key={icon.name} className="tech-card relative flex flex-col justify-center items-center px-6 py-10 gap-6 rounded-2xl bg-black-100 border border-black-50 overflow-hidden group hover:-translate-y-3 transition-all duration-500 ease-out cursor-pointer hover:border-purple-800/50 hover:shadow-[0_0_40px_rgba(107,33,168,0.2)]">
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="w-20 h-20 flex justify-center items-center z-10">
                                <img src={icon.imgPath} alt={icon.name} className="w-full h-full object-contain drop-shadow-xl transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] group-hover:-rotate-6" />
                            </div>

                            <div className="w-full z-10 text-center">
                                <p className="text-white-50 font-semibold text-lg transition-colors duration-500 group-hover:text-white">{icon.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default TechStack
