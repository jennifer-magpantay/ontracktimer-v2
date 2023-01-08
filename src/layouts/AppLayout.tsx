import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Main } from "../components/Main/style";
import { Footer } from "../components/Footer";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
