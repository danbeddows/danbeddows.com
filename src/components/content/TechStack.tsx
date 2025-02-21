import { faAngular, faAws, faCss3, faDocker, faFontAwesome, faGithub, faHtml5, faJenkins, faJira, faJs, faMailchimp, faNode, faPaypal, faPhp, faReact, faSass, faStripe, faSymfony } from "@fortawesome/free-brands-svg-icons";
import TechStackIcon from "./TechStackIcon";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faTheaterMasks } from "@fortawesome/pro-solid-svg-icons";

interface TechStackProps {
  stack: string;
}
const TechStack = ({ stack }: TechStackProps) => {
  const stackList = transformTechStackText(stack);

  return (
    <>
      {stackList.map((stackItem) => (
        <TechStackIcon
          icon={getStackItemIcon(stackItem)}
          title={stackItem}
          href={getStackItemHref(stackItem)}
        />
      ))}
    </>
  );
};

export interface TechStackItem {
  icon: IconDefinition;
  name: string;
  href: string;
}

export const techStackList: TechStackItem[] = [
  {
    icon: faReact,
    name: "React",
    href: "https://reactjs.org",
  },
  {
    icon: faSymfony,
    name: "Symfony",
    href: "https://symfony.com",
  },
  {
    icon: faStripe,
    name: "Stripe",
    href: "https://stripe.com",
  },
  {
    icon: faPhp,
    name: "PHP",
    href: "https://www.php.net",
  },
  {
    icon: faMailchimp,
    name: "MailChimp",
    href: "https://mailchimp.com",
  },
  {
    icon: faAws,
    name: "AWS",
    href: "https://aws.amazon.com",
  },
  {
    icon: faFontAwesome,
    name: "Font Awesome",
    href: "https://fontawesome.com",
  },
  {
    icon: faHtml5,
    name: "HTML5",
    href: "https://html.spec.whatwg.org",
  },
  {
    icon: faSass,
    name: "Sass",
    href: "https://sass-lang.com",
  },
  {
    icon: faAngular,
    name: "Angular",
    href: "https://angular.io",
  },
  {
    icon: faJs,
    name: "Javascript",
    href: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
  },
  {
    icon: faPaypal,
    name: "PayPal",
    href: "https://www.paypal.com",
  },
  {
    icon: faCss3,
    name: "CSS",
    href: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    icon: faNode,
    name: "Node",
    href: "https://nodejs.org/en/",
  },
  { icon: faDocker, name: "Docker", href: "https://www.docker.com/" },
  { icon: faJenkins, name: "Jenkins", href: "https://www.jenkins.io/" },
  { icon: faJira, name: "Jira", href: "https://jira.atlassian.com/" },
  { icon: faTheaterMasks, name: "Playwright", href: "https://playwright.dev" },
  { icon: faGithub, name: "GitHub", href: "https://github.com" },
];

const transformTechStackText = (stack: string): string[] =>
  stack.split(",").map((s) => s.trim());

export const transformTechStack = (stack: string): TechStackItem[] =>
  transformTechStackText(stack).map((stackName) => getStackItem(stackName));

const getStackItem = (stackItemName: string) =>
  techStackList.filter((thisItem) => thisItem.name === stackItemName)[0];

export const getStackItemHref = (
  stackItem: string,
) => getStackItem(stackItem)['href'];

export const getStackItemIcon = (
  stackItem: string,
) => getStackItem(stackItem)['icon'];

export default TechStack;
