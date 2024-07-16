import { ChexboxContainer } from "./Chexbox";
import { InputContainer } from "./Input";
import { SelectData } from "./Select";
import { Tags } from "./Tags";
import { Textarea } from "./Textarea";

export const BookForm = () => {
  return (
    <form action="" className="w-[25rem] flex flex-col">
      <InputContainer
        label={"Title"}
        type={"text"}
        name={""}
        autocomplate={"off"}
      />
      <Textarea label={"Description"} name={""} />
      <div className="mt-6 flex gap-6 items-center">
        <SelectData />
        <ChexboxContainer />
      </div>
      <Tags />
    </form>
  );
};
