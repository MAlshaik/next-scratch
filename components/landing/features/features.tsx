import { Page } from "@/components/icons/page";
import { Card } from "@/components/icons/card";
import { Notion } from "@/components/icons/notion";
import { QuizQuestion } from "@/components/landing/features/quiz-questions";
import { Flashcard } from "@/components/landing/features/flash-card";
import { MarkdownEditor } from "@/components/landing/features/markdown-editor";

export function Features() {
    const exampleQuiz = [
        {
            question: "What does AI stand for?",
            answers: [
                { text: "Artificial Intelligence", isCorrect: true },
                { text: "Automated Information", isCorrect: false },
                { text: "Advanced Integration", isCorrect: false },
                { text: "Augmented Interaction", isCorrect: false },
            ],
        },
        {
            question: "Which of these is NOT a common use of AI?",
            answers: [
                { text: "Image recognition", isCorrect: false },
                { text: "Natural language processing", isCorrect: false },
                { text: "Time travel", isCorrect: true },
                { text: "Predictive analytics", isCorrect: false },
            ],
        },
    ];

    return (
        <div className="flex flex-col gap-12 w-full py-48">
            <h1>Feature rich.</h1>
            <p>Notello uses your notes to train an AI model <span className="font-bold">specialized in those topics.</span> <br />
               This allows the AI model to give <span className="font-bold">more accurate and relevant responses than competitors. </span>
            </p>
            <div className="flex flex-col gap-2 w-full border rounded-lg p-8 lg:p-16 relative overflow-hidden min-h-[600px] lg:min-h-[400px]">
                <div className="flex flex-col lg:flex-row justify-between h-full">
                    <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                        <Page />
                        <h3 className="mt-2">Quiz Generation</h3>
                        <p className="mt-2">Notello will automatically generate interactive quizzes curated to your course content.</p>
                    </div>
                    <div className="w-full lg:w-1/2 bg-secondary text-foreground absolute right-0 bottom-0 top-[calc(100%-300px)] lg:top-[120px] p-4 overflow-y-auto rounded-tl-lg">
                        <h5 className="font-semibold mb-2">Basics of Artificial Intelligence</h5>
                        {exampleQuiz.map((q, index) => (
                            <QuizQuestion key={index} question={q.question} answers={q.answers} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row w-full gap-8">
                <div className="flex flex-col gap-2 w-full xl:w-1/2 border rounded-lg p-16 h-[400px] relative overflow-hidden">
                    <div className="mb-24 lg:mb-0">
                        <Card />
                        <h3 className="mt-2">Flashcard Generation</h3>
                        <p className="mt-2">Practice your memorization with digital flashcards.</p>
                    </div>
                    <div className="absolute right-0 bottom-0 w-[calc(100%-60px)] lg:w-3/5 h-1/2 lg:h-2/5">
                        <Flashcard 
                            term="Artificial Intelligence" 
                            definition="The simulation of human intelligence processes by machines, especially computer systems."
                            className="rounded-tl-lg"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full min-[1280px]:w-1/2 border rounded-lg p-16 h-[400px] relative overflow-hidden">
                    <div className="mb-24 lg:mb-0 text-right flex flex-col items-end">
                        <Notion />
                    </div>
                    <div className="absolute left-0 bottom-0 w-[calc(100%-60px)] bg-secondary p-5 lg:w-[410px] h-4/6 lg:h-[290px]">
                      <MarkdownEditor />
                    </div>
                </div>
            </div>
        </div>
    );
}
