import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Hafidz from "../../assets/images/Hafidz.jpg";
import Hasan from "../../assets/images/Hasan.jpg";
import Haeril from "../../assets/images/Haeril.jpg";
import { useTheme } from "../../utils/themeMode";

const AboutPage = () => {
  const { darkMode } = useTheme();
  return (
    <div className="flex items-center justify-center p-10 mb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About Our Team</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-64 object-cover object-center hover:scale-105 transition duration-300"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
                  {member.name}
                </h2>
                <p className="mb-2">{member.position}</p>
                <p>{member.bio}</p>
                <div className="flex justify-center mt-4">
                  <div className="flex items-center">
                    <a
                      href={member.github}
                      className="mr-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-gray-500 text-3xl hover:text-gray-600"
                      />
                    </a>
                    <a
                      href={member.instagram}
                      className="mr-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-pink-500 text-3xl hover:text-pink-600"
                      />
                    </a>
                    <a
                      href={member.linkedin}
                      className="mr-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="text-blue-700 text-3xl hover:text-blue-800"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Hafidz Fatah K.J",
    position: "Project leader",
    bio: "Mengembangkan antarmuka web yang menarik.",
    avatar: Hafidz,
    github: "https://github.com/zyhapis",
    instagram: "https://www.instagram.com/zyhapis/",
    linkedin:
      "https://www.linkedin.com/in/hafidz-fatah-kamaluddin-jabbar-a39b7828b/",
  },
  {
    name: "Haeril Gunadi",
    position: "Project members",
    bio: "Belajar desain & koding untuk pengembangan web.",
    avatar: Haeril,
    github: "https://github.com/haerilgun01",
    instagram: "https://instagram.com/haeril_222?igshid=MXhqM2doMWt5a2w2aA==",
    linkedin: "https://id.linkedin.com/in/haeril-gunadi-972b8028b",
  },
  {
    name: "Hasan Mahmud",
    position: "Project members",
    bio: "Membangun brand melalui pemasaran yang efektif.",
    avatar: Hasan,
    github: "https://github.com/HASANMAHMUD25",
    instagram: "https://www.instagram.com/has24.n//",
    linkedin: "https://www.linkedin.com/in/hasan-mahmud-8b2b8528b/",
  },
];

export default AboutPage;
