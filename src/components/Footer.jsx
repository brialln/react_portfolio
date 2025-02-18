import { Github, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="px-6 md:px-25 py-6 md:py-10 bg-background z-1">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-y-6">
                <div className="flex flex-col gap-y-2 text-center md:text-left">
                    <p>mayorbrianallen@gmail.com</p>
                    <p>+63 936 954 6448</p>
                </div>

                <div className="flex flex-row md:flex-col items-center md:items-end gap-x-6 md:gap-y-8 cursor-pointer">
                    <Github size={24} className="text-white" />
                    <Linkedin size={24} className="text-white" />
                    <Facebook size={24} className="text-white" />
                    <Instagram size={24} className="text-white" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
