import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Fonts } from "./fonts";
import Imprint from "./pages/Imprint";

const styles = {
  global: {
    body: {
      bg: "black",
      color: "white",
    },
  },
};

const components = {
  Heading: {
    sizes: {
      xl: {
        fontSize: "5rem",
        fontFamily: "futura-pt",
      },
    },
  },
};

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

const customTheme = extendTheme({
  config,
  components,
  styles,
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <Fonts />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/imprint" element={<Imprint />} />
        </Routes>
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
