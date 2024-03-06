import './App.css';
import Buttons from './components/buttons/buttons';
import Nav from './components/navigation/navigation';
import Footer from './components/footer/footer';
import Sec1 from './components/section1/section1';
import Testimonies from './components/testimonies/testimonies';
import Functionalities from './components/functionalities/functionalities'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Buttons/>
      <Sec1/>
      <Testimonies/>
      <Functionalities/>
      <Footer/>
    </div>
  );
}

export default App;
