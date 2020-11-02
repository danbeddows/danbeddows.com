import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <h1>About</h1>

      <div>
        <h2>What I do 👨🏻‍💻</h2>
        <div>
          <h3>Frontend development</h3>
          <p>
            Over the past few years frontend frameworks like{" "}
            <strong>React</strong> and Angular have began dominating the web.
            And rightfully so — they've brought a huge paradigm shift in how to
            build web applications for the better.
          </p>
          <p>
            As a result, I'm finding myself increasingly focused on the
            frontend, especially <strong>UX</strong> - a personal goal of mine
            is to find those difficult solutions to{" "}
            <strong>design problems</strong> and make them{" "}
            <strong>delightful to the user</strong>. I've also grown hyperaware
            of the <strong>accessiblity</strong> concerns around the web and how
            to build in an accessible manner.
          </p>
        </div>
        <div>
          <h3>Software Engineering</h3>
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
        <p>I enjoy</p>
      </div>
      <div>
        <h2>Where I work 📍</h2>
        <p>
          I work remotely most of the time, with the occasional on-site visit.
          I'm based in Manchester, UK.{" "}
        </p>
      </div>
      <div>
        <h2>Other interests 🔎</h2>
        <p>Investing, politics, business, consumer technology.</p>
      </div>
    </div>
  );
}
