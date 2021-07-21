import Header from "./components/Header";
import Hero from "./modules/Hero";
import Main from "./modules/Main";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Hero />
        <Main />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
