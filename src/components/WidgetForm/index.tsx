import { useState } from "react";

import { CloseButton } from "../CloseButton";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

import bugImagUrl from '../../assets/bug.svg';
import ideaImagUrl from '../../assets/idea.svg';
import thoughtImagUrl from '../../assets/thought.svg';

export const feedbackTypes = {
    BUG: {
        title: 'Problem',
        image: {
            source: bugImagUrl,
            alt: 'Image of an insect'
        }
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: ideaImagUrl,
            alt: 'Image of a light bulb'
        }
    },
    OTHER: {
        title: 'Other',
        image: {
            source: thoughtImagUrl,
            alt: 'Image of a thought bubble'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [ feedbackType, setFeedbackType ] = useState<FeedbackType | null> (null);

    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep 
                    feedbackType={feedbackType} 
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}

            <footer className="text-xs text-neutral-400">
                We appreciate your <a className="underline underline-offset-2" href="http://localhost:3000">contact</a>
            </footer>
        </div>
    )
}