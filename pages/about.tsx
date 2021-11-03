import PageTitle from "components/content/PageTitle";
import Paragraph from "components/content/Paragraph";
import Section from "components/content/Section";
import Title from "components/content/Title";
import Page from "components/layout/Page";

const About = () => {
  return (
    <Page>
      <PageTitle>About</PageTitle>

      <Section>
        <Title>How I got started 👨🏻‍💻</Title>

        <Paragraph>
          My programming journey started as a teenager writing in a scripting
          language called JASS. It was used to create custom games for Warcraft
          3’s game engine; which I tinkered with to make my own games at the
          weekends.
        </Paragraph>

        <Paragraph>
          After a year or so, I started editing websites and I quickly became
          hooked. My sites were very rudimental, but so was the the web back
          then - AJAX had still not debuted, nor had HTML5. I started seriously
          programming for the web after installing a vBulletin forum; trying to
          understand how it worked under the hood and hack some otherwise
          non-customisable settings.
        </Paragraph>

        <Paragraph>
          I’ve always had a strong entrepreneurial spirit, even as a kid: I used
          to sell pebbles that I found at the beach to passersby in my front
          garden. But when I started programming it felt like an actual
          superpower. I could create something that was free to make (other than
          time) and sell it to a potentially unlimited amount of people. In what
          other industry can you do that? That create-stuff spirit drove me to
          exploring what the web was capable of and build a bunch of businesses
          over the past decade.
        </Paragraph>
      </Section>

      <Section>
        <Title>What I enjoy working on 💪🏻</Title>

        <Paragraph>
          I'm at my best working with fast-paced startups where I can make a
          large impact quickly. I particularily enjoy working on e-commerce and{" "}
          SaaS businesses.
        </Paragraph>
      </Section>

      <Section>
        <Title>Where I work 📍</Title>

        <Paragraph>
          Remote is preferred, although I'm open to the occasional on-site
          visit. I'm based in Manchester, UK.
        </Paragraph>
      </Section>

      <Section>
        <Title>Other interests 🔎</Title>

        <Paragraph>Investing, business and consumer technology.</Paragraph>
      </Section>
    </Page>
  );
};

export default About;
