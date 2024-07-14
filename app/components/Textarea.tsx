import { nanoid } from "nanoid";

interface TextareaProps {
  label: string;
  name: string;
  id?: string;
}

export const Textarea = ({ label, name, id }: TextareaProps) => {
  const nanoId = id || nanoid();
  return (
    <>
      <label htmlFor={nanoId} className="block text-sm font-medium leading-6">
        {label}
      </label>
      <div className="mt-2">
        <textarea
          id={nanoId}
          name={name}
          required
          autoComplete="off"
          className="block w-full rounded-md border-0 p-2 font-medium shadow-sm sm:text-sm sm:leading-6 outline-none bg-text text-secondaryBg"
        />
      </div>
    </>
  );
};
