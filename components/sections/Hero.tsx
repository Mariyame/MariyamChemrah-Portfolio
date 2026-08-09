import  Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import SocialLinks from "@/components/ui/SocialLinks";
import Link from "next/link";
import { HeroImage } from "@/components/ui/hero/HeroImage";
import  TechStack  from "@/components/ui/hero/TechStack";
import { heroTechStack } from "@/data/technologies";
import { Card } from "@/components/ui/card";


export default function Hero() {
            const hireMeLink = "mailto:mariam.chemrah@gmail.com?subject=Senior Full Stack Developer Opportunity";
    return (
        <section id="hero">
            <Container>
            <div className="flex min-h-[calc(100vh-15rem)] flex-col items-center justify-between gap-16 lg:flex-row">
                <div className="flex max-w-2xl  flex-1 flex-col">
                    <span className="relative block w-60 mb-8 rounded-full border border-border py-2 text-center text-xs before:absolute before:left-2 before:top-1/3 before:-translate-y-1/2 before:text-label before:text-5xl before:content-['•'] before:blur-xs before:animate-pulse">
                    Backend to frontend, I build it all.
                    </span>                
                    <p className="text-2xl text-muted-foreground font-medium font-2xl">
                    Hi, I&apos;m
                    </p>
                    <h1 className="text-6xl font-heading font-extrabold tracking-normal sm:tracking-widest bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
                        Mariyam Chemrah
                    </h1>
                    <p className="text-2xl font-medium text-muted-foreground">
                        Full-Stack <span className="text-label">Developer</span>
                    </p>
                    <p className="mt-4"> 
                        I build robust, scalable, and high-performance web applications using modern technologies and clean architecture.
                    </p>
                    <div className="flex sm:flex-row flex-col gap-4 mt-4">
                        <Button className="gap-2" size="lg">
                            <Link href={hireMeLink}>Hire me</Link>
                            <ArrowRight className="size-4"/>
                        </Button>
                        <Button variant="secondary">
                             <Link href="/EN_Resume_MariyamChemrah.pdf">
                             Download CV
                             </Link>
                             <Download  className="size-4"/>
                        </Button>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                    <p className="text-sm font-medium">
                        Let&apos;s connect
                    </p>
                    <SocialLinks />
                    </div>
                </div>
                <HeroImage />
            </div>
            <Card className="hidden sm:block">
                <TechStack technologies={heroTechStack} showLabels={true} labelPosition="bottom" />
            </Card>
            </Container>
        </section>

    )
}