// src/pangram.ts
export function isPangram(sentence: string): boolean {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseSentence = sentence.toLowerCase();

    for (const letter of alphabet) {
        if (!lowerCaseSentence.includes(letter)) {
            return false;
        }
    }
    return true;
}  