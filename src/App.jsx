import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Designing from './pages/Designing';
import Development from './pages/Development';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
};

const PageWrapper = ({ children }) => (
    <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        {children}
    </motion.div>
);

function App() {
    const location = useLocation(); // Get current route location

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                        <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
                        <Route path="/development" element={<PageWrapper><Development /></PageWrapper>} />
                        <Route path="/designing" element={<PageWrapper><Designing /></PageWrapper>} />
                        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}

export default App;
