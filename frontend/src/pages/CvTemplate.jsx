import { useState } from "react";
import styles from '../components/CV.module.css';

const CvTemplate = () => {
  // State for all sections initialized with empty or placeholder values
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    phone1: "",
    phone2: "",
    email: "",
    location: ""
  });

  const [education, setEducation] = useState([
    { institution: "", degree: "", duration: "" },
    { institution: "", degree: "", duration: "" }
  ]);

  const [skills, setSkills] = useState(["", "", ""]);

  const [languages, setLanguages] = useState(["", "", ""]);

  const [objective, setObjective] = useState("");

  const [workExperience, setWorkExperience] = useState([
    { company: "", role: "", duration: "", responsibilities: [""] },
    { company: "", role: "", duration: "", responsibilities: [""] }
  ]);

  const [references, setReferences] = useState([
    { name: "", role: "", phone: "", email: "" },
    { name: "", role: "", phone: "", email: "" }
  ]);

  // Function to handle CV download
  const handleDownload = () => {
    const printableArea = document.querySelector(".printable-area");
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>CV</title>
          <style>
            body { font-family: Arial, sans-serif; }
            .printable-area { padding: 20px; }
            h1, h2, h3 { color: #333; }
            p, li { color: #555; }
            ul { margin-left: 20px; }
          </style>
        </head>
        <body>
          ${printableArea.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className={styles.cvContainer}>
      <div className="min-h-screen bg-mypri p-8 bg-[url('/public/assets/cvb.jpg')] bg-repeat bg-auto bg-center bg-opacity-10">
        {/* Form Section */}
        <div className="mb-8 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className={styles.h2}>Personalize Your CV</h2>

          {/* Contact Form */}
          <div className="mb-6">
            <h3 className={styles.h3}>Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={contact.firstName}
                onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                className="w-full p-2 border rounded-lg"
                placeholder="First Name"
              />
              <input
                type="text"
                value={contact.lastName}
                onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
                className="w-full p-2 border rounded-lg"
                placeholder="Last Name"
              />
              <input
                type="date"
                value={contact.birthDate}
                onChange={(e) => setContact({ ...contact, birthDate: e.target.value })}
                className="w-full p-2 border rounded-lg"
                placeholder="Birth Date"
              />
              <input
                type="text"
                value={contact.phone1}
                onChange={(e) => setContact({ ...contact, phone1: e.target.value })}
                className="w-full p-2 border rounded-lg"
                placeholder="Your Phone Number 1"
              />
              <input
                type="text"
                value={contact.phone2}
                onChange={(e) => setContact({ ...contact, phone2: e.target.value })}
                className="w-full p-2 border rounded-lg"
                placeholder="Your Phone Number 2"
              />
              <input
                type="email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                className="w-full p-2 border rounded-lg"
                placeholder="Email Address"
              />
              <input
                type="text"
                value={contact.location}
                onChange={(e) => setContact({ ...contact, location: e.target.value })}
                className="w-full p-2 border rounded-lg"
                placeholder="Location"
              />
            </div>
          </div>

          {/* Objective Form */}
          <div className="mb-6">
            <h3 className={styles.h3}>Objective</h3>
            <textarea
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              className="w-full p-2 border rounded-lg"
              rows="4"
              placeholder="please write your objective here"
            />
          </div>

          {/* Education Form */}
          <div className="mb-6">
            <h3 className={styles.h3}>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => {
                    const updatedEducation = [...education];
                    updatedEducation[index].institution = e.target.value;
                    setEducation(updatedEducation);
                  }}
                  className="w-full p-2 border rounded-lg mb-2"
                  placeholder="Institution/school"
                />
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => {
                    const updatedEducation = [...education];
                    updatedEducation[index].degree = e.target.value;
                    setEducation(updatedEducation);
                  }}
                  className="w-full p-2 border rounded-lg mb-2"
                  placeholder="Degree/Certificate"
                />
                <input
                  type="text"
                  value={edu.duration}
                  onChange={(e) => {
                    const updatedEducation = [...education];
                    updatedEducation[index].duration = e.target.value;
                    setEducation(updatedEducation);
                  }}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Duration/Year use this format (2021 - 2024)"
                />
              </div>
            ))}
          </div>

          {/* Work Experience Form */}
          <div className="mb-6">
            <h3 className={styles.h3}>Work Experience</h3>
            {workExperience.map((exp, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => {
                    const updatedExperience = [...workExperience];
                    updatedExperience[index].company = e.target.value;
                    setWorkExperience(updatedExperience);
                  }}
                  className="w-full p-2 border rounded-lg mb-2"
                  placeholder="Company/Organization use this format (Company Name, Country)"
                />
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) => {
                    const updatedExperience = [...workExperience];
                    updatedExperience[index].role = e.target.value;
                    setWorkExperience(updatedExperience);
                  }}
                  className="w-full p-2 border rounded-lg mb-2"
                  placeholder="Role/Position"
                />
                <input
                  type="text"
                  value={exp.duration}
                  onChange={(e) => {
                    const updatedExperience = [...workExperience];
                    updatedExperience[index].duration = e.target.value;
                    setWorkExperience(updatedExperience);
                  }}
                  className="w-full p-2 border rounded-lg mb-2"
                  placeholder="Duration/Year use this format (2021 - 2024)"
                />
                <textarea
                  value={exp.responsibilities.join("\n")}
                  onChange={(e) => {
                    const updatedExperience = [...workExperience];
                    updatedExperience[index].responsibilities = e.target.value.split("\n");
                    setWorkExperience(updatedExperience);
                  }}
                  className="w-full p-2 border rounded-lg"
                  rows="4"
                  placeholder="Responsibilities (one per line)"
                />
              </div>
            ))}
          </div>

          {/* Skills Form */}
          <div className="mb-6">
            <h3 className={styles.h3}>Skills</h3>
            {skills.map((skill, index) => (
              <input
                key={index}
                type="text"
                value={skill}
                onChange={(e) => {
                  const updatedSkills = [...skills];
                  updatedSkills[index] = e.target.value;
                  setSkills(updatedSkills);
                }}
                className="w-full p-2 border rounded-lg mb-2"
                placeholder="write your skills here!"
              />
            ))}
          </div>

          {/* Languages Form */}
          <div className="mb-6">
            <h3 className={styles.h3}>Languages</h3>
            {languages.map((language, index) => (
              <input
                key={index}
                type="text"
                value={language}
                onChange={(e) => {
                  const updatedLanguages = [...languages];
                  updatedLanguages[index] = e.target.value;
                  setLanguages(updatedLanguages);
                }}
                className="w-full p-2 border rounded-lg mb-2"
                placeholder="Language"
              />
            ))}
          </div>

          {/* References Form */}
          <div className="mb-6">
            <h3 className={styles.h3}>References</h3>
            {references.map((ref, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={ref.name}
                  onChange={(e) => {
                    const updatedReferences = [...references];
                    updatedReferences[index].name = e.target.value;
                    setReferences(updatedReferences);
                  }}
                  className="w-full p-2 border rounded-lg mb-2"
                  placeholder="full name"
                />
                <input
                  type="text"
                  value={ref.role}
                  onChange={(e) => {
                    const updatedReferences = [...references];
                    updatedReferences[index].role = e.target.value;
                    setReferences(updatedReferences);
                  }}
                  className="w-full p-2 border rounded-lg mb-2"
                  placeholder="Role/Position"
                />
                <input
                  type="text"
                  value={ref.phone}
                  onChange={(e) => {
                    const updatedReferences = [...references];
                    updatedReferences[index].phone = e.target.value;
                    setReferences(updatedReferences);
                  }}
                  className="w-full p-2 border rounded-lg mb-2"
                  placeholder="Phone"
                />
                <input
                  type="email"
                  value={ref.email}
                  onChange={(e) => {
                    const updatedReferences = [...references];
                    updatedReferences[index].email = e.target.value;
                    setReferences(updatedReferences);
                  }}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Email"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CV Preview Section */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className={styles.h2}>CV Preview</h2>
          <div className="printable-area">
            {/* Contact Section */}
            <div className="mb-8">
              <h2 className={styles.h2}>CONTACT INFORMATION</h2>
              <p className={styles.p}><strong>Names:</strong> {contact.firstName} {contact.lastName}</p>
              <p className={styles.p}><strong>Birth Date:</strong> {contact.birthDate}</p>
              <p className={styles.p}><strong>Tel:</strong> {contact.phone1} | {contact.phone2}</p>
              <p className={styles.p}><strong>Email:</strong> {contact.email}</p>
              <p className={styles.p}><strong>Location:</strong> {contact.location}</p>
            </div>

            {/* Objective Section */}
            <div className="mb-8">
              <h2 className={styles.h2}>OBJECTIVE</h2>
              <p className={styles.p}>{objective}</p>
            </div>

            {/* Education Section */}
            <div className="mb-8">
              <h2 className={styles.h2}>EDUCATION</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className={styles.h3}>{edu.institution}</h3>
                  <p className={styles.p}>{edu.degree}</p>
                  <p className={styles.p}>{edu.duration}</p>
                </div>
              ))}
            </div>

            {/* Work Experience Section */}
            <div className="mb-8">
              <h2 className={styles.h2}>WORK EXPERIENCE</h2>
              {workExperience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h3 className={styles.h3}>{exp.company}</h3>
                  <h4 className={styles.h4}>{exp.role} | {exp.duration}</h4>
                  <ul className={styles.ul}>
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i} className={styles.listDisc}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="mb-8">
              <h2 className={styles.h2}>SKILLS</h2>
              <ul className={styles.ul}>
                {skills.map((skill, index) => (
                  <li key={index} className={styles.listDisc}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Languages Section */}
            <div className="mb-8">
              <h2 className={styles.h2}>LANGUAGES</h2>
              <ul className={styles.ul}>
                {languages.map((language, index) => (
                  <li key={index} className={styles.listDisc}>{language}</li>
                ))}
              </ul>
            </div>

            {/* References Section */}
            <div className="mb-8">
              <h2 className={styles.h2}>REFERENCES</h2>
              {references.map((ref, index) => (
                <div key={index} className="mb-4">
                  <h3 className={styles.h3}>{ref.name}</h3>
                  <p className={styles.p}>{ref.role}</p>
                  <p className={styles.p}>{ref.phone}</p>
                  <p className={styles.p}>{ref.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleDownload}
            className="bg-gra1 text-white rounded-full hover:bg-gra2 transition text-white px-6 py-2 rounded-lg shadow-lg"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default CvTemplate;