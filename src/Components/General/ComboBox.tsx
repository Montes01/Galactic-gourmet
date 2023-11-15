import { ChangeEvent, MutableRefObject } from "react";
import { option } from "../../Constants/Types";
import { AllFilter } from "../../Constants/Consts";

interface Props {
  label: string;
  options: option<string>[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  comboRef?: MutableRefObject<any>;
}

export const ComboBox = ({ label, options, onChange, comboRef }: Props) => {
  const id = crypto.randomUUID();
  return (
    <div className="flex gap-3 items-center justify-center">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        ref={comboRef}
        onChange={onChange}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={AllFilter} selected>
          Todas
        </option>
        {options.map((el) => (
          <option value={el.value}>{el.name}</option>
        ))}
      </select>
    </div>
  );
};
