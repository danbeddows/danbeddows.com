import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { SocialAccount } from "./SocialLink/types";

export const socialAccounts: SocialAccount[] = [
  {
    href: "https://www.linkedin.com/in/danbeddows/",
    icon: faLinkedin,
    type: "LinkedIn"
  },
  {
    href: "https://github.com/danbeddows/",
    icon: faGithub,
    type: "GitHub"
  }
];
