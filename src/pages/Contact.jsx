const Contact = () => {
    return (
        <div className="px-6 md:px-110 my-30">
            {/* Greetings and Title */}
            <div className="flex flex-col items-start gap-2 mb-10">
                <p className="font-bold text-primary text-4xl">CONTACT</p>
                <p>Get in touch with me</p>
            </div>

            {/* Contact Form */}
            <div className="bg-background border-2 mt-4 flex flex-col gap-4 justify-around p-6">
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-lg">Name</label>
                        <input type="text" id="name" name="name" className="border-2 p-2" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input type="email" id="email" name="email" className="border-2 p-2" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-lg">Message</label>
                        <textarea id="message" name="message" className="border-2 p-2 h-40" />
                    </div>

                    <button type="submit" className="btn btn-soft hover:bg-primary btn-primary cursor-pointer">Send Message</button>
                </form>
            </div>
        </div>
    );
};
export default Contact;
