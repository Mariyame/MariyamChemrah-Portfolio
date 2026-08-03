// src/app/playground/page.tsx

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TechBadge } from "@/components/ui/TechBadge";

import { 
  ArrowRight,
  Download,
  Menu,
  X } from 'lucide-react';
import { 
   GitHubIcon,
   EmailIcon,
   LinkedInIcon,
   LaravelIcon,
   JSIcon,
   TSIcon,
   NextjsIcon,
   SymfonyIcon,
   ReactIcon,
   PhpIcon,
   GitIcon,
   TailwindIcon,
   DockerIcon
   } from "@/components/icons";





export default function PlaygroundPage() {
  return (
    <main className="bg-background mx-auto max-w-3xl space-y-16 px-2 py-16">
      <h1 className="font-heading text-5xl text-foreground text-shadow:_0_0_10px_#ec4899,_0_0_20px_#ec4899,_0_0_40px_#ec4899">
        Design System
      </h1>
      <Menu className="text-foreground"/>
      <X className="text-foreground"/>
      {/* Buttons */}

      <section className="space-y-2">
        <h2 className="text-3xl font-semibold text-shadow:_0_0_10px_#ec4899,_0_0_20px_#ec4899,_0_0_40px_#ec4899">
          Buttons
        </h2>

        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>

          <Button size="sm">
            Hire me
             <ArrowRight className="text-foreground ml-1" size={15} />
           </Button>

          <Button variant="secondary" size="sm">
            Download CV
            <Download className="ml-1" size={15}/>
          </Button>

        </div>
      </section>
      <section className="grid grid-cols-10 place-content-center border-2 border-accent">
        <h2 className="col-span-full text-3xl text-foreground font-semibold mb-5">
          Icons
        </h2>
        <GitHubIcon className="text-foreground size-6"/>
        <LinkedInIcon className="text-foreground size-8"/>
        <EmailIcon className="text-foreground size-6"/>
        {/* technolgies */}

        <PhpIcon className="bg-[#8993BE] w-8 h-4 rounded-[50%/50%]"/>
        <LaravelIcon className="text-[#FF2D20] size-6"/>
        <NextjsIcon className="text-white size-6"/>
        <SymfonyIcon className="text-white size-6"/>
        <ReactIcon className="text-[#00D8FF] size-6"/>
        <GitIcon className="text-[#EE513B] size-6"/>
        <TailwindIcon className="text-[#38bdf8]" size-6/>
        <DockerIcon className="text-[#2396ED]" size-6/>
        <JSIcon className="bg-[#F7DF1E] size-6"/>
        <TSIcon className="bg-[#3178c6] text-white size-6"/>

      </section>

      <Card className="p-8"></Card>



<div className="rounded-[10px] bg-linear-to-r from-accent via-primary to-[#7c3aed] p-0.5">
  <div className="rounded-[10px] bg-slate-900 p-2 text-white">
   
  </div>
</div>


    <TechBadge
      icon={GitHubIcon}
      label="GitHub"
      iconClassName="text-blue-500"
    />

    <TechBadge
      icon={GitHubIcon}
      label="GitHub"
      labelPosition="bottom"
      iconClassName="text-emerald-400"
    />

    </main>
  );
}