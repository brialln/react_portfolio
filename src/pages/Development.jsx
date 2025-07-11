import simplecrud_cover from "../assets/simplecrud_cover.png";
import barangaycare_cover from "../assets/barangaycare_cover.png";
import portfolio_cover from "../assets/portfolio_cover.png";
import { Github } from "lucide-react";

const Development = () => {
    return (
        <div className="relative px-6 md:px-100 my-30 z-10">
            {/* Greetings and Title */}
            <div className="flex flex-col items-start gap-2 mb-20">
                <p className="font-bold text-primary text-4xl">PROJECTS</p>
                <p className="text-lg">Software Development</p>
            </div>

            {/* Project 1 */}
            <div className="bg-background border-2 mt-4 flex flex-col gap-6 justify-around p-6">
                <div className="overflow-hidden border-primary border-2">
                    <img 
                        src={simplecrud_cover} 
                        alt="Project" 
                        className="w-full h-auto object-contain" 
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold text-center">Simple CRUD Application</p>
                    <p className="text-justify">
                        A simple CRUD application built with React, TailwindCSS, NodeJS, and ExpressJS. It uses PostgreSQL as the database and DaisyUI for styling.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-2">
                    {["React", "TailwindCSS", "NodeJS", "ExpressJS", "PostgreSQL", "DaisyUI", "JavaScript"].map((tech) => (
                        <button
                        key={tech}
                        className="border-2 border-primary px-4 py-2 text-center w-full h-10 flex items-center justify-center text-sm text-wrap break-words hover:bg-primary hover:text-white transition cursor-pointer whitespace-normal overflow-hidden"
                        >
                        {tech}
                        </button>
                    ))}
                </div>




                <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <a href="https://github.com/brialln/simple_crud-application" target="_blank" rel="noopener noreferrer">
                        <Github size={42} className="text-white hover:text-primary ease-in-out duration-300 pointer-events-auto cursor-pointer bg-soft-color p-2 border-2 rounded-full" />
                    </a>

                    <a href="https://github.com/brialln/simple_crud-application" target="_blank" rel="noopener noreferrer">
                        <button className="btn bg-soft-color border-none shadow-none rounded-none btn-primary text-primary hover:bg-primary hover:text-white">View Source Code Only</button>
                    </a>
    
                </div>
            </div>

            {/* Project 2 */}
            <div className="bg-background border-2 mt-20 flex flex-col gap-6 justify-around p-6">
                <div className="overflow-hidden border-primary border-2">
                    <img src={barangaycare_cover} alt="Project" className="w-full h-auto object-contain" />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold text-center">BarangayCare | Capstone Project</p>
                    <p className="text-justify">
                        Designed and developed the user interface for a barangay web-based assistance system, enabling seamless user registration, document requests, form submissions, and efficient information dissemination.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-2">
                    {["HTML5", "CSS3", "JavaScript"].map((tech) => (
                        <button
                        key={tech}
                        className="border-2 border-primary px-4 py-2 text-center w-full h-10 flex items-center justify-center text-sm text-wrap break-words hover:bg-primary hover:text-white transition cursor-pointer whitespace-normal overflow-hidden"
                        >
                        {tech}
                        </button>
                    ))}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <a href="https://github.com/brialln/barangay_care-frontend" target="_blank" rel="noopener noreferrer">
                        <Github size={42} className="text-white hover:text-primary ease-in-out duration-300 pointer-events-auto cursor-pointer bg-soft-color p-2 border-2 rounded-full" />
                    </a>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <a href="https://barangaycare-residents-frontend.vercel.app" target="_blank" rel="noopener noreferrer">
                        <button className="btn bg-soft-color border-none shadow-none rounded-none btn-primary text-primary hover:bg-primary hover:text-white">View Residents' UI</button>
                    </a>

                    <a href="https://barangaycare-admin-frontend.vercel.app" target="_blank" rel="noopener noreferrer">
                        <button className="btn bg-soft-color border-none shadow-none rounded-none btn-primary text-primary hover:bg-primary hover:text-white">View Admin's UI</button>
                    </a>
                </div>
                    
                </div>
            </div>

            {/* Project 3 */}
            <div className="bg-background border-2 mt-20 flex flex-col gap-6 justify-around p-6">
                <div className="overflow-hidden border-primary border-2">
                    <img src={portfolio_cover} alt="Project" className="w-full h-auto object-contain" />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold text-center">Personal Portfolio</p>
                    <p className="text-justify">
                        Designed and developed my personal portfolio website using React, TailwindCSS, and Framer Motion. It showcases my skills, projects, and contact information.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-2 items-center">
                    {["React", "TailwindCSS", "DaisyUI", "Nodemailer", "JavaScript", "Framer Motion"].map((tech) => (
                        <button
                        key={tech}
                        className="border-2 border-primary px-4 py-2 text-center w-full h-10 flex items-center justify-center text-sm text-wrap break-words hover:bg-primary hover:text-white transition cursor-pointer whitespace-normal overflow-hidden"
                        >
                        {tech}
                        </button>
                    ))}
                </div>


                <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <a href="https://github.com/brialln/react_portfolio" target="_blank" rel="noopener noreferrer">
                        <Github size={42} className="text-white hover:text-primary ease-in-out duration-300 pointer-events-auto cursor-pointer bg-soft-color p-2 border-2 rounded-full" />
                    </a>

                    <a href="https://briallnportfolio.vercel.app" target="blank" rel="noopener noreferrer">
                        <button className="btn bg-soft-color border-none shadow-none rounded-none btn-primary text-primary hover:bg-primary hover:text-white">View Project</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Development;
