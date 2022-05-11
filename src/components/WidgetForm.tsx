import { CloseButton } from "./CloseButton";

const feedbackTypes = {
    BUG: {
        title: 'Problem'
    },
    IDEA: {
        title: 'idea'
    },
    OTHER: {
        title: 'other'
    }
}

export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">
                    Leave your Feedback
                </span>
                <CloseButton />

            </header>

            <div className="flex py-8 gap-2 w-full">
                
            </div>

            <footer className="text-xs text-neutral-400">
                We appreciate your <a className="underline underline-offset-2" href="http://localhost:3000">contact</a>
            </footer>
        </div>
    )
}