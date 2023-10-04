import './index.css'
import { BrowserRouter  as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import { GithubProvider } from './context/github/GithubContext';


function App() {
  return (
    <GithubProvider>
      <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className='container mx-auto px-3'> 
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/notfound' element={ <NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </GithubProvider>
  );
}

export default App;
