import { useState } from "react";
import { List } from "../Components/FoodListPage/List";
import { foods as foodList } from "../Constants/Consts";
import { Filters } from "../Components/FoodListPage/Filters";
export const FoodList = () => {
  const [foods, setFoods] = useState(foodList);
  return (
    <>
      <Filters setFoods={setFoods} />
      <List foods={foods} />
    </>
  );
};
