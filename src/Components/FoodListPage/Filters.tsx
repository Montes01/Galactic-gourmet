import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { food } from "../../Constants/Types";
import { AllFilter, categoryFilters, foods } from "../../Constants/Consts";
import { ComboBox } from "../General/ComboBox";
interface Props {
  setFoods: Dispatch<SetStateAction<food[]>>;
  defaultFilter?: string;
}

export const Filters = ({ setFoods, defaultFilter }: Props) => {
  const comboRef = useRef<HTMLSelectElement>();
  useEffect(() => {
    if (defaultFilter && defaultFilter !== AllFilter) {
      comboRef.current!.value = defaultFilter;
    }
  }, []);

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFoods(
      foods.filter(
        (food) =>
          food.category === e.target.value || e.target.value === AllFilter
      )
    );
  };
  return (
    <section className="flex bg-gradient-to-r medium:from-transparent from-principal medium:via-principal to-transparent medium:justify-center items-center gap-12 px-12 py-5 w-full">
      <ComboBox
        comboRef={comboRef}
        onChange={handleCategoryChange}
        label="Categoria"
        options={categoryFilters}
      />
    </section>
  );
};
