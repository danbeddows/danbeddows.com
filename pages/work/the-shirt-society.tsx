import Heading from "components/content/Heading";
import PageTitle from "components/content/PageTitle";
import Paragraph from "components/content/Paragraph";
import Section from "components/content/Section";
import Title from "components/content/Title";
import Page from "components/layout/Page";

const TheShirtSociety = () => {
  return (
    <Page>
      <PageTitle>The Shirt Society</PageTitle>

      <Section>
        <Title>Overview</Title>

        <Heading>Time Involved</Heading>
        <Paragraph>October 2019 - March 2021</Paragraph>

        <Heading>About the business</Heading>
        <Paragraph>
          The Shirt Society is an online menswear subscription. Matt, the
          founder, wanted to enable time-poor consumers to effectively 'set and
          forget' their subscription and have premium shirts, polo shirts and
          t-shirts delivered with little effort.
        </Paragraph>

        <Heading>Work involved</Heading>
        <Paragraph>
          <ul>
            <li></li>
          </ul>
        </Paragraph>

        <Heading>Highlights</Heading>
        <Paragraph>Some good stuff</Paragraph>
      </Section>

      <Section>
        <Title>The Story</Title>

        <Paragraph>
          I started working with Matt whilst his business was at the concept
          stage and bootstrapped. Along with my cofounder at Inhaus (a digital
          agency in Manchester), I worked with Matt to develop his ideas into a
          strategy and develop and MVP.
        </Paragraph>
        <Paragraph>
          We capped signups to 200 customers and launched the MVP after 3 weeks
          of building. That cap was met within a few days. We then worked with
          Matt to design and build out a deck to raise a seed round. Matt closed
          the round in January 2020, raising a 6-figure sum.
        </Paragraph>
        <Paragraph>
          Scott and I then got to work designing the brand as well as the UI
          components. We used Figma to design the landing page, account page,
          onboarding, product-selection and offboarding flows, paying special
          attention to UX throughout.
        </Paragraph>
        <Paragraph>
          After the designs were approved and we knew what would be involved
          from a design perspective, I started designing the data structures and
          getting an idea of how the API would be designed.
        </Paragraph>
        <Paragraph>
          I then started creating the API that the frontend would consume. The
          API took about two months to build, including 3rd-party integrations
          such as Stripe, MailChimp and Royal Mail. We leveraged Stripe's
          Subscription API quite frequently to manage The Shirt Society
          subscriptions. The API was deployed into an AWS EC2 Ubuntu server that
          was behind a load balancer, and any static assets were placed in S3
          buckets and available with CloudFront.
        </Paragraph>
        <Paragraph>
          With API built, I got to work creating the frontend. We chose React
          because Matt had expressed an interest in eventually building mobile
          apps for customers to manage their subscription, and we could leverage
          React Native for that.
        </Paragraph>
        <Paragraph>Three distinct parts were created for launch:</Paragraph>
        <ul>
          <li>The website itself</li>
          <li>
            an admin dashboard to add products, manage users subscriptions, and
            view, cancel and ship orders
          </li>
          <li>
            and finally a migration tool for the initial MVP customers to come
            over to the new site
          </li>
        </ul>
        <Paragraph>
          All in all, from developing the business, designing the website,
          building the API and frontend, testing to launch, I spent about 6
          months on this project.
        </Paragraph>
        <Paragraph>
          After launch at the end of July 2020, I worked adding new features and
          marketing pages until I left the project in March 2021.
        </Paragraph>
      </Section>
    </Page>
  );
};

export default TheShirtSociety;
