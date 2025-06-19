import { Outlet } from "react-router-dom";
import Header from "../../component/header";
import Footer from "../../component/footer";

function CommonLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default CommonLayout;