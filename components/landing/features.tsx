
export function Features(){
    return(
        <div className="flex flex-col gap-12 w-full py-48">
            <h1>Feature rich.</h1>
            <p>Notello uses your notes to train an AI model <span className="font-bold">specialized in those topics.</span> <br />
               This allows the AI model to give <span className="font-bold">more accurate and relevant responses than competitors. </span>
            </p>
            <div className="flex flex-col gap-2 w-full border rounded-lg p-16 h-[400px]">
                <h3>Quiz Generation</h3>
                <p className="w-2/5">Notello will automatically generate interactive quizzes curated to your course content.</p>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-8">
                <div className="flex flex-col gap-2 w-full md:w-1/2 border rounded-lg p-16 h-[400px]">
                    <h3>Flashcard Generation</h3>
                    <p>Practice your memorization with digital flashcards.</p>
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2 border rounded-lg p-16 justify-start items-end h-[400px]">
                    <h3 className="text-right">Smart Summary</h3>
                    <p className="text-right">Let the AI automatically generate markdown summaries of your topics.</p>
                </div>
            </div>
        </div>
    );
}
