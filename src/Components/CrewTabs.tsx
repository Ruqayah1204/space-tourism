import {Tabs, TabsContent, TabsList, TabsTrigger} from "./ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./ui/card";

interface CrewProps {
    active: string;
    setActive: (value: string) => void; 
    crews: { 
        name: string; 
        images: { png: string; webp: string }; 
        role: string; 
        bio: string; 
    }[]
}

const CrewTabs = ({active, setActive, crews}: CrewProps) => {
    return (
        <Tabs defaultValue={active} onValueChange={setActive} className="w-full lg:gap-10 gap-6 items-center text-center lg:text-left lg:items-start lg:h-[700px] lg:pb-16 ">

            {/* Tab Content */}
            {crews.map((list) =>(

                <TabsContent key={list.name} value={list.name} className="mt-10 lg:content-center">
                    <Card className="bg-transparent border-none text-white p-0">
                        <CardHeader className="p-0">
                            <CardDescription className="lg:text-3xl sm:text-2xl text-lg uppercase font-bellefair ">{list.role}</CardDescription>
                            <CardTitle className="text-white font-bellefair font-normal uppercase text-2xl sm:text-[40px] lg:text-[56px]">{list.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="text-lg font-barlow text-lightblue">{list.bio}</p>
                        </CardContent>                     

                    </Card>
                    {/* <h1>{list.name}</h1> */}
                    <div className="">
                    </div>
                </TabsContent>
            ))}
            
            <TabsList className="flex gap-8 bg-transparent border-0">
                {crews.map((list, index) => (
                    <TabsTrigger
                        key={index}
                        value={list.name}
                        className="w-4 h-4 pb-2 bg-white/50 data-[state=active]:bg-white rounded-full cursor-pointer  hover:bg-white transition ease-out duration-300"
                    >
                    </TabsTrigger>
                ))}
            </TabsList>



        </Tabs>
    )
}

export default CrewTabs;