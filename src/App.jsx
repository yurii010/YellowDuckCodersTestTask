import About from "./components/About/About";
import Comments from "./components/Comments/Comments";
import Drivers from "./components/Drivers/Drivers";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div>
      <Navbar />
      <Topbar />
      <About />
      <Drivers />
      <Service />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
