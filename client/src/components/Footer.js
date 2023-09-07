import logo from "../logo.png";
import "../index.css";

let Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <img src={logo} alt="Netflix" className="h-8" />
      <div className="flex space-x-4 text-white">
        <p>The GetFlix Movie Portal 	&#169; 2023</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
