import { BreadcrumbContainer } from "@/app/components/BreadcrumbsContainer";
import { Heading } from "@/app/components/Heading";
import Section from "@/app/components/Section";

export default function NewPage() {
  return (
    <main className="h-screen">
      <Section>
        <BreadcrumbContainer />
        <div className="mt-10 flex flex-col gap-8">
          <Heading>Create your book!</Heading>
        </div>
      </Section>
    </main>
  );
}
