import { BentoGridDemo } from "@/components/aceternity/bento-demo";
import { LayoutGridDemo } from "@/components/aceternity/layout-grid-demo";
import { ParallaxScrollDemo } from "@/components/aceternity/parallax-demo";
import { InfiniteMovingCardsDemo } from "@/components/aceternity/infinite-moving-cards-demo";

export default function Aceternity(){
    return (
        <>
        <div className="flex flex-col items-center justify-center">
        <div className=" max-w-[1024px] p-4">
            <BentoGridDemo />
            <LayoutGridDemo />
            <ParallaxScrollDemo />
            <InfiniteMovingCardsDemo />
        </div>
        </div>
        </>
    );
}
