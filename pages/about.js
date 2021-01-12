import { useEffect } from "react";
import styles from "../styles/About.module.scss";

const About = (props) => {
  useEffect(() => {
    const setupBrushstroke = async () => {
      if (CSS && CSS.paintWorklet) {
        await CSS.paintWorklet.addModule("/brushstroke.js");
      }
    };

    setupBrushstroke();
  }, []);

  return (
    <div className={styles.page}>
      <h1>About</h1>

      <div>
        <h2>What I do 👨🏻‍💻</h2>
        <div>
          <h3>
            <span className={styles.highlight}>Frontend</span>
          </h3>
          <p>
            Over the past few years, frontend frameworks like React and Angular
            have began dominating the web. And rightfully so — they've brought a
            huge paradigm shift in how to build web applications for the better.
          </p>
          <p>
            As a result, I'm finding myself increasingly focused on the
            frontend, especially UX. I have an eye for transforming large
            amounts of complexity into interfaces that any user would find{" "}
            delightful. I also understand accessiblity concerns and how to build
            in an accessible manner.
          </p>
        </div>
        <div>
          <h3>
            <span className={styles.highlight}>Backend</span>
          </h3>
          <p>
            For the past 15 years I've primarily written in PHP, with the
            occasional sprinkle of Java and C#. More recently, especially due to
            serverless, I've been building in TypeScript or JavaScript.
          </p>
          <p>
            I've built API's for a handful of reasons, like fetching financial
            markets data, processing e-commerce lifecycle events and even a
            mass-SMS API for schools to use. I've also integrated plenty to
            power those too, like Stripe, Twilio, IEX Cloud, Mandrill and many
            others.
          </p>
        </div>
        <div>
          <h3>
            <span className={styles.highlight}>Security</span>
          </h3>
          <p>
            Computer security is more important than ever. As the web becomes
            more complex, new attack vectors become apparent or are created, and
            it's crucial to stay updated on the latest exploits.
          </p>
          <p>
            I'm incredibly diligent whether setting up a VPS, storing keys,
            processing input or otherwise. I studied and earnt a BsC in Computer
            Forensics and Security.
          </p>
        </div>
        {/*<div>
          <h3>
            <span className={styles.highlight}>Business development</span>
          </h3>
          <p></p>
				</div>*/}
      </div>
      <div>
        <h2>What I enjoy working on 💪🏻</h2>
        <p>
          I'm at my best working with fast-paced startups where I can make a
          large impact quickly. I particularily enjoy working on e-commerce and{" "}
          SaaS projects.
        </p>
      </div>
      <div>
        <h2>Where I work 📍</h2>
        <p>
          I work remotely most of the time, with the occasional on-site visit.
          I'm based in Manchester, UK.
        </p>
      </div>
      <div>
        <h2>Other interests 🔎</h2>
        <p>Investing, politics, business, consumer technology.</p>
      </div>
    </div>
  );
};

export default About;
