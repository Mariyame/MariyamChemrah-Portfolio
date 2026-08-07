import Image from "next/image";
import  Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import Statistics from "@/components/sections/Statistics";


export default function About() {
    return(
        <section id="about" className="py-6 sm:py-12">
            <Container>
                <div className="flex flex-col">
                    <div className="flex flex-col sm:flex-row gap-4 order-2 sm:order-1">
                        <div className="relative w-1/3 sm:w-1/2 hidden md:block">
                            <Image 
                            src="/profile.png" 
                            alt="Profile Picture" 
                            width={300} height={300} 
                            className="absolute bottom-0 rounded-md shrink-0"
                            />
                            <div className="absolute z-10 bottom-0 left-0 bg-surface border border-border rounded-md text-xs p-3">
                                <p>Experience</p>
                                <span className="text-2xl text-label after:content-['+'] after:text-foreground after:font-bold ">8</span>
                                <p>Years</p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 py-6 sm:py-12 mt-6">
                            <p className="text-xs font-semibold tracking-tighter text-label uppercase mb-2">About Me</p>
                            <h3 className="font-semibold text-2xl mb-4">
                                Full-Stack Developer with 
                                <span className="text-label"> 8+ Years</span> of Experience
                            </h3>
                            <p>
                                I&apos;m a passionate Full-Stack developer with more than 8 years 
                                of experience in building web applications from concept to 
                                deployment. I specialize in PHP(Symfony/Laravel), React and Next.js.
                            </p> 
                            <ul className="list-disc mt-4 space-x-0 space-y-2">
                                <li className="flex items-center gap-2">
                                    <CircleCheck size={16} className="text-label"/>
                                    <span>Clean Code & Best Practices</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CircleCheck size={16} className="text-label"/>
                                    <span>Scalable & Maintainable Solutions</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CircleCheck size={16} className="text-label"/>
                                    <span>Problem Solver & Detail Oriented</span>
                                </li>
                            </ul>
                            <Button variant="secondary" className="mt-4">
                                <Link href="/EN_Resume_MariyamChemrah.pdf">
                                More about me
                                </Link>
                                <ArrowRight className="size-4"/>
                            </Button>
                        </div>
                    </div>   
                    <div className="mt-5 order-1 sm:order-2 ">
                       <Statistics />
                    </div>
                </div>
            </Container>
        </section>
    )
}