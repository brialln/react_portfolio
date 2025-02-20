import sample_image from "../assets/sample_image.jpg";

const Designing = () => {
    return (
        <div className="relative px-6 md:px-110 my-30">
            {/* Greetings and Title */}
            <div className="flex flex-col items-start gap-2 mb-10">
                <p className="font-bold text-primary text-4xl">PROJECTS</p>
                <p className="text-lg text-gray-600">UI/UX Designs</p>
            </div>

            {/* Projects */}
            <div className="bg-background border-2 mt-4 flex flex-col gap-4 justify-around p-6">
                <div className="overflow-hidden border-primary border-2">
                    <img src={sample_image} alt="Project" className="w-full h-64 object-cover" />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold text-center">Title</p>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam commodi reiciendis error officia 
                        dolores saepe illo, perspiciatis ducimus quia, similique minus non architecto assumenda harum 
                        deleniti dolor laudantium pariatur illum!
                    </p>
                </div>

                <div className="flex flex-row gap-10 justify-center mt-2">
                    <i class="devicon-react-original-wordmark colored text-4xl"></i>
                    <i class="devicon-tailwindcss-plain-wordmark colored text-4xl"></i>
                    <i class="devicon-nodejs-plain colored text-4xl"></i>
                    <i class="devicon-express-original-wordmark text-4xl"></i>
                    <i class="devicon-postgresql-plain-wordmark colored text-4xl"></i>
                </div>
            </div>
        </div>
    );
};

export default Designing;
