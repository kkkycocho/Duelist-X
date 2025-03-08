import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Client } from "boardgame.io/react";
import { DuelistX } from "./game/game";
import MainMenu from "./components/MainMenu";
import DuelistXBoard from "./components/DuelistXBoard";

const DuelistXClient = Client({
  game: DuelistX,
  board: DuelistXBoard,
  // Set to false for enabling debug panel
  debug: { collapseOnLoad: true, hideToggleButton: true },
});

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/game" element={<DuelistXClient />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
