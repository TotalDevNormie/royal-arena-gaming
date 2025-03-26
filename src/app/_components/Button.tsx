import Link, { type LinkProps } from "next/link";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
} & LinkProps;

const PrimaryButton = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <Link className={`p-2 rounded-full bg-blue-3 ${className}`} {...rest}>
      {children}
    </Link>
  );
};

export default PrimaryButton;
