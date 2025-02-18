import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Designing from './pages/Designing';
import Development from './pages/Development';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/development" element={<Development />} />
                    <Route path="/designing" element={<Designing />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
