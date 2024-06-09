// src/components/PangramChecker.tsx
import React, { useState } from 'react';
import { isPangram } from '../pangram';

const PangramChecker: React.FC = () => {
    const [sentence, setSentence] = useState<string>('');
    const [result, setResult] = useState<boolean | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSentence(event.target.value);
    };

    const checkPangram = () => {
        setResult(isPangram(sentence));
    };

    return (
        <div>
            <h1>Pangram Checker</h1>
            <input 
                type="text" 
                value={sentence} 
                onChange={handleChange} 
                placeholder="Enter a sentence" 
            />
            <button onClick={checkPangram}>Check</button>
            {result !== null && (
                <div>
                    {result ? <p>The sentence is a pangram!</p> : <p>The sentence is not a pangram.</p>}
                </div>
            )}
        </div>
    );
};

export default PangramChecker;