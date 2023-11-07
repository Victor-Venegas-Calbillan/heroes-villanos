import { Routes, Route, Navigate } from "react-router-dom";
import {
  DcPage,
  HomePage,
  MarvelPage,
  OtherPages,
} from "../pages";
import { HeroPage } from "../pages/HeroPage";
import { useFetch } from "../hooks/useFetch";
import { HeroResp } from "../interfaces/heros";

export const AppRouter = () => {
  const { data, isLoading } = useFetch<HeroResp[]>(
    "https://akabab.github.io/superhero-api/api/all.json"
  );
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage data={data ?? []} isLoading={isLoading} />
          }
        />
        <Route
          path="/dc"
          element={
            <DcPage data={data ?? []} isLoading={isLoading} />
          }
        />
        <Route
          path="/marvel"
          element={
            <MarvelPage
              data={data ?? []}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/others"
          element={
            <OtherPages
              data={data ?? []}
              isLoading={isLoading}
            />
          }
        />
        <Route path="/:id" element={<HeroPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
