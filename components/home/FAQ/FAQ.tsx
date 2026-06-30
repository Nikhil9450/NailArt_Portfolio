import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  return (
    <Section id="faq" className="bg-[#FFF8F5]">
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before booking your appointment."
          center
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}