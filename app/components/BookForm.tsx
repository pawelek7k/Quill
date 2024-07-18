import { ChexboxContainer } from "./Chexbox";
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
      genre: formData.get("genre"),
    };
  };
  return (
    <form action={shareBook} className="w-[25rem] flex flex-col">
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
      <Tags />
    </form>
  );
};
