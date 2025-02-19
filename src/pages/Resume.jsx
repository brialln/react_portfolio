import { Code, Figma, ChartArea, UsersRound, User, Speech} from "lucide-react"


const Resume = () => {
    return (
        <div className="px-6 md:px-110 my-30">
            {/* Greetings and Title */}
            <div className="flex flex-col items-start gap-4 mb-10">
                <p className="font-bold text-primary text-4xl">RESUME</p>
                <p>Hi! Welcome.</p>
            </div>

            {/* Introduction */}
            <div className="bg-background border-2 flex flex-row gap-10 justify-around p-6">
                <div className="avatar flex flex-col items-center gap-10">
                    <div className="ring-primary ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>

                    <div className="pt-5">
                        <button className="btn btn-soft btn-primary">Download CV</button>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p>Hi, I am Brian!</p>
                    <p>My passion for technology began early, evolving into a career of continuous learning and leadership. At 21, I am a graduate of Bachelor of Science in Information Technology at The National Teachers College-Manila, with a heavy focus in Software Technology. I am currently based in Manila, Philippines as I continue to grow and expand my knowledge about software development, data engineering, and UI/UX designing.</p>
                    <p>With the passion that I have for Information Technology, I have extended myself in multiple ventures outside of my college-related activities, including seminars, certifications, and online courses. I also hold a scholarship from DataCamp Donates where I learned basic data engineering and data visualization. </p>
                </div>
            </div>

            {/* Experience and Education Titles */}
            <div className="flex flex-col gap-4 mt-10">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-4">
                            <p className="font-bold text-primary text-2xl">Experience</p>
                    </div>

                    <div className="flex flex-col gap-4">
                            <p className="font-bold text-primary text-2xl">Education</p>
                    </div>
                </div>
            </div>

            {/* Experience and Education Contents */}
            <div className="bg-background border-2 mt-4 flex flex-row gap-10 justify-around p-6">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p>Sept 2023 - Feb 2024</p>
                        <p>IT Department - The National Teachers College - Manila</p>
                        <p>Student Assistant</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p>Exposed in the professional IT workplace set-up.</p>
                        <p>Assisted employees with IT-related issues and concerns.</p>
                        <p>Aided IT staffs in handling school hardware possessions.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p>Sept 2023 - Feb 2024</p>
                        <p>IT Department - The National Teachers College - Manila</p>
                        <p>Student Assistant</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p>Exposed in the professional IT workplace set-up.</p>
                        <p>Assisted employees with IT-related issues and concerns.</p>
                        <p>Aided IT staffs in handling school hardware possessions.</p>
                    </div>
                </div>
            </div>

            {/* Skills Title */}
            <div className="flex flex-col gap-4 mt-10">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-4">
                            <p className="font-bold text-primary text-2xl">Hard Skills</p>
                    </div>

                    <div className="flex flex-col gap-4">
                            <p className="font-bold text-primary text-2xl">Soft Skills</p>
                    </div>
                </div>
            </div>

            {/* Skills Content */}
            <div className="bg-background border-2 mt-4 flex flex-row gap-10 justify-around p-6">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Code size={24} />
                        <p>Web Development</p>
                        <p>Modern and mobile-ready websites using PostgresSQL, ReactJS, ExpressJS, and NodeJS.</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Figma size={24} />
                        <p>UI/UX Design</p>
                        <p>Equipped with modern ideas and creativity for UI and UX designing via Figma.</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <ChartArea size={24} />
                        <p>Data Analytics</p>
                        <p>Knowledgeable in manipulating data analytics and vizualization using R and Python.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Code size={24} />
                        <p>Web Development</p>
                        <p>Modern and mobile-ready websites using PostgresSQL, ReactJS, ExpressJS, and NodeJS.</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Figma size={24} />
                        <p>UI/UX Design</p>
                        <p>Equipped with modern ideas and creativity for UI and UX designing via Figma.</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <ChartArea size={24} />
                        <p>Data Analytics</p>
                        <p>Knowledgeable in manipulating data analytics and vizualization using R and Python.</p>
                    </div>
                </div>
            </div>

            {/* Coding Skills */}
            <div className="flex flex-col gap-4 mt-10">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-4">
                        <p className="font-bold text-primary text-2xl">Knowledge & Coding Skills</p>
                    </div>
                </div>
            </div>

            {/* Coding Content */}
            <div className="bg-background border-2 mt-4 flex flex-col gap-10 p-10">
                <div className="flex flex-row gap-10 justify-center items-center">
                    <i class="devicon-html5-plain-wordmark colored text-7xl"></i>      
                    <i class="devicon-css3-plain-wordmark colored text-7xl"></i>
                    <i class="devicon-javascript-plain colored text-7xl"></i>
                    <i class="devicon-php-plain colored text-7xl"></i>
                    <i class="devicon-mysql-plain-wordmark colored text-7xl"></i>
                </div>

                <div className="flex flex-row gap-10 justify-center items-center">
                    <i class="devicon-react-original-wordmark colored text-7xl"></i>   
                    <i class="devicon-tailwindcss-plain-wordmark colored text-7xl"></i>
                    <i class="devicon-nodejs-plain-wordmark colored text-7xl"></i> 
                    <i class="devicon-express-original-wordmark text-7xl"></i>
                    <i class="devicon-postgresql-plain-wordmark colored text-7xl"></i>
                </div>

                <div className="flex flex-row gap-10 justify-center items-center">
                    <i class="devicon-python-plain-wordmark colored text-7xl"></i>
                    <i class="devicon-r-plain colored-wordmark text-7xl"></i>
                    <i class="devicon-figma-plain colored text-7xl"></i>
                    <i class="devicon-git-plain-wordmark colored text-7xl"></i>
                    <i class="devicon-github-original-wordmark text-7xl"></i>
                </div>
            </div>
        </div>
    );
};

export default Resume;