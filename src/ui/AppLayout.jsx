import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "../css/Global.css";

function AppLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
