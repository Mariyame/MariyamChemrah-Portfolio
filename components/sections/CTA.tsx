import Container from "@/components/ui/Container";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CTA() {
    const hireMeLink = "mailto:mariam.chemrah@gmail.com?subject=Senior Full Stack Developer Opportunity";
    return(
        <section id="cta" className="py-6 sm:py-12">
            <Container>
             <Card className="relative overflow-hidden inset-shadow-sm inset-shadow-primary/50">
                <div className="flex justify-between gap-2 relative">
                    <div className="*:sm:mb-6 sm:p-6 p-2 mb-3 max-w-[70%] sm:max-w-[65%]">
                        <p className="text-normal sm:text-lg font-serif font-medium tracking-widest bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">Let&apos;s work together</p>
                        <h3 className="text-2xl sm:text-6xl font-medium font-serif">Have a project in mind?</h3>
                        <p className="text-xs sm:text-xl mb-3">I&apos;m currently available for freelance or full-time opportunities. Let&apos;s work together!</p>
                        <Button size="lg">
                            <Link href={hireMeLink}>
                                Hire me
                            </Link>
                            <ArrowRight />
                        </Button>
                    </div>
                    <div className="absolute pointer-events-none right-0 bottom-0 overflow-y-hidden">
                        <Image
                            src="/images/rocket.png"
                            width={220}
                            height={100}
                            alt="rocket"
                            className="w-45 md:w-64 lg:w-72"
                        />
                    </div>
                </div>
             </Card>
            </Container>
        </section>
    )
}