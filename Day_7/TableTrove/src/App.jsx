import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";



function App() {
  const [number, setNumber] = useState('');
  const [table, setTable] = useState([]);

  const handleGenerate = () => {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 0 || num > 1000) {
      alert('Please enter a number between 0 and 1000');
      return;
    }

    const newTable = [];
    for (let i = 1; i <= 20; i++) {
      newTable.push(`${num} x ${i} = ${num * i}`);
    }
    setTable(newTable);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Multiplication Table Generator</h1>
        <Input
          id="number"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number (0 - 1000)"
        />
        <Button id="generateTable" onClick={handleGenerate}>
          Generate Table
        </Button>

        <TableList id="multiplicationTable">
          {table.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </TableList>
      </Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #121212; /* Optional: dark background */
    font-family: Arial, sans-serif;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 60%;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const TableList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

const ListItem = styled.li`
  margin: 5px 0;
  font-size: 18px;
`;

export default App;
