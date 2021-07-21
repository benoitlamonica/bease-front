import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import RouteContent from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Wrapper>
          <RouteContent />
        </Wrapper>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
