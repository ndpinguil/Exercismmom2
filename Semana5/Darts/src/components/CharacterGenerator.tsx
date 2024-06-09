// src/components/CharacterGenerator.tsx
import React, { useState } from 'react';
import { DnDCharacter } from '../DnDCharacter';

const CharacterGenerator: React.FC = () => {
  const [abilities, setAbilities] = useState<number[]>([]);
  const [hitpoints, setHitpoints] = useState<number | null>(null);

  const generateCharacter = () => {
    const newAbilities = DnDCharacter.generateAbilities();
    const constitution = newAbilities[2]; // Constitución es el tercer valor
    const newHitpoints = DnDCharacter.calculateHitpoints(constitution);

    setAbilities(newAbilities);
    setHitpoints(newHitpoints);
  };

  return (
    <div>
      <h1>DnD Character Generator</h1>
      <button onClick={generateCharacter}>Generate Character</button>
      {abilities.length > 0 && (
        <div>
          <h2>Abilities</h2>
          <ul>
            <li>Strength: {abilities[0]}</li>
            <li>Dexterity: {abilities[1]}</li>
            <li>Constitution: {abilities[2]}</li>
            <li>Intelligence: {abilities[3]}</li>
            <li>Wisdom: {abilities[4]}</li>
            <li>Charisma: {abilities[5]}</li>
          </ul>
          <h2>Hitpoints: {hitpoints}</h2>
        </div>
      )}
    </div>
  );
};

export default CharacterGenerator;
