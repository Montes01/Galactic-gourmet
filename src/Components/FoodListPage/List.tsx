import { food } from "../../Constants/Types";
import { FeaturedCard } from "../General/Cards/FeaturedCard";

interface Props {
  foods: food[];
}

export const List = ({ foods }: Props) => {
  return (
    <section className="flex flex-wrap items-center bg-gradient-to-b from-neon-blue to-zinc-900 justify-center gap-7 px-5 py-12">
      {foods.map((food) => {
        return (
          <FeaturedCard key={food.title} title={food.title} image={food.image} />
        );
      })}
    </section>
  );
};
