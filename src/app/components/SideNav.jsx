import Navigation from "./Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SideNav() {
  return (
    <>
      <div className="h-full lg:w-72 flex flex-col items-center lg:fixed z-10 top-0 left-0 bg-slate-900 overflow-x-hidden px-4 pt-10 pb-6 text-center text-white">
        <div className="relative inline-block mb-4 overflow-visible">
          <img
            className="rounded-full size-32 2xl:size-40"
            src="https://codonist.bitbucket.io/assets/images/meSky.jpg"
            alt="Hamayun Aziz"
          />
          <div className="pulse"></div>
          <div className="second-pulse"></div>
        </div>
        <h3 className="font-bold mb-2 tracking-widest">&lt;Hamayun Aziz/&gt;</h3>
        {/* <h3 className="font-bold mb-2 tracking-widest">
          &#x2774;&#x2774; Hamayun Aziz &#x2775;&#x2775;
        </h3> */}
        <p className="text-sm mb-4">Full Stack Laravel, Inertia.js, Vue.js, Livewire, TailwindCSS Developer</p>
        <p className="text-sm">Follow me:</p>
        <ul className="list-style-none flex items-center gap-2 justify-center">
          <li>
            <a href="https://www.linkedin.com/in/hamayunaziz/" target="_blank">
            {/* <FontAwesomeIcon icon="linkedin" /> */}
              <FontAwesomeIcon className="text-white" icon="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://facebook.com/codonist" target="_blank">
              <FontAwesomeIcon className="text-white" icon="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/codonist/" target="_blank">
              <FontAwesomeIcon className="text-white" icon="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://x.com/HamayunAziz" target="_blank">
              <FontAwesomeIcon className="text-white" icon="fa-brands fa-x-twitter" />
            </a>
          </li>
          <li>
            <a href="https://github.com/TheCodonist" target="_blank">
              <FontAwesomeIcon className="text-white" icon="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/codonist" target="_blank">
              <FontAwesomeIcon className="text-white" icon="fa-brands fa-codepen" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@thecodonist" target="_blank">
              <FontAwesomeIcon className="text-white" icon="fa-brands fa-youtube" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/codonist" target="_blank">
              <FontAwesomeIcon className="text-white" icon="fa-brands fa-tiktok" />
            </a>
          </li>
        </ul>
        <p className="text-sm mt-4">Contact me:</p>
        <p className="text-sm">
          <a href="mailto:hamayunaziz@codonist.com">
            <FontAwesomeIcon icon="fa-solid fa-envelope" /> hamayunaziz@codonist.com
          </a>
        </p>
        <p className="text-sm">
          <a href="https://wa.me/message/63AIMZ2W4HTHK1 " target="_blank">
            <FontAwesomeIcon className="text-white" icon="fa-brands fa-whatsapp" />
          </a>
          &nbsp;&nbsp;<span className="text-lg">|</span>&nbsp;&nbsp;
          <a href="tel:+923433443837">
            <FontAwesomeIcon className="text-white" icon="fa-solid fa-phone" /> +92 343 3443837
          </a>
        </p>
        <p className="text-sm mt-1">
          <FontAwesomeIcon className="text-white" icon="fa-solid fa-map" /> Pakistan
        </p>

        <Navigation />

        <div className="mt-auto max-lg:hidden">
          <p className="text-xs">Codonist &copy; 2024.</p>
        </div>
      </div>
    </>
  );
}
