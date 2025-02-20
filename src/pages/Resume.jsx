import { Code, Figma, ChartArea, UsersRound, User, Speech} from "lucide-react"


const Resume = () => {
    return (
        <div className="relative px-6 md:px-110 my-30 z-10">
            {/* Greetings and Title */}
            <div className="flex flex-col items-start gap-4 mb-15">
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
                        <a href="/vite.svg" download="vite.svg" className="btn btn-soft rounded-none btn-primary">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-4 text-justify">
                    <p>Hi, I am <span className="font-bold text-primary">Brian Allen!</span></p>
                    <p>My passion for technology began early, evolving into a career of continuous learning and leadership. At <span className="font-bold text-primary">21</span>, I am a graduate of <span className="font-bold text-primary">Bachelor of Science in Information Technology</span> at The National Teachers College-Manila, with a heavy focus in <span className="font-bold text-primary">Software Development</span> . I am currently based in Manila, Philippines as I continue to grow and expand my knowledge about <span className="font-bold text-primary">Software Development, Data Analytics, and UI/UX designing.</span></p>

                    <p>With the passion that I have for Information Technology, I have extended myself in multiple ventures outside of my college-related activities, including <span className="font-bold text-primary">seminars, certifications, and online courses.</span> I also hold a scholarship from <span className="font-bold text-primary">DataCamp Donates</span> where I learned <span className="font-bold text-primary">basic data engineering and data visualization.</span></p>
                </div>
            </div>

            {/* Experience and Education Titles */}
            <div className="flex flex-col gap-4 mt-20">
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
            <div className="bg-background border-2 mt-4 grid grid-cols-[1fr_1fr] gap-10 p-6 w-full max-w-screen-lg mx-auto">

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-300">Sept 2023 - Feb 2024</p>
                        <p className="font-bold">IT Department - The National Teachers College - Manila</p>
                        <p className="text-sm font-bold">Student Assistant</p>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-justify">
                        <p>Exposed in the professional IT workplace set-up.</p>
                        <p>Assisted employees with IT-related issues and concerns.</p>
                        <p>Aided IT staffs in handling school hardware possessions.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-300">2021 - 2025</p>
                        <p className="font-bold">The National Teachers College - Manila</p>
                        <p className="text-sm font-bold">Bachelor of Science in Information Technology</p>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-justify">
                        <p>Developed mobile-web software applications.</p>
                        <p>Collaborated with peers about academic.</p>
                        <p>Learnt multiple usage of software technologies.</p>
                    </div>
                </div>
            </div>

            {/* Skills Title */}
            <div className="flex flex-col gap-4 mt-20">
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
            <div className="bg-background border-2 mt-4 flex flex-row gap-10 justify-around p-8">
                <div className="flex flex-col gap-10">

                    <div className="flex flex-col gap-2 justify-center items-center text-justify">
                        <Code size={48} color="#00E054" />
                        <p className="font-bold">Web Development</p>
                        <p>Modern and mobile-ready websites using PostgresSQL, ReactJS, ExpressJS, and NodeJS.</p>
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center text-justify">
                        <Figma size={48} color="#00E054" />
                        <p className="font-bold">UI/UX Design</p>
                        <p>Equipped with modern ideas and creativity for UI and UX designing via Figma.</p>
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center text-justify">
                        <ChartArea size={48} color="#00E054" />
                        <p className="font-bold">Data Analytics</p>
                        <p>Knowledgeable in manipulating data analytics and vizualization using R and Python.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2 justify-center items-center text-justify">
                        <User size={48} color="#00E054" />
                        <p className="font-bold">Leadership</p>
                        <p>Experienced in leading initiatives and expanding teams to enhance operational capacity.</p>
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center text-justify">
                        <UsersRound size={48} color="#00E054" />
                        <p className="font-bold">Team Management</p>
                        <p>Equipped with modern ideas and creativity for UI and UX designing via Figma.</p>
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center text-justify">
                        <Speech size={48} color="#00E054" />
                        <p className="font-bold">Collaboration</p>
                        <p>Knowledgeable in manipulating data analytics and vizualization using R and Python.</p>
                    </div>
                </div>
            </div>

            {/* Coding Skills */}
            <div className="flex flex-col gap-4 mt-20">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-4">
                        <p className="font-bold text-primary text-2xl">Knowledge and Skills</p>
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