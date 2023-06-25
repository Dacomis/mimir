import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import React from "react";
import FetchTransaction from "./components/FetchTransaction";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <FetchTransaction />
    </ThemeProvider>
  );
};

export default App;
