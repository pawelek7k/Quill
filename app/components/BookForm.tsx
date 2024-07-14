import { InputContainer } from "./Input";
import { SelectData } from "./Select";
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
      <SelectData />
    </form>
  );
};
