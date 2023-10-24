import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DcPage } from "../pages/DcPage";
import { MarvelPage } from "../pages/MarvelPage";
import { OtherPages } from "../pages/OtherPages";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
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
