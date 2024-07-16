import { Checkbox, CheckboxGroup } from "@nextui-org/react";

export const ChexboxContainer = () => {
  return (
    <CheckboxGroup orientation="horizontal" color="danger">
      <Checkbox value="buenos-aires">
        <span className="text-text text-nowrap">For adult</span>
      </Checkbox>
    </CheckboxGroup>
  );
};
