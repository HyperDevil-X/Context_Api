// import React from "react";
import { Bioprovider } from "./Components";
import About from "./Components/About";
import Home from "./Components/Home";

const App = () =>
{
  return <Bioprovider>
            <Home />
            <About />
        </Bioprovider>
}
export default App;