import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Accordion  from "@/components/ui/Accordion";  


export default function Skills() {
    return(
        <section id="skills" className="py-2 sm:py-12">
          <Container>
            <Heading title="Skills" subtitle="Technologies I work with" />
            <Accordion />
          </Container>
        </section>
    )
}