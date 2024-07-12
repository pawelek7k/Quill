import { BreadcrumbContainer } from "../components/BreadcrumbsContainer";
import { Heading } from "../components/Heading";
import Section from "../components/Section";

export default function CreatePage() {
  return (
    <main className="h-screen">
      <Section>
        <BreadcrumbContainer />
        <div className="mt-10 text-center flex items-center justify-center flex-col">
          <Heading>Library!</Heading>
        </div>
      </Section>
    </main>
  );
}
