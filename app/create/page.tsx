import { nanoid } from "nanoid";
import Link from "next/link";
import { BreadcrumbContainer } from "../components/BreadcrumbsContainer";
import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import Section from "../components/Section";

export default function CreatePage() {
  const nanoId = nanoid();
  return (
    <main>
      <Header />
      <Section>
        <BreadcrumbContainer />
        <div className="mt-10 text-center flex items-center justify-center flex-col">
          <Heading>Create your first book with us!</Heading>
          <p className="h-screen">
            <Link href={`/create/${nanoId}`}>Book 1</Link>
          </p>
        </div>
      </Section>
    </main>
  );
}
