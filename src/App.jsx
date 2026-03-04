import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

import HomePage from "@/pages/HomePage";
import ListPage from "@/pages/ListPage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
