import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="w-full h-14 flex items-center justify-between px-4 py-2 bg-white text-gray-800 border-t border-gray-300 mt-10">
            <div className="flex items-center space-x-4">
                <a href="https://github.com/yeabsira-alemu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} style={{ width: "20px" }} />
                </a>
                <a href="https://linkedin.com/in/yeabsira-alemu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} style={{ width: "20px" }} />
                </a>
                <a href="https://x.com/yeabalex_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} style={{ width: "20px" }} />
                </a>
                <a href="mailto:yeabalex18@gmail.com" aria-label="Email">
                    <FontAwesomeIcon icon={faEnvelope} style={{ width: "20px" }} />
                </a>
            </div>
            <div className="text-center text-sm">
                &copy; {new Date().getFullYear()} Made by Yeabsira
            </div>
            <div className="text-center text-sm">
                Addis Ababa, Ethiopia
            </div>
        </footer>
    );
}
