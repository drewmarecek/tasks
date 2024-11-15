import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {

    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAnswer(event.target.value);
    };

    const isCorrect = selectedAnswer === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedAnswer} onChange={handleChange} role="combobox">
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}