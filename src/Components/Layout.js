import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  // hide header/footer on admin page
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    
       <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
    
  );
};

export default Layout;
