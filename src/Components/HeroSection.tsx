import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const HeroSection = () => {
    return (
        <div className="lg:max-w-[1110px] md:max-w-[532px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[30px] place-items-center mt-20 text-center lg:text-left lg:min-h-[70vh] ">
            <div>
                <h2 className="uppercase text-lightblue font-barlow-condensed font-normal md:text-3xl tracking-widest text-base">So, you want to travel to</h2>
                <h1 className="uppercase font-bellefair md:text-9xl text-7xl py-8">Space</h1>
                <p className="font-barlow text-lg text-lightblue leading-7">
                    Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className="lg:mr-10 lg:justify-self-end">
                {/* <Button className="rounded-full bg-white text-dark-blue-900 text-[20px] lg:text-[32px] font-bellefair uppercase w-40 h-40 lg:w-60 lg:h-60 transition-shadow duration-300"> */}
                <Button className="bg-white text-darkblue rounded-full text-lg md:text-3xl font-bellefair uppercase w-40 h-40 md:w-60 md:h-60 hover:shadow-btn-shadow hover:bg-white hover:text-darkblue/50 transition duration-500">
                    <Link to="/destination">Explore</Link> 
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;

