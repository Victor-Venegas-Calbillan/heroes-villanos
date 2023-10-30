import { Routes, Route, Navigate } from "react-router-dom";
import {
  DcPage,
  HomePage,
  MarvelPage,
  OtherPages,
} from "../pages";
import { useFetch } from "../hooks/useFetch";

export const AppRouter = () => {
  const url =
    "https://akabab.github.io/superhero-api/api/all.json";
  const { data: heros, isLoading } = useFetch(url);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage heros={heros} isLoading={isLoading} />
          }
        />
        <Route path="/dc" element={<DcPage />} />
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/others" element={<OtherPages />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
