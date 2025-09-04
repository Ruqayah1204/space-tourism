import { useState } from "react";
import data from "../data.json"
import TechnologyTabs from "@/Components/TechnologyTabs";


const Technology = () => {
    const { technology } = data;
    const [activeTab, setActiveTab] = useState(technology[0].name)

    const activeImg = technology.find(tech => tech.name === activeTab);

    console.log(technology);
    return (
        <section className="max-w-[1440px] mx-auto flex flex-col items-end py-16">
            <div className="w-full max-w-[1275px]">
                <h2 className="uppercase font-barlow-condensed tracking-[4px] text-lg sm:text-2xl pl-4">
                    <span className="font-bold text-white/40 pr-4">03</span>space lauch 101
                </h2>
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 mt-10">
                    <TechnologyTabs active={activeTab} setActive={setActiveTab} technology={technology}/>
                
                    <div className="w-full ">
                        <img src={activeImg?.images.portrait} alt={activeImg?.name} className="hidden lg:block object-cover w-full h-full" />
                        <img src={activeImg?.images.landscape} alt={activeImg?.name} className="lg:hidden object-contain w-full" />
                    </div>
                </div>

                

            </div>
        </section>
    )
}

export default Technology;