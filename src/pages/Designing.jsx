import lagusnilad_cover from "../assets/lagusnilad_cover.png";
import coffeeinsight_mockup from "../assets/coffeeinsight_mockup.png";
import { Github } from "lucide-react";

const Designing = () => {
    return (
        <div className="relative px-6 md:px-100 my-30 z-10">
            {/* Greetings and Title */}
            <div className="flex flex-col items-start gap-2 mb-20">
                <p className="font-bold text-primary text-4xl">PROJECTS</p>
                <p className="text-lg">UI/UX Designs</p>
            </div>

            {/* Design 1 */}
            <div className="bg-background border-2 mt-4 flex flex-col gap-6 justify-around p-6 overflow-hidden">
                <div className="overflow-hidden border-primary border-2">
                    <img src={lagusnilad_cover} alt="Project" className="w-full h-auto object-contain"/>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold text-center">Lagusnilad Bookstore</p>
                    <p className="text-justify">
                        Designed a simple CRUD application for a bookstore, enabling seamless user registration, book management, and efficient book search and filtering.
                    </p>
                </div>

                <div className="pt-2 flex flex-row justify-center items-center">
                    <a href="https://www.figma.com/design/XWcqog6mX0ygFA98BcxAQG/LAGUSNILAD--BOOKS-FROM-UNDERGROUND?m=auto&t=kGznyUeqZZais2Fg-6" target="_blank" rel="noreferrer">
                        <button className="btn bg-soft-color border-none shadow-none rounded-none btn-primary text-primary hover:bg-primary hover:text-white">View Project</button>
                    </a>
                </div>
            </div>

            {/* Design 2 */}
            <div className="bg-background border-2 mt-20 flex flex-col gap-4 justify-around p-6 overflow-hidden">
                <div className="overflow-hidden border-primary border-2">
                    <img src={coffeeinsight_mockup} alt="Project" className="w-full h-auto object-contain" />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold text-center">Coffee Insight</p>
                    <p className="text-justify">
                        Designed a coffee shop application that allows users to locate the nearest coffee shop, give ratings, and leave reviews using Google Maps API.
                    </p>
                </div>

                <div className="pt-2 flex flex-row justify-center items-center">
                    <a href="https://www.figma.com/design/W5kczHzRIckJ5eQU9K5YD9/COFFEE-INSIGHT?m=auto&t=kGznyUeqZZais2Fg-6" target="_blank" rel="noreferrer">
                        <button className="btn bg-soft-color border-none shadow-none rounded-none btn-primary text-primary hover:bg-primary hover:text-white">View Project</button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Designing;
