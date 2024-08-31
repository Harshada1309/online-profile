import { HashRouter } from 'react-router-dom';
import Navbar from './Components/Navrbar/Navbar';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Section from './Components/Section/Section';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <HashRouter>
      <div>
        <Navbar/>
        <Header/>
        <Main/>
        <Section/>
        <Footer/>
      </div>
    </HashRouter>
  )
}

export default App;




