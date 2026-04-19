import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 md:px-12 lg:px-24 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
