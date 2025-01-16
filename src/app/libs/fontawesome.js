/* import the fontawesome core */
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import {
  faTwitter,
  faXTwitter,
  faGithub,
  faFacebookF,
  faLinkedin,
  faInstagram,
  faCodepen,
  faYoutube,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelope,
  faPhone,
  faMap,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faTwitter,
  faXTwitter,
  faGithub,
  faFacebookF,
  faLinkedin,
  faInstagram,
  faCodepen,
  faEnvelope,
  faPhone,
  faYoutube,
  faTiktok,
  faWhatsapp,
  faMap,
);