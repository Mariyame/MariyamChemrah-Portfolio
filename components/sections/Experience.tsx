import  Container  from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { Card } from "@/components/ui/card";
import { experienceData } from "@/data/experienceData";
import { cn } from "@/lib/utils";

export default function Experience() {
    return(
        <section id="experience" className="py-2 sm:py-12">
            <Container>
                <Heading title="Experience" subtitle="My Professional Journey" />
        
                <div className="">
                 {experienceData.map((experience, index) => (
                    <div key={index} className="">
                        <div className="grid grid-cols-[40px_10fr] md:grid-cols-[1fr_4fr] md:gap-2">
                            <div className="h-ful">
                                <p className="h-full mt-10 md:mt-6">
                                    <span className="hidden md:block ml-4">
                                          {experience.year}
                                    </span>
                                  
                                    <span className="relative flex size-3 -left-1.5 -top-4.5">
                                        <span className={cn("absolute inline-flex h-full w-full rounded-full bg-accent/75", index === 0 && "animate-ping")}></span>
                                        <span className="relative inline-flex size-3 rounded-full bg-accent"></span>
                                    </span>
                                    {/* <span className="absolute -left-1.5 top-1 inline-block w-3 h-3 bg-accent rounded-full"></span> */}
                                    <p className={cn("relative border-accent border-l h-full -mt-6.5",
                                                index === experienceData.length - 1 && "border-l-0"
                                                )}>
                                    </p>
                                </p>
                            </div>
                            <Card className="grid grid-cols-[1fr] md:grid-cols-[1fr_2fr] gap-4 mb-1 md:mb-2">
                                <div className="">
                                    <p className="md:hidden">{experience.year}</p>
                                    <p>{experience.title}</p>
                                    <p>{experience.company}</p>
                                </div>
                                <div className="hidden md:block">
                                    <p>{experience.description}</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                 ))}
                </div>
            </Container>   
        </section>   
    );                  
}