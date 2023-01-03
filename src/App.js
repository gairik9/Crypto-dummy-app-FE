import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Coin from "./Pages/Coin/Coin";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <div className="App">
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/coins/:id" element={<Coin/>} className='coin'/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
