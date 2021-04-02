import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/pro-solid-svg-icons/faFutbol";
import useTeam from "./hooks/useTeam";

function App(): JSX.Element {
    const colors = ["red", "blue", "black", "yellow"];
    const teamOne = useTeam(0, colors);
    const teamTwo = useTeam(1, colors);

    const handleReset = (): void => {
        teamOne.resetScore();
        teamTwo.resetScore();
    };

    return (
        <main>
            <header aria-label="Header">
                <div>
                    <FontAwesomeIcon icon={faFutbol} size="5x" />
                </div>
                <h1>Score</h1>
            </header>
            <section className="score-container" aria-label="Score section">
                {teamOne.scoreDisplay()}
                <div aria-label="Score separator">
                    <div aria-hidden="true">&nbsp;</div>
                    <div className="score-separator">-</div>
                </div>
                {teamTwo.scoreDisplay()}
            </section>
            <footer aria-label="Footer">
                <div className="actions" aria-label="Actions">
                    {teamOne.changeColorButton()}
                    <button onClick={handleReset} className="button button-reset">
                        Reset
                    </button>
                    {teamTwo.changeColorButton()}
                </div>
            </footer>
        </main>
    );
}

export default App;
