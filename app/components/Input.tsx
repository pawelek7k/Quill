import { nanoid } from "nanoid";

interface InputProps {
  label: string;
  type: string;
  name: string;
  autocomplate: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputContainer = ({
  label,
  type,
  name,
  autocomplate,
  value,
  onChange,
}: InputProps) => {
  const nanoId = nanoid();
  return (
    <div>
      <label htmlFor={nanoId} className="block text-sm font-medium leading-6">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={nanoId}
          name={name}
          onChange={onChange}
          value={value}
          type={type}
          required
          autoComplete={autocomplate}
          className="block w-full rounded-md border-0 p-2 font-medium shadow-sm sm:text-sm sm:leading-6 outline-none bg-text text-secondaryBg"
        />
      </div>
    </div>
  );
};
