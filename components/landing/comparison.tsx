
export function Comparison(){
    return(
        <div className="flex flex-col gap-12 w-full py-48">
            <h1>A second brain.</h1>
            <p>Notello has access to your <span className="font-bold">actual course materials.</span>
            <br /> That means when you ask it a question,<span className="font-bold">you know where the answer comes from.</span> </p>
            <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
                <div className="flex w-full md:w-1/2 h-[525px] rounded-lg bg-secondary border p-3 justify-center">
                    <h2 className="font-normal">OpenAI</h2>
                </div>
                <div className="flex w-full md:w-1/2 h-[525px] rounded-lg bg-background border p-3 justify-center">
                    <h2>Notello</h2>
                </div>
            </div>
        </div>
    );
}
