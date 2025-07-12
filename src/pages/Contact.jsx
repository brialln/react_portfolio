import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending message...");

        try {
            const response = await fetch("https://briallnportfolio.vercel.app/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            setStatus(data.message);
            if (data.success) setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("Failed to send message.");
        }
    };

    return (
        <div className="relative px-6 md:px-100 my-30 z-10">
            <div className="flex flex-col items-start gap-2 mb-10">
                <p className="font-bold text-primary text-4xl">CONTACT</p>
                <p>Get in touch with me</p>
            </div>

            <div className="bg-background border-2 mt-4 flex flex-col gap-4 justify-around p-6 overflow-hidden">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {status && (
                    <div className={`p-2 text-center text-sm font-semibold ${status === "Message sent!" ? "bg-soft-color text-red-500" : "bg-soft-color text-primary"}`}>
                        <p>{status}</p>
                    </div>
                )}


                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" className="border-2 p-2" onChange={handleChange} value={formData.name} required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="border-2 p-2" onChange={handleChange} value={formData.email} required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" className="border-2 p-2 h-40" onChange={handleChange} value={formData.message} required />
                    </div>

                    <button type="submit" className="btn bg-soft-color border-none shadow-none rounded-none btn-primary text-primary hover:bg-primary hover:text-white">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;