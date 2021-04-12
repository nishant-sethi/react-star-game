import "./App.css";
import StarMatch from "./StarMatch";
import { useState } from "react";

function App() {
  const [gameId, setGameId] = useState(1);

  return (
    <div className="App">
      <StarMatch key={gameId} startNewGame={() => setGameId(gameId + 1)} />
    </div>
  );
}

export default App;
