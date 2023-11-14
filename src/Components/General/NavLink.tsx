import { TablerIconsProps } from "@tabler/icons-react";
import { Link } from "react-router-dom";

interface Props {
  content: string;
  to: string;
  className?: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
}
export const NavLink = ({ to, content, Icon, className }: Props) => {
  return (
    <li className={className}>
      {Icon != null && <Icon/>}
      <Link to={to}>{content}</Link>
    </li>
  );
};
