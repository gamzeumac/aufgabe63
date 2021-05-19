import './App.scss';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Aside from "./components/Aside"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Card/>      
      <Aside/>
      <Footer/>
    </div>
  );
}

export default App;
