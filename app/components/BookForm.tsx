import { Button } from "@nextui-org/button";
import { ChexboxContainer } from "./Chexbox";
import { ImagePicker } from "./ImagePicker";
import { InputContainer } from "./Input";
import { SelectData } from "./Select";
import { Tags } from "./Tags";
import { Textarea } from "./Textarea";

export const BookForm = () => {
  const shareBook = async (formData) => {
    "use server";

    const book = {
      title: formData.get("title"),
      description: formData.get("description"),
      image: formData.get("selectedImage"),
      genre: formData.get("genre"),
      tags: JSON.parse(formData.get("tags")),
    };

    console.log(book);
  };
  return (
    <form action={shareBook} className=" flex gap-16">
      <div>
        <ImagePicker label={""} name={"selectedImage"} />
      </div>
      <div className="w-[25rem]">
        <InputContainer
          label={"Title"}
          type={"text"}
          name={"title"}
          autocomplate={"off"}
        />
        <Textarea label={"Description"} name={"description"} />
        <div className="mt-6 flex gap-6 items-center">
          <SelectData />
          <ChexboxContainer />
        </div>
        <Tags name={"tags"} />
      </div>
      <Button type="submit">Next</Button>
    </form>
  );
};
