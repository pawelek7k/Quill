import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";

export default function NotFound() {
  return (
    <main>
      <Heading>Not found.</Heading>
      <Paragraph>
        Unfortunately, we could not find the requested page or resource.
      </Paragraph>
    </main>
  );
}
