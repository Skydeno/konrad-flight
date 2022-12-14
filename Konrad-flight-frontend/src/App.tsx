import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer.jsx";
import "./App.css";
import { Map } from "./features/Map/Map";

function App() {
  return (
    <>
      <Navbar />
      <Map />
      <Footer />
    </>
  );
}

export default App;
