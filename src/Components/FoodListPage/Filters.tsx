import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { food } from "../../Constants/Types";
import { AllFilter, categoryFilters } from "../../Constants/Consts";
import { ComboBox } from "../General/ComboBox";
import { foods } from "../../Constants/Consts";
interface Props {
  setFoods: Dispatch<SetStateAction<food[]>>;
}

export const Filters = ({ setFoods }: Props) => {
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFoods(
      foods.filter(
        (food) => food.category === e.target.value || e.target.value === AllFilter
      )
    );
  };
  return (
    <section className="flex items-center gap-12 px-12 py-5 w-full">
      <ComboBox
        onChange={handleCategoryChange}
        label="Categoria"
        options={categoryFilters}
      />
    </section>
  );
};