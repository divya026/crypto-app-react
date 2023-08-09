import "./App.css";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
