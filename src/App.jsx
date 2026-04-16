import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Fashion from "./pages/Fashion";
import Tech from "./pages/Tech";
import DecorandGifts from "./pages/DecorandGifts";

export default function App() {
  return (
    <BrowserRouter>

      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/decorandgifts" element={<DecorandGifts />} />
        </Routes>
      </MainLayout>

    </BrowserRouter>
  );
}