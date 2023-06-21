import TechStackIcon from "./TechStackIcon";

interface TechStackItem {
  icon: string;
  name: string;
  href: string;
}

const techStackList: TechStackItem[] = [
  {
    icon: "react",
    name: "React",
    href: "https://reactjs.org",
  },
  {
    icon: "symfony",
    name: "Symfony",
    href: "https://symfony.com",
  },
  {
    icon: "stripe",
    name: "Stripe",
    href: "https://stripe.com",
  },
  {
    icon: "php",
    name: "PHP",
    href: "https://www.php.net",
  },
  {
    icon: "mailchimp",
    name: "MailChimp",
    href: "https://mailchimp.com",
  },
  {
    icon: "aws",
    name: "AWS",
    href: "https://aws.amazon.com",
  },
  {
    icon: "font-awesome",
    name: "Font Awesome",
    href: "https://fontawesome.com",
  },
  {
    icon: "html5",
    name: "HTML5",
    href: "https://html.spec.whatwg.org",
  },
  {
    icon: "sass",
    name: "Sass",
    href: "https://sass-lang.com",
  },
  {
    icon: "angular",
    name: "Angular",
    href: "https://angular.io",
  },
  {
    icon: "js",
    name: "Javascript",
    href: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
  },
  {
    icon: "paypal",
    name: "PayPal",
    href: "https://www.paypal.com",
  },
  {
    icon: "css3",
    name: "CSS",
    href: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    icon: "node",
    name: "Node",
    href: "https://nodejs.org/en/",
  },
];

const getStackItemProperty = (stackItem: string, prop: keyof TechStackItem) =>
  techStackList.filter((thisItem) => thisItem.name === stackItem)[0][prop];

interface TechStackProps {
  stack: string;
}
const TechStack: React.FC<TechStackProps> = ({ stack }) => {
  const stackList = stack.split(",").map((s) => s.trim());

  return (
    <>
      {stackList.map((stackItem) => (
        <TechStackIcon
          icon={getStackItemProperty(stackItem, "icon")}
          title={stackItem}
          href={getStackItemProperty(stackItem, "href")}
        />
      ))}
    </>
  );
};

export default TechStack;
