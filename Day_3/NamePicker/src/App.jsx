import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [nameInput, setNameInput] = useState("");
  const [nameList, setNameList] = useState([]);
  const [pickedList, setPickedList] = useState([]);
  const [pickedName, setPickedName] = useState("");
  const dialogRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && nameInput.trim() !== "") {
      setNameList([...nameList, nameInput.trim()]);
      setNameInput("");
    }
  };

  const handlePickName = () => {
    if (nameList.length === 0) return;

    const randomIndex = Math.floor(Math.random() * nameList.length);
    const name = nameList[randomIndex];

    setPickedName(name);
    setPickedList([...pickedList, name]);
    const updatedNameList = nameList.filter((_, index) => index !== randomIndex);
    setNameList(updatedNameList);

    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  return (
    <div className="container">
      <h1>Random Name Picker</h1>
      <input
        id="nameInput"
        name="nameInput"
        data-testid="nameInput"
        type="text"
        placeholder="Enter a name and press Enter"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        onKeyDown={handleKeyPress}
        className="input"
      />

      <div id="nameList" className="name-list">
        {nameList.map((name, index) => (
          <span key={index} className="name">
            {name}
          </span>
        ))}
      </div>

      <button id="pick" className="pick-button" onClick={handlePickName}>
        Pick a Name
      </button>

      <dialog id="nameDialog" ref={dialogRef} className="dialog">
        <p>{pickedName}</p>
        <form method="dialog">
          <button className="close-button">Close</button>
        </form>
      </dialog>

      <div id="pickedList" className="picked-list">
        {pickedList.map((name, index) => (
          <span key={index} className="name">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
