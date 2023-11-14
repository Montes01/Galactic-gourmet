import { TablerIconsProps } from "@tabler/icons-react";
import { Link } from "react-router-dom";

interface Props {
  width?: string;
  height?: string;
  content: string;
  direction?: "vertical" | "horizontal";
  Icon?: (props: TablerIconsProps) => JSX.Element;
  to?:string
}

export const ServiceCard = ({
  width,
  height,
  Icon,
  content,
  direction,
  to
}: Props) => {
  return (
    <Link
      to={to ?? "#"}
      className={`${
        direction === "vertical" ? "col" : "row"
      } text-xl text-white hover:scale-105 transition-transform active:opacity-90 flex items-center justify-start px-5 gap-2 rounded-xl bg-[#252525]`}
      style={{ width, height }}
    >
      {Icon != null && <Icon />}
      {content}
    </Link>
  );
};
