import Header from "./Header";
import Footer from "./Footer";
function Layout(props) {
  return (
    <>
      <Header></Header>
      {props.children}

      <Footer></Footer>
    </>
  );
}

export default Layout;
