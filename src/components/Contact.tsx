import { Mail, Phone, MapPin, Github, Linkedin, Code2, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {

  const form = useRef(null);

  const sendEmail = async (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    try {

      await emailjs.sendForm(
        "service_hhh0yyv",
        "template_eisn3am",
        form.current,
        "1yl2W_bxu2DSzVE5l"
      );

      alert("Message sent successfully!");

      e.target.reset();

    } catch (error) {

      console.error(error);
      alert("Failed to send message");

    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>

        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">

              <a
                href="mailto:erharshpandey22@gmail.com"
                className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all"
              >

                <div className="p-3 bg-blue-600 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-medium">
                    erharshpandey22@gmail.com
                  </p>
                </div>

              </a>

              <a
                href="tel:8957666492"
                className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all"
              >

                <div className="p-3 bg-cyan-600 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="font-medium">
                    +91 8957666492
                  </p>
                </div>

              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg">

                <div className="p-3 bg-green-600 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-medium">India</p>
                </div>

              </div>

            </div>

            <div className="mt-8">

              <h4 className="text-xl font-semibold mb-4">
                Connect With Me
              </h4>

              <div className="flex gap-4">

                <a
                  href="https://github.com/harshpandey3996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-800 hover:bg-blue-600 rounded-full transition-all hover:scale-110"
                >
                  <Github size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/harsh-pandey-76a5ba346/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-800 hover:bg-blue-600 rounded-full transition-all hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>

                <a
                  href="https://leetcode.com/u/i_am_harsh_pandit_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-800 hover:bg-blue-600 rounded-full transition-all hover:scale-110"
                >
                  <Code2 size={24} />
                </a>

              </div>

            </div>

          </div>

          <div className="bg-slate-800 p-8 rounded-xl">

            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">

              <div>

                <label className="block text-sm font-medium mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />

              </div>

              <div>

                <label className="block text-sm font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="your.email@example.com"
                />

              </div>

              <div>

                <label className="block text-sm font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Your message..."
                ></textarea>

              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all hover:scale-105"
              >

                <Send size={18} />
                Send Message

              </button>

            </form>

          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-700 text-center">

          <p className="text-slate-400">
            © 2026 Harsh Pandey. Built with React.js and Tailwind CSS.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Contact;