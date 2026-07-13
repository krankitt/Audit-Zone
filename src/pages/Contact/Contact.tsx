import { Clock, Mail, MapPin, Play } from "lucide-react";
import Container from "../../components/ui/Container";
import { contactInfo } from "../../data/contactInfo";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const icons = [
    <Mail size={22} />,
    <MapPin size={22} />,
    <Play size={22} />,
    <Clock size={22} />,
  ];

  // const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);
    toast.success("Message sent succesfully!");
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-zinc-950 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Contact us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            We'd love to hear from you. Reach out with your questions, feedback,
            or collaboration ideas.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="text-3xl font-bold text-white">Get in touch</h3>
            <p className="mt-3 text-zinc-400">
              Feel free to contact us anytime.
            </p>
            <div className="mt-8 space-y-6">
              {contactInfo.map((item, index) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="text-yellow-400">{icons[index]}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-zinc-400">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="text-3xl font-bold text-white">Send a Message</h3>
            <p className="mt-3 text-zinc-400">
              Fill out the form below and we'll get back to you soon.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-zinc-700 text-white bg-zinc-800 px-4 py-3 outline-none focus:border-yellow-400"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-zinc-700 text-white bg-zinc-800 px-4 py-3 outline-none focus:border-yellow-400"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter Subject"
                  className="w-full rounded-lg border border-zinc-700 text-white bg-zinc-800 px-4 py-3 outline-none focus:border-yellow-400"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write Your Message...."
                  className="w-full rounded-lg border border-zinc-700 text-white bg-zinc-800 px-4 py-3 outline-none focus:border-yellow-400"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black hover:bg-yellow-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
