import { X } from "@/components/icons/x";
import { Check } from "@/components/icons/check";

export function WhyUs(){
    return (
        <div className="flex flex-col gap-12 w-full py-48">
            <h1>Are you with us?</h1>
            <p>Save your precious time so you can do what you do best.</p>
            <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
                <div className="flex flex-col justify-between w-full md:w-1/2 h-[500px] rounded-lg bg-[#FFE9E9] dark:bg-[#FF7E7E] border p-6">
                    <h2 className="font-normal dark:text-black">Without Notello.</h2>
                    <div className="py-8">
                        <div className="flex items-center gap-2">
                          <X />
                          <p className="text-black text-xl">Organize all your materials in one click.</p>
                        </div>
                        <hr class="my-2 border-[#FFCECE] dark:border-[#FF6868] sm:mx-auto " />

                        <div className="flex items-center gap-2">
                          <X />
                          <p className="text-black text-xl">Access to communal knowledge and support.</p>
                        </div>
                        <hr class="my-2 border-[#FFCECE] dark:border-[#FF6868] sm:mx-auto " />
                        
                        <div className="flex items-center gap-2">
                          <X />
                          <p className="text-black text-xl">AI model trained on <span className="font-bold"> your </span>content. </p>
                        </div>
                        <hr class="my-2 border-[#FFCECE]  dark:border-[#FF6868] sm:mx-auto " />

                        <div className="flex items-center gap-2">
                          <X />
                          <p className="text-black text-xl">One subscription for your AI needs.</p>
                        </div>
                        <hr class="my-2 border-[#FFCECE]  dark:border-[#FF6868] sm:mx-auto " />
                    </div>

                    <h3 className="text-[#950000]">Net 15 hours lost / week</h3>

                </div>
                <div className="flex flex-col justify-between w-full md:w-1/2 h-[500px] rounded-lg bg-[#E5FFF1] dark:bg-[#AEFFD3] border p-6">
                    <h2 className="dark:text-black">With Notello.</h2>
                    <div className="py-8">
                        <div className="flex items-center gap-2">
                          <Check />
                          <p className="text-black text-xl">Organize all your materials in one click.</p>
                        </div>
                        <hr class="my-2 border-[#C0FFDD] dark:border-[#84FF82] sm:mx-auto " />

                        <div className="flex items-center gap-2">
                          <Check />
                          <p className="text-black text-xl">Access to communal knowledge and support.</p>
                        </div>
                        <hr class="my-2 border-[#C0FFDD] dark:border-[#84FF82] sm:mx-auto " />
                        
                        <div className="flex items-center gap-2">
                          <Check />
                          <p className="text-black text-xl">AI model trained on <span className="font-bold"> your </span>content. </p>
                        </div>
                        <hr class="my-2 border-[#C0FFDD]  dark:border-[#84FF82] sm:mx-auto " />

                        <div className="flex items-center gap-2">
                          <Check />
                          <p className="text-black text-xl">One subscription for your AI needs.</p>
                        </div>
                        <hr class="my-2 border-[#C0FFDD]  dark:border-[#84FF82] sm:mx-auto " />
                    </div>

                    <h3 className="text-[#35B871]">Net 15 hours saved / week</h3>
                </div>
            </div>
        </div>
    );
}
