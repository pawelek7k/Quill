import { InputContainer } from "./Input";
import { Textarea } from "./Textarea";

export const BookForm = () => {
  return (
    <form action="" className="w-[25rem]">
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
