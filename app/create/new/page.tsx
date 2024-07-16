import { BookForm } from "@/app/components/BookForm";
import { BreadcrumbContainer } from "@/app/components/BreadcrumbsContainer";
import { Heading } from "@/app/components/Heading";
import { ImagePicker } from "@/app/components/ImagePicker";
import Section from "@/app/components/Section";
import { Button } from "@nextui-org/button";

export default function NewPage() {
  return (
    <main className="min-h-screen">
      <Section>
        <BreadcrumbContainer />
        <div className=" mt-6 flex items-center justify-between border-b border-myPrimary p-8">
          {" "}
          <Heading>Book Details</Heading>
          <Button type="button" className="bg-accent text-text" radius="full">
            Skip
          </Button>
        </div>

        <div className="flex mt-10 gap-16 justify-center">
          <div className=" flex flex-col gap-8">
            <ImagePicker label={""} name={"SelectedImage"} />
          </div>
          <div className="">
            <BookForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
