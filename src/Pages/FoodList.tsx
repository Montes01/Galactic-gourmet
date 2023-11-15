import { useState } from "react";
import { List } from "../Components/FoodListPage/List";
import { AllFilter, foods as foodList } from "../Constants/Consts";
import { Filters } from "../Components/FoodListPage/Filters";
import { useParams } from "react-router-dom";
export const FoodList = () => {
  const params = useParams();
  if (params.filter !== "Postre" && params.filter !== "Bebida" && params.filter !== "Plato-fuerte" && params.filter !== "Entrada" && params.filter !== AllFilter) {
    window.location.href = "/Err";
  }
  const [foods, setFoods] = useState(
    params.filter && params.filter !== AllFilter
      ? foodList.filter((food) => food.category === params.filter)
      : foodList
  );

  return (
    <>
      <Filters defaultFilter={params.filter} setFoods={setFoods} />
      <List foods={foods} />
    </>
  );
};
