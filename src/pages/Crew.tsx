import { useState } from "react";
import CrewTabs from "@/Components/CrewTabs";
import data from "../data.json"


const Crew = () => {
    const { crew } = data;
    const [activeTab, setActiveTab] = useState(crew[0].name);

        const activeImage = crew.find(li => li.name === activeTab) 


    return (
        <section className="container  mx-auto px-6 py-16">
            <div className="w-full max-w-[1110px] mx-auto">
                <h2 className="uppercase font-barlow-condensed tracking-[4px] text-lg sm:text-2xl">
                    <span className="font-bold text-white/40 pr-4">02</span>Meet your crew
                </h2>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-10">
                    <CrewTabs active={activeTab} setActive={setActiveTab} crews={crew}/>

                    <div className="max-w-[539px] flex items-center justify-center w-full relative">
                        <div className="absolute inset-x-0 -bottom-4 bg-black blur-[15px] h-10"></div>
                        <img src={activeImage?.images.png} alt={activeImage?.name} className="w-[70%] sm:w-auto" />
                    </div>
                    
 
                </div>
            </div>
        </section>
    )
}

export default Crew;

{/* <div class="absolute inset-0 bg-kotumablack/75 z-0"></div> */}