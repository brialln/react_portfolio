import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["Web Developer", "Data Analyst", "UI/UX Designer"];

const Home = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change word every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative px-6 md:px-25 my-10">
            <div className="flex flex-col py-10 md:py-20">
                <p className="w-full max-w-xs md:max-w-sm">
                    Hello, I’m Brian Mayor, Software Developer, Data Analyst, and UI/UX Designer 
                    Based in Manila, Philippines.  
                </p>
            </div>

            <div className="flex flex-col py-6 md:py-10">
                <motion.p
                    className="text-primary text-3xl md:text-5xl font-bold"
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                >
                    {words[index]}
                </motion.p>
            </div>
        </div>
    );
};

export default Home;
