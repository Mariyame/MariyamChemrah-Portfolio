import Heading from "@/components/ui/Heading";
import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function Projects() {
    return (
        <section id="projects" className="py-6 sm:py-12">
            <Container>
                <Heading title="Featured projects" subtitle="Some things I've built" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
                    {projects.slice(0,3).map( (project) => (
                        <div key={project.id} className="flex flex-row overflow-hidden rounded-2xl border border-white/10 sm:flex-col">
                           <div className="basis-1/2 shrink-0 overflow-hidden sm:h-60 sm:basis-auto">
                                <Image 
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={300}
                                className="size-full object-cover rounded-2xl"
                                />
                           </div>
                           <div className="flex flex-col flex-1 mx-2 sm:mx-6 px-2 sm:px-6 basis-1/2">
                                <h3 className="text-lg font-bold my-4">
                                    {project.title}
                                </h3>
                                <p className="text-sm mb-2 hidden sm:block">{
                                    project.description}
                                </p>
                                <div className="flex flex-wrap">
                                {project.technologies.map((tech) => 
                                    <span key={tech} 
                                    className="border border-white/10 rounded-xs p-1 text-xs ml-2">
                                        {tech}
                                    </span>
                                )}
                                </div>
                           </div>
                           <div className="border-white/10 border-t hidden sm:flex mx-6 mt-4">
                             <Button variant="transparent" size="full" className="my-4 justify-start">
                                {project.liveUrl && (
                                    <Link href={project.liveUrl} className="flex gap-2">
                                         <span>View Project</span> 
                                         <ArrowRight />
                                    </Link>

                                )}
                              
                            </Button>
                           </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}