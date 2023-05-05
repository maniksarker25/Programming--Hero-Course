import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="min-h-[calc(100vh-250px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
