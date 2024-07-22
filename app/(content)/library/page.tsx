import { BreadcrumbContainer } from "../../components/BreadcrumbsContainer";
import { Heading } from "../../components/Heading";
import Section from "../../components/Section";

export default function LibraryPage() {
  return (
    <main className="min-h-screen">
      <Section>
        <BreadcrumbContainer />
        <div className="mt-10 flex flex-col gap-8">
          <Heading>Your books</Heading>
          <ul>
            <li>
              <div className="w-40 h-56 bg-myPrimary">Book</div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          <Heading>Library</Heading>
          <ul>
            <li>
              <div className="w-40 h-56 bg-myPrimary ">Book</div>
            </li>
          </ul>
        </div>
      </Section>
    </main>
  );
}
