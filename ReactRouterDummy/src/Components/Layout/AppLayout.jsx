// AppLayout.jsx
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

// ← defined ABOVE AppLayout so it can be used inside it
export const Loading = () => {
  return (
    <div className="loader-section">
      <div className="loader"></div>
      <p className="loader-text">Loading...</p>
    </div>
  );
};

export const AppLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loading />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};