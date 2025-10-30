import React from "react";

// Portfolio website single-file React component (Tailwind CSS required)
// How to use:
// 1. Create a React app (Vite or Create React App).
// 2. Install and configure Tailwind CSS (https://tailwindcss.com/docs/guides)
// 3. Place this file in src/components/Portfolio.jsx and import it in App.jsx.
// 4. Replace placeholder text (EMAIL_HERE, LINKEDIN_URL, GITHUB_URL) with your details.

export default function Portfolio() {
  const name = "Sakthivel S M"; // edit if needed
  const title = "B.Tech Information Technology — Software Developer";
  const phone = "+91 8667007377";
  const email = "sakthivel.sm@example.com"; // <-- replace with your email
  const location = "Erode, Tamil Nadu, India";
  const college = "M. Kumarasamy College of Engineering";
  const degree = "B.Tech — Information Technology";
  const graduation = "Expected Graduation: 2025"; // replace YEAR

  const projects = [
    {
      name: "Customer Feedback Management System",
      desc: "DBMS project with admin/user logins, feedback CRUD, analytics and search features.",
      link: "#"
    },
    {
      name: "Farm2Bag Website & Chatbot",
      desc: "Responsive e-commerce site for farm produce with a chatbot to assist users and handle orders.",
      link: "#"
    },
    {
      name: "Autonomous Water Surface Cleaning Robot",
      desc: "Hardware + Arduino control, navigation, basic obstacle avoidance; documentation and code included.",
      link: "#"
    }
  ];

  const skills = [
    "Java", "Python", "C++", "Data Structures & Algorithms", "Machine Learning",
    "Cloud Computing", "DevOps Basics", "Agile & Scrum", "Web Development (React, HTML, CSS, JS)"
  ];

  const certifications = [
    { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" }
  ];

  const extracurriculars = [
    "National Player — Kudo", "National Player — Silambam", "Digital Marketing coursework", "Hackathon participant"
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-400 flex items-center justify-center text-white font-bold">SS</div>
            <div>
              <h1 className="text-lg font-semibold">{name}</h1>
              <p className="text-xs text-gray-600">{title}</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="md:hidden text-sm">{/* mobile menu placeholder */}</div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-3">Hi, I'm {name}.</h2>
            <p className="text-lg text-gray-700 mb-4">I build clean, modern, and maintainable web applications and software solutions. Currently pursuing {degree} at {college}. I enjoy solving problems using algorithms, building full-stack applications, and exploring AI/ML solutions.</p>
            <div className="flex gap-4 mt-4">
              <a href={`mailto:${email}`} className="inline-block px-5 py-2 rounded-2xl bg-indigo-600 text-white text-sm font-medium">Email Me</a>
              <a href="#projects" className="inline-block px-5 py-2 rounded-2xl border border-gray-300 text-sm">View Projects</a>
            </div>

            <ul className="mt-6 text-sm text-gray-600 space-y-1">
              <li><strong>Location:</strong> {location}</li>
              <li><strong>Phone:</strong> {phone}</li>
              <li><strong>Education:</strong> {degree}, {college}</li>
              <li><strong>Graduation:</strong> {graduation}</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="h-64 rounded-lg bg-gray-100 overflow-hidden flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60" alt="profile" className="object-cover h-full w-full" />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Quick Summary</h3>
              <p className="text-sm text-gray-600">Skilled in Java, Python and modern web development. Strong team-player with leadership and communication strengths. National-level player in Kudo and Silambam.</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-12">
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="text-gray-700">I am a proactive and detail-oriented engineering student focused on software development, data-driven solutions and robotics. I enjoy end-to-end product building: from requirement analysis and architecture to implementation, testing and deployment. My strengths include coding, teamwork, communication, and adaptability. Outside tech I compete nationally in Kudo and Silambam.</p>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Projects</h3>
            <p className="text-sm text-gray-600">Selected academic and personal projects</p>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <article key={idx} className="bg-white rounded-xl shadow p-5 flex flex-col">
                <h4 className="font-semibold text-lg">{p.name}</h4>
                <p className="text-sm text-gray-600 mt-2 flex-1">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a href={p.link} className="text-indigo-600 text-sm">View details</a>
                  <span className="text-xs text-gray-400">2024</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-12">
          <h3 className="text-2xl font-bold">Skills</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skills.map((s, i) => (
              <div key={i} className="bg-white rounded-lg p-3 text-sm text-gray-700 shadow">{s}</div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="mt-12">
          <h3 className="text-2xl font-bold">Certifications</h3>
          <div className="mt-4 space-y-3">
            {certifications.map((c, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow flex justify-between items-center">
                <div>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-gray-500">{c.issuer} • {c.year}</div>
                </div>
                <a href="#" className="text-sm text-indigo-600">View</a>
              </div>
            ))}
          </div>
        </section>

        {/* Extracurriculars / Achievements */}
        <section id="achievements" className="mt-12">
          <h3 className="text-2xl font-bold">Achievements & Extra-curricular</h3>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            {extracurriculars.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12 mb-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="text-sm text-gray-600 mt-2">Want to work together or learn more? Reach out via email or phone.</p>

            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <div><strong>Email:</strong> <a href={`mailto:${email}`} className="text-indigo-600">{email}</a></div>
              <div><strong>Phone:</strong> <a href={`tel:${phone}`} className="text-indigo-600">{phone}</a></div>
              <div><strong>Location:</strong> {location}</div>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="https://linkedin.com/in/sakthivel-sm" target="_blank" rel="noreferrer" className="text-sm border rounded-full px-4 py-2">LinkedIn</a>
              <a href="https://github.com/sakthivel-sm" target="_blank" rel="noreferrer" className="text-sm border rounded-full px-4 py-2">GitHub</a>
            </div>
          </div>

          <form className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold">Quick Message</h3>
            <p className="text-sm text-gray-600 mt-2">This form uses mailto (client) — replace with an API endpoint if you want server handling.</p>
            <label className="block mt-4 text-sm">Your name</label>
            <input className="w-full mt-1 p-2 rounded border" placeholder="Your name" />
            <label className="block mt-3 text-sm">Your email</label>
            <input className="w-full mt-1 p-2 rounded border" placeholder="name@domain.com" />
            <label className="block mt-3 text-sm">Message</label>
            <textarea className="w-full mt-1 p-2 rounded border" rows="4" placeholder="Write a short message..."></textarea>
            <div className="mt-4 flex justify-end">
              <button type="button" onClick={() => window.alert('This demo form uses client mail. Replace with backend to collect messages.')} className="px-4 py-2 rounded-2xl bg-indigo-600 text-white text-sm">Send</button>
            </div>
          </form>
        </section>

      </main>

      <footer className="bg-white border-t">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-600">© {new Date().getFullYear()} {name} • Built with ♥ • <a href="#" className="text-indigo-600">React & Tailwind</a></div>
      </footer>
    </div>
  );
}