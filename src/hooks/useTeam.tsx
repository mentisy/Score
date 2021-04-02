import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/pro-light-svg-icons/faFutbol";

type DetailsType = {
    colorIndex: number;
    score: number;
};

export default function useTeam(defaultColorIndex: number, colors: string[]) {
    const [details, setDetails] = useState<DetailsType>({
        colorIndex: defaultColorIndex ?? 0,
        score: 0,
    });

    const next = (i: number): number => (i + 1) % colors.length;

    const changeColor = (): void => {
        setDetails((prevState) => ({
            ...prevState,
            colorIndex: next(prevState.colorIndex),
        }));
    };

    const addScore = (): void => {
        setDetails((prevState) => ({
            ...prevState,
            score: prevState.score + 1,
        }));
    };

    const scoreDisplay = (): JSX.Element => (
        <div aria-label="Team score display">
            <div className={`box ${colors[details.colorIndex]}`} onClick={addScore}>
                <FontAwesomeIcon icon={faFutbol} />
            </div>
            <div className="score">{details.score}</div>
        </div>
    );

    const changeColorButton = (): JSX.Element => (
        <button
            onClick={changeColor}
            className={`button ${colors[next(details.colorIndex)]}`}
            aria-label="Change color button"
        >
            Change Color
        </button>
    );

    const resetScore = (): void => {
        setDetails((prevState) => ({
            ...prevState,
            score: 0,
        }));
    };

    return {
        scoreDisplay,
        changeColorButton,
        resetScore,
    };
}
