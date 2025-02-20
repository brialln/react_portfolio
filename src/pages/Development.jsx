import sample_image from "../assets/sample_image.jpg";
import { Github } from "lucide-react";

const Development = () => {
    return (
        <div className="relative px-6 md:px-110 my-30 z-10">
            {/* Greetings and Title */}
            <div className="flex flex-col items-start gap-2 mb-20">
                <p className="font-bold text-primary text-4xl">PROJECTS</p>
                <p className="text-lg">Software Development</p>
            </div>

            {/* Projects */}
            <div className="bg-background border-2 mt-4 flex flex-col gap-4 justify-around p-6">
                <div className="overflow-hidden border-primary border-2">
                    <img src={sample_image} alt="Project" className="w-full h-72 object-cover" />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold text-center">Simple CRUD Application</p>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam commodi reiciendis error officia 
                        dolores saepe illo, perspiciatis ducimus quia, similique minus non architecto assumenda harum 
                        deleniti dolor laudantium pariatur illum!
                    </p>
                </div>

                <div className="flex flex-col gap-3 justify-center items-center mt-2">
                    <div className="flex flex-row gap-2">
                        <p className="border-primary border-2 px-4 py-2">React</p>
                        <p className="border-primary border-2 px-4 py-2">TailwindCSS</p>
                        <p className="border-primary border-2 px-4 py-2">NodeJS</p>
                        <p className="border-primary border-2 px-4 py-2">ExpressJS</p>
                    </div>

                    <div className="flex flex-row gap-2">
                        <p className="border-primary border-2 px-4 py-2">PostgreSQL</p>
                        <p className="border-primary border-2 px-4 py-2">DaisyUI</p>
                        <p className="border-primary border-2 px-4 py-2">JavaScript</p>
                    </div>
                </div>


                <div className="pt-2 flex flex-row justify-between items-center">
                    <a href="https://github.com/brialln/simple_crud-application" target="_blank" rel="noopener noreferrer">
                        <Github size={42} className="text-white hover:text-primary ease-in-out duration-300 pointer-events-auto cursor-pointer bg-soft-color p-2 border-2 rounded-full" />
                    </a>
                    <button className="btn btn-soft rounded-none btn-primary">View Project</button>
                </div>
            </div>
        </div>
    );
};

export default Development;
