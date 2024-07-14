import { InputContainer } from "./Input";
import { Textarea } from "./Textarea";

export const BookForm = () => {
  return (
    <form action="" className="w-[25rem] flex flex-col gap-4">
      <InputContainer
        label={"Title"}
        type={"text"}
        name={""}
        autocomplate={"off"}
      />
      <Textarea label={"Description"} name={""} />
    </form>
  );
};
