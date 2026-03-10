import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";

import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

import HomePage from "@/pages/HomePage";
import ListPage from "@/pages/ListPage";
import PostTest from "@/components/containers/AnswerCard/PostTest";
import FeedPage from "@/pages/FeedPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster position="bottom-center" />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/answer" element={<PostTest />} />
          <Route path="/post/:id" element={<FeedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
