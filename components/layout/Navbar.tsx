'use client'
import  Image  from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { Menu, X, ArrowRight } from "lucide-react";
import { navigation } from "@/data/navigation";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { Container } from "../ui/Container";

export default function Navbar() {
        const hireMeLink = 
        "mailto:mariam.chemrah@gmail.com?subject=Senior Full Stack Developer Opportunity";
        const [open, setOpen] = 
        useState(false);
        useEffect(() => {
                document.body.style.overflow = open ? "hidden" : "";

                return () => {
                    document.body.style.overflow = "";
                };
            }, [open]);
        return (
        <Container>
        <div className="flex items-center justify-between py-4">
            <div className="shrink-0">
              <Image
                src="/logo.png"
                alt="Mariyam Chemrah logo"
                width={100}
                height={20}
                priority
                />
            </div>
            {/* Mobile Menu */}

                <button
                    onClick={() => setOpen(true)}
                    className="absolute top-4 right-4 md:hidden"
                    aria-label="Open menu"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    <Menu />
                </button>
                {/* Backdrop */}
                <div
                    className={clsx(
                        "fixed inset-0 bg-black/40 transition-opacity",
                        open ? "opacity-100" : "pointer-events-none opacity-0"
                    )}
                    onClick={() => setOpen(false)}
                />

                {/* Drawer */}
                <aside id="mobile-menu"
                    className={clsx(
                        "fixed px-4 top-0 right-0 h-screen w-80 z-50 bg-background transition-transform duration-300 ease-in-out",
                        open ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-4 right-4"
                        aria-label="Close menu"
                    >
                        <X />
                    </button>

                    <nav aria-label="Mobile navigation" className="mt-18">
                        <ul>
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="block py-4 text-center"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                                <li>
                                    <Button size="full" >
                                        <Link href={hireMeLink}>Hire me</Link>
                                        <ArrowRight className="text-foreground ml-1" size={15} />
                                    </Button>
                                </li>
                        </ul>
                    </nav>
                </aside>

               {/* Discktop Menu */}
      
              <nav className="hidden md:ml-6 md:block">
                    <ul className="flex justify-center space-x-4">
                    {navigation.map((item) => (
                        <li key={item.name} className="p-2">
                            <Link 
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={clsx(item.current && "border-b border-label", "pb-2 hover:border-b border-label")}
                                >
                                    {item.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Button>
                            <Link href={hireMeLink}>Hire me</Link>
                            <ArrowRight className="text-foreground ml-1" size={15} />
                        </Button>
                    </li>
                    </ul>
                </nav>
            </div>
       </Container>
    )
}