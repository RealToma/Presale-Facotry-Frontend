import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import "./App.css";
import Hero from "./components/dashboard";
import { WalletProvider } from "./components/context/WalletContext";

function App() {
  return (
    <div className="bg-black h-screen overflow-y-scroll">
      <Router>
        <WalletProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </WalletProvider>
      </Router>
    </div>
  );
}

export default App;
