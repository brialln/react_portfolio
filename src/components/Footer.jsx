import { Github, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="px-6 md:px-25 py-6 md:py-10 bg-transparent z-10 fixed bottom-0 w-full pointer-events-none">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-y-6">
                <div className="flex flex-col gap-y-2 text-center md:text-left">
                    <p>mayorbrianallen@gmail.com</p>
                    <p>+63 936 954 6448</p>
                </div>

                <div className="flex flex-row md:flex-col items-center md:items-end gap-x-6 md:gap-y-8 cursor-pointer">
                    <a href="https://github.com/brialln" target="_blank" rel="noopener noreferrer">
                        <Github size={24} className="text-white hover:text-primary ease-in-out duration-300 pointer-events-auto" />
                    </a>

                    <a href="https://www.linkedin.com/in/brian-allen-mayor-7ab44b271/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={24} className="text-white hover:text-primary ease-in-out duration-300 pointer-events-auto" />
                    </a>

                    <a href="https://www.facebook.com/brianmyr" target="_blank" rel="noopener noreferrer">
                        <Facebook size={24} className="text-white hover:text-primary ease-in-out duration-300 pointer-events-auto" />
                    </a>

                    <a href="https://www.instagram.com/briallnmr" target="_blank" rel="noopener noreferrer">
                        <Instagram size={24} className="text-white hover:text-primary ease-in-out duration-300 pointer-events-auto" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;