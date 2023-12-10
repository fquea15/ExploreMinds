import Header from "../header/Header";
import './Layout.css'

function Layout({ children }) {
  return (
    <div className="container">
        <Header/>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
