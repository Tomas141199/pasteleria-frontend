import Header from "./Header";

const Layout = ({ children, inicio }) => {
  return (
    <div className="relative">
      <Header inicio={inicio} />
      <div>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  inicio: false,
};

export default Layout;
