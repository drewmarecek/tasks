import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const isCorrect = userAnswer.trim() === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                aria-label="answer-input"
            />
            {isCorrect ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}