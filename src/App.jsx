import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, styled } from "styled-components"; // styled 추가
import { Toaster } from "react-hot-toast";
import React, { Suspense, lazy } from "react";

import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";
import { PublicRoute } from "@/components/routes/PublicRoute";
import { LoadingSpinner } from "@/assets/icons/LoadingSpinnerIcon";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const HomePage = lazy(() => import("@/pages/HomePage"));
const ListPage = lazy(() => import("@/pages/ListPage/ListPage"));
const FeedPage = lazy(() => import("@/pages/FeedPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster position="bottom-center" containerStyle={{ bottom: 60 }} />
      <GlobalStyle />
      <BrowserRouter>
        <Suspense
          fallback={
            <LoadingWrapper>
              <LoadingSpinner size={40} />
            </LoadingWrapper>
          }
        >
          <Routes>
            <Route element={<PublicRoute />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path="/list" element={<ListPage />} />
            <Route path="/post/:subjectId/*" element={<FeedPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
