import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="flex-grow">
        {children}
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}