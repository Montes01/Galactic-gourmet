import { useParams } from "react-router-dom";
import { foods } from "../Constants/Consts";

export const Item = () => {
  const { title } = useParams();
  const food = foods.find((food) => food.title === title);
  return (
    <main className="flex bg-gradient-to-b from-neon-blue to-zinc-900 medium:flex-col py-20 w-full items-center justify-center gap-9">
      <img
        src={food?.image}
        className="w-96 h-96 rounded-xl max-h-[90vh] object-cover"
        alt={food?.description}
      />
      <div className="max-w-[50%] flex flex-col items-center gap-12 justify-center">
        <strong className="text-xl">{food?.title}</strong>
        <p>
          {food?.description
            ? food.description
            : "Receta secreta, deberas navegar por el universo para encontrarla..."}
        </p>
      </div>
    </main>
  );
};
