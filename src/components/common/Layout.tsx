import Footer from "./Footer";
import Header from "./Header";

interface child {
  children: React.ReactNode;
}
const Layout = ({ children }: child) => {
  return (
    <>
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
