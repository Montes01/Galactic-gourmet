import { Link } from "react-router-dom";

interface Props {
  title: string;
  image?: string;
}
export const FeaturedCard = ({ title, image }: Props) => {
  return (
    <Link
      to={"/Food/" + title}
      className="flex p-0 border-none text-white duration-75 hover:scale-105 transition-transform cursor-pointer flex-col h-64 max-h-[80vh] w-60 items-center rounded-xl bg-gradient-to-t from-zinc-600 to-[#0af]"
    >
      <img
        src={image ?? "/src/assets/AstronautPotatos.jpg"}
        className="rounded-t-xl w-full h-5/6 object-cover"
        alt={`image called ${title} from ${image}`}
      />
      <strong className="bg-teal-900 w-full py-2 rounded-b-xl h-1/6">
        {title}
      </strong>
    </Link>
  );
};
