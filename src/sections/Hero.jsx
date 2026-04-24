import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            })
    })

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                {/*  LEFT: HERO CONTENT  */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-5
                    x">
                        <div className="hero-text">
                            <h1>Shaping
                                <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2 text-purple-800">
                                        <img
                                            src={word.imgPath}
                                            alt={word.text}
                                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                        />
                                        <span>{word.text}</span>
                                    </span>
                                    ))}
                                </span>
                            </span>
                            </h1>
                            <h1>into <span className="text-purple-800">Real</span> Projects</h1>
                            <h1>that Deliver <span className="text-purple-800">Results</span></h1>
                        </div>
                        <p className="text-white-50 md:text:text-xl relative z-10 pointer-events-none">Hi, I'm Grace. A software developer and UI UX designer based in Nigeria with a passion for technology,</p>
                        <p className="text-white-50 md:text:text-xl relative z-10 pointer-events-none"> an obsession with software development, design and a love for learning.</p>
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my Work"
                        />
                    </div>
                </header>
                {/*  RIGHT: HERO IMAGE  */}
                <figure>
                    <div className="hero-3d-layout flex justify-center items-center">
                        <img 
                            src="/images/hero-image.png" 
                            alt="Hero Graphic" 
                            className="w-[80%] h-[80%] xl:w-full xl:h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                    </div>
                </figure>
            </div>
            <AnimatedCounter />
        </section>
    )
}
export default Hero
