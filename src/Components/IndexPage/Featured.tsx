import { foods } from "../../Constants/Consts";
import { FeaturedCard } from "../General/Cards/FeaturedCard";
export const Featured = () => {
  const number = Math.floor(Math.random() * (foods.length - 4));
  return (
    <div className="py-20 flex flex-col gap-12 px-12 bg-gradient-to-t from-zinc-900 to-neon-blue">
      <h2 className="text-xl font-bold uppercase">
        Estos son algunos de nuestros mejores platos
      </h2>
      <section className="flex flex-wrap justify-center items-center  gap-12 p-5">
        {foods
          .toSorted((a, b) => a.title.localeCompare(b.title))
          .slice(number, number + 3)
          .map((el, index) => {
            return (
              <FeaturedCard title={el.title} image={el.image} key={index} />
            );
          })}
      </section>
    </div>
  );
};
