import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { nanoid } from "nanoid";
import { BreadcrumbContainer } from "../components/BreadcrumbsContainer";
import { Heading } from "../components/Heading";
import { NavCard } from "../components/NavCard";
import Section from "../components/Section";
import { ThirdHeading } from "../components/ThirdHeading";

export default function CreatePage() {
  const nanoId = nanoid();
  return (
    <main className="h-screen">
      <Section>
        <BreadcrumbContainer />
        <div className="mt-10 text-center flex items-center justify-center flex-col">
          <Heading>Create your book with us!</Heading>
        </div>
        <ul className="flex items-center justify-center gap-16 mt-10">
          <li>
            <Card className="py-4 bg-text text-secondaryBg rounded-lg">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Username</p>
                <small className="text-default-500">
                  The number of your books
                </small>
                <ThirdHeading>Edit exist book</ThirdHeading>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <NavCard page={"/library"}>Edit</NavCard>
              </CardBody>
            </Card>
          </li>
          <li>
            <Card className="py-6 bg-text text-secondaryBg rounded-lg">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Username</p>
                <ThirdHeading>Create new</ThirdHeading>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <NavCard page={`/create/${nanoId}`}>Create</NavCard>
              </CardBody>
            </Card>
          </li>
        </ul>
      </Section>
    </main>
  );
}
