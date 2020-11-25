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
          <h3>Frontend</h3>
          <p>
            Over the past few years frontend frameworks like{" "}
            <span className={styles.highlight}>React</span> and Angular have
            began dominating the web. And rightfully so — they've brought a huge
            paradigm shift in how to build web applications for the better.
          </p>
          <p>
            As a result, I'm finding myself increasingly focused on the
            frontend, especially <span className={styles.highlight}>UX</span> -
            I'm passionate about being able to turn something with huge amounts
            of complexity into a simple interface that any user would find{" "}
            <span className={styles.highlight}>delightful</span>. I've also
            grown hyperaware of the{" "}
            <span className={styles.highlight}>accessiblity</span> concerns
            around the web and how to build in an accessible manner.
          </p>
        </div>
        <div>
          <h3>Backend</h3>
          <p>I work on the backend of websites</p>
        </div>
        <div>
          <h3>Security</h3>
          <p>I'm well versed in computer and network security</p>
        </div>
        <div>
          <h3>Business development</h3>
          <p>I enjoy helping businesses</p>
        </div>
      </div>
      <div>
        <h2>What I enjoy working on 💪🏻</h2>
        <p>
          I'm at my best working with{" "}
          <span className={styles.highlight}>fast-paced startups</span> where I
          can make a large impact quickly. I particularily enjoy working on{" "}
          <span className={styles.highlight}>e-commerce</span> and{" "}
          <span className={styles.highlight}>SaaS</span> projects.
        </p>
      </div>
      <div>
        <h2>Where I work 📍</h2>
        <p>
          I work <span className={styles.highlight}>remotely</span> most of the
          time, with the occasional on-site visit. I'm based in{" "}
          <span className={styles.highlight}>Manchester, UK.</span>
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
