import Section from "./Section"
import Button from "./Button"
import { curve, heroDepa } from "../assets"
import { BackgroundCircles, BottomLine, } from "./design/Hero"
import { useRef } from "react"
import Moto from "./Moto"


const Hero = () => {
    const parallaxRef = useRef(null);

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero">
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[1rem] md:mb-5 lg:mb-[2.25rem]">
                    <h1 className="h1 mb-6">Hall of {""} 
                        <span className="inline-block relative">Projects
                            <img
                                src={curve}
                                className="absolute top-full left-0
                                w-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve" />
                        </span> By Defhanaya
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-[6rem] text-n-2 lg:mb-[8rem] xl:mb-[7rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Button href="/contacts" white>
                        Reach Me
                    </Button>
                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient" />
                    <div className="absolute top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[64%] md:w-[138%] lg:-top-[104%]">
                        <img
                            src={heroDepa}
                            className="w-full"
                            width={1440}
                            height={1800}
                            alt="hero"
                        />
                    </div>
                                        
                    <BackgroundCircles />
                </div>
                
                <Moto className="hidden relative z-10 mt-20 lg:block" /> 
            </div>

            <BottomLine />
        </Section>
    )
}

export default Hero
