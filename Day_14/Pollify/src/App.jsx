import React, { useState } from "react";
import "./App.css";

const PollComponent = () => {
  const options = ["React", "Vue", "Angular", "Svelte"];

  // vote totals for every option
  const [votes, setVotes] = useState(Array(options.length).fill(0));
  // which option the current user has chosen (null → none yet)
  const [selectedOption, setSelectedOption] = useState(null);

  const handleVote = (index) => {
    // do nothing if they click the already-selected option
    if (index === selectedOption) return;

    setVotes((prev) => {
      const updated = [...prev];

      // remove their previous vote (if any)
      if (selectedOption !== null) {
        updated[selectedOption] -= 1;
      }
      // add their new vote
      updated[index] += 1;

      return updated;
    });

    setSelectedOption(index);
  };

  return (
    <div className="poll-container">
      <h4 id="question">Which JavaScript framework do you prefer?</h4>

      {options.map((option, index) => (
        <button
          key={index}
          className={`option ${selectedOption === index ? "selected" : ""}`}
          onClick={() => handleVote(index)}
        >
          <span>{option}</span>
          <span>{votes[index]}</span>
        </button>
      ))}
    </div>
  );
};

export default PollComponent;
