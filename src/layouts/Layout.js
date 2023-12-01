import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Container from "../layouts/Container";
import BottomNavigation from "../components/Bottom/BottomNavigation";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
      <BottomNavigation />
    </>
  );
};

export default Layout;
