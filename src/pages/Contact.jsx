export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg max-w-3xl w-full rounded-3xl shadow-2xl border border-[#605dff]/20 p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-[#605dff] drop-shadow-lg">Contact Me</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-10">
          Have an idea, a project, or just want to say hi? I’d love to hear from you!
        </p>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="p-4 bg-white/80 dark:bg-gray-900/70 border-2 border-[#605dff]/30 rounded-xl shadow-md flex flex-col items-center">
            <div className="text-xs font-semibold text-[#605dff] mb-1">Email</div>
            <div className="text-base font-medium text-gray-800 dark:text-gray-100 select-all">palkishakula22@gmail.com</div>
          </div>
          <div className="p-4 bg-white/80 dark:bg-gray-900/70 border-2 border-[#605dff]/30 rounded-xl shadow-md flex flex-col items-center">
            <div className="text-xs font-semibold text-[#605dff] mb-1">Phone</div>
            <div className="text-base font-medium text-gray-800 dark:text-gray-100 select-all">+91-6309804388</div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/palkishakula22@gmail.com"
          method="POST"
          className="space-y-6"
        >
          {/* Hidden input to disable CAPTCHA */}
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-200 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-white/60 dark:bg-gray-900/60 border-2 border-[#605dff]/20 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#605dff] placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-200 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-2 bg-white/60 dark:bg-gray-900/60 border-2 border-[#605dff]/20 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#605dff] placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-200 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-2 bg-white/60 dark:bg-gray-900/60 border-2 border-[#605dff]/20 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#605dff] placeholder:text-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 mt-2 rounded-xl bg-[#605dff] text-white font-bold shadow-md transition-all duration-200 hover:bg-[#4b44c9] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#605dff]/50"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center mt-10 gap-6">
          <a
            href="https://www.linkedin.com/in/akulapalkish"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#605dff] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            title="LinkedIn"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.53 2.84-1.53 3.04 0 3.6 2 3.6 4.59v4.71z"/></svg>
          </a>
          <a
            href="https://github.com/PalkishAkula"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#605dff] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            title="GitHub"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.273.098-2.654 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.506.338c1.91-1.294 2.75-1.025 2.75-1.025.545 1.381.202 2.401.1 2.654.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.36.309.681.921.681 1.857 0 1.34-.012 2.421-.012 2.751 0 .268.18.579.688.481A10.013 10.013 0 0 0 22 12c0-5.523-4.477-10-10-10z"/></svg>
          </a>
          
        </div>
      </div>
    </section>
  );
}
