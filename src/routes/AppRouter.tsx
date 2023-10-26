import { Routes, Route, Navigate } from "react-router-dom";
import {
  DcPage,
  HomePage,
  MarvelPage,
  OtherPages,
} from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dc" element={<DcPage />} />
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/others" element={<OtherPages />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
