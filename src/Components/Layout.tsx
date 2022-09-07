import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

interface Props {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}

const Layout = (props: Props) => {
  return (
    <>
      <Menu />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
