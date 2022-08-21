import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Subscribe from "./components/Subscribe/Subscribe";
function App() {
  return (
    <div className="App">
      <Header />
      <Features/>
      <Services/>
      <Subscribe/>
    </div>
  );
}

export default App;
