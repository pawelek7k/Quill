import { Checkbox, CheckboxGroup } from "@nextui-org/react";

interface CheckboxProps {
  name: string;
}

export const ChexboxContainer = ({ name }: CheckboxProps) => {
  return (
    <CheckboxGroup orientation="horizontal" color="danger">
      <Checkbox value="true" name={name}>
        <span className="text-text text-nowrap">For adult</span>
      </Checkbox>
    </CheckboxGroup>
  );
};
