import p from "prop-types";
import Link from "next/link";

export const Button = (props) => {
  return <button>{props.label}</button>;
};

Button.propTypes = {
  label: p.string.isRequired,
  importance: p.oneOf(["primary", "secondary"]),
  action: p.oneOfType([p.string, p.func, p.fa]).isRequired,
};

Button.defaultProps = {
  importance: "secondary",
};
