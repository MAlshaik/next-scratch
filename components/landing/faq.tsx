import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ(){
    return(
        <div className="flex flex-col gap-12 w-full pb-64">
            <h1>FAQ.</h1>
            <p>Some of our most common questions.</p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Q1?</AccordionTrigger>
                  <AccordionContent>
                    answer.
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Q2?</AccordionTrigger>
                  <AccordionContent>
                    answer.
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Q3?</AccordionTrigger>
                  <AccordionContent>
                    answer.
                  </AccordionContent>
              </AccordionItem>
            </Accordion>
        </div>

    );
}
