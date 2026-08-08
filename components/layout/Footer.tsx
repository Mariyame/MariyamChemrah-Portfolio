import  Link  from 'next/link';
import Container  from "@/components/ui/Container";
import { navigation } from '@/data/navigation';
import { socialLinks } from "@/data/social-links";
import { contact } from "@/data/contact";
import Image from 'next/image';
import { MapPinned, Phone, Mail} from 'lucide-react';
import SocialLinks from '@/components/ui/SocialLinks';

export default function Footer() {
    return(
        <footer className="border-t border-border/50 py-16 *:text-sm">
            <Container>
                <div className="grid md:grid-cols-[1fr_1fr_1fr] [&_h2]:text-label [&_h2]:font-semibold [&_h2]:mb-2 *:border-white/10 *:sm:border-r *:last:border-r-0 *:border-0 *:py-2">
                    <div className="flex sm:flex-col items-center sm:items-start content-center justify-between sm:justify-start gap-4 shrenk-0 ">
                        <Image
                            src="/logo.png"
                            alt="Mariyam Chemrah logo"
                            width={90}
                            height={10}
                            priority
                            />
                        <p className='hidden sm:block w-60'>
                            Full-Stack Developer specializing in Symfony, React, Next.js and more.
                        </p>
                        <SocialLinks /> 
                    </div>
                    <div className='flex justify-around'>
                        <div className="md:flex flex-col gap-2 hidden col-span-2">   
                            <h2>Quick Links</h2>          
                            {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                            ))}
                        </div>
                        <div className="md:flex flex-col gap-2 hidden">   
                            <h2>Social Links</h2>          
                            {socialLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                            ))}
                        </div>
                 </div>
                    <div className="flex flex-col text-center items-center justify-center gap-2 sm:gap-4 sm:text-start sm:justify-start sm:items-start pl-8">
                        <h2 className='hidden sm:block'>Contact</h2>
                        <div className='flex gap-2'>
                           <Mail size={16} />
                            <p>{contact.email}</p>
                        </div>
                           <div className='hidden sm:flex gap-2'>
                           <Phone size={16} />
                            <p>{contact.phone}</p>
                        </div>
                           <div className='flex gap-2'>
                           <MapPinned size={16} />
                            <p>{contact.location}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 justify-between pt-6 text-center *:text-muted">
                    <small className="order-2 sm:order-1">
                        © {new Date().getFullYear()} Mariyam Chemrah. All rights reserved.
                    </small>

                    <small className="order-1 sm:order-2">
                        Developed with 💜 by Mariyam.
                    </small>
                </div>
            </Container>
        </footer>
    )
}