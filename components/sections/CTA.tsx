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
             <Card className="inset-shadow-sm inset-shadow-primary/50">
                <div className="flex justify-between gap-2 relative">
                    <div className="*:sm:mb-6 sm:p-6 p-2 mb-3">
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
                    <div className="pointer-events-none lg:absolute lg:right-10">
                        <Image
                            src="/images/rocket.png"
                            width={300}
                            height={100}
                            alt="rocket"
                        />
                    </div>
                </div>
             </Card>
            </Container>
        </section>
    )
}