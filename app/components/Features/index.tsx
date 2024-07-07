import { CardContainer } from "../Card";
import { Heading } from "../SecondaryHeading";
import Section from "../Section";

const features = [
  {
    name: "Available soon.",
    src: "../../../features1.jpg",
    alt: "",
  },
  {
    name: "Available soon.",
    src: "../../../features2.jpg",
    alt: "",
  },
  {
    name: "Available soon.",
    src: "../../../features3.jpg",
    alt: "",
  },
  {
    name: "Available soon.",
    src: "../../../features4.jpg",
    alt: "",
  },
];

export const Features = () => {
  return (
    <Section>
      <div className="p-10 flex flex-col items-center justify-center">
        <Heading>Features</Heading>
        <div className="p-4 flex items-center justify-center gap-16 flex-col mt-8 md:flex-row flex-wrap">
          {features.map((item) => (
            <CardContainer key={item.name} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};
