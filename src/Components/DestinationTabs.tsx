import {Tabs, TabsContent, TabsList, TabsTrigger} from "./ui/tabs";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "./ui/card";

interface TabsProps {
    active: string;
    setActive: (value: string) => void; 
    destinations: { 
        name: string; 
        images: { png: string; webp: string }; 
        description: string; 
        distance: string; 
        travel: string 
    }[]
}


const DestinationTabs = ({active, setActive, destinations}: TabsProps) => {
    return (
        <Tabs defaultValue={active} onValueChange={setActive} className="w-full lg:max-w-[539px] px-10 items-center text-center lg:text-left lg:items-start px-2 sm:px-10">
            <TabsList className="flex gap-8 bg-transparent border-0">
                {destinations.map((list, index) => (
                    <TabsTrigger
                        key={index}
                        value={list.name}
                        className="pb-2 text-lightblue font-barlow-condensed uppercase  border-b-2 border-b-transparent data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:text-white hover:text-white hover:border-b-2 hover:border-white/30 transition ease-out duration-300"
                    >
                        {list.name}

                    </TabsTrigger>
                ))}
            </TabsList>

            {/* Tab Content */}

            {destinations.map((list) =>(

                <TabsContent key={list.name} value={list.name} className="mt-10">
                    <Card className="bg-transparent border-none text-white p-0">
                        <CardHeader className="p-0">
                            <CardTitle className="text-white font-bellefair font-normal uppercase text-[56px] md:text-[80px] lg:text-8xl">{list.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="text-lg font-barlow text-lightblue">{list.description}</p>
                        </CardContent>
                        <hr className="border-t border-white/30"/>
                        {/* <CardFooter className="grid grid-cols-2 p-0"> */}
                        <CardFooter className="flex flex-col sm:flex-row gap-y-4 p-0 text-lightblue">
                            <div className="flex-1 flex flex-col gap-2">
                                <h2 className="text-sm font-barlow-condensed tracking-widest uppercase">Avg. Distance</h2>
                                <p className="text-[28px] uppercase font-bellefair">{list.distance}</p>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-sm font-barlow-condensed tracking-widest uppercase">Est. Travel Time</h2>
                                <p className="text-[28px] uppercase font-bellefair">{list.travel}</p>
                            </div>
                        </CardFooter>

                    </Card>
                    {/* <h1>{list.name}</h1> */}
                    <div className="">
                    </div>
                </TabsContent>
            ))}




        </Tabs>
    )
}

export default DestinationTabs;