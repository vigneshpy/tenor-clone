
import './App.css';
import Header from "./components/Header"
import SecondaryHeader from "./components/SecondaryHeader"
import TrendingSection from "./components/Sections/TrendingSection"
function App() {
  return (
    <div className="App">
        <Header />
        <SecondaryHeader/>
        <TrendingSection/>
    </div>
  );
}

export default App;
