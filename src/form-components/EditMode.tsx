import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <div className="form-switch">
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={() => setIsEditMode(!isEditMode)}
                />
                <label>Edit Mode</label>
            </div>

            {isEditMode ? (
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                            name="student"
                        />
                        Student
                    </label>
                </div>
            ) : (
                <p>
                    {name} is {isStudent ? "a" : "not a"} student.
                </p>
            )}
        </div>
    );
}