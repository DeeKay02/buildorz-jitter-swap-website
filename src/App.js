import './App.css';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SDKInfo from './components/SDKInfo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Featured />
      <SDKInfo />
    </div>
  );
}

export default App;
