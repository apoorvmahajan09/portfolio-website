import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import logoImg from "../assets/logo.jpg";


export default function Navbar(){
    return(
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-12" src={logoImg} alt="AM" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4">
                <FaGithub/>
                <FaInstagram/>
                <FaLinkedin/>
                <FaTwitter/>
            </div>
        </nav>
    );
}