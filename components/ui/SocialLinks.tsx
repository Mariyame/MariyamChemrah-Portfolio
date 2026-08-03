import { socialLinks } from "@/data/social-links";
import  Link  from "next/link";

export default function SocialLinks() {
    return(
    <ul aria-label="Social media" className='flex gap-3'>
        {socialLinks.map(({ name, href, icon: Icon }) => (
            <Link
                key={name}
                href={href}
                className="backdrop-blur-xl bg-white/5 border border-white/10 p-2 rounded-full"
            >
                <Icon className="size-4 text-foreground" />
            </Link>
        ))}
    </ul>
    )
}