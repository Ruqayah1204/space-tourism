import DestinationTabs from "@/Components/DestinationTabs";
import data from "../data.json"
import { useState } from "react";

const Destination = () => {

    const { destinations } = data;
    const [activeTab, setActiveTab] = useState(destinations[0].name);

    const activeImage = destinations.find(destination => destination.name === activeTab) 

    console.log(destinations);
    
    return (
        <section className="container mx-auto px-6 py-16">
            <div className="w-full max-w-[1110px] mx-auto">
                <h2 className="uppercase font-barlow-condensed tracking-[4px] text-lg sm:text-2xl">
                    <span className="font-bold text-white/40 pr-4">01</span>pick your destination
                </h2>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-y-20 gap-8 mt-10 py-16">
                    <div className="max-w-[539px] flex items-center justify-center w-full ">
                        <img src={activeImage?.images.png} alt={activeImage?.name} className="w-[70%] sm:w-auto" />
                    </div>
 
                    <DestinationTabs active={activeTab} setActive={setActiveTab} destinations={destinations}/>
                </div>

                

            </div>
        </section>
    )
}

export default Destination;