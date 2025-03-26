import Link, {type LinkProps } from "next/link";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
} & LinkProps;

const SecondaryButton = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <Link className={`p-2 border-2 rounded-full border-light-blue ${className}`} {...rest}>
      {children}
    </Link>
  );
};

export default SecondaryButton;
