import {Tabs, TabsContent, TabsList, TabsTrigger} from "./ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./ui/card";

interface TechnologyProps {
    active: string;
    setActive: (value: string) => void;
    technology: {
        name: string;
        images: {portrait: string; landscape:string};
        description: string;
    }[]
}

const TechnologyTabs = ({active, setActive, technology}: TechnologyProps) => {
    return (
        <Tabs defaultValue={active} onValueChange={setActive} className="max-w-[635px] lg:flex-row items-center gap-8 lg:pl-4 px-6">
            <TabsList className="flex lg:flex-col h-auto gap-8 bg-transparent border-0">
                {technology.map((list, index) => (
                    <TabsTrigger
                        key={index}
                        value={list.name}
                        className="lg:w-18 lg:h-18 sm:w-[56px] sm:h-[56px] w-[40px] h-[40px] pb-2 text-lg sm:text-2xl lg:text-[32px] text-white border border-white/50 data-[state=active]:bg-white data-[state=active]:text-darkblue rounded-full cursor-pointer  hover:bg-white hover:text-darkblue transition ease-out duration-300"
                    >
                        {index + 1}
                    </TabsTrigger>
                ))}
            </TabsList>

            {technology.map(tech => (
                <TabsContent key={tech.name} value={tech.name}>
                    <Card className="bg-transparent border-none text-white p-0 text-center lg:text-left">
                        <CardHeader className="p-0">
                            <CardDescription className="lg:text-3xl sm:text-2xl text-lg uppercase font-bellefair ">the terminology...</CardDescription>
                            <CardTitle className="text-white font-bellefair font-normal uppercase text-2xl sm:text-[40px] lg:text-[56px]">{tech.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="text-lg font-barlow text-lightblue">{tech.description}</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            ))}

        </Tabs>
    )
}
export default TechnologyTabs;