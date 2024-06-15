import { Button } from "@/components/ui/button";
import { CarrotDown } from "@/components/icons/carrot-down";

export function Hero(){
    return (
        <div className="flex flex-col py-64 md:py-36 gap-8">
         <h1>Never take a note again</h1>
         <p>Gain access to a shared pool of notes for any of your courses. 
         <br /> Build on top of a communal understanding of any topic. 
         <br /> <span className="font-bold text-foreground"> Don&apos;t struggle alone. </span></p>
         <div className="flex gap-4">
         <Button>Join our waitlist</Button> 
         <Button variant="text"> What we do best <CarrotDown /> </Button>
         </div>
        </div>
    )
}
