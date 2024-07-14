import { BreadcrumbContainer } from "@/app/components/BreadcrumbsContainer";
import { Heading } from "@/app/components/Heading";
import { ImagePicker } from "@/app/components/ImagePicker";
import Section from "@/app/components/Section";

export default function NewPage() {
  return (
    <main className="h-screen">
      <Section>
        <BreadcrumbContainer />
        <div className="flex">
          <div className="mt-10 flex flex-col gap-8">
            <Heading>Book Details</Heading>
            <ImagePicker label={""} name={"SelectedImage"} />
          </div>
          <div>ok</div>
        </div>
      </Section>
    </main>
  );
}
