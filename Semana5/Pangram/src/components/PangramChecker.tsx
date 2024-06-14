// src/components/PangramChecker.tsx
import React, { useState } from 'react';

const PangramChecker: React.FC = () => {
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const [points, setPoints] = useState<number | null>(null);

    const handleChangeX = (event: React.ChangeEvent<HTMLInputElement>) => {
        setX(parseFloat(event.target.value));
    };

    const handleChangeY = (event: React.ChangeEvent<HTMLInputElement>) => {
        setY(parseFloat(event.target.value));
    };

    const calcularPuntosDardos = () => {
        const distancia = Math.sqrt(x * x + y * y);

        if (distancia > 10) {
            setPoints(0);
        } else if (distancia > 5) {
            setPoints(1);
        } else if (distancia > 1) {
            setPoints(5);
        } else {
            setPoints(10);
        }
    };

    return (
        <div>
            <h1>Darts Points Calculator</h1>
            <div>
                <label>
                    X Coordinate:
                    <input type="number" value={x} onChange={handleChangeX} />
                </label>
            </div>
            <div>
                <label>
                    Y Coordinate:
                    <input type="number" value={y} onChange={handleChangeY} />
                </label>
            </div>
            <button onClick={calcularPuntosDardos}>Calculate Points</button>
            {points !== null && (
                <div>
                    <p>Points earned: {points}</p>
                </div>
            )}
        </div>
    );
};

export default PangramChecker;
