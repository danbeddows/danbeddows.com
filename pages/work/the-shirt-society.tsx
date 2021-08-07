import Heading from "components/content/Heading";
import PageTitle from "components/content/PageTitle";
import Paragraph from "components/content/Paragraph";
import Section from "components/content/Section";
import Title from "components/content/Title";
import UnorderedList from "components/content/UnorderedList";
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
            <li>
              Write an API in PHP to handle products, orders, subscriptions,
              users, authentication, discounts and more.
            </li>
            <li>Build a frontend using React to consume the API.</li>
            <li>
              Integrate 3rd-party API's such as Stripe, Twilio and MailChimp.
            </li>
            <li>
              Provision the platform on AWS using primarily EC2, RDS, S3,
              CloudFront.
            </li>
            <li>
              Be the product owner. Working directly with stakeholders to plan
              features, work around budget contraints, prioritise features to
              tight deadlines and be accountable.
            </li>
          </ul>
        </Paragraph>

        <Heading>Personal Highlights</Heading>
        <Paragraph>
          No matter how many years I've been in web development, it's still an
          incredible feeling for me when real people; people that you've never
          met, use your app unguided, and they managed to figure everything out
          and it just works ✨. And this was even more so, as it was the
          most-used project I've had full accountability for, with 1000's of
          signups and &gt;£100k of transactions processed.
        </Paragraph>
        <Paragraph>
          I also really enjoyed using React Hooks on a large project (100+
          components). After coming from using classes with React and
          occasionally AngularJS (yes, v1!) it was very freeing not having to
          write a lot of boilerplate.
        </Paragraph>
      </Section>

      <Section>
        <Title>The Story</Title>

        <Heading>The MVP</Heading>
        <Paragraph>
          I started working with Matt whilst his business was at the concept
          stage and bootstrapped. Along with my cofounder at Inhaus (a digital
          agency in Manchester), I worked with Matt to develop his ideas into a
          strategy and develop and MVP.
        </Paragraph>
        <Paragraph>
          Signups were capped to 200 customers and the MVP launched 3 weeks
          after we started building. The cap was met within a few days of
          launch. We then worked with Matt to design and build out a deck to
          raise a seed round. Matt closed the round in January 2020, raising a
          6-figure sum.
        </Paragraph>

        <Heading>Planning and build</Heading>
        <Paragraph>
          Scott and I then got to work designing the brand as well as the UI
          components. We used Figma to design the landing page, account page,
          onboarding, product-selection and offboarding flows, paying special
          attention to UX throughout.
        </Paragraph>
        <Paragraph>
          After the designs were approved, I started working on the data
          structures and getting an idea of how the API would be built.
        </Paragraph>
        <Paragraph>
          I then started writing the API that the frontend would consume. The
          API took about two months to build, including plugging in some
          3rd-party integrations such as Stripe, MailChimp and Royal Mail. We
          leveraged Stripe's Subscription API quite frequently to manage The
          Shirt Society subscriptions. The API was deployed onto an AWS EC2
          Ubuntu server that was behind a load balancer, and any static assets
          were placed in S3 buckets and available via CloudFront.
        </Paragraph>
        <Paragraph>
          With the API built, I got to work creating the frontend. We chose
          React because Matt had expressed an interest in eventually building
          mobile apps for customers to manage their subscription, and we could
          leverage React Native for that.
        </Paragraph>
        <Paragraph>
          There were three core pillars for the frontend that I needed to create
          for launch:
        </Paragraph>
        <UnorderedList>
          <li>The website itself</li>
          <li>
            An admin area to add products, manage users' subscriptions, and
            view, cancel and ship orders
          </li>
          <li>
            A migration tool for MVP customers to transfer their data over along
            with their legacy pricing
          </li>
        </UnorderedList>
        <Paragraph>
          All in all, from developing the business, designing the website,
          building the API and frontend, testing to launch, I spent about 9
          months on this project.
        </Paragraph>
        <Paragraph>
          After launch at the end of July 2020, I worked on adding new features
          and marketing pages until I left the project around March 2021.
        </Paragraph>
      </Section>
    </Page>
  );
};

export default TheShirtSociety;
