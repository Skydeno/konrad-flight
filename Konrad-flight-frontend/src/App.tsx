import { Navbar } from "./components/Navbar/Navbar";
import { Main } from "./pages/main/Main.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "./App.css";
import "material-icons/iconfont/outlined.css";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
