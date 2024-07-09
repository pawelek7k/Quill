import { Paragraph } from "../Paragraph";
import { Heading } from "../SecondaryHeading";
import Section from "../Section";
import { Slider } from "../Slider";

export const Introduction = () => {
  return (
    <>
      <Section>
        <Heading>How Quill Works</Heading>
        <div className="flex items-center mt-8">
          <Slider />
          <div className="w-6/12">
            <Paragraph>
              How do we work? It&apos;s simple, yet full of magic. Log in to our
              site, and you&apos;re ready to start creating. You can write,
              share your stories, poems, and essays, and draw inspiration from
              the works of other users. We support each other, share
              experiences, and together, we explore the limitless possibilities
              of literature.
            </Paragraph>

            <Paragraph>
              Join us and dive into an ocean of creativity. Your stories are
              waiting to see the light of day!
            </Paragraph>
          </div>
        </div>
      </Section>
    </>
  );
};
