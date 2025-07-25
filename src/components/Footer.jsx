import { FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { SiTwitch, SiDiscord } from 'react-icons/si';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a032d] to-[#20062e] py-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <a href="https://x.com/gwbh_official" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-white text-2xl hover:text-pink-500 transition-colors" />
        </a>
        <a href="https://youtube.com/@gwbh-o3o?si=2gh-d4KLcSA_HY-e" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-white text-2xl hover:text-pink-500 transition-colors" />
        </a>
        <a href="https://www.instagram.com/gwbh.official/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-2xl hover:text-pink-500 transition-colors" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;