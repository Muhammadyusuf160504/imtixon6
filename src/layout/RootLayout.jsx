// import RRD
import { Outlet } from "react-router-dom";

// import pages
import Header from "../components/Header";
import Footer from "../components/Footer";
import DarcMode from "../components/DarcMode";

function RootLayout() {
  return (
    <>
      <div className="flex w-full header-asosiy-container">
        <Header />
      </div>
      <DarcMode />
      <main
        className="w-full max-w-6xl pt-4 pb-4 pr-5 pl-5 mr-auto ml-auto
      text-left"
      >
        <Outlet />
      </main>
      <div className="header-asosiy-container">
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
